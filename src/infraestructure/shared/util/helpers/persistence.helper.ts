import 'reflect-metadata';

export class PersistenceHelper {

  static toEntity<T>(dto: any, entityClass: new () => T): T {
    const entity = new entityClass();
    const entityKeys = Reflect.getMetadata('design:properties', entity) || [];

    Object.keys(dto).forEach(key => {
      if (entityKeys.includes(key)) {
        const type = Reflect.getMetadata('design:type', entity, key);
        entity[key] = this.transformValue(dto[key], type);
      }
    });
    return entity;

  }

  private static transformValue(value: any, entityProperty: any): any {
    // Añadir lógica de transformación según sea necesario
    if (typeof entityProperty === 'number') {
      return Number(value);
    }
    // Otras transformaciones personalizadas
    return value;
  }
}