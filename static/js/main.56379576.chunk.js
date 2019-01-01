(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,n,a){e.exports=a(34)},,,,,,function(e,n,a){},,,function(e,n,a){},,function(e,n,a){},,function(e,n,a){},,function(e,n,a){},,function(e,n,a){},,function(e,n,a){},,function(e,n,a){},,function(e,n,a){},,function(e,n,a){"use strict";a.r(n);var c=a(0),t=a.n(c),r=a(7),i=a.n(r),o=(a(15),a(1)),u=a(2),h=a(4),l=a(3),s=a(5),d=(a(18),function(e){function n(){return Object(o.a)(this,n),Object(h.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this;return t.a.createElement("nav",null,t.a.createElement("div",{className:"one"},t.a.createElement("div",{className:"navLinks ".concat("base"===this.props.route&&"active"),onClick:function(){return e.props.onRouteChange("base")}},"Base")),t.a.createElement("div",{className:"two"},t.a.createElement("div",{className:"navLinks ".concat("colors"===this.props.route&&"active"),onClick:function(){return e.props.onRouteChange("colors")}},"Colors")),t.a.createElement("div",{className:"three"},t.a.createElement("div",{className:"navLinks ".concat("distance"===this.props.route&&"active"),onClick:function(){return e.props.onRouteChange("distance")}},"Distance")),t.a.createElement("div",{className:"four"},t.a.createElement("div",{className:"navLinks ".concat("unicode"===this.props.route&&"active"),onClick:function(){return e.props.onRouteChange("unicode")}},"Unicode")))}}]),n}(c.Component)),p=(a(20),function(e){var n=e.from,a=e.route,c=e.onRouteChange;return t.a.createElement("div",null,t.a.createElement("div",{className:"header"},t.a.createElement("h1",null,"Converter"),t.a.createElement("h2",null,"Convert ",t.a.createElement("span",null,n))),t.a.createElement(d,{onRouteChange:c,route:a}))}),m=(a(22),function(e){function n(){var e,a;Object(o.a)(this,n);for(var c=arguments.length,t=new Array(c),r=0;r<c;r++)t[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(l.a)(n)).call.apply(e,[this].concat(t)))).onInputChange=function(e){a.props.handleInputChange(e,a.props.inputName)},a}return Object(s.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return t.a.createElement("div",{className:"inputField"},t.a.createElement("label",{htmlFor:this.props.inputName,className:"inputFieldLabel"}," ",this.props.inputName," "),t.a.createElement("input",{value:this.props.input,onChange:this.onInputChange,id:this.props.inputName}))}}]),n}(c.Component)),v=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],g=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","+","/"],f=["0","1"],b=function(e){for(var n=new Set,a=0;a<e.length;a++)n.add(e[a]);return n},C=b(v),E=b(g),O=function(e){function n(){var e;return Object(o.a)(this,n),(e=Object(h.a)(this,Object(l.a)(n).call(this))).handleDecimal=function(n){e.setState({decimal:n,hexadecimal:e.props.convertToBase(n,"",16,v),binary:e.props.convertToBase(n,"",2,f),base64:e.props.convertToBase(n,"",64,g)})},e.handleHexadecimal=function(n){var a=e.props.convertToDecimal(n,16,v);e.setState({decimal:a,hexadecimal:n,binary:e.props.convertToBase(a,"",2,f),base64:e.props.convertToBase(a,"",64,g)})},e.handleBinary=function(n){var a=e.props.convertToDecimal(n,2,f);e.setState({decimal:a,hexadecimal:e.props.convertToBase(a,"",16,v),binary:n,base64:e.props.convertToBase(a,"",64,g)})},e.handleBase64=function(n){var a=e.props.convertToDecimal(n,64,g);e.setState({decimal:a,hexadecimal:e.props.convertToBase(a,"",16,v),binary:e.props.convertToBase(a,"",2,f),base64:n})},e.handleInputChange=function(n,a){if("Decimal"===a){if(n.target.value.length>0&&"0"!==n.target.value[n.target.value.length-1]&&!parseInt(n.target.value[n.target.value.length-1]))return;e.handleDecimal(n.target.value)}else if("Binary"===a){if(n.target.value.length>0&&"0"!==n.target.value[n.target.value.length-1]&&"1"!==n.target.value[n.target.value.length-1])return;e.handleBinary(n.target.value)}else if("Hexadecimal"===a){if(n.target.value.length>0&&!C.has(n.target.value[n.target.value.length-1]))return;e.handleHex(n.target.value)}else if("Base64"===a){if(n.target.value.length>0&&!E.has(n.target.value[n.target.value.length-1]))return;e.handleBase64(n.target.value)}},e.state={decimal:"",hexadecimal:"",binary:"",base64:""},e}return Object(s.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return t.a.createElement("div",{className:"App"},t.a.createElement("br",null),t.a.createElement(m,{input:this.state.decimal,handleInputChange:this.handleInputChange,inputName:"Decimal"}),t.a.createElement(m,{input:this.state.hexadecimal,handleInputChange:this.handleInputChange,inputName:"Hexadecimal"}),t.a.createElement(m,{input:this.state.binary,handleInputChange:this.handleInputChange,inputName:"Binary"}),t.a.createElement(m,{input:this.state.base64,handleInputChange:this.handleInputChange,inputName:"Base64"}))}}]),n}(c.Component),k=(a(24),function(e){for(var n=new Set,a=0;a<e.length;a++)n.add(e[a]);return n}),B=k(["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]),N=k(["0","1","2","3","4","5","6","7","8","9",","," "]),T=function(e){function n(){var e,a;Object(o.a)(this,n);for(var c=arguments.length,t=new Array(c),r=0;r<c;r++)t[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(l.a)(n)).call.apply(e,[this].concat(t)))).onInputChange=function(e){if(e.target.value.length>0)if(a.props.isHex){if(!B.has(e.target.value[e.target.value.length-1]))return}else if(!N.has(e.target.value[e.target.value.length-1]))return;a.props.change(e.target.value,a.props.isHex)},a}return Object(s.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return t.a.createElement("div",null,this.props.isHex?"#":"RGB(",t.a.createElement("input",{className:"colorInput ".concat(this.props.brightness),placeholder:this.props.isHex?"339989":"51, 153, 137",onChange:this.onInputChange,value:this.props.inputVal})," ",!this.props.isHex&&")")}}]),n}(c.Component),I=(a(26),["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]),x=function(e){function n(){var e;return Object(o.a)(this,n),(e=Object(h.a)(this,Object(l.a)(n).call(this))).handleRGB=function(n){var a=n.replace(/\s/g,"").split(",");if(a.length>3)return"";var c="";return a.forEach(function(n){var a=e.props.convertToBase(n,"",16,I);1===a.length&&(a="0"+a),c+=a}),c},e.handleHex=function(n){var a=[];3===n.length&&(n=n[0]+n[0]+n[1]+n[1]+n[2]+n[2]);for(var c=0;c<n.length;c+=2)a.push(n.slice(c,c+2));var t=a.map(function(n){return e.props.convertToDecimal(n,16,I)});return void 0===t[0]?"":"".concat(t[0],", ").concat(t[1]||0,", ").concat(t[2]||0)},e.onColorChange=function(n,a){a?e.setState({rgb:e.handleHex(n),hex:n},function(){e.setState({brightness:e.getBrightness(e.state.rgb)})}):e.setState({rgb:n,hex:e.handleRGB(n)},function(){e.setState({brightness:e.getBrightness(e.state.rgb)})})},e.getBrightness=function(e){return e.replace(/\s/g,"").split(",").map(function(e){var n=parseInt(e);return void 0===n||isNaN(n)?100:n}).reduce(function(e,n){return e+n},0)/3>125?"dark":"light"},e.getValidColor=function(e){return 3===e.length||6===e.length},e.state={rgb:"",hex:"",brightness:"light"},e}return Object(s.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return t.a.createElement("div",{style:{backgroundColor:"#".concat(this.getValidColor(this.state.hex)?this.state.hex:"339989")},className:"App colors ".concat(this.state.brightness)},this.getValidColor(this.state.hex)?t.a.createElement("h3",null,"Color has been Converted"):t.a.createElement("h3",null,"Write a Valid Color"),t.a.createElement(T,{change:this.onColorChange,isHex:!0,inputVal:this.state.hex,brightness:this.state.brightness}),t.a.createElement(T,{change:this.onColorChange,isHex:!1,inputVal:this.state.rgb,brightness:this.state.brightness}))}}]),n}(c.Component),D=a(8),w=function(e){function n(){var e;return Object(o.a)(this,n),(e=Object(h.a)(this,Object(l.a)(n).call(this))).convertDistance=function(e,n){return""===e?0:(e=parseFloat(e))*n},e.handleDistanceChange=function(n,a){var c;switch(a){case"meter":c=n;break;case"kilometer":c=e.convertDistance(n,1e3);break;case"centimeter":c=e.convertDistance(n,.01);break;case"millimeter":c=e.convertDistance(n,.001);break;case"micrometer":c=e.convertDistance(n,1e-6);break;case"nanometer":c=e.convertDistance(n,1e-9);break;default:c=0}e.setState({meter:c,kilometer:c/1e3,centimeter:100*c,millimeter:1e3*c,micrometer:1e6*c,nanometer:1e9*c})},e.handleInputChange=function(n,a){n.target.value.length>0&&"0"!==n.target.value[n.target.value.length-1]&&"."!==n.target.value[n.target.value.length-1]&&!parseInt(n.target.value[n.target.value.length-1])||e.handleDistanceChange(n.target.value,a)},e.state={meter:"",kilometer:"",centimeter:"",millimeter:"",micrometer:"",nanometer:""},e}return Object(s.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this;return t.a.createElement("div",{className:"App"},t.a.createElement("br",null),Object.entries(this.state).map(function(n){var a=Object(D.a)(n,2),c=a[0],r=a[1];return t.a.createElement(m,{inputName:c,key:c,input:r,handleInputChange:e.handleInputChange})}))}}]),n}(c.Component),y=[[{char:" ",unicode:"00100000"},{char:"!",unicode:"00100001"},{char:'"',unicode:"00100010"},{char:"#",unicode:"00100011"},{char:"$",unicode:"00100100"},{char:"%",unicode:"00100101"},{char:"&amp;",unicode:"00100110"},{char:"'",unicode:"00100111"},{char:"(",unicode:"00101000"},{char:")",unicode:"00101001"},{char:"*",unicode:"00101010"},{char:"+",unicode:"00101011"},{char:",",unicode:"00101100"},{char:"-",unicode:"00101101"},{char:".",unicode:"00101110"},{char:"/",unicode:"00101111"},{char:"0",unicode:"00110000"},{char:"1",unicode:"00110001"},{char:"2",unicode:"00110010"},{char:"3",unicode:"00110011"},{char:"4",unicode:"00110100"},{char:"5",unicode:"00110101"},{char:"6",unicode:"00110110"},{char:"7",unicode:"00110111"},{char:"8",unicode:"00111000"},{char:"9",unicode:"00111001"},{char:":",unicode:"00111010"},{char:";",unicode:"00111011"},{char:"&lt;",unicode:"00111100"},{char:"=",unicode:"00111101"},{char:"&gt;",unicode:"00111110"},{char:"?",unicode:"00111111"},{char:"@",unicode:"01000000"},{char:"A",unicode:"01000001"},{char:"B",unicode:"01000010"},{char:"C",unicode:"01000011"},{char:"D",unicode:"01000100"},{char:"E",unicode:"01000101"},{char:"F",unicode:"01000110"},{char:"G",unicode:"01000111"},{char:"H",unicode:"01001000"},{char:"I",unicode:"01001001"},{char:"J",unicode:"01001010"},{char:"K",unicode:"01001011"},{char:"L",unicode:"01001100"},{char:"M",unicode:"01001101"},{char:"N",unicode:"01001110"},{char:"O",unicode:"01001111"},{char:"P",unicode:"01010000"},{char:"Q",unicode:"01010001"},{char:"R",unicode:"01010010"},{char:"S",unicode:"01010011"},{char:"T",unicode:"01010100"},{char:"U",unicode:"01010101"},{char:"V",unicode:"01010110"},{char:"W",unicode:"01010111"},{char:"X",unicode:"01011000"},{char:"Y",unicode:"01011001"},{char:"Z",unicode:"01011010"},{char:"[",unicode:"01011011"},{char:"\\",unicode:"01011100"},{char:"]",unicode:"01011101"},{char:"^",unicode:"01011110"},{char:"_",unicode:"01011111"},{char:"`",unicode:"01100000"},{char:"a",unicode:"01100001"},{char:"b",unicode:"01100010"},{char:"c",unicode:"01100011"},{char:"d",unicode:"01100100"},{char:"e",unicode:"01100101"},{char:"f",unicode:"01100110"},{char:"g",unicode:"01100111"},{char:"h",unicode:"01101000"},{char:"i",unicode:"01101001"},{char:"j",unicode:"01101010"},{char:"k",unicode:"01101011"},{char:"l",unicode:"01101100"},{char:"m",unicode:"01101101"},{char:"n",unicode:"01101110"},{char:"o",unicode:"01101111"},{char:"p",unicode:"01110000"},{char:"q",unicode:"01110001"},{char:"r",unicode:"01110010"},{char:"s",unicode:"01110011"},{char:"t",unicode:"01110100"},{char:"u",unicode:"01110101"},{char:"v",unicode:"01110110"},{char:"w",unicode:"01110111"},{char:"x",unicode:"01111000"},{char:"y",unicode:"01111001"},{char:"z",unicode:"01111010"},{char:"{",unicode:"01111011"},{char:"|",unicode:"01111100"},{char:"}",unicode:"01111101"},{char:"~",unicode:"01111110"}],[{char:"&nbsp;",unicode:"1100001010100000"},{char:"\xa1",unicode:"1100001010100001"},{char:"\xa2",unicode:"1100001010100010"},{char:"\xa3",unicode:"1100001010100011"},{char:"\xa4",unicode:"1100001010100100"},{char:"\xa5",unicode:"1100001010100101"},{char:"\xa6",unicode:"1100001010100110"},{char:"\xa7",unicode:"1100001010100111"},{char:"\xa8",unicode:"1100001010101000"},{char:"\xa9",unicode:"1100001010101001"},{char:"\xaa",unicode:"1100001010101010"},{char:"\xab",unicode:"1100001010101011"},{char:"\xac",unicode:"1100001010101100"},{char:"\xad",unicode:"1100001010101101"},{char:"\xae",unicode:"1100001010101110"},{char:"\xaf",unicode:"1100001010101111"},{char:"\xb0",unicode:"1100001010110000"},{char:"\xb1",unicode:"1100001010110001"},{char:"\xb2",unicode:"1100001010110010"},{char:"\xb3",unicode:"1100001010110011"},{char:"\xb4",unicode:"1100001010110100"},{char:"\xb5",unicode:"1100001010110101"},{char:"\xb6",unicode:"1100001010110110"},{char:"\xb7",unicode:"1100001010110111"},{char:"\xb8",unicode:"1100001010111000"},{char:"\xb9",unicode:"1100001010111001"},{char:"\xba",unicode:"1100001010111010"},{char:"\xbb",unicode:"1100001010111011"},{char:"\xbc",unicode:"1100001010111100"},{char:"\xbd",unicode:"1100001010111101"},{char:"\xbe",unicode:"1100001010111110"},{char:"\xbf",unicode:"1100001010111111"},{char:"\xc0",unicode:"1100001110000000"},{char:"\xc1",unicode:"1100001110000001"},{char:"\xc2",unicode:"1100001110000010"},{char:"\xc3",unicode:"1100001110000011"},{char:"\xc4",unicode:"1100001110000100"},{char:"\xc5",unicode:"1100001110000101"},{char:"\xc6",unicode:"1100001110000110"},{char:"\xc7",unicode:"1100001110000111"},{char:"\xc8",unicode:"1100001110001000"},{char:"\xc9",unicode:"1100001110001001"},{char:"\xca",unicode:"1100001110001010"},{char:"\xcb",unicode:"1100001110001011"},{char:"\xcc",unicode:"1100001110001100"},{char:"\xcd",unicode:"1100001110001101"},{char:"\xce",unicode:"1100001110001110"},{char:"\xcf",unicode:"1100001110001111"},{char:"\xd0",unicode:"1100001110010000"},{char:"\xd1",unicode:"1100001110010001"},{char:"\xd2",unicode:"1100001110010010"},{char:"\xd3",unicode:"1100001110010011"},{char:"\xd4",unicode:"1100001110010100"},{char:"\xd5",unicode:"1100001110010101"},{char:"\xd6",unicode:"1100001110010110"},{char:"\xd7",unicode:"1100001110010111"},{char:"\xd8",unicode:"1100001110011000"},{char:"\xd9",unicode:"1100001110011001"},{char:"\xda",unicode:"1100001110011010"},{char:"\xdb",unicode:"1100001110011011"},{char:"\xdc",unicode:"1100001110011100"},{char:"\xdd",unicode:"1100001110011101"},{char:"\xde",unicode:"1100001110011110"},{char:"\xdf",unicode:"1100001110011111"},{char:"\xe0",unicode:"1100001110100000"},{char:"\xe1",unicode:"1100001110100001"},{char:"\xe2",unicode:"1100001110100010"},{char:"\xe3",unicode:"1100001110100011"},{char:"\xe4",unicode:"1100001110100100"},{char:"\xe5",unicode:"1100001110100101"},{char:"\xe6",unicode:"1100001110100110"},{char:"\xe7",unicode:"1100001110100111"},{char:"\xe8",unicode:"1100001110101000"},{char:"\xe9",unicode:"1100001110101001"},{char:"\xea",unicode:"1100001110101010"},{char:"\xeb",unicode:"1100001110101011"},{char:"\xec",unicode:"1100001110101100"},{char:"\xed",unicode:"1100001110101101"},{char:"\xee",unicode:"1100001110101110"},{char:"\xef",unicode:"1100001110101111"},{char:"\xf0",unicode:"1100001110110000"},{char:"\xf1",unicode:"1100001110110001"},{char:"\xf2",unicode:"1100001110110010"},{char:"\xf3",unicode:"1100001110110011"},{char:"\xf4",unicode:"1100001110110100"},{char:"\xf5",unicode:"1100001110110101"},{char:"\xf6",unicode:"1100001110110110"},{char:"\xf7",unicode:"1100001110110111"},{char:"\xf8",unicode:"1100001110111000"},{char:"\xf9",unicode:"1100001110111001"},{char:"\xfa",unicode:"1100001110111010"},{char:"\xfb",unicode:"1100001110111011"},{char:"\xfc",unicode:"1100001110111100"},{char:"\xfd",unicode:"1100001110111101"},{char:"\xfe",unicode:"1100001110111110"},{char:"\xff",unicode:"1100001110111111"}]],L=(a(28),function(e){var n=e.char,a=e.binary;return t.a.createElement("div",{className:"listItem"},'"',n,'" : ',a)}),S=(a(30),function(e){function n(){var e;return Object(o.a)(this,n),(e=Object(h.a)(this,Object(l.a)(n).call(this))).handleToBinary=function(n){var a="";n.target.value.split("").forEach(function(e){for(var n=0;n<y[0].length;n++)if(y[0][n].char===e){a+=y[0][n].unicode;break}for(var c=0;c<y[1].length;c++)if(y[1][c].char===e){a+=y[1][c].unicode;break}}),e.setState({binary:a,unicode:n.target.value})},e.handleToUnicode=function(n){var a="",c=n.target.value.replace(/\s/g,"");if(c.length%8===0&&0!==c.length){for(var t=c.match(/.{1,8}/g),r=0;r<t.length;r++)if("0"===t[r][0])for(var i=0;i<y[0].length;i++)t[r]===y[0][i].unicode&&(a+=y[0][i].char);else if("1"===t[r][0]){for(var o=t[r]+t[r+1],u=0;u<y[1].length;u++)o===y[1][u].unicode&&(a+=y[1][u].char);r++}e.setState({binary:n.target.value,unicode:a})}else e.setState({binary:n.target.value,unicode:""})},e.closeList=function(){e.setState({showList:!1})},e.openList=function(){e.setState({showList:!0})},e.state={binary:"",unicode:"",showList:!1},e}return Object(s.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return t.a.createElement("div",{className:"App"},t.a.createElement("br",null),t.a.createElement(m,{inputName:"Binary",input:this.state.binary,handleInputChange:this.handleToUnicode}),t.a.createElement(m,{inputName:"Unicode",input:this.state.unicode,handleInputChange:this.handleToBinary}),t.a.createElement("div",{className:"unicode"},0===this.state.unicode.length?t.a.createElement("h3",null,"Write Something Valid"):t.a.createElement("h3",null,"Input has been Converted"),this.state.showList?t.a.createElement("p",{onClick:this.closeList},"Close List"):t.a.createElement("p",{onClick:this.openList},"Want a list of characters?"),this.state.showList&&t.a.createElement("div",null,y[0].map(function(e){return t.a.createElement(L,{char:e.char,binary:e.unicode,key:e.unicode})}),y[1].map(function(e){return t.a.createElement(L,{char:e.char,binary:e.unicode,key:e.unicode})}))))}}]),n}(c.Component)),H=(a(32),function(e){function n(){var e;return Object(o.a)(this,n),(e=Object(h.a)(this,Object(l.a)(n).call(this))).convertToBase=function(n,a,c,t){if(""===n)return"";n=parseInt(n);var r=Math.floor(n/c),i=t[n%c]+a;return r>=1?e.convertToBase(r,i,c,t):i},e.convertToDecimal=function(e,n,a){if(""===e)return"";var c=e.toString().split("");c=c.reverse();var t=0;return c.forEach(function(e,c){a.forEach(function(a,r){a===e&&(t+=r*Math.pow(n,c))})}),t},e.onRouteChange=function(n){e.setState({route:n})},e.state={route:"base"},e}return Object(s.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return t.a.createElement("div",null,t.a.createElement(p,{from:this.state.route,onRouteChange:this.onRouteChange,route:this.state.route}),t.a.createElement("div",null,"base"===this.state.route&&t.a.createElement(O,{convertToBase:this.convertToBase,convertToDecimal:this.convertToDecimal}),"colors"===this.state.route&&t.a.createElement(x,{convertToBase:this.convertToBase,convertToDecimal:this.convertToDecimal}),"distance"===this.state.route&&t.a.createElement(w,null),"unicode"===this.state.route&&t.a.createElement(S,null)))}}]),n}(c.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(t.a.createElement("div",null,t.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.56379576.chunk.js.map