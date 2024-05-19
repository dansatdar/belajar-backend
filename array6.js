const datas = [

{
	name : "Daniel Satria",
	stack :'js react',
	age : 17
},

{
	name : "Agung",
	stack :'ok react',
	age : 28
},

{
	name : "Budi",
	stack :'wow react',
	age : 30
},

{
	name : "Agus",
	stack :'bos react',
	age : 5
},

{
	name : "Januar",
	stack :'anjas react',
	age : 67
}
]

//datas.map((values,index)=>console.log(index,values.name,values.age));

datas.map((values,index)=>console.log(index,values.name,values.stack))

datas.sort((a,b)=>a.age-b.age).map((values,index)=>console.log(index,values.name,values.stack,values.age))

datas.filter((x)=>x.age > 30).map((values,index)=>console.log(index,values.name,values.stack,values.age))


//datas.sort((a,b)=>b.age-a.age).map((values,index)=>console.log(index,values.name,values.age));










