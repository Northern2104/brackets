module.exports = function check(str, bracketsConfig) {
  	let br=[];
	let brSame= [];
	let flagg=true;
	for(i=0;i<str.length;i++){
		bracketsConfig.forEach(function callback(arr){
			if(arr[0]!=arr[1]){
				if(str[i]==arr[0]){
					br.push(str[i])
				}

				else if(str[i]==arr[1]){
					if(br.length>0&&br[br.length-1]==arr[0]){
					br.pop();
					}
					else{flagg=false};
				}
			}
			else{
				if(str[i]==arr[0]&&brSame.length==0){
					brSame.push(str[i]);
					br.push(str[i]);
				}

				else if(str[i]==arr[0]&&brSame.length>0){
					brSame.pop();
					br.pop();
				}
			}
		})
	};
if(br.length>0||brSame.length>0){flagg=false};
return flagg;
}
