const questionsDB = [
    // ========================================================================
    // אנגלית מהבסיס (ABC) - מכתבים, מספרים, צבעים ומילים ראשונות
    // ========================================================================

    // --- שאלות אותיות (ABC) ---
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "איזו מילה באנגלית מתחילה באות <strong>A</strong>?",
        tts_text: "Which word starts with the letter A? Apple, Dog, Cat, or Sun?",
        options: [
            "Apple (תפוח)",
            "Dog (כלב)",
            "Cat (חתול)",
            "Sun (שמש)"
        ],
        correctAnswer: 0,
        hint: "זהו פרי עגול שבדרך כלל הוא בצבע אדום או ירוק.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            האות הראשונה באנגלית היא <strong>A</strong> (איי). <br>המילה <strong>Apple</strong> מתחילה באות זו. <br>שאר המילים מתחילות באותיות: D (Dog), C (Cat), S (Sun).
        </div>`,
        final_answer: "Apple"
    },
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "איזו אות באה מיד אחרי האות <strong>C</strong>?",
        tts_text: "What letter comes after C? B, D, F, or E?",
        options: [
            "B",
            "D",
            "F",
            "E"
        ],
        correctAnswer: 1,
        hint: "נשיר את שיר ה-ABC... איי, בי, סי... ומה הבא?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            סדר האותיות באנגלית הוא: A, B, C, <strong>D</strong>, E, F.<br>
            לכן, האות שבאה אחרי C היא האות D.
        </div>`,
        final_answer: "D"
    },
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "מהי האות הקטנה (Small letter) של האות <strong>G</strong> הגדולה?",
        tts_text: "What is the small letter for G? p, q, g, or j?",
        options: [
            "p",
            "q",
            "g",
            "j"
        ],
        correctAnswer: 2,
        hint: "האות הקטנה נראית קצת כמו עיגול עם זנב קטן שיורד למטה.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            באנגלית לכל אות יש צורה גדולה (Capital) וצורה קטנה.<br>
            האות הגדולה היא <strong>G</strong> והאות הקטנה שלה היא <strong>g</strong>.
        </div>`,
        final_answer: "g"
    },
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "איזו חיה באנגלית מתחילה באות <strong>B</strong>?",
        tts_text: "Which animal starts with the letter B? Monkey, Bear, Tiger, or Lion?",
        options: [
            "Monkey (קוף)",
            "Bear (דוב)",
            "Tiger (נמר)",
            "Lion (אריה)"
        ],
        correctAnswer: 1,
        hint: "החיה הזו גדולה, אוהבת דבש, ולפעמים ישנה כל החורף.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            המילה <strong>Bear</strong> (דוב) מתחילה באות B.<br>
            M = Monkey, T = Tiger, L = Lion.
        </div>`,
        final_answer: "Bear"
    },
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "מהי האות האחרונה באלפבית האנגלי?",
        tts_text: "What is the last letter in the English alphabet? X, Y, Z, or W?",
        options: [
            "X",
            "Y",
            "Z",
            "W"
        ],
        correctAnswer: 2,
        hint: "האות הזו נשמעת כמו זמזום של דבורה (זזזז).",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            האלפבית האנגלי מסתיים ברצף האותיות: X, Y, <strong>Z</strong>.<br>
            האות Z (זי או זד) היא האות ה-26 והאחרונה.
        </div>`,
        final_answer: "Z"
    },

    // --- שאלות מספרים ---
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "איך אומרים את המספר <strong>3</strong> באנגלית?",
        tts_text: "How do you say the number three in English? One, Two, Three, or Four?",
        options: [
            "One",
            "Two",
            "Three",
            "Four"
        ],
        correctAnswer: 2,
        hint: "הספירה מתחילה כך: One, Two, ...",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            ספירת המספרים הראשונים באנגלית: <br>
            1 = One<br>
            2 = Two<br>
            3 = <strong>Three</strong><br>
            4 = Four
        </div>`,
        final_answer: "Three"
    },
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "מהו המספר שבא אחרי <strong>Five</strong> (5)?",
        tts_text: "What number comes after Five? Six, Seven, Eight, or Nine?",
        options: [
            "Six",
            "Seven",
            "Eight",
            "Nine"
        ],
        correctAnswer: 0,
        hint: "זהו המספר 6 באנגלית.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            המספרים ממשיכים כך: <br>
            4 = Four<br>
            5 = Five<br>
            6 = <strong>Six</strong>
        </div>`,
        final_answer: "Six"
    },
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "איך אומרים את המספר <strong>10</strong> באנגלית?",
        tts_text: "How do you say the number ten in English? Nine, Ten, Eleven, or Twelve?",
        options: [
            "Nine",
            "Ten",
            "Eleven",
            "Twelve"
        ],
        correctAnswer: 1,
        hint: "זהו המספר שמסיים את העשירייה הראשונה.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            סוף העשירייה הראשונה באנגלית:<br>
            8 = Eight<br>
            9 = Nine<br>
            10 = <strong>Ten</strong>
        </div>`,
        final_answer: "Ten"
    },
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "כמה רגליים יש לכלב? (ענו באנגלית)",
        tts_text: "How many legs does a dog have? Two, Four, Six, or Eight?",
        options: [
            "Two (2)",
            "Four (4)",
            "Six (6)",
            "Eight (8)"
        ],
        correctAnswer: 1,
        hint: "לכלב יש ארבע רגליים. איך אומרים 4 באנגלית?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            לכלב יש ארבע רגליים. המספר 4 באנגלית הוא <strong>Four</strong>.
        </div>`,
        final_answer: "Four"
    },
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "איך אומרים את המספר <strong>7</strong> באנגלית?",
        tts_text: "How do you say the number seven in English? Six, Seven, Eight, or Nine?",
        options: [
            "Six",
            "Seven",
            "Eight",
            "Nine"
        ],
        correctAnswer: 1,
        hint: "המספר שבא אחרי Six (6).",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            המספר 7 באנגלית הוא <strong>Seven</strong>.
        </div>`,
        final_answer: "Seven"
    },

    // --- שאלות צבעים ---
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "מהו הצבע של <strong>שמיים</strong> ביום יפה ושמשי?",
        tts_text: "What color is the sky? Red, Blue, Green, or Yellow?",
        options: [
            "Red (אדום)",
            "Blue (כחול)",
            "Green (ירוק)",
            "Yellow (צהוב)"
        ],
        correctAnswer: 1,
        hint: "הצבע הוא כחול. איך אומרים כחול באנגלית?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            השמיים הם בצבע כחול, ובאנגלית אומרים <strong>Blue</strong>.
        </div>`,
        final_answer: "Blue (כחול)"
    },
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "איך אומרים את הצבע <strong>אדום</strong> באנגלית?",
        tts_text: "How do you say red in English? Yellow, Blue, Red, or Black?",
        options: [
            "Yellow",
            "Blue",
            "Red",
            "Black"
        ],
        correctAnswer: 2,
        hint: "זהו הצבע של עגבנייה או תפוח.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            הצבע אדום באנגלית הוא <strong>Red</strong>.
        </div>`,
        final_answer: "Red"
    },
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "איזה צבע נוצר כשמערבבים אדום (Red) ולבן (White)?",
        tts_text: "What color do you get when you mix red and white? Pink, Black, Orange, or Purple?",
        options: [
            "Pink (ורוד)",
            "Black (שחור)",
            "Orange (כתום)",
            "Purple (סגול)"
        ],
        correctAnswer: 0,
        hint: "הצבע הוא ורוד.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            ערבוב של אדום ולבן נותן ורוד. באנגלית ורוד זה <strong>Pink</strong>.
        </div>`,
        final_answer: "Pink (ורוד)"
    },
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "מהו הצבע של עלי העצים והדשא?",
        tts_text: "What color is the grass? Green, Red, White, or Blue?",
        options: [
            "Green (ירוק)",
            "Red (אדום)",
            "White (לבן)",
            "Blue (כחול)"
        ],
        correctAnswer: 0,
        hint: "צבע הטבע הוא ירוק. המילה מתחילה באות G.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            העלים והדשא הם בצבע ירוק. ירוק באנגלית אומרים <strong>Green</strong>.
        </div>`,
        final_answer: "Green (ירוק)"
    },
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "השמש קורנת בשמיים. מהו הצבע שלה?",
        tts_text: "What color is the sun? Yellow, Black, Purple, or Green?",
        options: [
            "Yellow (צהוב)",
            "Black (שחור)",
            "Purple (סגול)",
            "Green (ירוק)"
        ],
        correctAnswer: 0,
        hint: "השמש היא צהובה. הצבע מתחיל באות Y.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            השמש מצוירת בדרך כלל בצבע צהוב. צהוב באנגלית זה <strong>Yellow</strong>.
        </div>`,
        final_answer: "Yellow (צהוב)"
    },

    // --- מילים בסיסיות (משפחה, חיות) ---
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "איך קוראים ל<strong>אמא</strong> באנגלית?",
        tts_text: "How do you say mother in English? Mother, Father, Brother, or Sister?",
        options: [
            "Mother",
            "Father",
            "Brother",
            "Sister"
        ],
        correctAnswer: 0,
        hint: "המילה מתחילה באות M (כמו אמא במילה 'מאמי').",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            אמא = Mother<br>
            אבא = Father<br>
            אח = Brother<br>
            אחות = Sister
        </div>`,
        final_answer: "Mother"
    },
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "איזו חיה אומרת <strong>Meow</strong> (מיאו)?",
        tts_text: "Which animal says meow? Dog, Cat, Bird, or Fish?",
        options: [
            "Dog (כלב)",
            "Cat (חתול)",
            "Bird (ציפור)",
            "Fish (דג)"
        ],
        correctAnswer: 1,
        hint: "זוהי חיית מחמד קטנה שאוהבת לשתות חלב.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            החיה שמייללת (אומרת מיאו) היא חתול, ובאנגלית קוראים לה <strong>Cat</strong>.
        </div>`,
        final_answer: "Cat (חתול)"
    },
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "כשאתם פוגשים חבר בבוקר, מה המילה הראשונה שתגידו לו?",
        tts_text: "What do you say to a friend in the morning? Goodbye, Hello, Night, or Sleep?",
        options: [
            "Goodbye (להתראות)",
            "Hello (שלום)",
            "Night (לילה)",
            "Sleep (לישון)"
        ],
        correctAnswer: 1,
        hint: "כדי לברך אדם לשלום אנו אומרים הלו (היי).",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            כדי להגיד "שלום" באנגלית (כמו היי), משתמשים במילה <strong>Hello</strong>. כשהולכים, אומרים Goodbye.
        </div>`,
        final_answer: "Hello (שלום)"
    },
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "איך קוראים ל<strong>בית</strong> שאתם גרים בו באנגלית?",
        tts_text: "How do you say house in English? House, Car, Tree, or Book?",
        options: [
            "House",
            "Car",
            "Tree",
            "Book"
        ],
        correctAnswer: 0,
        hint: "המילה מתחילה באות H.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            בית באנגלית אומרים <strong>House</strong>.<br>
            Car = מכונית, Tree = עץ, Book = ספר.
        </div>`,
        final_answer: "House"
    },
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "איך אומרים <strong>כן</strong> באנגלית?",
        tts_text: "How do you say YES in English? Yes, No, Maybe, or Stop?",
        options: [
            "Yes",
            "No",
            "Maybe",
            "Stop"
        ],
        correctAnswer: 0,
        hint: "זו אחת המילים הראשונות שלומדים באנגלית, כשאנחנו מסכימים למשהו.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            המילה ל"כן" היא <strong>Yes</strong>.<br>
            המילה ל"לא" היא No.
        </div>`,
        final_answer: "Yes"
    },
	// --- שאלות חיות (Animals) ---
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "איך אומרים <strong>קוף</strong> באנגלית?",
        tts_text: "How do you say monkey in English? Lion, Monkey, Tiger, or Snake?",
        options: [
            "Lion (אריה)",
            "Monkey (קוף)",
            "Tiger (נמר)",
            "Snake (נחש)"
        ],
        correctAnswer: 1,
        hint: "המילה הזו מתחילה באות M, ויש חיה כזו שאוהבת לאכול בננות.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            קוף קופץ מעץ לעץ ואוהב בננות! באנגלית קוראים לו <strong>Monkey</strong>.
        </div>`,
        final_answer: "Monkey (קוף)"
    },
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "איזו חיה אומרת \"מווו\" ונותנת לנו חלב?",
        tts_text: "Which animal says moo and gives milk? Cow, Horse, Sheep, or Pig?",
        options: [
            "Cow (פרה)",
            "Horse (סוס)",
            "Sheep (כבשה)",
            "Pig (חזיר)"
        ],
        correctAnswer: 0,
        hint: "המילה באנגלית קצרה מאוד ומתחילה באות C.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            הפרה שאוכלת עשב ונותנת חלב נקראת באנגלית <strong>Cow</strong>.
        </div>`,
        final_answer: "Cow (פרה)"
    },
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "איך קוראים למלך החיות, ה<strong>אריה</strong>, באנגלית?",
        tts_text: "How do you say lion in English? Bear, Fox, Lion, or Wolf?",
        options: [
            "Bear (דוב)",
            "Fox (שועל)",
            "Lion (אריה)",
            "Wolf (זאב)"
        ],
        correctAnswer: 2,
        hint: "השם מתחיל באות L (ל).",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            מלך החיות ששואג חזק הוא האריה, ובאנגלית הוא <strong>Lion</strong>.
        </div>`,
        final_answer: "Lion (אריה)"
    },
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "אם ראיתם חיה עם צוואר ארוך-ארוך, זו בטח...",
        tts_text: "Which animal has a very long neck? Zebra, Giraffe, Elephant, or Hippo?",
        options: [
            "Zebra (זברה)",
            "Giraffe (ג'ירפה)",
            "Elephant (פיל)",
            "Hippo (היפופוטם)"
        ],
        correctAnswer: 1,
        hint: "המילה באנגלית נשמעת כמעט בדיוק כמו בעברית!",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            ג'ירפה נשארת ג'ירפה גם באנגלית! קוראים לה <strong>Giraffe</strong>.
        </div>`,
        final_answer: "Giraffe (ג'ירפה)"
    },
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "איזו חיה אוהבת לקפוץ ויש לה כיס קטן בבטן?",
        tts_text: "Which animal likes to jump and has a pocket? Kangaroo, Frog, Rabbit, or Spider?",
        options: [
            "Kangaroo (קנגורו)",
            "Frog (צפרדע)",
            "Rabbit (ארנב)",
            "Spider (עכביש)"
        ],
        correctAnswer: 0,
        hint: "גם המילה הזו מזכירה מאוד את המילה בעברית, ומתחילה באות K.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            קנגורו היא חיה מיוחדת שקופצת (Jump) ויש לה כיס לגור שלה. באנגלית אומרים <strong>Kangaroo</strong>.
        </div>`,
        final_answer: "Kangaroo (קנגורו)"
    },

    // --- שאלות צבעים (Colors) נוספות ---
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "איך אומרים את הצבע <strong>שחור</strong> באנגלית?",
        tts_text: "How do you say black in English? White, Black, Brown, or Gray?",
        options: [
            "White (לבן)",
            "Black (שחור)",
            "Brown (חום)",
            "Gray (אפור)"
        ],
        correctAnswer: 1,
        hint: "זהו הצבע של הלילה כשיש חושך. הוא מתחיל באות B.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            הצבע שחור באנגלית הוא <strong>Black</strong>.
        </div>`,
        final_answer: "Black (שחור)"
    },
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "איזה צבע יש ללימון כשהוא בשל וחמוץ?",
        tts_text: "What color is a lemon? Red, Yellow, Blue, or Pink?",
        options: [
            "Red (אדום)",
            "Yellow (צהוב)",
            "Blue (כחול)",
            "Pink (ורוד)"
        ],
        correctAnswer: 1,
        hint: "זה אותו צבע שיש לשמש! מתחיל באות Y.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            הלימון הוא בצבע צהוב, ובאנגלית קוראים לצבע הזה <strong>Yellow</strong>.
        </div>`,
        final_answer: "Yellow (צהוב)"
    },
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "מהו הצבע <strong>לבן</strong> באנגלית?",
        tts_text: "How do you say white in English? Black, White, Red, or Green?",
        options: [
            "Black",
            "White",
            "Red",
            "Green"
        ],
        correctAnswer: 1,
        hint: "זהו הצבע של חלב ושל שלג. מתחיל באות W.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            לבן באנגלית זה <strong>White</strong>. (ווייט).
        </div>`,
        final_answer: "White (לבן)"
    },

    // --- שאלות מספרים (Numbers) מתקדמות קצת ---
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "כמה אצבעות יש לנו בשתי הידיים ביחד? (ענו באנגלית)",
        tts_text: "How many fingers do we have on both hands? Eight, Nine, Ten, or Eleven?",
        options: [
            "Eight (8)",
            "Nine (9)",
            "Ten (10)",
            "Eleven (11)"
        ],
        correctAnswer: 2,
        hint: "בואו נספור... בכל יד יש 5. ביחד יש 10.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            בשתי הידיים יש לנו 10 אצבעות. המספר עשר באנגלית הוא <strong>Ten</strong>.
        </div>`,
        final_answer: "Ten (10)"
    },
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "איזה מספר בא אחרי Number One (1)?",
        tts_text: "What number comes after One? Three, Four, Two, or Five?",
        options: [
            "Three (3)",
            "Four (4)",
            "Two (2)",
            "Five (5)"
        ],
        correctAnswer: 2,
        hint: "1, 2, 3... מה זה 2 באנגלית?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            המספר הראשון הוא One. אחריו מיד בא המספר <strong>Two</strong> (שתיים).
        </div>`,
        final_answer: "Two (2)"
    },
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "כמה גלגלים יש למכונית רגילה?",
        tts_text: "How many wheels does a car have? Two, Four, Six, or Eight?",
        options: [
            "Two (2)",
            "Four (4)",
            "Six (6)",
            "Eight (8)"
        ],
        correctAnswer: 1,
        hint: "למכונית יש ארבעה גלגלים. איך אומרים 4?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            למכונית יש 4 גלגלים. באנגלית המספר 4 הוא <strong>Four</strong>.
        </div>`,
        final_answer: "Four (4)"
    },

    // --- שאלות חלקי גוף (Body Parts) ---
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "איך קוראים ל<strong>עיניים</strong> שלנו באנגלית?",
        tts_text: "How do you say eyes in English? Ears, Eyes, Nose, or Mouth?",
        options: [
            "Ears (אוזניים)",
            "Eyes (עיניים)",
            "Nose (אף)",
            "Mouth (פה)"
        ],
        correctAnswer: 1,
        hint: "אנחנו רואים איתן, והמילה מתחילה באות E.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            עיניים באנגלית זה <strong>Eyes</strong>.
        </div>`,
        final_answer: "Eyes (עיניים)"
    },
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "איך אומרים <strong>אף</strong> באנגלית?",
        tts_text: "How do you say nose in English? Hand, Leg, Nose, or Foot?",
        options: [
            "Hand (יד)",
            "Leg (רגל)",
            "Nose (אף)",
            "Foot (כף רגל)"
        ],
        correctAnswer: 2,
        hint: "אנחנו מריחים בעזרתו, והמילה מתחילה באות N.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            האף שלנו באנגלית נקרא <strong>Nose</strong>. (נוז).
        </div>`,
        final_answer: "Nose (אף)"
    },
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "איך קוראים לחלק בגוף שמקשיב לשירים? (<strong>אוזניים</strong>)",
        tts_text: "Which part of the body listens to music? Eyes, Nose, Mouth, or Ears?",
        options: [
            "Eyes (עיניים)",
            "Nose (אף)",
            "Mouth (פה)",
            "Ears (אוזניים)"
        ],
        correctAnswer: 3,
        hint: "המילה הזו קצת מזכירה את המילה 'עיניים', אבל היא מתארת אוזניים (Ears).",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            אוזניים באנגלית קוראים <strong>Ears</strong> (אירז).
        </div>`,
        final_answer: "Ears (אוזניים)"
    },
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "עם מה אנחנו נותנים כיף לחבר? עם ה<strong>יד</strong>!",
        tts_text: "How do you say hand in English? Hand, Head, Hair, or Leg?",
        options: [
            "Hand (יד)",
            "Head (ראש)",
            "Hair (שיער)",
            "Leg (רגל)"
        ],
        correctAnswer: 0,
        hint: "המילה מתחילה באות H.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            יד באנגלית היא <strong>Hand</strong> (כמו במשחק 'הנדס אפ' - ידיים למעלה).
        </div>`,
        final_answer: "Hand (יד)"
    },

    // --- הפכים ומושגים בסיסיים (Opposites & Basics) ---
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "מהו ההיפך מהמילה <strong>Big</strong> (גדול)?",
        tts_text: "What is the opposite of BIG? Small, Happy, Sad, or Fast?",
        options: [
            "Small (קטן)",
            "Happy (שמח)",
            "Sad (עצוב)",
            "Fast (מהיר)"
        ],
        correctAnswer: 0,
        hint: "פיל הוא גדול, אבל עכבר הוא...",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            משהו גדול אומרים Big, ומשהו קטן אומרים <strong>Small</strong>.
        </div>`,
        final_answer: "Small (קטן)"
    },
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "אם אני לא בוכה, אלא מחייך, סימן שאני...",
        tts_text: "If I am smiling, it means I am... Sad, Happy, Angry, or Tired?",
        options: [
            "Sad (עצוב)",
            "Happy (שמח)",
            "Angry (כועס)",
            "Tired (עייף)"
        ],
        correctAnswer: 1,
        hint: "תחשבו על המילה שאומרים בימי הולדת! (___ Birthday).",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            כשמחייכים וכיף לנו, אנחנו שמחים. באנגלית שמח אומרים <strong>Happy</strong> (כמו בשיר Happy Birthday - יום הולדת שמח).
        </div>`,
        final_answer: "Happy (שמח)"
    },
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "איך אומרים למישהו שאתם אוהבים אותו? (אני אוהב אותך)",
        tts_text: "How do you say I love you in English? I hate you, I love you, I see you, or I know you?",
        options: [
            "I hate you",
            "I love you",
            "I see you",
            "I know you"
        ],
        correctAnswer: 1,
        hint: "יש בזה את המילה Love.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            המשפט המפורסם והיפה ביותר! אני (I) אוהב (Love) אותך (You) = <strong>I love you</strong>.
        </div>`,
        final_answer: "I love you (אני אוהב אותך)"
    },
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "איך אומרים <strong>ילד</strong> (בן) באנגלית?",
        tts_text: "How do you say BOY in English? Girl, Boy, Man, or Woman?",
        options: [
            "Girl (ילדה)",
            "Boy (ילד)",
            "Man (איש)",
            "Woman (אישה)"
        ],
        correctAnswer: 1,
        hint: "מתחיל באות B.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            ילד או בן באנגלית נקרא <strong>Boy</strong>. ילדה נקראת Girl.
        </div>`,
        final_answer: "Boy (ילד / בן)"
    },
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "כשחם בחוץ, רוצים לאכול משהו קר וטעים שנקרא...",
        tts_text: "When it is hot outside, we want to eat... Ice cream, Soup, Pizza, or Bread?",
        options: [
            "Ice cream (גלידה)",
            "Soup (מרק)",
            "Pizza (פיצה)",
            "Bread (לחם)"
        ],
        correctAnswer: 0,
        hint: "המילה הראשונה בתוכו היא Ice (קרח).",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            הקינוח המושלם לקיץ באנגלית הוא <strong>Ice cream</strong> (גלידה).
        </div>`,
        final_answer: "Ice cream (גלידה)"
    },

    // --- שאלות פעלים פשוטים (Action Verbs) ---
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "איזו פעולה אנחנו עושים עם הרגליים כדי להגיע ממקום למקום מהר?",
        tts_text: "What do we do with our legs to move fast? Run, Sleep, Sit, or Read?",
        options: [
            "Run (לרוץ)",
            "Sleep (לישון)",
            "Sit (לשבת)",
            "Read (לקרוא)"
        ],
        correctAnswer: 0,
        hint: "כשמשחקים תופסת צריך לעשות את זה! המילה מתחילה באות R.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            לרוץ באנגלית זה <strong>Run</strong>.
        </div>`,
        final_answer: "Run (לרוץ)"
    },
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "בלילה, כשאנחנו עייפים, אנחנו הולכים למיטה כדי...",
        tts_text: "At night, we go to bed to... Sleep, Jump, Play, or Eat?",
        options: [
            "Sleep (לישון)",
            "Jump (לקפוץ)",
            "Play (לשחק)",
            "Eat (לאכול)"
        ],
        correctAnswer: 0,
        hint: "המילה הזו עושה צליל רך, מתחילה באות S.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            בלילה הולכים לישון. לישון באנגלית אומרים <strong>Sleep</strong>.
        </div>`,
        final_answer: "Sleep (לישון)"
    },
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "כשאנחנו רעבים, מה אנחנו צריכים לעשות?",
        tts_text: "When we are hungry, what do we do? Eat, Drink, Run, or Sing?",
        options: [
            "Eat (לאכול)",
            "Drink (לשתות)",
            "Run (לרוץ)",
            "Sing (לשיר)"
        ],
        correctAnswer: 0,
        hint: "זה קשור לאוכל.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            כשרעבים צריך לאכול אוכל טעים! לאכול באנגלית זה <strong>Eat</strong>.
        </div>`,
        final_answer: "Eat (לאכול)"
    },
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "אם אתם צמאים, אתם צריכים לקחת כוס מים ו...",
        tts_text: "When you are thirsty, you take water and... Drink, Eat, Fly, or Sleep?",
        options: [
            "Drink (לשתות)",
            "Eat (לאכול)",
            "Fly (לעוף)",
            "Sleep (לישון)"
        ],
        correctAnswer: 0,
        hint: "מתחיל באות D.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            מים, מיץ ושוקו אנחנו צריכים לשתות. לשתות באנגלית זה <strong>Drink</strong>.
        </div>`,
        final_answer: "Drink (לשתות)"
    },
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "איך אומרים באנגלית 'לשחק'? (למשל לשחק בכדור)",
        tts_text: "How do you say PLAY in English? Play, Work, Cry, or Stop?",
        options: [
            "Play (לשחק)",
            "Work (לעבוד)",
            "Cry (לבכות)",
            "Stop (לעצור)"
        ],
        correctAnswer: 0,
        hint: "כשפותחים משחק במחשב, יש כפתור שעליו כתוב את המילה הזו.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            לשחק במשחקים, בצעצועים או אפילו לנגן - באנגלית אומרים <strong>Play</strong>.
        </div>`,
        final_answer: "Play (לשחק)"
    },

    // --- שאלות קלות לזיהוי אותיות בתוך מילים ---
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "איזו מהמילים הבאות מתחילה באות <strong>D</strong>?",
        tts_text: "Which word starts with the letter D? Cat, Dog, Bird, or Ant?",
        options: [
            "Cat (חתול)",
            "Dog (כלב)",
            "Bird (ציפור)",
            "Ant (נמלה)"
        ],
        correctAnswer: 1,
        hint: "החיה הטובה ביותר של האדם!",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            המילה כלב, <strong>D</strong>og, מתחילה באות D.
        </div>`,
        final_answer: "Dog (כלב)"
    },
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "איך קוראים ל<strong>שמש</strong> באנגלית?",
        tts_text: "How do you say sun in English? Sun, Moon, Star, or Cloud?",
        options: [
            "Sun (שמש)",
            "Moon (ירח)",
            "Star (כוכב)",
            "Cloud (ענן)"
        ],
        correctAnswer: 0,
        hint: "המילה מתחילה באות S ומאירה לנו ביום.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            שמש באנגלית היא <strong>Sun</strong> (סאן).
        </div>`,
        final_answer: "Sun (שמש)"
    },
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "איך קוראים למים שמגיעים מהשמיים בחורף?",
        tts_text: "What falls from the sky in winter? Rain, Fire, Sun, or Sand?",
        options: [
            "Rain (גשם)",
            "Fire (אש)",
            "Sun (שמש)",
            "Sand (חול)"
        ],
        correctAnswer: 0,
        hint: "זה עושה את האדמה רטובה. מתחיל באות R.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            המים שיורדים מהשמיים בחורף הם גשם, שנקרא באנגלית <strong>Rain</strong>.
        </div>`,
        final_answer: "Rain (גשם)"
    },
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "איך קוראים ל<strong>ספר</strong> שאנחנו קוראים?",
        tts_text: "How do you say book in English? Book, Pen, Bag, or Desk?",
        options: [
            "Book",
            "Pen",
            "Bag",
            "Desk"
        ],
        correctAnswer: 0,
        hint: "יש בו הרבה דפים וסיפורים.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            ספר באנגלית זה <strong>Book</strong>. כמו שקוראים לאתר 'פייסבוק' (ספר פרצופים).
        </div>`,
        final_answer: "Book (ספר)"
    },
    {
        subject: "אנגלית",
        topic: "אנגלית מהבסיס (ABC)",
        subTopic: "ABC, מספרים ומילים ראשונות",
        question: "איך אומרים <strong>שלום</strong> וגם <strong>להתראות</strong> (היי וביי) בבת אחת?",
        tts_text: "What do you say to say goodbye? Bye / Goodbye, Yes, No, or Please?",
        options: [
            "Bye / Goodbye",
            "Yes",
            "No",
            "Please"
        ],
        correctAnswer: 0,
        hint: "הלו אומרים כשבאים... אז מה אומרים כשהולכים?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>הסבר:</strong><br>
            כשאנחנו נפרדים מחברים אנחנו אומרים להם <strong>Goodbye</strong> (או פשוט ביי).
        </div>`,
        final_answer: "Goodbye (להתראות)"
    }
];