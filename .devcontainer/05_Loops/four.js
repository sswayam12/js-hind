const myObject = {
    js:'javascript',
    cpp:'c++',
    rb:'ruby'
}

for (const key in myObject) {
    console.log(myObject[key]);
}

const arr = ["js","rb",'py',"java"];
for (const key in arr) {
    console.log(arr[key]);
}