var chai = require('chai');
var assert = chai.assert;
const RECOMMENDATIONS = require('../index');


var recommendationsOne;
var recommendationsTwo;
var recommendationsThree;
var recommendationsFour;





describe('Testing the picking problem : ', function(){
    
    beforeEach(function() {
        
        recommendationsOne = JSON.parse(JSON.stringify(RECOMMENDATIONS.json1))
        recommendationsTwo = JSON.parse(JSON.stringify(RECOMMENDATIONS.json2))
        recommendationsThree = JSON.parse(JSON.stringify(RECOMMENDATIONS.json3))
        recommendationsFour = JSON.parse(JSON.stringify(RECOMMENDATIONS.json4))
    });
    
    describe('Check give head Function', function(){
        
        it('giveHead() must return the head of logs array of articles: ', function(){
            expectedVal = recommendationsOne.logs[0];
            result = RECOMMENDATIONS.giveHead(recommendationsOne.logs);
            assert.equal(result, expectedVal);
        });
        it('giveHead() Now the array should be length === 0 : ', function(){
            expectedVal = 0;
            RECOMMENDATIONS.giveHead(recommendationsOne.logs);
            assert.equal(recommendationsOne.logs.length, expectedVal);
        });
        it('giveHead() must return the head of  myad array of articles: ', function(){
            expectedVal = recommendationsTwo.myad[0];
            result = RECOMMENDATIONS.giveHead(recommendationsTwo.myad);
            assert.equal(result, expectedVal);
        });
        it('giveHead() must return the head of logs array of articles: ', function(){
            expectedVal = recommendationsThree.logs[0];
            result = RECOMMENDATIONS.giveHead(recommendationsThree.logs);
            assert.equal(result, expectedVal);
        });
        it('giveHead() must return the head of logs array of articles: ', function(){
            expectedVal = recommendationsFour.logs[0];
            result = RECOMMENDATIONS.giveHead(recommendationsFour.logs);
            assert.equal(result, expectedVal);
        });
        it('giveHead() must return undefined, because the array is empty: ', function(){
            expectedVal = recommendationsFour.myad[0];
            result = RECOMMENDATIONS.giveHead(recommendationsFour.myad);
            assert.equal(result, expectedVal);
        });
    });
    
    
    describe('Check RECOMMENDATIONS Function', function(){
        
        it('Recommendations() must return an array of tokens with length 1', function(){
            
            result = RECOMMENDATIONS.recommendations(recommendationsOne);
            assert.equal(result.length, 1);
            
        });
        
        it('Recommendations() array first position should be equal 345048', function(){
            
            result = RECOMMENDATIONS.recommendations(recommendationsOne);
            assert.equal(result[0], "345048");
            
        });

        it('Recommendations() must return an array of tokens with length 4', function(){
            
            result = RECOMMENDATIONS.recommendations(recommendationsTwo);
            assert.equal(result.length, 4);
            
        });

        it('Recommendations() elements should be : 790952, 103678, 788138, 802358', function(){
            
            result = RECOMMENDATIONS.recommendations(recommendationsTwo);
            assert.equal(result[0], "790952");
            assert.equal(result[1], "103678");
            assert.equal(result[2], "788138");
            assert.equal(result[3], "802358");
            
        });


        it('Recommendations() must return an array of tokens with length 3', function(){
            
            result = RECOMMENDATIONS.recommendations(recommendationsThree);
            assert.equal(result.length, 3);
            
        });

        it('Recommendations() elements should be : 103678, 790952, 802358 ', function(){
            
            result = RECOMMENDATIONS.recommendations(recommendationsThree);
            assert.equal(result[0], "103678");
            assert.equal(result[1], "790952");
            assert.equal(result[2], "802358");
        });

        it('Recommendations() must return an array of tokens with length 4', function(){
            
            result = RECOMMENDATIONS.recommendations(recommendationsFour);
            assert.equal(result.length, 4);
            
        });
        
        it('Recommendations() array first position should be equal 790952, 103678, 802358, 562873 ', function(){
            
            result = RECOMMENDATIONS.recommendations(recommendationsFour);
            assert.equal(result[0], "790952");
            assert.equal(result[1], "103678");
            assert.equal(result[2], "802358");
            assert.equal(result[3], "562873");
            
        });
    });
    
});

