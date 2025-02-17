
export { Entidad, enumerable, readonly }

function Entidad(config: any){
    console.log('Entidad', config)
    return function(target: any){
        target.clave = config.clave

        console.log('target', target)
    }
}

function enumerable(value: boolean){
    return function(target: any, PropertyKey: string, descriptor: PropertyDescriptor){
        descriptor.enumerable = value
    }
}

function readonly(target: any, nane: any, descriptor: PropertyDescriptor){
    descriptor.writable = false;
    return descriptor;
}


