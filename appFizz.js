$(function submitFizzBuzz() {
            $('#number-chooser').on('submit', function (event) {

                event.preventDefault();

                const input = $('#number-choice')
             const number = input.val()

                $('.js-results').empty();
                let result = []

                for (let i = 0; i <= number; i++) {
                    if (result[i] % 15 === 0) {
                        result.push($('<div class="fizz-buzz-item fizzbuzz"><span>fizzbuzz</span></div>'))
                    } else if (result[i] % 5 === 0) {
                        result.push($('<div class="fizz-buzz-item buzz"><span>buzz</span></div>'))
                            } else if (result[i] % 3 ===0){
                                result.push($('<div class ="fizz-buzz-item fizz"><span>fizz</span></div>'))

                            }

        
                        }

                        $('.js-results').append(result)
                    })
            })

submitFizzBuzz()