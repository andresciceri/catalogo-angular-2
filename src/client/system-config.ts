const barrels: string[] = [
  'app',
  'app/ropa-componente',
  'app/ropa',
  'app/camisas',
  'app/chaquetas',
  'app/pantalones',
  'app/+prueba',
  'app/prueba-dos',
  'app/zapatos',
  'app/accesorios',
  'app/detalle-producto',
  /** @cli-barrel */
];

function createPackageConfig(barrels: string[]): any {
  return barrels.reduce((barrelConfig: any, barrelName: string) => {
    barrelConfig[barrelName] = {
      format: 'register',
      defaultExtension: 'js',
      main: 'index'
    };
    return barrelConfig;
  }, {});
}


// Add your custom SystemJS configuration here.
export const config: any = {
  packages: Object.assign({
    // Add your custom SystemJS packages here.
  }, createPackageConfig(barrels))
};