document.addEventListener('DOMContentLoaded', () => {

    const wordBank = {
        "4-5":{
            "ANIMALS":["Mouse","Rabbit","Horse","Tiger","Lion","Panda","Dog","Cat","Bird","Fish","Bear","Cow","Duck","Elephant","Fox","Frog","Giraffe","Goat","Hippo","Kangaroo","Monkey","Penguin","Pig","Sheep","Zebra"],
            "OCCUPATIONS AND PROFESSIONS":["Engineer","Actress","Farmer","Journalist","Painter","Doctor","Nurse","Teacher","Student","Police officer","Firefighter","Chef","Baker","Singer","Dancer","Driver","Pilot","Scientist","Waiter","Worker"],
            "PLACES AROUND TOWN":["Bank","Bakery","Cafeteria","Hospital","School","Museum","Restaurant","Supermarket","Airport","Bookstore","Bus station","Church","Cinema","Clothing store","Gas station","Gym","Hotel","Library","Park","Pharmacy"],
            "ADJECTIVES":["Tall","Short","Large","Big","Small","Fat","Thin","Long","Beautiful","Ugly","Happy","Sad","Angry","Scared","Surprised","Tired","Hungry","Thirsty","Clean","Dirty"],
            "FRUITS AND VEGETABLES":["Apple","Pear","Banana","Kiwi","Papaya","Orange","Watermelon","Grapes","Strawberry","Lemon","Pineapple","Mango","Cherry","Peach","Plum","Broccoli","Carrot","Lettuce","Potato","Tomato"],
            "FOOD":["Milk","Cheese","Butter","Egg","Cereal","Bread","Rice","Pasta","Meat","Chicken","Fish","Salad","Soup","Sandwich","Pizza","Hamburger","Hot dog","French fries","Ice cream","Cake"],
            "CLOTHING AND ACCESSORIES":["Shirt","Skirt","Dress","Shorts","Tie","T-shirt","Pants","Jacket","Sweater","Coat","Socks","Shoes","Boots","Hat","Gloves","Scarf","Belt","Glasses","Watch","Ring"],
            "HUMAN BODY":["Head","Hair","Face","Eye","Ear","Nose","Mouth","Tooth","Neck","Arm","Hand","Finger","Leg","Foot","Toe","Back","Stomach","Chest","Shoulder","Knee"],
            "THE SCHOOL":["Classroom","Pen","Pencil","Eraser","Chair","Desk","Book","Notebook","Backpack","Ruler","Scissors","Glue","Crayon","Marker","Board","Computer","Laptop","Projector","Map","Globe"],
            "THE HOUSE AND FURNITURE":["Bathroom","Bedroom","Kitchen","Garden","Window","Door","Living room","Dining room","Garage","Roof","Wall","Floor","Bed","Table","Sofa","Lamp","Clock","Mirror","Carpet","Curtain"],
            "MONTHS AND DAYS":["January","February","March","April","May","June","July","August","September","October","November","December","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
            "COLORS":["Red","Pink","Orange","Yellow","Green","Blue","Purple","Brown","Black","White","Gray"],
            "FAMILY MEMBERS":["Mother","Father","Sister","Brother","Daughter","Son","Grandmother","Grandfather","Aunt","Uncle","Cousin"],
            "ACTION VERBS":["Unscramble","Write","Paste","Cut out","Find","Draw","Add","Answer","Ask","Read"]
        },
        "6-7":{
            "ANIMALS":["Butterfly","Grasshopper","Armadillo","Kangaroo","Leopard","Dolphin","Jellyfish","Octopus","Ostrich","Peacock","Rhinoceros","Squirrel","Starfish","Turtle","Vulture"],
            "OCCUPATIONS AND PROFESSIONS":["Magician","Engineer","Teacher","Physician","Architect","Accountant","Artist","Astronaut","Butcher","Carpenter","Dentist","Electrician","Lawyer","Mechanic","Musician"],
            "ADJECTIVES":["Annoying","Short","Large","Awesome","Awkward","Bored","Boring","Busy","Calm","Charming","Cheerful","Clumsy","Crazy","Creative","Crowded"],
            "SPORTS AND EQUIPMENT":["Skating","Golf","Tennis","Squash","Karate","Archery","Baseball","Basketball","Bowling","Boxing","Cycling","Football","Hockey","Running","Swimming"],
            "GEOGRAPHICAL FEATURES":["Archipelago","Canyon","Cave","Cliff","Coast","Desert","Dune","Forest","Glacier","Island","Jungle","Lake","Mountain","Ocean","Peninsula"],
            "PLACES IN A CITY":["Amusement park","Art gallery","Bridge","Building","Castle","Cathedral","Cemetery","Circus","Clinic","College","Courthouse","Factory","Fountain","Highway","Jail"],
            "FEELINGS AND EMOTIONS":["Amazed","Amused","Ashamed","Astonished","Bewildered","Blissful","Confident","Confused","Content","Curious","Delighted","Depressed","Disappointed","Ecstatic","Embarrassed"],
            "TECHNOLOGY AND COMMUNICATION":["Algorithm","Application","Browser","Cable","Camera","Cell phone","Channel","Charger","Chat","Code","Computer","Connection","Cookie","Cyberbullying","Database"]
        },
        "8-9":{
            "ANIMALS":["Butterfly","Ladybug","Grasshopper","Hamster","Buffalo","Cheetah","Chimpanzee","Cockroach","Crocodile","Dragonfly","Flamingo","Gorilla","Hedgehog","Hummingbird","Koala"],
            "IRREGULAR VERBS":["Beat","Become","Begin","Bite","Bleed","Blow","Break","Bring","Build","Buy","Catch","Choose","Come","Cost","Creep"],
            "COMMONLY USED WORDS":["ability","advantage","afterwards","against","already","although","among","amount","ancient","another","anybody","anything","anyway","anywhere","apart"],
            "SCIENCE AND NATURE":["Atmosphere","Atom","Avalanche","Bacteria","Blizzard","Botany","Carbon","Carnivore","Cell","Chemical","Climate","Comet","Compass","Condensation","Constellation"],
            "ACADEMIC VOCABULARY":["Achievement","Analysis","Approach","Assessment","Assumption","Authority","Benefit","Category","Chapter","Comment","Community","Conclusion","Conduct","Conflict","Consent"]
        },
        "10-11":{
            "NOUNS":["Accountant","Architecture","Arrangement","Barbecue","Behavior","Childhood","Championship","Childishness","Citizenship","Cleverness","Collection","Comfort","Commitment","Communication","Comparison","Competition","Complaint","Complexity","Concentration","Conclusion"],
            "VERBS":["Apologize","Acknowledge","Breathe","Download","Encourage","Entertain","Exaggerate","Fascinate","Forecast","Guarantee","Hesitate","Highlight","Illustrate","Imagine","Implement"],
            "ADJECTIVES":["Abroad","Anxious","Careless","Comfortable","Concerned","Conscious","Consistent","Convenient","Courageous","Critical","Curious","Dangerous","Deliberate","Dependent","Determined"],
            "ADVERBS":["Definitely","Hopefully","Immediately","Obviously","Sincerely","Suddenly","Thankfully","Therefore","Unfortunately","Upstairs","Downstairs","Everywhere","Nowhere","Somewhere","Anywhere"]
        }
    };
    
    let currentLevel = null, currentStudentName = '', currentWord = '', currentCategory = '', score = 0, availableWords = [], leaderboard = [];

    const setupScreen = document.getElementById('setup-screen'), gameScreen = document.getElementById('game-screen'), leaderboardScreen = document.getElementById('leaderboard-screen'),
          studentNameInput = document.getElementById('student-name'), levelSelectionDiv = document.getElementById('level-selection'), levelButtons = document.querySelectorAll('.level-btn'),
          currentStudentSpan = document.getElementById('current-student'), scoreSpan = document.getElementById('score'), wordCategorySpan = document.getElementById('word-category'),
          wordToSpellSpan = document.getElementById('word-to-spell'), spellInput = document.getElementById('spell-input'), submitBtn = document.getElementById('submit-btn'),
          nextWordBtn = document.getElementById('next-word-btn'), feedbackDiv = document.getElementById('feedback'), speakBtn = document.getElementById('speak-btn'),
          endGameBtn = document.getElementById('end-game-btn'), returnToStartBtnGame = document.getElementById('return-to-start-btn-game'),
          returnToStartBtnLeaderboard = document.getElementById('return-to-start-btn-leaderboard'), leaderboardBody = document.getElementById('leaderboard-body'),
          finalScoreMessage = document.getElementById('final-score-message'), filterButtons = document.querySelectorAll('.filter-btn');

    function returnToStart() {
        gameScreen.classList.add('hidden');
        leaderboardScreen.classList.add('hidden');
        setupScreen.classList.remove('hidden');
        studentNameInput.value = '';
        levelSelectionDiv.classList.add('hidden');
        score = 0;
        currentStudentName = '';
        currentLevel = null;
    }

    function startGame(level) {
        setupScreen.classList.add('hidden');
        gameScreen.classList.remove('hidden');
        currentStudentSpan.textContent = currentStudentName;
        score = 0;
        updateScore();
        loadWordsForLevel(level);
        displayNewWord();
    }

    function loadWordsForLevel(level) {
        availableWords = [];
        const categories = wordBank[level];
        for (const category in categories) {
            categories[category].forEach(word => availableWords.push({ word, category }));
        }
    }

    function displayNewWord() {
        if (availableWords.length === 0) {
            feedbackDiv.textContent = '¡Felicidades! Has completado todas las palabras del nivel.';
            feedbackDiv.className = 'feedback-message correct';
            nextWordBtn.classList.add('hidden');
            submitBtn.classList.add('hidden');
            spellInput.disabled = true;
            return;
        }
        const randomIndex = Math.floor(Math.random() * availableWords.length);
        const wordData = availableWords.splice(randomIndex, 1)[0];
        currentWord = wordData.word;
        currentCategory = wordData.category;
        wordCategorySpan.textContent = currentCategory;
        wordToSpellSpan.textContent = currentWord;
        spellInput.value = '';
        spellInput.focus();
        feedbackDiv.textContent = '';
        feedbackDiv.className = 'feedback-message';
        submitBtn.classList.remove('hidden');
        nextWordBtn.classList.add('hidden');
        spellInput.disabled = false;
        speakWord(currentWord);
    }
    
    function checkSpelling() {
        const userInput = spellInput.value.trim();
        if (userInput.length === 0) return;
        if (userInput.toLowerCase() === currentWord.toLowerCase()) {
            feedbackDiv.textContent = '¡Correcto!';
            feedbackDiv.className = 'feedback-message correct';
            score++;
            updateScore();
        } else {
            feedbackDiv.textContent = `Incorrecto. La palabra era: ${currentWord}`;
            feedbackDiv.className = 'feedback-message incorrect';
        }
        spellInput.disabled = true;
        submitBtn.classList.add('hidden');
        nextWordBtn.classList.remove('hidden');
    }
    
    function speakWord(word) {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(word);
            utterance.lang = 'en-US';
            window.speechSynthesis.speak(utterance);
        }
    }

    function updateScore() { scoreSpan.textContent = score; }
    
    function endParticipation() {
        leaderboard.push({ name: currentStudentName, level: currentLevel, score: score });
        saveLeaderboard();
        gameScreen.classList.add('hidden');
        leaderboardScreen.classList.remove('hidden');
        finalScoreMessage.textContent = `¡Gran trabajo, ${currentStudentName}! Tu puntuación final fue: ${score}`;
        filterButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
        renderLeaderboard();
    }

    function renderLeaderboard(filter = 'all') {
        leaderboardBody.innerHTML = '';
        let filteredData = (filter === 'all') ? leaderboard : leaderboard.filter(p => p.level === filter);
        filteredData.sort((a, b) => b.score - a.score);
        if (filteredData.length === 0) {
            leaderboardBody.innerHTML = `<tr><td colspan="4">No hay resultados para este filtro.</td></tr>`;
        } else {
            filteredData.forEach((player, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${index + 1}</td><td>${player.name}</td><td>${player.level}</td><td>${player.score}</td>`;
                leaderboardBody.appendChild(row);
            });
        }
    }

    function saveLeaderboard() { localStorage.setItem('spellingBeeLeaderboard', JSON.stringify(leaderboard)); }
    function loadLeaderboard() { leaderboard = JSON.parse(localStorage.getItem('spellingBeeLeaderboard')) || []; }

    studentNameInput.addEventListener('input', () => { levelSelectionDiv.classList.toggle('hidden', studentNameInput.value.trim() === ''); });
    levelButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentStudentName = studentNameInput.value.trim();
            if (currentStudentName) {
                currentLevel = button.dataset.level;
                startGame(currentLevel);
            }
        });
    });
    submitBtn.addEventListener('click', checkSpelling);
    spellInput.addEventListener('keyup', (e) => { if (e.key === 'Enter' && !submitBtn.classList.contains('hidden')) checkSpelling(); });
    nextWordBtn.addEventListener('click', displayNewWord);
    speakBtn.addEventListener('click', () => speakWord(currentWord));
    endGameBtn.addEventListener('click', endParticipation);
    returnToStartBtnGame.addEventListener('click', () => { if(confirm("¿Estás seguro? Tu progreso no se guardará.")) returnToStart(); });
    returnToStartBtnLeaderboard.addEventListener('click', returnToStart);
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderLeaderboard(button.dataset.filter);
        });
    });

    loadLeaderboard();
});