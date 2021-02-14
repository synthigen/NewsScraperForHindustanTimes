const puppeteer=require('puppeteer');
const $=require('cheerio');

var titles=[];

async function main()
{
   await puppeteer.launch({headless:false})
	
	.then(async (browser)=>{
              await browser.newPage()
	
	      .then(async(page)=>{
		   await page.goto("https://www.hindustantimes.com/india-news")
	           return page.content();
	       })

	      .then((html_content)=>{
	
		   $("h2.hdg3>a",html_content).each(function(){
			    titles.push($(this).text());             //this refers to the html element here..
		   })                                                //Also this is accompanied by a jQuery wrapper,so
	      })                                                     //we can use "this" to reference the outer obj...
              for (var i=0;i<titles.length;i++)                      //Note"Does not work for non-jQuery objects/funcs
		{
		 console.log(titles[i]);
		}
        })
}

main();

