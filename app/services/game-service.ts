import SDK from '@/public/assets/scripts/engine';

export class GameService {

    private static async createRenderer(parsedRenderer: any) {
        let renderer: any;
        const color = [Number(parsedRenderer.color[0]), Number(parsedRenderer.color[1]), Number(parsedRenderer.color[2]), Number(parsedRenderer.color[3])]
        renderer = new SDK.Renderer(parsedRenderer.geometryUrl, parsedRenderer.materialUrl, false, parsedRenderer.textureUrl, color);
        return renderer;
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
                }
            })

        );

        obj.transform = transform;
        components.forEach(component => {
            obj.AddComponent(component)
        })
        console.log(obj)
        return obj;
    }
}