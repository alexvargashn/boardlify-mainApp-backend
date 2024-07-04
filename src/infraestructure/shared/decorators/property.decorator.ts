import 'reflect-metadata';

export function Property() {
  return (target: any, propertyKey: string) => {
    const properties = Reflect.getMetadata('design:properties', target) || [];
    properties.push(propertyKey);
    Reflect.defineMetadata('design:properties', properties, target);
  };
}