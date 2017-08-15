"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("任务8Postnet测试", function(){
    sinon.spy(console, 'log');

    it("5位编码测试", function(){

        var arr = "95713";
        var result = main(arr);
        var expect_string = '||:|:::|:|:|:::|:::||::||::|:|:|';
        
        expect(expect_string).to.equal(result);
    });

    it("9位编码测试", function(){

        var arr = "555595713";
        var result = main(arr);
        var expect_string = '|:|:|::|:|::|:|::|:|:|:|:::|:|:|:::|:::||::||::|:|:|';

        expect(expect_string).to.equal(result);
    });

    it("10位编码测试", function(){

        var arr = "55559-5713";
        var result = main(arr);
        var expect_string = '|:|:|::|:|::|:|::|:|:|:|:::|:|:|:::|:::||::||::|:|:|';

        expect(expect_string).to.equal(result);
    });

    it("5位解码测试", function(){

        var arr = '||:|:::|:|:|:::|:::||::||::|:|:|';
        var result = main(arr);
        var expect_string = "95713";

        expect(expect_string).to.equal(result);
    });

    it("10位解码测试", function(){

        var arr = '|:|:|::|:|::|:|::|:|:|:|:::|:|:|:::|:::||::||::|:|:|';
        var result = main(arr);
        var expect_string = "55559-5713";

        expect(expect_string).to.equal(result);
    });

    // it("测试用例2", function(){
    //
    //     main();
    //     var result = _.flatten(console.log.args).join("\n");
    //     var expect_string = '';
    //
    //     expect(expect_string).to.equal(result);
    // });
});