let playerMove;
        let computerMove = '';
        let result = '';
        let historyArray = [];
        let score = JSON.parse(localStorage.getItem('scores'))

        if (score === null) {
            score = {
                manWin: 0,
                computerWin: 0
            };
        }

        /*setInterval(() => {
            alert1();
            updateHistory();
            updateHistoryList();
        }, 20000);
        */

        function alert1() {
            const randomNumber = Math.random();
            console.log(randomNumber);
            if (randomNumber < (1 / 3)) {
                computerMove = 'Rock';
            }
            if (randomNumber > (1 / 3) && randomNumber < (2 / 3)) {
                computerMove = 'Papper';
            }
            if (randomNumber > (2 / 3)) {
                computerMove = 'Scissors';
            }
        }
        function resultsOnRock(){
            alert1();
            if(computerMove==='Rock'){
                result='Tie';
            }
            if(computerMove==='Scissors'){
                result='You WIN!!';
            }
            if(computerMove==='Papper'){
                result='You Lose.';
            }
            document.querySelector('.description').innerHTML=`You Choosed Rock  and Computer choosed ${computerMove} so, ${result}`;
            playerMove = 'Rock';
            winningSide();
            console.log(result);
            updateHistory();
            console.log(playerMove);
        }
        function resultsOnPaper(){
            alert1();
            if(computerMove==='Rock'){
                result='You WIN!!';
            }
            if(computerMove==='Scissors'){
                result='You Lose.';
            }
            if(computerMove==='Papper'){
                result='Tie';
            }
            document.querySelector('.description').innerHTML=`You Choosed Papper  and Computer choosed ${computerMove} so, ${result}`;
            playerMove = 'Paper';
            winningSide();
            console.log(result);
            updateHistory();
            console.log(playerMove);
        }
        function resultsOnScissor(){
            alert1();
            if(computerMove==='Rock'){
                result='You Lose.';
            }
            if(computerMove==='Scissors'){
                result='Tie';
            }
            if(computerMove==='Papper'){
                result='You WIN!!';
            }
            document.querySelector('.description').innerHTML=`You Choosed Scissors and Computer choosed ${computerMove} so, ${result}`;
            playerMove = 'Scissors';
            winningSide();
            console.log(result);
            updateHistory();
            console.log(playerMove);
        
        }

        function winningSide() {
            if (result === 'You WIN!!') {
                score.manWin += 1;
                document.querySelector('.humanScore').innerHTML = score.manWin;
            }
            if (result === 'You Lose.') {
                score.computerWin += 1;
                document.querySelector('.computerScore').innerHTML = score.computerWin;
            }
            localStorage.setItem('scores', JSON.stringify(score));
            console.log();
        }
        let fixElement = document.querySelector('.fix');

        function updateHistory() {
            historyArray.push(computerMove);
            if (historyArray.length > 11) {
                historyArray.shift();
            }
            console.log(historyArray);
            updateHistoryList();
        }

        function updateHistoryList() {
            let historyInput = document.querySelector('.historyList');
            historyInput.innerHTML = '';

            for (let i = 0; i < historyArray.length; i++) {
                let compMove = historyArray[i];
                let historys = document.createElement('li');
                historys.textContent = compMove;
                historys.classList.add('historyDispaly');
                console.log(compMove);
                
                switch (compMove) {
                    case 'Rock':
                        historys.classList.add('recent-move-rock');
                        fixElement.style.border = '1px solid #FF8F20';
                        break;
                    case 'Papper':
                        historys.classList.add('recent-move-paper');
                        fixElement.style.border = '1px solid rgb(101, 231, 101)';
                        break;
                    case 'Scissors':
                        historys.classList.add('recent-move-scissors');
                        fixElement.style.border = '1px solid rgb(85, 167, 215)';
                        break;
                    default:
                        break;
                }

                historyInput.prepend(historys);
            }
        }

        function reset() {
            score.manWin = 0;
            score.computerWin = 0; 
            localStorage.removeItem('scores');
            document.querySelector('.humanScore').innerHTML = score.manWin;
            document.querySelector('.computerScore').innerHTML = score.computerWin;
        }
        let isLoginOpen = false;
        let loginButton = document.querySelector('.js-loginButton');
        let loginInput = document.querySelector('.js-login-input');
        var bodyElement = document.querySelector('.bod');

        loginButton.addEventListener('click', () => {
            if (isLoginOpen === false){

            bodyElement.style.filter = 'blur(90px)';
            loginInput.classList.add('login-input');
            loginInput.innerHTML = ` <div class="login details">
            <button class="cancel-button" onclick="cancelLoginForm()">X</button>
            <h3 style="text-decoration: underline; font-weight: 700; text-align: center;">LOGIN/SIGN-UP FORM</h3>
            <div class="input-gird">
                <div class="labels">
            <label for="Email">Email/Username: </label>
                </div>
            <input class="input" type="text" placeholder="Enter your email or usename">
                <div class="labels">
            <label for="Email">Password: </label>
                </div>
            <input class="input" type="password" placeholder="Enter your Password">
            </div>
            <button class= "login-but">Login</button>
            <a class="forgot" href="#">Forgot Password</a>
            <p style="margin-left: 50px; margin-top: 40px;">Don't have an account? Click 
                <button class="Sign-button">Sign Up</button></p>
        </div>`
            isLoginOpen = true;
            }
            else{
            bodyElement.style.filter = 'none';
            loginInput.classList.remove('login-input');
            loginInput.innerHTML='';
            isLoginOpen = false;
            }
       })
        
       function cancelLoginForm() {
        bodyElement.style.filter = 'none';
        loginInput.classList.remove('login-input');
        loginInput.innerHTML='';
        isLoginOpen = false;
    }
            
 
