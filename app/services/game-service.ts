import SDK from '@/public/assets/scripts/engine';

export class GameService {

    private static async createRenderer(parsedRenderer: any) {
        let renderer: any;
        const color = [Number(parsedRenderer.color[0]), Number(parsedRenderer.color[1]), Number(parsedRenderer.color[2]), Number(parsedRenderer.color[3])]
        renderer = new SDK.Renderer(parsedRenderer.geometryUrl, parsedRenderer.materialUrl, false, parsedRenderer.textureUrl, color);
        return renderer;
    }
    private static async createScript(parsedScript: any) {
        console.log('Я работаю')
        const response = await fetch(parsedScript.fileUrl);
        if (!response.ok) throw new Error(`Ошибка при загрузке скрипта: ${response.status}`);

        const content = await response.text();
        const data = new Function(content)();
        if (!data.name || !data.init || !data.onStart || !data.onUpdate) {
            throw new Error('Неверный формат скрипта');
        }
        return new SDK.Script(data);
    }

    public static async createObjectsFromJson(object: any) {
        const obj = new SDK.GameObject(object.tag);
        const transform = await SDK.Transform.fromJson(object.transform);

        const components = await Promise.all(
            object.components.map(async (componentString: any) => {
                const parsed = JSON.parse(componentString);
                switch (parsed.name) {
                    case 'renderer':
                        return await this.createRenderer(parsed);
                    case 'script':
                        return await this.createScript(parsed);
                }
            })

        );
        console.log(components)
        obj.transform = transform;
        components.forEach(component => {
            obj.AddComponent(component)
        })

        return obj;
    }
}