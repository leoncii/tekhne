let Palindrome = function() {
 
    this.values = {
        palabra: null,
        reverse: null
    }

    this.isPal = function (pal) {
        // pal == pal.split('').reverse().join('') ? console.log('ES PALINDROMO') : console.log('NO ES PALINDROMO')
        // if(typeof pal == 'string' ) {
        let stringPal = String(pal)
        this.values.palabra = stringPal
        this.values.reverse = stringPal.split('').reverse().join('')
        
        return this.values.palabra == this.values.reverse
    // }
        //  if(typeof pal == "number") {
        //      this.values.palabra = pal
        //      this.values.reverse = pal.split('').reverse()
        //      console.log(this.values.reverse)
        // }
        // for(let i = pal.length; i > 0; i--) {
        //     this.values.word = 
        //     console.log(pal+": "+i)
        // }
        // const cleanPal = clean(pal)
        // console.log(cleanPal)
        // let reversePal = pal.split('').reverse().forEach((ele,ind) => {
        //     console.log(ele+" : "+ ind)
        // });

        // this.reverse(this.values.reverse)
    }


    
//     this.isPal = function(palabra) {
//         this.values.palabra = palabra
//         let aux = ""
//         for(let i = palabra.length -1, palabra0, i--) {
//             aux = aux + palabra[i]
//         }
//         aux === palabra ? this.values.result = true : this.values.result = false
        
//     }
}

module.exports = Palindrome