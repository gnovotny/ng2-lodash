# ng2-lodash

lodash pipe for Angular2

Installation
------------

`npm install --save ng2-lodash`

Usage
-----

Import `LodashModule` into your app's modules:

``` typescript
import {LodashModule} from 'ng2-lodash';

@NgModule({
  imports: [
    LodashModule
  ]
})
```

``` typescript
@Component({
  selector: 'app',
  template: `
    Selected Item: {{items |  lodash: 'find':['id', selectedItemId]}}
  `
})
```

Demo
----

Coming soon