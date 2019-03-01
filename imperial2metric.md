Escriba una función `imp2met` que cambie todas las medidas imperiales por medidas métricas en la cadena que se la pasa como argumento:

```js
let met = imp2met("John is 6 feet tall and weights 140 pounds") // John is 1.8 m tall and weights 63.5 kilos
```

Debe buscar por sub-cadenas formadas por un número seguido de un nombre de medida como `6 feet` pero también debería admitir variantes 
de la denominación de la medida como `6 ft` etc.

Puede que este módulo le sea de ayuda:

* [convert-units](https://www.npmjs.com/package/convert-units)

```
$ node
> convert = require('convert-units')
[Function: convert]
> convert(1).from('lb').to('kg')
0.453592
> convert().from('ft').possibilities()
[ 'mm', 'cm', 'm', 'km', 'in', 'yd', 'ft-us', 'ft', 'mi' ]
```
