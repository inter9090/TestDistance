function getBalance(){
    document.getElementById('sum').innerText = ''
    class Distance {
        number
        min = 10
        middlePrice = 2.5
        largePrice = 2

        middleDistance(num){
            return  this.number = (num - 3) * this.middlePrice + this.min
        }

        largeDistance(num){
            return this.number =  (num - 10) * this.largePrice + this.min + (7 * this.middlePrice)
        }

        getDistance() {
            let num = parseFloat(document.getElementById('number').value)

            if(isNaN(num)){
                return 'Неверный формат!'
            }

            if(document.getElementById('roundtrip').checked){
                num = num*2
            }

            let result = 10

            switch (true){
                case (num> 3 && num <= 10):
                    result = this.middleDistance(num)
                    break;
                case (num> 10):
                    result = this.largeDistance(num)
                    break;

            }
            return 'Стоимость поездки составило: ' + result + 'c'
        }
    }
    let getSum = new Distance();

    document.getElementById('sum').innerText = getSum.getDistance()
}
