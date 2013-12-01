
exports.init=function(foo){
	foo.addImportPath(__dirname+'/viewmacros');
}

exports.filterPage=function(items,page,pageSize){
	items=items.filter(function(elem,index){
        if((index>=(page*pageSize)) && (index<(page*pageSize+pageSize)))
            return true;
        else
            return false;
    });
	return items;
}

exports.getPagination=function(numItems,pageIndex,pageSize){
    var numPages=Math.ceil(numItems/pageSize);
    var maxPages=5;
    var pagination=[];
    for(var p=pageIndex-1;p<numPages;p++){
        if(pagination.length>=maxPages)break;
        if(p>=0 && p<numPages){
            pagination.push(p+1);
        }
    }
    return pagination;
}
