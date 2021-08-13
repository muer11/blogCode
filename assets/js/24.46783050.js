(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{387:function(n,a,t){"use strict";t.r(a);var o=t(45),e=Object(o.a)({},(function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[n._v("在前端开发过程中，扎实的基础知识储备非常重要。当你学会了原理，不仅能提升代码质量，而且在出现 bug 时能立马知道起因是什么，该如何解决，提升了开发效率。当我们有了一定的实践经验后，再来回顾这些基础知识进行查漏补缺，这种自顶向下的学习方式也不失为一种不错的选择。\n我们先从非常重要、使用频率很高的函数开始讲起吧~\n那么，函数到底是什么呢？函数存在的意义又是什么呢？")]),n._v(" "),t("p",[n._v("01")]),n._v(" "),t("p",[n._v("函数的表达方式")]),n._v(" "),t("ol",[t("li",[t("p",[n._v("共四种表达方式")]),n._v(" "),t("p",[n._v("a. 函数声明")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function sum(a, b){\n  return a + b\n}\n")])])]),t("p",[n._v("b. 函数表达式")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("let sum = function(a, b){\n  return a + b\n}\n")])])]),t("p",[n._v("c. 箭头函数")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('// 若函数体只有一行代码，那么可以省略{}，默认返回这段代码的返回值\nlet sum = (a, b) => a + b\n\n// 如果返回的是一个对象，那么必须用()包起来，因为{}会被解释成代码块\nlet obj = () => ({ id: 1, name: "test" })\n')])])]),t("p",[n._v("d. Function构造函数")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('new Function("num1", "num2", "return num1 + num2")\n')])])]),t("p",[n._v("不推荐使用Function构造函数语法来定义函数。因为这段代码会被解释两次：第一次是将它当作常规ECMAScript代码，第二次是解释传给构造函数的字符串。这显然会影响性能。")])]),n._v(" "),t("li",[t("p",[n._v("函数声明和函数表达式的区别")]),n._v(" "),t("p",[n._v("函数的定义时间不同。JavaScript 引擎在任何代码执行之前，会先读取函数声明，并在执行上下文中生成函数定义（即“函数声明提升”）；而函数表达式必须等到代码执行到它那一行，才会在执行上下文中生成函数定义。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("// 例1\nconsole.log(sum(1,2)) // 3\nfunction sum(num1, num2){\n  return num1 + num2\n}\n\n// 例2\nconsole.log(sum(1,2)) // Uncaught TypeError: sum is not a function\nlet sum = function (num1, num2){\n  return num1 + num2\n}\n")])])])]),n._v(" "),t("li",[t("p",[n._v("为什么要引入箭头函数？它解决了什么问题？")])])]),n._v(" "),t("p",[n._v("箭头函数不仅减少重复代码，同时解决了 this 绑定的问题。它把开发者们经常犯的一个错误给标准化了，也就是混淆了 this 绑定规则和词法作用域规则。")]),n._v(" "),t("p",[n._v("因为箭头函数体内的 this 指向定义时所在的对象（即当前的词法作用域所在的 this 的值），而非调用时的对象（标准函数中的 this 指向调用时的对象），利用箭头函数的这个特性有助于封装回调函数。")]),n._v(" "),t("p",[n._v("注意点：")]),n._v(" "),t("p",[n._v("无法使用 apply、call、bind")]),n._v(" "),t("p",[n._v("不能用作构造函数，无法使用 new 命令，没有 prototype 属性")]),n._v(" "),t("p",[n._v("给对象定义方法，且该方法包含 this 时，this 会指向全局对象")]),n._v(" "),t("p",[n._v("当需要动态 this 时，不适合使用箭头函数")]),n._v(" "),t("p",[n._v("不能使用 arguments")]),n._v(" "),t("p",[n._v("可以使用 rest 参数代替")]),n._v(" "),t("p",[n._v("如果使用了arguments ，则指向外层函数的对应变量（同 super 、new.target ）")]),n._v(" "),t("p",[n._v("不能使用 super 和 new.target")]),n._v(" "),t("p",[n._v("不能使用 yield 命令，因此不能用作 Generator 函数")]),n._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[n._v("IIFE 立即执行函数")])]),n._v(" "),t("p",[n._v("通过 IIFE（ Immediately Invoked Function Expression ）形成块级作用域，防止局部变量污染全局作用域。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("// 写法一\n(function sum(){\n  // 块级作用域\n})()\n\n// 写法二\n(function sum(){\n  // 块级作用域\n}())\n\n// 上述两种写法都可以，依据个人习惯\n// sum在局部作用域中，不会污染全局全局作用域\n")])])]),t("p",[n._v("IIFE 有哪些妙用？")]),n._v(" "),t("p",[n._v("a. 可以使函数不需要函数名（或者至少函数名可以不污染所在作用域），并且能够自动运行。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var num = 1;\n(function(){\n  var num = 2\n  console.log(num) // 2\n})()\nconsole.log(num) // 1\n")])])]),t("p",[n._v("b. 把 IIFE 当作函数调用并传递参数进去。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var num = 1;\n(function(global){\n  var num = 2\n  console.log(num) // 2\n  console.log(global.num) // 1\n})(window)\nconsole.log(num) // 1\n")])])]),t("p",[n._v("c. 解决 undefined 标识符的默认值被错误覆盖导致的异常。")]),n._v(" "),t("p",[n._v("外部作用域改变了 undefined 的默认值，只需在对应的传参位置不传入任何值，就可以确保代码块中的 undefined 标识符的值是默认值。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('undefined = true;\n(function (undefined){\n  var a;\n  if(a === undefined){\n     console.log("true") \n  }\n})() // true\n')])])]),t("p",[n._v("d. 倒置代码的运行顺序。")]),n._v(" "),t("p",[n._v("将需要运行的函数放在第二位，在 IIFE 执行之后当作参数传递进去。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var num = 1;\n(function IIFE(def){\n  def(window)\n})(function def(global){\n  var num = 2;\n  console.log(num); // 2\n  console.log(global.num); // 1\n})\nconsole.log(num); // 1\n")])])]),t("p",[n._v("02")]),n._v(" "),t("p",[n._v("函数的调用方式")]),n._v(" "),t("ol",[t("li",[n._v("一般形式的函数调用")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function foo(){\n  console.log(this.a)\n}\nvar a = 10;\nfoo(); // 10\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[n._v("作为对象的方法调用")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function foo(){\n  console.log(this.a)\n}\nvar obj = {\n  a: 2,\n  foo: foo\n}\nobj.foo()；// 2\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[n._v("使用 call / apply / bind 动态调用")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function foo(x,y) {  \n  return x + y;\n}\nfoo.call(null, 3, 4);  // 7\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[n._v("new 间接调用")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function Foo(a){\n  this.a = a\n}\nvar bar = new Foo(2)\nconsole.log(bar.a); // 2\n")])])]),t("p",[n._v("03")]),n._v(" "),t("p",[n._v("函数名")]),n._v(" "),t("p",[n._v("函数名是指向函数的指针，所以一个函数可以有多个函数名。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('function sum(num1, num2){\n  return num1 + num2\n}\nconsole.log(sum(1,2)) // 3\n\nlet anotherSum = sum\nconsole.log(anotherSum(1,2))  // 3\nsum = null\nconsole.log(anotherSum(1,2))  // 3\nconsole.log(sum(1,2)) // Uncaught TypeError: sum is not a function\nES6中每个函数对象都有一个只读的name属性。\n\nfunction foo() \nfoo.name // "foo"\n(()=>{}).name // ""\n(new Function).name // "anonymous"\n\n// bind返回的函数，name属性值会加上bound前缀。\nfoo.bind({}).name // "bound foo"\n(function(){}).bind({}).name // "bound "\n')])])]),t("p",[n._v("JS 函数有重载吗？\n没有。重载指的是一个函数可以有多个定义，只要入参（数量或类型）不同即可。JS 函数没有重载，若有多个命名相同的函数同时存在，那么后者会覆盖前者。不过，我们可以通过检查传参类型和数量的不同，模拟重载。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('function doAdd(num1, num2){\n  if(arguments.length === 1){\n    console.log(num1 + 10)\n  }else if(arguments.length === 2){\n    console.log(arguments[0] + num2)\n  }\n}\n\ndoAdd(10) // 20\ndoAdd(10, 20) // 3\n匿名函数\nsetTimeout(function(){\n  console.log("我是匿名函数呀～")\n}, 1000)\n')])])]),t("p",[n._v("优点：书写起来简单快捷，很多库和工具也倾向鼓励使用这种风格的代码。\n缺点：\n1．匿名函数在栈追踪中不会显示出有意义的函数名，使得调试很困难。\n2．如果没有函数名，当函数需要引用自身时只能使用已经过期的 arguments.callee 引用，比如在递归中。另一个函数需要引用自身的例子，是在事件触发后事件监听器需要解绑自身。\n3．匿名函数省略了对于代码可读性/可理解性很重要的函数名。一个描述性的名称可以让代码不言自明。\n具名函数便解决了上面的问题。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('setTimeout(function timeoutHandler(){\n  console.log("我是具名函数呀～")\n}, 1000)\n')])])]),t("p",[n._v("04")]),n._v(" "),t("p",[n._v("函数内部")]),n._v(" "),t("ol",[t("li",[t("p",[n._v("内部对象")]),n._v(" "),t("p",[n._v("a. this 对象")])])]),n._v(" "),t("p",[n._v("当一个函数被调用时，会创建一个活动记录（有时候也称为执行上下文）。这个记录会包含函数在哪里被调用（调用栈）、函数的调用方式、传入的参数等信息。this就是这个记录的一个属性。——《你不知道的JavaScript 》")]),n._v(" "),t("p",[n._v("this 提供了一种更优雅的方式来隐式“传递”一个对象引用，因此可以将API设计得更加简洁并且易于复用。\n那么，在函数的执行过程中调用位置（在代码中被调用的位置）如何决定this的绑定对象?\n我们可以先找到调用位置，再判断是下面四种绑定规则中的哪种绑定关系。")]),n._v(" "),t("p",[n._v("i. 默认绑定")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('// 例1                        \nfunction foo(){\n  console.log(this.a)\n}\nvar a = 10;\nfoo(); // 10\n\n// 例2\nfunction foo(){\n  "use strict";\n  console.log(this.a)\n}\nvar a = 10;\nfoo(); // TypeError: this is undefined\n\n// 例3\nfunction foo(){\n  console.log(this.a)\n}\nvar a = 10;\n(function (){\n  "use strict";\n  foo(); // 10\n})()\n')])])]),t("p",[n._v("如果 foo 运行在非 strict mode 下，this 会默认绑定到全局对象，否则会绑定到 undefined 。但在严格模式下调用 foo( ) 不影响默认绑定。")]),n._v(" "),t("p",[n._v("ii. 隐式绑定")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function foo(){\n  console.log(this.a)\n}\nvar obj = {\n  a: 2,\n  foo: foo\n}\nobj.foo() // 2\n")])])]),t("p",[n._v("通过判断调用位置是否有上下文对象，或者说是否被某个对象拥有或者包含。虽然 foo 函数并不属于 obj ，但是调用位置会使用 obj 上下文来引用函数，因此可以说 obj “拥有” foo 。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('// 例1\nfunction foo(){\n  console.log(this.a)\n}\n\nvar obj = {\n  a: 2,\n  foo: foo\n}\n\nvar bar = obj.foo;\nvar a = "global a";\nbar() // global a\n\n// 例2 参数传递\nfunction foo(){\n  console.log(this.a)\n}\n\nfunction doFoo(fn){\n  fn()\n}\n\nvar obj = {\n  a: 2,\n  foo: foo\n}\n\nvar a = "global a";\ndoFoo(obj.foo); // global a\nsetTimeout(obj.foo, 0); // global a\n')])])]),t("p",[n._v("虽然 bar 是 obj.foo 的一个引用，但是它引用的是 foo 函数本身，因此此时的 bar() 其实是一个不带任何修饰的函数调用，因此应用了默认绑定。例2的参数传递方式也同理，就算是内置的 setTimeout 也不例外。\n我们发现被隐式绑定的函数会丢失绑定对象，存在隐式丢失的问题，因此会降级使用默认绑定。\n可以用显式绑定解决这个问题。")]),n._v(" "),t("p",[n._v("iii. 显式绑定\n通过 apply / call / bind 的方式直接指定 this 的绑定对象来实现显式绑定。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('// 硬绑定\nfunction foo(something){\n  console.log(this.a, something)\n  return this.a + something\n}\nfunction bind(fn, obj){\n    return function (){\n      return fn.apply(obj, arguments)\n    }\n}\nvar obj = {\n  a: 3\n}\nvar test = bind(foo, obj);\ntest(2) // 3 2\n\nvar test2 = foo.bind(obj); // ES5\ntest2(2) // 3 2\n\n// API调用的“上下文”\nfunction foo(el){\n  console.log(el, this.id)\n}\nvar obj = {\n  id: "awesome"\n}\n[1,2,3].forEach(foo, obj);\n// 1 "awesome" 2 "awesome" 3 "awesome"\niv. new 绑定\nfunction foo(a){\n  this.a = a\n}\nvar bar = new foo(2)\nconsole.log(bar.a); // 2\n')])])]),t("p",[n._v("使用 new 来调用函数，或者说发生构造函数调用时，会自动执行下面的操作：")]),n._v(" "),t("ol",[t("li",[t("p",[n._v("创建（或者构造）一个全新的对象；")])]),n._v(" "),t("li",[t("p",[n._v("这个新对象会被执行 [[Prototype]] 连接；")])]),n._v(" "),t("li",[t("p",[n._v("这个新对象会绑定到函数调用的 this；")])]),n._v(" "),t("li",[t("p",[n._v("如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象。")])])]),n._v(" "),t("p",[n._v("在 new 中使用硬绑定函数，主要目的是预先设置函数的一些参数，这样在使用 new 进行初始化时就可以只传入其余的参数。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('function foo(p1, p2){\n  this.val = p1 + p2;\n}\nvar bar = foo.bind(null, "p1");\nvar baz = new bar("p2");\nbaz.val // "p1p2"\n    绑定优先级：new 绑定 > 显式绑定 > 隐式绑定 > 默认绑定\n\nfunction foo(something){\n    this.a = something;\n}\nvar obj1 = {\n    foo: foo\n}\nvar obj2 = {}\nobj1.foo(2)\nconsole.log(obj1.a); // 2 \n\nobj1.foo.call(obj2, 3);\nconsole.log(obj2.a); // 3 \n\nvar bar = new obj1.foo(4);\nconsole.log(obj1.a); // 2\nconsole.log(bar.a); // 4\n')])])]),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("绑定的特殊情况：\n\n当 this 绑定的对象是 null / undefined 时，会使用的是默认绑定；\n\n如果想“更安全”地忽略 this 绑定，你可以使用一个 DMZ 对象，比如 ø = Object.create(null)，以保护全局对象。\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('// Object.create(null)和{}很像，但是并不会创建Object.prototype这个委托，所以它比{}“更空”。\nfunction foo(p1, p2){\n  console.log(p1 + p2);\n}\nvar ø = Object.create(null);\nfoo.apply(ø, [2, 3]) // 5\n\nvar bar = foo.bind(null, "p1");\nbar("p"); // p1p\n')])])]),t("p",[n._v("this 词法")]),n._v(" "),t("p",[n._v("箭头函数根据外层（函数或者全局）作用域来决定 this ，箭头函数用更常见的词法作用域取代了传统的 this 机制。")]),n._v(" "),t("p",[n._v("箭头函数最常用于回调函数中，例如事件处理器或者定时器。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function foo(){\n  var self = this;\n  setTimeout(() => {\n    console.log(this.a);\n  }, 0)\n}\nvar obj = {\n  a: 2\n}\nfoo.call(obj) // 2\n")])])]),t("p",[n._v("总结：")]),n._v(" "),t("ol",[t("li",[n._v("如果内部函数没有使用箭头函数定义，this 对象会在运行时绑定到执行函数的上下文；")]),n._v(" "),t("li",[n._v("如果在全局函数中调用，则this在非严格模式下等于 window ，在严格模式下等于 undefined；")]),n._v(" "),t("li",[n._v("如果作为某个对象的方法调用，则 this 等于这个对象；")]),n._v(" "),t("li",[n._v("匿名函数未绑定到某个对象，那么 this 会指向 window ，除非在严格模式下 this 是 undefined。")])]),n._v(" "),t("p",[n._v("b. arguments 实参")]),n._v(" "),t("p",[n._v("它是一个类数组对象，因此可以通过中括号([])访问对应元素。ECMAScript 中的所有参数都按值传递的，不可能按引用传递参数。如果把对象作为参数传递，那么传递的值就是这个对象的引用。\n它可以和命名参数（形参）一起使用。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function doAdd(num1, num2){\n  if(arguments.length === 1){\n    console.log(num1 + 10)\n  }else if(arguments.length === 2){\n    console.log(arguments[0] + num2)\n  }\n}\n\ndoAdd(10) // 20\ndoAdd(10, 20) // 30\narguments.length 是根据传入参数个数决定的，而非函数命名时的长度。\n\nfunction doAdd(num1, num2){\n  console.log(arguments.length)\n}\n\ndoAdd(10) // 1\narguments 的值始终与对应的命名参数同步。\n\nfunction doAdd(num1, num2){\n  arguments[1] = 10; // ⚠️严格模式下不支持，会导致语法错误\n  console.log(arguments[0] + num2)\n}\n\ndoAdd(10, 20) // 20  arguments[1]和num2位于不同的内存地址，但会保持同步\ndoAdd(10) // NaN  因为此时arguments长度为1，arguments[1] = 10赋值无效，num2为undefined\n箭头函数没有 arguments ，不过可以用普通函数包装。\n\nfunction outter(){\n  let inner = () => {\n    console.log(arguments[0]) // 10\n  }\n  inner()\n}\noutter(10)\narguments.callee 表示 arguments 对象所在函数的指针，可以用它让函数逻辑和函数名解耦。\n\n// 实现递归\n// 例1：使用 arguments.callee ( 早期版本的 JavaScript不允许使用命名函数表达式, 为了解决这个问题，引入了 arguments.callee ）\nfunction factorial(num){\n  if(num <= 1){\n    return 1\n  }else{\n    return num * arguments.callee(num-1) // factorial(num-1)\n  }\n}\n\n// 例2：使用命名函数表达式 ( 由于在 ES5+ 严格模式下不支持 arguments.callee ，因此可以用命名函数表达式的方式达到递归效果 ）\nconst factorial = (function foo(num){\n  if(num <= 1){\n    return 1\n  }else{\n    return num * foo(num-1)\n  }\n})\n// 优点：\n// foo 函数可以像代码内部的任何其他函数一样被调用\n// 它不会在外部作用域中创建一个变量\n// 它具有比访问 arguments 对象更好的性能\narguments.caller 表示调用当前函数的函数 （已废弃）\n")])])]),t("p",[n._v("默认参数")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("// 1. ES6+可设置默认参数\n// 优点：简洁、便于理解函数、利于代码优化\nfunction log(x, y = 'World') {\n  console.log(x, y);\n}\n\n// 2. 不能有重名参数\nfunction log(x, x, y = 'World') {\n   console.log(\"xxxx\") // Uncaught SyntaxError: Duplicate parameter name not allowed in this context\n}\n\n// 3. 惰性求值\nlet x = 99;\nfunction foo(p = x + 1) {\n  console.log(p);\n}\nfoo() // 100\nx = 100;\nfoo() // 101\n\n// 4. 参数默认值的位置\n// 通常情况下，会处于函数的尾参数。如果不是尾参数，那么这个参数是无法省略，必须显式传参 undefined ，而非 null 。\nfunction f(x, y = 5, z) {\n  return [x, y, z];\n}\nf() // [undefined, 5, undefined]\nf(1) // [1, 5, undefined]\nf(1, ,2) // 报错\nf(1, undefined, 2) // [1, 5, 2]\n函数的 length 属性表示预计入参个数。\n\n// 指定了默认值后，函数的 length 属性会失效\n(function (a) {}).length // 1\n(function (a = 5) {}).length // 0\n(function (a, b, c = 5) {}).length // 2\n// rest 参数也不会计入 length 属性\n(function(...args) {}).length // 0\n\n// 如果设置了默认值的参数不是尾参数，那么后面的参数不计入 length \n(function (a = 0, b, c) {}).length // 0\n(function (a, b = 1, c) {}).length // 1\nc. new Target（ ES6 ）\n\n检测函数或构造方法是否是通过new运算符被调用。\nclass Shape {\n constructor() {\n  if (new.target === Shape) {\n   throw new Error('本类不能实例化');\n  }\n }\n}\n\nclass Rectangle extends Shape {\n constructor(length, width) {\n  super();\n  // ...\n }\n}\n\nvar x = new Shape(); // 报错\nvar y = new Rectangle(3, 4); // 正确\n（ 之后的对象篇会详细描述，尽情期待～ ）\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[n._v("私有变量\n任何定义在函数或块中的变量都被称为私有变量。而通过私有作用域定义私有变量和函数被称为静态私有变量。")])]),n._v(" "),t("p",[n._v("特权方法能够访问函数私有变量（及私有函数）的公有方法。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function MyObject(){\n  // 私有变量和私有函数\n  let privateVariable = 10;\n  function privateFunction(){\n    return false\n  }\n  // 特权方法\n  this.publicMethod = function(){\n    privateVariable++;\n    return privateFunction()\n  }\n}\n")])])]),t("p",[n._v("使用闭包和私有变量会导致作用域链变长，作用域链越长，则查找变量所需的时间也越多。")]),n._v(" "),t("p",[n._v("模块模式是在单例对象基础上加以扩展，使其通过作用域链来关联私有变量和特权方法。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('// 通过IIFE创建一个实例的方式形成单例模式\nvar foo = (function CoolModule(){\n    var something = "cool";\n    var another = [1,2,3];\n\n    function doSomething(){\n        console.log(something)\n    }\n\n    function doAnother(){\n        console.log(another.join("!"))\n    }\n\n    return {\n        doSomething: doSomething,\n        doAnother: doAnother\n    }\n})();\n\nfoo.doSomething(); // cool\nfoo.doAnother(); // 1!2!3  \n')])])]),t("p",[n._v("首先，CoolModule( ) 只是一个函数，必须要通过调用它来创建一个模块实例。如果不执行外部函数，内部作用域和闭包都无法被创建。\n其次，CoolModule( ) 返回一个用对象字面量语法 { key: value, ... } 来表示的对象。这个返回的对象中含有对内部函数而不是内部数据变量的引用。我们保持内部数据变量是隐藏且私有的状态。可以将这个对象类型的返回值看作本质上是模块的公共 API 。\ndoSomething( ) 和 doAnother( ) 函数具有涵盖模块实例内部作用域的闭包（通过调用 CoolModule( ) 实现）。当通过返回一个含有属性引用的对象的方式来将函数传递到词法作用域外部时，我们已经创造了可以观察和实践闭包的条件。\n模块模式需要具备两个必要条件：\n1．必须有外部的封闭函数，该函数必须至少被调用一次（每次调用都会创建一个新的模块实例）；\n2．封闭函数必须返回至少一个内部函数，这样内部函数才能在私有作用域中形成闭包，并且可以访问或者修改私有的状态。\n模块模式的特点：")]),n._v(" "),t("ol",[t("li",[n._v("调用包装了函数定义的包装函数；")]),n._v(" "),t("li",[n._v("将返回值作为该模块的API。")])]),n._v(" "),t("p",[n._v("Module（ ES6 ）\nES6 的模块没有“行内”格式，必须被定义在独立的文件中（一个文件一个模块）。浏览器或引擎有一个默认的“模块加载器”（可以被重载），可以在导入模块时同步地加载模块文件。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('// bar.js\nfunction hello(who){\n    return "Let me introduce: " + who;\n}\nexport hello;\n\n// foo.js\nimport hello from "bar";\nvar hungry = "hippo";\nfunction awesome(){\n    console.log(hello(hungry).toUpperCase)\n}\nexport awesome;\n\n// baz.js\nimport foo from "foo";\nimport bar from "bar"\n\nconsole.log(bar.hello("rhino")) // Let me introduce: rhino\nfoo.awesome(); // Let me introduce: HIPPO\n')])])]),t("ol",{attrs:{start:"3"}},[t("li",[n._v("通用属性")])]),n._v(" "),t("p",[n._v("length\n保存函数定义时的命名参数的个数。\nprototype\n保存引用类型所有实例方法（不可枚举）。")]),n._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[n._v("通用方法")])]),n._v(" "),t("p",[n._v("call 和 apply ：可控制函数调用上下文即函数体内 this 值的能力")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('// call：参数逐个传递\nsum.call(this, num1, num2)\n\n// apply：传参可为数组或类数组\nsum.apply(this, [num1, num2])\nsum.apply(this, arguments)\nbind ：将this绑定到传给bind函数的对象\nwindow.color = \'red\';\nlet bag = {\n  color: "blue"\n};\nfunction sayColor(){\n  console.log(this.color)\n};\nlet bagColor = sayColor.bind(bag);\nbagColor(); // "blue"\n\ntoLocalString 和 toString：返回函数代码\nvalueOf：返回函数本身\n')])])]),t("p",[n._v("05\n作用域")]),n._v(" "),t("p",[n._v("作用域是负责收集并维护由所有声明的标识符（变量）组成的一系列查询，并实施一套非常严格的规则，确定当前执行的代码对这些标识符的访问权限。\n作用域有助于维护更加优秀、简洁的代码。")]),n._v(" "),t("p",[n._v("编译过程")]),n._v(" "),t("ol",[t("li",[n._v("分词/词法分析（ Tokenizing / Lexing ）\n将由字符组成的字符串分解成（对编程语言来说）有意义的词法单元。空格是否会被当作词法单元，取决于空格在这门语言中是否具有意义。var a = 2; 会被分解成 var、a、=、2 、;")]),n._v(" "),t("li",[n._v("解析/语法分析（ Parsing ）\n将词法单元流（数组）转换成一个由元素逐级嵌套所组成的代表了程序语法结构的抽象语法树（ AST ）。")]),n._v(" "),t("li",[n._v("代码生成\n将 AST 转换为可执行代码的过程。")])]),n._v(" "),t("p",[n._v("词法作用域")]),n._v(" "),t("p",[n._v("词法作用域的定义过程发生在代码的书写阶段，也就是由你在写代码时将变量和块作用域写在哪里来决定的，因此当词法分析器处理代码时会保持作用域不变（大部分情况下是这样的）。")]),n._v(" "),t("p",[n._v("除非使用 eval、with 方法欺骗词法，在运行时修改或创建新的作用域，以此来欺骗其他在书写时定义的词法作用域。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('// eval\nfunction foo(str, num1){\n  eval(str)\n  console.log(num1) // 1\n}\n\nfoo("var num1 = 2", 1)\n\n// with\nfunction foo(obj){\n  with(obj){\n     a = 2\n  }\n}\nvar o1 = {\n  a: 3\n}\nvar o2 = {\n  b: 3\n}\nfoo(o1); \nconsole.log(o1.a); // 2\nfoo(o2); \nconsole.log(o2.a); // undefined\nconsole.log(a); // 2\n')])])]),t("p",[n._v("当我们传递 o1 给 with 时，with 所声明的作用域是 o1 ，而这个作用域中含有一个同 o1.a 属性相符的标识符。但当我们将 o2 作为作用域时，其中并没有 a 标识符，因此进行了正常的 LHS 标识符查找。o2 的作用域、foo(..) 的作用域和全局作用域中都没有找到标识符 a ，因此当 a=2 执行时，自动创建了一个全局变量（因为是非严格模式）。")]),n._v(" "),t("p",[n._v("弊端：影响性能。JavaScript 引擎会在编译阶段进行数项的性能优化。其中有些优化依赖于能够根据代码的词法进行静态分析，并预先确定所有变量和函数的定义位置，才能在执行过程中快速找到标识符。而使用 eval、with 无法得知会创建的内容，因此优化的意义不大。")]),n._v(" "),t("p",[n._v("函数作用域\n定义：属于这个函数的全部变量都可以在整个函数的范围内使用及复用（在嵌套的作用域中也可以使用）。\n函数作用域将变量和函数定义隐藏起来，以致于外部作用域无法访问内部作用域，借此可优化代码结构。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var a = 1;\nfunction foo(){\n  var a = 3;\n  console.log(a); // 3\n}\nfoo();\nconsole.log(a); // 1\n")])])]),t("p",[n._v("块作用域")]),n._v(" "),t("p",[n._v("块作用域是一个用来对最小授权原则进行扩展的工具，将代码从在函数中隐藏信息扩展为在块中隐藏信息。\n它有如下几种实现方式：")]),n._v(" "),t("ol",[t("li",[n._v("try / catch")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("try{\n  undefined()\n}catch(err){\n  console.log(err)\n}\nconsole.log(err);  // Uncaught ReferenceError: err is not defined\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[n._v("let (ES6)")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("// 经典面试题\nfor(let i = 0; i < 10; i++){\n  console.log(i);\n}\nlet为其声明的变量隐式地劫持了所在的块作用域。利于垃圾收集。\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[n._v("const (ES6)")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("if (true) {\n  const MAX = 5;\n}\nMAX // Uncaught ReferenceError: MAX is not defined\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[n._v("with")])]),n._v(" "),t("p",[n._v("闭包\n先来看看不同书籍中对闭包的定义吧~\n闭包就是引用了其它函数作用域中的变量的函数。——《JavaScript高级程序设计》\n当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数是在当前词法作用域之外执行。——《你不知道的JavaScript》")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function outer(){\n  var num = 1;\n  function inner(){\n    console.log(num + 1)\n  }\n  return inner;\n}\n\nvar getValue = outer();\ngetValue(); // 2\n")])])]),t("p",[n._v("在 outer( ) 执行后，通常会期待 outer( ) 的整个内部作用域都被销毁，因为我们知道引擎有垃圾回收器，用来释放不再使用的内存空间。由于看上去 outer( ) 的内容不会再被使用，所以很自然地会考虑对其进行回收。而闭包的“神奇”之处正是可以阻止这件事情的发生。事实上内部作用域依然存在，因此没有被回收。谁在使用这个内部作用域？原来是 inner( ) 本身在使用。\ninner( ) 依然持有对该作用域的引用，而这个引用就叫作闭包。\n闭包使得函数可以继续访问定义时的词法作用域。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function sum(){\n  var num = 1;\n  function inner(){\n    console.log(num + 1)\n  }\n  sum2(inner)\n}\n\nfunction sum2(func){\n  func()\n}\n\nsum(); // 2\n")])])]),t("p",[n._v("作用域链")]),n._v(" "),t("p",[n._v("理解作用域链创建和使用的细节对理解闭包非常重要。在调用一个函数时，会为这个函数调用创建一个执行上下文，并创建一个作用域链。然后用 arguments 和形参来初始化这个函数的活动对象。外部函数的活动对象是内部函数作用域链上的第二个对象。这个作用域链一直向外串起了所有包含函数的活动对象，直到全局执行上下文才终止。在函数执行时，要从作用域链中查找变量，以便读、写值。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("function createComparisionFunction(propertyName){\n    return function(object1, object2){\n        let value1 = object1[propertyName];\n        let value2 = object2[propertyName];\n        if(value1 < value2){\n            return -1;\n        }else if(value1 > value2){\n            return 1;\n        }else{\n            return 0;\n        }\n    }\n}\nlet compareNames = createComparisionFunction(\"name\");\nlet result = compareNames({name: 'Nicholas'}, {name: 'Matt'});\ncompareNames = null; // 解除对函数的引用，释放内存\n")])])]),t("p",[n._v("图片")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("在一个函数内部定义的函数会把其包含函数的活动对象添加到自己的作用域链中。因此，在createComparisonFunction()（以下简称为“C”）函数中，匿名函数的作用域链中实际上包含 C 的活动对象。  \n")])])]),t("p",[n._v("在 C 返回匿名函数后，它的作用域链被初始化为包含 C 的活动对象和全局变量对象。这样，匿名函数就可以访问到 C 可以访问的所有变量。不过，副作用是 C 的活动对象并不能在它执行完毕后销毁，因为匿名函数的作用域链中仍然有对它的引用。在 C 执行完毕后，其执行上下文的作用域链会销毁，但它的活动对象仍然会保留在内存中，直到匿名函数被销毁后才会被销毁。\n为防止内存泄露，需要把 compareNames 设置为 null 就会解除对函数的引用，从而让垃圾回收程序可以将内存释放掉。作用域链也会被销毁，其他作用域（除全局作用域之外）也可以销毁。")]),n._v(" "),t("p",[n._v("其中涉及了一些概念：")]),n._v(" "),t("ol",[t("li",[n._v("变量对象（局部变量对象和全局变量对象）\na. 处于全局上下文中\nb. 在代码执行期间始终存在\nc. 作用域链中的每个指针指向一个变量对象")]),n._v(" "),t("li",[n._v("活动对象\na. 处于函数局部上下文中\nb. 只在函数执行期间存在")])]),n._v(" "),t("p",[n._v("闭包的使用场景：\n在定时器、事件监听器、Ajax 请求、跨窗口通信、Web Workers 或者任何其他的异步（或者同步）任务中，只要使用了回调函数，实际上就是在使用闭包！")]),n._v(" "),t("p",[n._v("06\n提升\n函数声明和变量声明都会被提升，但是函数声明比变量声明先提升。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("foo() // 1\nvar foo;\nfunction foo(){\n  console.log(1);\n}\nfoo = function(){\n  console.log(2);\n}\n")])])]),t("p",[n._v("07\n尾调用优化")]),n._v(" "),t("p",[n._v('尾调用 是指某个函数的最后一步是调用另一个函数。它是 ES6 新增的内存管理优化机制，让 JS 引擎在满足条件时可以重用栈帧，因此可以只保留内层函数的调用帧。\n函数调用会在内存形成一个"调用记录"，又称"调用帧"（call frame），保存调用位置和内部变量等信息。如果在函数 A 的内部调用函数 B ，那么在A的调用记录上方，还会形成一个 B 的调用记录。等到 B 运行结束，将结果返回到 A ，B 的调用记录才会消失。如果函数 B 内部还调用函数 C ，那就还有一个 C 的调用记录栈，以此类推。所有的调用记录，就形成一个"调用栈"（call stack）。')]),n._v(" "),t("p",[n._v("图片")]),n._v(" "),t("p",[n._v("尾调用由于是函数的最后一步操作，所以不需要保留外层函数的调用记录，因为调用位置、内部变量等信息都不会再用到了，只要直接用内层函数的调用记录，取代外层函数的调用记录就可以了。\n当满足以下条件时可以实现尾调用优化：\n在严格模式下执行；")]),n._v(" "),t("p",[n._v("外部函数的返回值是对尾调用函数的调用；")]),n._v(" "),t("p",[n._v("尾调用函数返回后不需要执行额外的逻辑；")]),n._v(" "),t("p",[n._v("尾调用函数不是引用外部函数作用域中自由变量的闭包。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('function f() {\n  let m = 1;\n  let n = 2;\n  return g(m + n);\n}\nf();\n\n// 等同于\nfunction f() {\n  return g(3);\n}\nf();\n\n// 等同于\ng(3);\n尾递归 就是尾调用自身。\n递归非常耗费内存，因为需要同时保存成千上百个调用记录，很容易发生"栈溢出"错误（stack overflow）。但对于尾递归来说，由于只存在一个调用记录，所以永远不会发生"栈溢出"错误。\n// 例1：递归 \n// 普通递归 复杂度 O(n)\nfunction factorial(n) {\n  if (n === 1) return 1;\n  return n * factorial(n - 1);\n}\nfactorial(5) // 120\n\n// 尾递归 复杂度 O(1)\nfunction factorial(n, total) {\n  if (n === 1) return total;\n  return factorial(n - 1, n * total);\n}\nfactorial(5, 1) // 120\n\n// 柯里化的尾递归\n// 柯里化（ Currying ）是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数且返回结果的新函数。这种写法既能减少代码冗余，也能增加可读性。\nfunction currying(fn, n) {\n  return function (m) {\n    return fn.call(this, m, n);\n  };\n}\nfunction tailFactorial(n, total) {\n  if (n === 1) return total;\n  return tailFactorial(n - 1, n * total);\n}\nconst factorial = currying(tailFactorial, 1);\nfactorial(5) // 120\n\n// ES6 默认值\nfunction factorial(n, total = 1) {\n  if (n === 1) return total;\n  return factorial(n - 1, n * total);\n}\nfactorial(5) // 1\n\n\n// 例2：Fibonacci 数列\nfunction Fibonacci (n) {\n  if ( n <= 1 ) {return 1};\n  return Fibonacci(n - 1) + Fibonacci(n - 2);\n}\nFibonacci(10) // 89\nFibonacci(100) // 超时\nFibonacci(500) // 超时\n\n// 尾递归的 Fibonacci 数列 \nfunction Fibonacci2 (n , ac1 = 1 , ac2 = 1) {\n  if( n <= 1 ) {return ac2};\n  return Fibonacci2 (n - 1, ac2, ac1 + ac2);\n}\nFibonacci2(100) // 573147844013817200000\nFibonacci2(1000) // 7.0330367711422765e+208\nFibonacci2(10000) // Infinity\n// 不会发生栈溢出（或者层层递归造成的超时），相对节省内存\n目前尾调用在各大浏览器的兼容性如下图所示：\n图片\n')])])]),t("p",[n._v("08\n严格模式")]),n._v(" "),t("p",[n._v("上文中提到了很多在严格模式下不成立的例子，那什么是严格模式？怎么触发严格模式呢？\n严格模式是从 ES5 产生的概念。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("'use strict'\n可以在函数内设置严格模式。\nfunction doSomething(a, b) {\n  'use strict';\n  // code\n}\nES6中，只要函数参数用了解构解析、默认值、rest参数，那么函数内不允许使用严格模式。\n// 报错\nfunction doSomething(a, b = a) {\n  'use strict';\n  // code\n}\n// 报错\nconst doSomething = function ({a, b}) {\n  'use strict';\n  // code\n};\n// 报错\nconst doSomething = (...a) => {\n  'use strict';\n  // code\n};\nconst obj = {\n  // 报错\n  doSomething({a, b}) {\n    'use strict';\n    // code\n  }\n};\n")])])]),t("p",[n._v("09\n补充：异常的含义")]),n._v(" "),t("p",[n._v("上文中提到过了一些错误提示，下面解释一下每种错误的情况：\nReferenceError 和作用域判别失败相关；\nTypeError 代表作用域判别成功了，但是对结果的操作是非法或不合理的。")]),n._v(" "),t("p",[n._v("本文从函数定义、作用域、闭包、尾调用等各个角度解析了函数的调用原理和特性，可以得知函数的本质是对象，每个函数是 Function 类型的实例，其含有属性和方法，它可以帮助我们存储一些变量，并且可以良好地封装方法。")]),n._v(" "),t("p",[n._v("希望这篇文章能够帮助你建立自己的知识体系，对知识进行归纳和内化、找出知识之间的关联。\n如果你觉得此文对你有用的话，欢迎 点赞 + 在看 ，你的支持是我持续更新的动力哦～")]),n._v(" "),t("p",[n._v("参考:")]),n._v(" "),t("p",[n._v("《JavaScript高级程序设计（第四版）》")]),n._v(" "),t("p",[n._v("《你不知道的JavaScript（上卷）》")]),n._v(" "),t("p",[n._v("《ECMAScript6 入门》：https://es6.ruanyifeng.com")]),n._v(" "),t("p",[n._v("MDN Web Docx：https://developer.mozilla.org/")]),n._v(" "),t("p",[n._v("JS方法兼容性查询：http://kangax.github.io/compat-table/es6/")])])}),[],!1,null,null,null);a.default=e.exports}}]);