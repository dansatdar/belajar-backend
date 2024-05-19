/* ARRAY **/

const arraysaya = ['alpukat','piano','mangga','jambu','apel']

const piano = arraysaya.includes('mangga')
const posisimangga = arraysaya.indexOf('mangga')

const sebelum = posisimangga - 1
const sesudah = posisimangga + 1

const buahawal = arraysaya.shift()
console.log(buahawal)

const buahakhir = arraysaya.pop()
console.log(buahakhir)

const buahterakhir = arraysaya[arraysaya.length-1]
console.log(buahterakhir)


if(piano){
	console.log(`Posisi semangka berada di posisi ke ${posisimangga}, sesudah ${arraysaya[sebelum]} dan sebelum ${arraysaya[sesudah]}`)
}else {
	console.log("Saya tidak tahu menahu")
}

