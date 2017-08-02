/**
 * 版权所有：浙江薪福多网络科技有限公司
 * 作者：Tony
 * 创建时间：2017/7/31
 */
import React,{Component} from 'react'
import {observer} from 'mobx-react'
import {observable} from 'mobx'

export default class Index extends Component {

    constructor(...args) {
        super(...args)
    }

    render() {
        return (
            <div className="rct">
                ---
                title: assert 模块
                layout: page
                category: nodejs
                data: 2015-06-06
                modifiedOn: 2015-06-06
                ---

                assert模块是Node的内置模块，主要用于断言。如果表达式不符合预期，就抛出一个错误。该模块提供11个方法，但只有少数几个是常用的。

                ## assert()

                assert方法接受两个参数，当第一个参数对应的布尔值为true时，不会有任何提示，返回undefined。当第一个参数对应的布尔值为false时，会抛出一个错误，该错误的提示信息就是第二个参数设定的字符串。

                ```javascript
                // 格式
                assert(value, message)

                // 例子
                var assert = require('assert');


                var expected = add(1,2);
                assert( expected === 3, '预期1加2等于3');
                ```

                上面代码不会有任何输出，因为assert方法的第一个参数是true。

                ```javascript
                assert( expected === 4, '预期1加2等于3')
                // AssertionError: 预期1加2等于3
                ```

                上面代码会抛出一个错误，因为assert方法的第一个参数是false。

                ## assert.ok()

                ok是assert方法的另一个名字，与assert方法完全一样。

                ## assert.equal()

                equal方法接受三个参数，第一个参数是实际值，第二个是预期值，第三个是错误的提示信息。

                ```javascript
                // 格式
                assert.equal(actual, expected, [message])

                assert.equal(true, value, message);
                // 等同于
                assert(value, message);

                // 例子
                var assert = require('assert');


                var expected = add(1,2);

                // 以下三句效果相同
                assert(expected == 3, '预期1+2等于3');
                assert.ok(expected == 3, '预期1+2等于3');
                assert.equal(expected, 3, '预期1+2等于3');
                ```

                equal方法内部使用的是相等运算符（==），而不是严格运算符（===），进行比较运算。

                ## assert.notEqual()

                notEqual方法的用法与equal方法类似，但只有在实际值等于预期值时，才会抛出错误。

                ```javascript
                // 格式
                assert.notEqual(actual, expected, [message])

                // 用法
                var assert = require('assert');

                var expected = add(1,2);

                // 以下三种写法效果相同
                assert(expected != 4, '预期不等于4');
                assert.ok(expected != 4, '预期不等于4');
                assert.notEqual(expected, 4, '预期不等于4');
                ```

                notEqual方法内部使用不相等运算符（!=），而不是严格不相等运算符（!==），进行比较运算。

                ## assert.deepEqual()

                deepEqual方法用来比较两个对象。只要它们的属性一一对应，且值都相等，就认为两个对象相等，否则抛出一个错误。

                ```javascript
                // 格式
                assert.deepEqual(actual, expected, [message])

                // 例子
                var assert = require('assert');

                var list1 = [1, 2, 3, 4, 5];
                var list2 = [1, 2, 3, 4, 5];

                assert.deepEqual(list1, list2, '预期两个数组应该有相同的属性');


                assert.deepEqual(person1, person2, '预期两个对象应该有相同的属性');
                ```

                ## assert.notDeepEqual()

                notDeepEqual方法与deepEqual方法正好相反，用来断言两个对象是否不相等。

                ```javascript
                // 格式
                assert.notDeepEqual(actual, expected, [message])

                // 例子
                var assert = require('assert');

                var list1 = [1, 2, ,3, 4, 5];
                var list2 = [1, 2, 3, 4, 5];

                assert.notDeepEqual(list1, list2, '预期两个对象不相等');


                // deepEqual checks the elements in the objects are identical
                assert.notDeepEqual(person1, person2, '预期两个对象不相等');
                ```

                ## assert.strictEqual()

                strictEqual方法使用严格相等运算符（===），比较两个表达式。

                ```javascript
                // 格式
                assert.strictEqual(actual, expected, [message])

                // 例子
                var assert = require('assert');

                assert.strictEqual(1, '1', '预期严格相等');
                // AssertionError: 预期严格相等
                ```

                ## assert.notStrictEqual()

                assert.notStrictEqual方法使用严格不相等运算符（!==），比较两个表达式。

                ```javascript
                // 格式
                assert.notStrictEqual(actual, expected, [message])

                // 例子
                var assert = require('assert');

                assert.notStrictEqual(1, true, '预期严格不相等');
                ```

                ## assert.throws()

                throws方法预期某个代码块会抛出一个错误，且抛出的错误符合指定的条件。

                ```javascript
                // 格式

                <input type="text"/>
            </div>
        )
    }
}