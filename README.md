# :fire: pInteger Directive : 

The `pinteger` directive is designed for Vue.js, and it facilitates the conversion of <b>Persian</b> or <b>Arabic</b> numbers to <b>English</b> numbers.


## :rocket: How to use : 


1. Using npm, install the pinteger package:

```bash
 npm install pinteger
```

2. Import the package into your main.js file:

```js
import pinteger from 'pinteger' ;
```

3. In your main.js, after createApp(App), add the following code to register the directive:
```js
app.directive('pinteger', pinteger);
``` 

4. Now you can use this directive in Vue.js:

    I. Simple usage:
    ```html
    <input type="text" v-model="myNumber" v-pinteger >
    ```
    II. Usage with Vuetify:
    ```html
    <v-text-field
        v-model="myNumber"
        v-pinteger
        label="myNumber"
        >
    </v-text-field>
    ```


## :memo: Authors

- Email: Amirhosseinagahee22@gmail.com