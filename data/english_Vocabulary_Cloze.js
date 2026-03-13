const questionsDB = [
    // ========================================================================
    // תת נושא 1: Band 1 - Core Vocabulary (אוצר מילים יסודי וחטיבה)
    // 15 שאלות
    // ========================================================================

    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 1 - Core Vocabulary (אוצר מילים יסודי וחטיבה)",
        question: "Please _____ carefully before you make a final decision.",
        options: [
            "think",
            "run",
            "sleep",
            "jump"
        ],
        correctAnswer: 0,
        hint: "המילה החסרה מתארת פעולה של המוח שעושים לפני שמחליטים משהו חשוב.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "אנא _____ בזהירות (או היטב) לפני שאתה מקבל החלטה סופית."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>think</strong> - לחשוב. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>run</strong> - לרוץ. לא הגיוני בהקשר של קבלת החלטה.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>sleep</strong> - לישון.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>jump</strong> - לקפוץ.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            הפועל היחיד שמתאים להקשר של קבלת החלטות (decision) הוא חשיבה.
        </div>`,
        final_answer: "think (לחשוב)"
    },
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 1 - Core Vocabulary (אוצר מילים יסודי וחטיבה)",
        question: "It is very _____ to drink a lot of water during the summer.",
        options: [
            "important",
            "angry",
            "slow",
            "empty"
        ],
        correctAnswer: 0,
        hint: "שתיית מים בקיץ היא דבר חיוני. איזו מילה מתארת משהו בעל ערך ומשמעות?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "זה מאוד _____ לשתות הרבה מים במהלך הקיץ."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>important</strong> - חשוב. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>angry</strong> - כועס.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>slow</strong> - איטי.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>empty</strong> - ריק.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            תואר זה (Adjective) משמש כדי להדגיש את החיוניות של פעולה מסוימת (שתיית מים).
        </div>`,
        final_answer: "important (חשוב)"
    },
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 1 - Core Vocabulary (אוצר מילים יסודי וחטיבה)",
        question: "I always _____ my keys on the table near the door.",
        options: [
            "leave",
            "eat",
            "listen",
            "fly"
        ],
        correctAnswer: 0,
        hint: "מה עושים עם מפתחות על השולחן כשנכנסים הביתה?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "אני תמיד _____ את המפתחות שלי על השולחן ליד הדלת."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>leave</strong> - להשאיר / לעזוב. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>eat</strong> - לאכול.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>listen</strong> - להקשיב.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>fly</strong> - לעוף / לטוס.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            הפועל "leave" בהקשר של חפצים משמעותו להניח או להשאיר אותם במקום מסוים.
        </div>`,
        final_answer: "leave (להשאיר)"
    },
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 1 - Core Vocabulary (אוצר מילים יסודי וחטיבה)",
        question: "The little boy asked his mother a difficult _____ about the stars.",
        options: [
            "question",
            "window",
            "bottle",
            "street"
        ],
        correctAnswer: 0,
        hint: "מה ילד יכול לשאול (asked) את אמא שלו?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "הילד הקטן שאל את אמו _____ קשה לגבי הכוכבים."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>question</strong> - שאלה. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>window</strong> - חלון.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>bottle</strong> - בקבוק.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>street</strong> - רחוב.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            המילה שמשלימה פועל כמו 'לשאול' (ask) היא בהכרח 'שאלה'. צירוף המילים "ask a question" הוא צירוף כבול בסיסי.
        </div>`,
        final_answer: "question (שאלה)"
    },
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 1 - Core Vocabulary (אוצר מילים יסודי וחטיבה)",
        question: "It is very hot in this room. Can you open the _____ please?",
        options: [
            "window",
            "table",
            "shoe",
            "dog"
        ],
        correctAnswer: 0,
        hint: "כאשר חם בחדר, מה נבקש לפתוח כדי שייכנס אוויר?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "מאוד חם בחדר הזה. האם אתה יכול לפתוח את ה_____ בבקשה?"<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>window</strong> - חלון. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>table</strong> - שולחן.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>shoe</strong> - נעל.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>dog</strong> - כלב.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            מילת העצם ההגיונית היחידה שניתן לפתוח כדי לקרר חדר היא חלון.
        </div>`,
        final_answer: "window (חלון)"
    },
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 1 - Core Vocabulary (אוצר מילים יסודי וחטיבה)",
        question: "You must _____ to the teacher carefully when she explains the rules.",
        options: [
            "listen",
            "fly",
            "eat",
            "sleep"
        ],
        correctAnswer: 0,
        hint: "איזו פעולה אנחנו עושים כדי לשמוע ולהבין את מה שהמורה אומרת?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "אתה חייב _____ למורה בתשומת לב כאשר היא מסבירה את הכללים."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>listen</strong> - להקשיב. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>fly</strong> - לעוף.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>eat</strong> - לאכול.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>sleep</strong> - לישון.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            הפועל "listen" (להקשיב) מצטרף למילת היחס "to" ומתאים להקשר של למידה בכיתה.
        </div>`,
        final_answer: "listen (להקשיב)"
    },
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 1 - Core Vocabulary (אוצר מילים יסודי וחטיבה)",
        question: "The flowers in the garden look very _____ in the spring.",
        options: [
            "beautiful",
            "angry",
            "loud",
            "slow"
        ],
        correctAnswer: 0,
        hint: "איזה שם תואר מתאים לתיאור של פרחים שפורחים בגינה?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "הפרחים בגינה נראים מאוד _____ באביב."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>beautiful</strong> - יפים. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>angry</strong> - כועסים.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>loud</strong> - רועשים.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>slow</strong> - איטיים.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            "Beautiful" מתאר מראה ויזואלי נעים, שמתאים באופן מושלם לתיאור צמחים ופרחים.
        </div>`,
        final_answer: "beautiful (יפים)"
    },
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 1 - Core Vocabulary (אוצר מילים יסודי וחטיבה)",
        question: "I always wake up _____ in the morning to exercise before work.",
        options: [
            "early",
            "dark",
            "sad",
            "round"
        ],
        correctAnswer: 0,
        hint: "אם רוצים להספיק להתאמן לפני שהולכים לעבודה, מתי צריך לקום?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "אני תמיד מתעורר _____ בבוקר כדי להתאמן לפני העבודה."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>early</strong> - מוקדם. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>dark</strong> - חשוך.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>sad</strong> - עצוב.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>round</strong> - עגול.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            המילה early (מוקדם) מתארת זמן, ומתאימה בצורה מושלמת לפעולת ההשכמה בבוקר.
        </div>`,
        final_answer: "early (מוקדם)"
    },
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 1 - Core Vocabulary (אוצר מילים יסודי וחטיבה)",
        question: "We usually eat _____ at 7:30 AM before we leave for school.",
        options: [
            "breakfast",
            "dinner",
            "money",
            "pencil"
        ],
        correctAnswer: 0,
        hint: "איך קוראים לארוחה שאוכלים בבוקר (7:30 AM)?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "אנחנו בדרך כלל אוכלים _____ בשעה 7:30 בבוקר לפני שאנחנו יוצאים לבית הספר."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>breakfast</strong> - ארוחת בוקר. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>dinner</strong> - ארוחת ערב.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>money</strong> - כסף.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>pencil</strong> - עיפרון.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            "Breakfast" היא הארוחה (eat) שאוכלים בשעות הבוקר.
        </div>`,
        final_answer: "breakfast (ארוחת בוקר)"
    },
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 1 - Core Vocabulary (אוצר מילים יסודי וחטיבה)",
        question: "He ran very _____ so he wouldn't miss the bus.",
        options: [
            "quickly",
            "softly",
            "heavily",
            "yellow"
        ],
        correctAnswer: 0,
        hint: "איך אדם ירוץ כדי להספיק לאוטובוס לפני שהוא נוסע?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "הוא רץ מאוד _____ כדי שלא יפספס את האוטובוס."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>quickly</strong> - במהירות / מהר. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>softly</strong> - ברכות.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>heavily</strong> - בכבדות.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>yellow</strong> - צהוב.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            תואר-הפועל "quickly" מתאר את הפועל (ran) בצורה ההגיונית היחידה למישהו שממהר.
        </div>`,
        final_answer: "quickly (במהירות)"
    },
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 1 - Core Vocabulary (אוצר מילים יסודי וחטיבה)",
        question: "If you don't understand the text, look up the _____ in a dictionary.",
        options: [
            "word",
            "car",
            "house",
            "sky"
        ],
        correctAnswer: 0,
        hint: "מה יש בתוך מילון שעוזר לנו להבין טקסטים?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "אם אינך מבין את הטקסט, חפש את ה_____ במילון."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>word</strong> - מילה. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>car</strong> - מכונית.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>house</strong> - בית.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>sky</strong> - שמיים.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            טקסטים מורכבים ממילים, ומילון (dictionary) נועד לפירוש מילים אלו.
        </div>`,
        final_answer: "word (מילה)"
    },
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 1 - Core Vocabulary (אוצר מילים יסודי וחטיבה)",
        question: "My brother and I always play video games _____.",
        options: [
            "together",
            "never",
            "outside",
            "yesterday"
        ],
        correctAnswer: 0,
        hint: "כאשר שני אנשים עושים פעולה בשיתוף פעולה באותו הזמן, הם עושים את זה...",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "אחי ואני תמיד משחקים במשחקי וידאו _____."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>together</strong> - ביחד / יחד. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>never</strong> - לעולם לא. (סותר את המילה always בתחילת המשפט).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>outside</strong> - בחוץ. (משחקי וידאו לרוב משחקים בפנים).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>yesterday</strong> - אתמול.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            המילה together מציינת עשייה משותפת של שני אנשים או יותר.
        </div>`,
        final_answer: "together (ביחד)"
    },
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 1 - Core Vocabulary (אוצר מילים יסודי וחטיבה)",
        question: "I know him from school, but I can't _____ his name right now.",
        options: [
            "remember",
            "drive",
            "cook",
            "draw"
        ],
        correctAnswer: 0,
        hint: "מה קורה כשאנחנו מנסים לדלות מידע מהזיכרון שלנו אבל לא מצליחים?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "אני מכיר אותו מבית הספר, אבל אני לא מצליח _____ את השם שלו כרגע."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>remember</strong> - לזכור. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>drive</strong> - לנהוג.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>cook</strong> - לבשל.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>draw</strong> - לצייר.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            ההקשר של הכרת פנים אך שכחת השם מחייב פועל שקשור לזיכרון.
        </div>`,
        final_answer: "remember (לזכור)"
    },
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 1 - Core Vocabulary (אוצר מילים יסודי וחטיבה)",
        question: "English is a very important _____ to learn for your future.",
        options: [
            "language",
            "color",
            "animal",
            "street"
        ],
        correctAnswer: 0,
        hint: "אנגלית, צרפתית וספרדית הן כולן סוגים של...",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "אנגלית היא _____ חשובה מאוד ללמוד עבור העתיד שלך."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>language</strong> - שפה. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>color</strong> - צבע.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>animal</strong> - חיה.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>street</strong> - רחוב.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            המילה language מתארת את אמצעי התקשורת (אנגלית) שהמשפט מדבר עליו.
        </div>`,
        final_answer: "language (שפה)"
    },
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 1 - Core Vocabulary (אוצר מילים יסודי וחטיבה)",
        question: "I _____ go to the gym on Mondays, but today I am sick.",
        options: [
            "usually",
            "never",
            "outside",
            "suddenly"
        ],
        correctAnswer: 0,
        hint: "המילה החסרה מתארת משהו שקורה בדרך כלל (בשגרה), והיום יש חריגה מהשגרה.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "אני _____ הולך לחדר הכושר בימי שני, אבל היום אני חולה."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>usually</strong> - בדרך כלל. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>never</strong> - לעולם לא. (לא הגיוני כי המשפט ממשיך עם ציון של חריגה).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>outside</strong> - בחוץ.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>suddenly</strong> - לפתע.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            המילה "but" (אבל) מראה ניגוד לשגרה הרגילה שאותה מתארת המילה "usually".
        </div>`,
        final_answer: "usually (בדרך כלל)"
    },

    // ========================================================================
    // תת נושא 2: Band 2 - Foundation Vocabulary (חטיבת ביניים מתקדם)
    // 15 שאלות
    // ========================================================================

    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 2 - Foundation Vocabulary (חטיבת ביניים מתקדם)",
        question: "In order to _____ your goals, you must work hard and never give up.",
        options: [
            "achieve",
            "destroy",
            "ignore",
            "forget"
        ],
        correctAnswer: 0,
        hint: "מילה זו מתארת הצלחה בהגעה למטרה או יעד מסוים בעקבות מאמץ.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "על מנת _____ את המטרות שלך, עליך לעבוד קשה ולעולם לא לוותר."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>achieve</strong> - להשיג (מטרה/הצלחה). <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>destroy</strong> - להרוס.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>ignore</strong> - להתעלם.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>forget</strong> - לשכוח.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            הצירוף "achieve your goals" (להשיג את המטרות שלך) הוא צירוף כבול נפוץ מאוד בשפה האנגלית (Band 2).
        </div>`,
        final_answer: "achieve (להשיג)"
    },
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 2 - Foundation Vocabulary (חטיבת ביניים מתקדם)",
        question: "One major _____ of eating vegetables is that it improves your health.",
        options: [
            "benefit",
            "danger",
            "mistake",
            "excuse"
        ],
        correctAnswer: 0,
        hint: "אכילת ירקות משפרת את הבריאות, שזה דבר חיובי. איזו מילה מתארת יתרון או תועלת?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "_____ מרכזי אחד של אכילת ירקות הוא שזה משפר את בריאותך."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>benefit</strong> - יתרון / תועלת. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>danger</strong> - סכנה.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>mistake</strong> - טעות.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>excuse</strong> - תירוץ.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            כאשר המשפט מתאר תוצאה חיובית (שיפור הבריאות), המילה שמתארת את הפעולה חייבת להיות מילה חיובית כמו 'יתרון'.
        </div>`,
        final_answer: "benefit (יתרון / תועלת)"
    },
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 2 - Foundation Vocabulary (חטיבת ביניים מתקדם)",
        question: "Scientists hope to _____ a cure for the rare disease very soon.",
        options: [
            "discover",
            "hide",
            "destroy",
            "forget"
        ],
        correctAnswer: 0,
        hint: "מה מדענים מנסים לעשות כשהם מחפשים תרופה למחלה חדשה?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "מדענים מקווים ל_____ תרופה למחלה הנדירה בקרוב מאוד."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>discover</strong> - לגלות. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>hide</strong> - להחביא.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>destroy</strong> - להרוס.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>forget</strong> - לשכוח.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            הפועל "discover" משמש למציאת מידע חדש או פריצת דרך, ומתאים מאוד בהקשר של מחקר מדעי רפואי (a cure - מרפא).
        </div>`,
        final_answer: "discover (לגלות)"
    },
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 2 - Foundation Vocabulary (חטיבת ביניים מתקדם)",
        question: "Water and sunlight are _____ for the growth of plants.",
        options: [
            "essential",
            "dangerous",
            "rare",
            "useless"
        ],
        correctAnswer: 0,
        hint: "צמחים לא יכולים לחיות בלי מים ושמש. מילה זו מתארת משהו הכרחי לחלוטין.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "מים ואור שמש הם _____ לגדילה של צמחים."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>essential</strong> - חיוני / הכרחי. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>dangerous</strong> - מסוכן.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>rare</strong> - נדיר.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>useless</strong> - חסר תועלת.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            בביולוגיה, מים ואור הם צרכים קיומיים, לכן תואר המבטא 'הכרחי' (essential) הוא המתאים היחיד.
        </div>`,
        final_answer: "essential (חיוני / הכרחי)"
    },
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 2 - Foundation Vocabulary (חטיבת ביניים מתקדם)",
        question: "He didn't study for the test. As a _____, he failed the class.",
        options: [
            "consequence",
            "solution",
            "reward",
            "tradition"
        ],
        correctAnswer: 0,
        hint: "המילה החסרה מתארת את ההשפעה או התוצאה של פעולה (או במקרה זה, אי-למידה).",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "הוא לא למד למבחן. כ_____, הוא נכשל בקורס."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>consequence</strong> - תוצאה / השלכה. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>solution</strong> - פתרון.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>reward</strong> - פרס / תגמול.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>tradition</strong> - מסורת.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            הביטוי "As a consequence" (כתוצאה מכך) הוא חיבור קלאסי באנגלית המציין קשר של סיבה ותוצאה שלילית לרוב.
        </div>`,
        final_answer: "consequence (תוצאה / השלכה)"
    },
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 2 - Foundation Vocabulary (חטיבת ביניים מתקדם)",
        question: "Her face looks very _____, but I can't remember her name.",
        options: [
            "familiar",
            "expensive",
            "empty",
            "violent"
        ],
        correctAnswer: 0,
        hint: "כשאתם מזהים מישהו אבל לא זוכרים מאיפה, הפנים שלו נראות לכם...?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "הפנים שלה נראות מאוד _____, אבל אני לא מצליח לזכור את שמה."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>familiar</strong> - מוכר. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>expensive</strong> - יקר.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>empty</strong> - ריק.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>violent</strong> - אלים.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            המילה familiar מגיעה מאותו שורש של family (משפחה) ומשמעותה משהו שידוע ומוכר לנו מהעבר.
        </div>`,
        final_answer: "familiar (מוכר)"
    },
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 2 - Foundation Vocabulary (חטיבת ביניים מתקדם)",
        question: "I wanted to go to the beach. _____, it started raining heavily.",
        options: [
            "However",
            "Therefore",
            "Because",
            "Finally"
        ],
        correctAnswer: 0,
        hint: "המילה החסרה מבטאת ניגוד (קונטרסט) בין הרצון ללכת לים לבין הגשם שהתחיל.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "רציתי ללכת לים. _____, התחיל לרדת גשם כבד."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>However</strong> - אולם / למרות זאת. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>Therefore</strong> - לכן (מעיד על תוצאה טבעית).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>Because</strong> - בגלל.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>Finally</strong> - לבסוף.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            מילת קישור (Connector) המבטאת ניגוד הכרחית כאן משום שגשם סותר את הרעיון והאפשרות של ללכת לים.
        </div>`,
        final_answer: "However (אולם / למרות זאת)"
    },
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 2 - Foundation Vocabulary (חטיבת ביניים מתקדם)",
        question: "You should not _____ your parents' advice when they try to help you.",
        options: [
            "ignore",
            "protect",
            "invite",
            "admire"
        ],
        correctAnswer: 0,
        hint: "מה הדבר השלילי שאסור לעשות כשמישהו מבוגר ומנוסה נותן לך עצה (advice)?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "אסור לך _____ את העצה של הוריך כאשר הם מנסים לעזור לך."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>ignore</strong> - להתעלם. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>protect</strong> - להגן.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>invite</strong> - להזמין.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>admire</strong> - להעריץ.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            מאחר שהמשפט מתחיל ב-"You should not" (אסור לך/לא כדאי לך), המילה החסרה חייבת לתאר פעולה שלילית בהקשר של קבלת עזרה.
        </div>`,
        final_answer: "ignore (להתעלם)"
    },
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 2 - Foundation Vocabulary (חטיבת ביניים מתקדם)",
        question: "There is no way to _____ his bad behavior during the meeting.",
        options: [
            "justify",
            "paint",
            "calculate",
            "combine"
        ],
        correctAnswer: 0,
        hint: "כשאדם מתנהג רע מאוד, קשה למצוא תירוץ או להסביר למה הוא צודק. איזו מילה מבטאת 'הצדקה'?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "אין שום דרך ל_____ את ההתנהגות הרעה שלו במהלך הפגישה."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>justify</strong> - להצדיק. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>paint</strong> - לצייר / לצבוע.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>calculate</strong> - לחשב.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>combine</strong> - לשלב.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            למילה "justify" (Band 2) יש קשר למילה "justice" (צדק). להצדיק משהו פירושו לטעון שהוא נעשה בצדק או מסיבה טובה.
        </div>`,
        final_answer: "justify (להצדיק)"
    },
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 2 - Foundation Vocabulary (חטיבת ביניים מתקדם)",
        question: "Reading books is a great way to expand your general _____.",
        options: [
            "knowledge",
            "fear",
            "mistake",
            "pocket"
        ],
        correctAnswer: 0,
        hint: "מה המוח שלנו רוכש ואוגר כשאנחנו קוראים ספרים ולומדים דברים חדשים?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "קריאת ספרים היא דרך נהדרת להרחיב את ה_____ הכללי שלך."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>knowledge</strong> - ידע. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>fear</strong> - פחד.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>mistake</strong> - טעות.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>pocket</strong> - כיס.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            הביטוי "General knowledge" משמעותו "ידע כללי" – צירוף מוכר מאוד המעיד על השכלה רחבה וידע עולם.
        </div>`,
        final_answer: "knowledge (ידע)"
    },
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 2 - Foundation Vocabulary (חטיבת ביניים מתקדם)",
        question: "His explanation for being late wasn't very _____; nobody believed him.",
        options: [
            "logical",
            "purple",
            "round",
            "heavy"
        ],
        correctAnswer: 0,
        hint: "אם אף אחד לא האמין לתירוץ שלו, זה אומר שהתירוץ לא עשה שכל ולא היה מבוסס על היגיון.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "ההסבר שלו לאיחור לא היה מאוד _____; אף אחד לא האמין לו."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>logical</strong> - הגיוני. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>purple</strong> - סגול.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>round</strong> - עגול.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>heavy</strong> - כבד.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            מילה זו מתארת משהו שמבוסס על היגיון (Logic). הסבר טוב חייב להיות הגיוני כדי שיאמינו לו.
        </div>`,
        final_answer: "logical (הגיוני)"
    },
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 2 - Foundation Vocabulary (חטיבת ביניים מתקדם)",
        question: "The new teaching _____ helped the students understand math much faster.",
        options: [
            "method",
            "disease",
            "island",
            "vehicle"
        ],
        correctAnswer: 0,
        hint: "דרך מסוימת או טכניקה מאורגנת שבעזרתה עושים משהו (כמו ללמד כיתה).",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "ה_____ החדשה להוראה עזרה לתלמידים להבין מתמטיקה הרבה יותר מהר."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>method</strong> - שיטה. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>disease</strong> - מחלה.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>island</strong> - אי.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>vehicle</strong> - כלי רכב.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            "Teaching method" פירושו "שיטת הוראה". המילה מתייחסת לדרך פעולה שיטתית ומאורגנת.
        </div>`,
        final_answer: "method (שיטה)"
    },
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 2 - Foundation Vocabulary (חטיבת ביניים מתקדם)",
        question: "Constantly complaining about everything creates a very _____ atmosphere in the office.",
        options: [
            "negative",
            "sweet",
            "tall",
            "wooden"
        ],
        correctAnswer: 0,
        hint: "אנשים שמתלוננים כל הזמן גורמים לאווירה (atmosphere) להיות רעה ולא נעימה. איזו מילה מקבילה למשהו רע?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "להתלונן בקביעות על כל דבר מייצר אווירה מאוד _____ במשרד."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>negative</strong> - שלילית. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>sweet</strong> - מתוקה.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>tall</strong> - גבוהה.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>wooden</strong> - עשויה מעץ.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            המילה negative (ההיפך מ-positive) מתארת מצב פסימי, רע או מזיק, ולכן מתאימה לאווירה שנוצרת בעקבות תלונות.
        </div>`,
        final_answer: "negative (שלילית)"
    },
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 2 - Foundation Vocabulary (חטיבת ביניים מתקדם)",
        question: "The patient recovered from the surgery _____, day by day, until he was fully healed.",
        options: [
            "gradually",
            "accidentally",
            "loudly",
            "illegally"
        ],
        correctAnswer: 0,
        hint: "הביטוי 'day by day' (מיום ליום) מרמז על תהליך התאוששות שקורה צעד אחר צעד, לאט לאט.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "המטופל התאושש מהניתוח _____, מיום ליום, עד שהחלים לחלוטין."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>gradually</strong> - בהדרגה. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>accidentally</strong> - בטעות / במקרה.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>loudly</strong> - בקול רם.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>illegally</strong> - באופן לא חוקי.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            תואר-הפועל "gradually" (מהמילה grade - שלב/מדרגה) מתאר תהליך מתמשך ואיטי, בניגוד למשהו שקורה בבת אחת (Suddenly).
        </div>`,
        final_answer: "gradually (בהדרגה)"
    },
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 2 - Foundation Vocabulary (חטיבת ביניים מתקדם)",
        question: "Scientists carefully _____ the behavior of the monkeys in the wild.",
        options: [
            "observe",
            "bake",
            "punish",
            "melt"
        ],
        correctAnswer: 0,
        hint: "מה מדענים או חוקרים עושים כשהם חוקרים חיות בטבע? הם מסתכלים עליהן מקרוב ולומדים אותן.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "מדענים _____ בקפידה את התנהגות הקופים בטבע."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>observe</strong> - מתבוננים / בוחנים. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>bake</strong> - אופים.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>punish</strong> - מענישים.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>melt</strong> - ממסים / מתיכים.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            הפועל Observe הוא מילה פורמלית (Band 2) למילה "Watch" או "Look at", ומשמשת בעיקר לתיאור צפייה מדעית, מדוקדקת כדי ללמוד משהו.
        </div>`,
        final_answer: "observe (מתבוננים / צופים בהם)"
    },
    // ========================================================================
    // תת נושא 3: Band 3 - Expansion Vocabulary (אוצר מילים לתיכון ובגרות)
    // 15 שאלות
    // ========================================================================

    // --- שאלה 1 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 3 - Expansion Vocabulary (אוצר מילים לתיכון ובגרות)",
        question: "The CEO's quick decision was _____ to the success of the entire project.",
        options: [
            "crucial",
            "redundant",
            "obsolete",
            "tedious"
        ],
        correctAnswer: 0,
        hint: "החלטה שהביאה להצלחת פרויקט שלם היא החלטה חיונית וגורלית.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "החלטתו המהירה של המנכ"ל הייתה _____ להצלחת הפרויקט כולו."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>crucial</strong> - מכריע / קריטי / חיוני. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>redundant</strong> - מיותר / עודף.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>obsolete</strong> - מיושן / שעבר זמנו.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>tedious</strong> - מעייף / מייגע.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            כאשר דבר מה הוא הכרחי להצלחה, המילה המדויקת ביותר באנגלית מתקדמת (Band 3) היא crucial.
        </div>`,
        final_answer: "crucial (מכריע / חיוני)"
    },

    // --- שאלה 2 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 3 - Expansion Vocabulary (אוצר מילים לתיכון ובגרות)",
        question: "The instructions were so _____, that nobody knew exactly what to do.",
        options: [
            "ambiguous",
            "transparent",
            "coherent",
            "affluent"
        ],
        correctAnswer: 0,
        hint: "אם אף אחד לא ידע מה לעשות, זה אומר שההוראות לא היו ברורות. איזו מילה מתארת חוסר בהירות?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "ההוראות היו כל כך _____, שאף אחד לא ידע בדיוק מה לעשות."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>ambiguous</strong> - דו-משמעי / מעורפל / לא ברור. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>transparent</strong> - שקוף.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>coherent</strong> - עקבי / הגיוני וברור.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>affluent</strong> - עשיר / שופע.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            המילה ambiguous היא מילה קלאסית ברמת בגרות המתארת טקסט או אמירה שניתן לפרש בכמה דרכים.
        </div>`,
        final_answer: "ambiguous (דו-משמעי / מעורפל)"
    },

    // --- שאלה 3 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 3 - Expansion Vocabulary (אוצר מילים לתיכון ובגרות)",
        question: "With the rapid advance of technology, traditional paper maps have become almost _____.",
        options: [
            "obsolete",
            "inevitable",
            "meticulous",
            "plausible"
        ],
        correctAnswer: 0,
        hint: "כשטכנולוגיה מתקדמת (כמו ווייז), מפות הנייר הישנות יוצאות משימוש.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "עם ההתקדמות המהירה של הטכנולוגיה, מפות נייר מסורתיות הפכו לכמעט _____."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>obsolete</strong> - מיושן / שעבר זמנו / יצא משימוש. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>inevitable</strong> - בלתי נמנע.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>meticulous</strong> - קפדני / דייקן.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>plausible</strong> - מתקבל על הדעת / סביר.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            המילה obsolete משמשת רבות לתיאור טכנולוגיות, שיטות או חוקים שהוחלפו במשהו מודרני יותר (כמו דיסקים או קלטות).
        </div>`,
        final_answer: "obsolete (מיושן / יצא משימוש)"
    },

    // --- שאלה 4 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 3 - Expansion Vocabulary (אוצר מילים לתיכון ובגרות)",
        question: "The evidence presented by the lawyer was so _____, that the jury found the man guilty immediately.",
        options: [
            "compelling",
            "trivial",
            "reluctant",
            "obscure"
        ],
        correctAnswer: 0,
        hint: "אם הראיות גרמו לחבר המושבעים להרשיע את האיש מיד, הן היו חייבות להיות חזקות ומשכנעות מאוד.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "הראיות שהוצגו על ידי עורך הדין היו כל כך _____, שחבר המושבעים מצא את האיש אשם באופן מיידי."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>compelling</strong> - משכנע / מרתק / שקשה להתעלם ממנו. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>trivial</strong> - טריוויאלי / חסר חשיבות.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>reluctant</strong> - מסתייג / חסר רצון.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>obscure</strong> - מטושטש / לא ידוע.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            הצירוף "compelling evidence" (ראיות משכנעות) מופיע לעיתים קרובות בטקסטים אקדמיים ומשפטיים.
        </div>`,
        final_answer: "compelling (משכנע / מכריע)"
    },

    // --- שאלה 5 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 3 - Expansion Vocabulary (אוצר מילים לתיכון ובגרות)",
        question: "Despite facing many difficulties, she managed to _____ the obstacles and win the race.",
        options: [
            "overcome",
            "exaggerate",
            "prohibit",
            "accumulate"
        ],
        correctAnswer: 0,
        hint: "מה עושים לקשיים ומכשולים כדי לנצח?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "למרות שעמדה בפני קשיים רבים, היא הצליחה ל_____ על המכשולים ולנצח במרוץ."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>overcome</strong> - להתגבר על. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>exaggerate</strong> - להגזים.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>prohibit</strong> - לאסור.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>accumulate</strong> - לאסוף / לצבור.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            הפועל overcome (לחלוף מעל, להתגבר) מגיע בדרך כלל יחד עם מילים כמו problems, difficulties או obstacles (מכשולים).
        </div>`,
        final_answer: "overcome (להתגבר על)"
    },

    // --- שאלה 6 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 3 - Expansion Vocabulary (אוצר מילים לתיכון ובגרות)",
        question: "The government decided to _____ a new law to protect the environment.",
        options: [
            "implement",
            "abolish",
            "deter",
            "fluctuate"
        ],
        correctAnswer: 0,
        hint: "מה ממשלה עושה עם חוק חדש כדי שהוא יתחיל לפעול בפועל?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "הממשלה החליטה ל_____ חוק חדש כדי להגן על הסביבה."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>implement</strong> - ליישם / להוציא לפועל. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>abolish</strong> - לבטל / לחסל (חוק קיים).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>deter</strong> - להרתיע.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>fluctuate</strong> - להתנדנד / לעלות ולרדת.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            "Implement a law/plan" הוא צירוף נפוץ באנגלית פורמלית שמשמעותו להעביר משהו משלב התכנון לשלב המעשה.
        </div>`,
        final_answer: "implement (ליישם / להוציא לפועל)"
    },

    // --- שאלה 7 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 3 - Expansion Vocabulary (אוצר מילים לתיכון ובגרות)",
        question: "Her contribution to the research was _____; the team couldn't have done it without her.",
        options: [
            "indispensable",
            "negligible",
            "detrimental",
            "superficial"
        ],
        correctAnswer: 0,
        hint: "אם הצוות לא היה יכול לסיים בלעדיה, התרומה שלה הייתה אינה ניתנת להחלפה.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "תרומתה למחקר הייתה _____; הצוות לא יכול היה לעשות זאת בלעדיה."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>indispensable</strong> - הכרחי / חיוני / שאי אפשר בלעדיו. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>negligible</strong> - זניח / חסר משמעות. (ההפך מהנדרש).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>detrimental</strong> - מזיק.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>superficial</strong> - שטחי.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            המילה מורכבת מ-in (שלילה) + dispense (לוותר על). כלומר: משהו שאי אפשר לוותר עליו (Absolutely necessary).
        </div>`,
        final_answer: "indispensable (הכרחי / שאי אפשר בלעדיו)"
    },

    // --- שאלה 8 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 3 - Expansion Vocabulary (אוצר מילים לתיכון ובגרות)",
        question: "The teacher asked the students to _____ the main ideas of the article into one short paragraph.",
        options: [
            "summarize",
            "fabricate",
            "prolong",
            "disperse"
        ],
        correctAnswer: 0,
        hint: "איך קוראים לפעולה שבה לוקחים טקסט ארוך ומקצרים אותו לפסקה אחת המכילה את העיקר?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "המורה ביקש מהתלמידים ל_____ את הרעיונות המרכזיים של המאמר לפסקה אחת קצרה."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>summarize</strong> - לסכם / לתמצת. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>fabricate</strong> - לפברק / להמציא.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>prolong</strong> - להאריך. (הפעולה ההפוכה).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>disperse</strong> - לפזר.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            קריאת הפסקה הקצרה (short paragraph) מובילה מיד לפעולת הקיצור והתמצות - To summarize.
        </div>`,
        final_answer: "summarize (לסכם / לתמצת)"
    },

    // --- שאלה 9 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 3 - Expansion Vocabulary (אוצר מילים לתיכון ובגרות)",
        question: "Because of the severe drought, water has become a _____ resource in that region.",
        options: [
            "scarce",
            "abundant",
            "vague",
            "prominent"
        ],
        correctAnswer: 0,
        hint: "בצורת (drought) גורמת למים להיות במחסור.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "בגלל הבצורת הקשה, מים הפכו למשאב _____ באותו אזור."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>scarce</strong> - נדיר / במחסור / זעום. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>abundant</strong> - שופע / מצוי בשפע. (זהו ההפך המדויק).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>vague</strong> - מעורפל.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>prominent</strong> - בולט.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            המילה scarce מתארת מצב שבו הביקוש למשאב עולה על ההיצע שלו. 
        </div>`,
        final_answer: "scarce (נדיר / במחסור)"
    },

    // --- שאלה 10 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 3 - Expansion Vocabulary (אוצר מילים לתיכון ובגרות)",
        question: "He is a very _____ reader, finishing at least three thick books a week.",
        options: [
            "voracious",
            "apathetic",
            "sporadic",
            "lenient"
        ],
        correctAnswer: 0,
        hint: "מי שקורא שלושה ספרים עבים בשבוע הוא אדם שיש לו רעב ותיאבון עצום לקריאה.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "הוא קורא מאוד _____, שמסיים לפחות שלושה ספרים עבים בשבוע."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>voracious</strong> - רעבתן / להוט. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>apathetic</strong> - אדיש / חסר רגש.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>sporadic</strong> - אקראי / מדי פעם.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>lenient</strong> - סלחני.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            למרות ש-Voracious מקושרת לרוב לאכילה מוגזמת, "A voracious reader" (תולעת ספרים) הוא אחד הצירופים המוכרים ביותר בספרות.
        </div>`,
        final_answer: "voracious (להוט / רעבתן לקריאה)"
    },

    // --- שאלה 11 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 3 - Expansion Vocabulary (אוצר מילים לתיכון ובגרות)",
        question: "The constant noise from the construction site was a major _____ to the students taking the exam.",
        options: [
            "distraction",
            "incentive",
            "facilitator",
            "consensus"
        ],
        correctAnswer: 0,
        hint: "רעש מאתר בנייה בזמן מבחן מוציא אותנו מריכוז ומהווה הסחת דעת.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "הרעש התמידי מאתר הבנייה היה _____ מרכזי לתלמידים שנבחנו."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>distraction</strong> - הסחת דעת / הפרעה. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>incentive</strong> - תמריץ.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>facilitator</strong> - גורם מקל / מסייע.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>consensus</strong> - קונצנזוס / הסכמה כללית.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            רעש מפריע ליכולת להתרכז. המילה distraction (מהפועל distract - להסיח) מתארת במדויק מצב זה.
        </div>`,
        final_answer: "distraction (הסחת דעת)"
    },

    // --- שאלה 12 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 3 - Expansion Vocabulary (אוצר מילים לתיכון ובגרות)",
        question: "Despite their differences, the two leaders tried to find some _____ ground to solve the crisis.",
        options: [
            "common",
            "hostile",
            "abstract",
            "superficial"
        ],
        correctAnswer: 0,
        hint: "כדי לפתור משבר, צדדים יריבים צריכים למצוא שטח או עמק שווה ביניהם.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "למרות חילוקי הדעות ביניהם, שני המנהיגים ניסו למצוא עמק _____ (קרקע משותפת) לפתרון המשבר."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>common</strong> - משותף / שכיח. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>hostile</strong> - עוין.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>abstract</strong> - מופשט.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>superficial</strong> - שטחי.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            הניב (Idiom) האנגלי "To find common ground" מקביל לביטוי העברי "למצוא עמק שווה" או נקודת הסכמה.
        </div>`,
        final_answer: "common (משותף - 'עמק שווה')"
    },

    // --- שאלה 13 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 3 - Expansion Vocabulary (אוצר מילים לתיכון ובגרות)",
        question: "The politician gave a vague answer in order to _____ the journalist's direct question.",
        options: [
            "evade",
            "clarify",
            "endorse",
            "provoke"
        ],
        correctAnswer: 0,
        hint: "כשנותנים תשובה מעורפלת במתכוון, המטרה היא בדרך כלל להתחמק מלתת תשובה אמיתית.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "הפוליטיקאי נתן תשובה מעורפלת כדי ל_____ משאלתו הישירה של העיתונאי."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>evade</strong> - להתחמק / לעקוף. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>clarify</strong> - להבהיר.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>endorse</strong> - לאשר / לתמוך.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>provoke</strong> - לעורר פרובוקציה / להתגרות.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            תשובה מעורפלת (vague) משרתת את מי שרוצה 'להתחמק' (evade) מלומר את האמת או להתחייב לה.
        </div>`,
        final_answer: "evade (להתחמק)"
    },

    // --- שאלה 14 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 3 - Expansion Vocabulary (אוצר מילים לתיכון ובגרות)",
        question: "The company plans to _____ its operations into the European market next year.",
        options: [
            "expand",
            "shrink",
            "violate",
            "conceal"
        ],
        correctAnswer: 0,
        hint: "מה חברה גדולה עושה כשהיא נכנסת לשווקים בינלאומיים חדשים?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "החברה מתכננת ל_____ את פעילותה לתוך השוק האירופי בשנה הבאה."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>expand</strong> - להתרחב / להרחיב. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>shrink</strong> - להתכווץ / לצמצם.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>violate</strong> - להפר (חוק).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>conceal</strong> - להסתיר.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            הפועל "expand" משמש לעיתים קרובות בעולם העסקים לתיאור צמיחה של חברה וכניסה לאזורים חדשים.
        </div>`,
        final_answer: "expand (להתרחב)"
    },

    // --- שאלה 15 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Band 3 - Expansion Vocabulary (אוצר מילים לתיכון ובגרות)",
        question: "His lack of preparation will _____ lead to failure in the final exam.",
        options: [
            "inevitably",
            "spontaneously",
            "scarcely",
            "reluctantly"
        ],
        correctAnswer: 0,
        hint: "כשאדם לא מתכונן בכלל למבחן, הכישלון שלו הוא בגדר משהו שאי אפשר למנוע (וודאי).",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "החוסר בהכנה שלו יוביל לכישלון בבחינה הסופית באופן _____."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>inevitably</strong> - באופן בלתי נמנע (בוודאות). <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>spontaneously</strong> - בספונטניות.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>scarcely</strong> - בקושי.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>reluctantly</strong> - בחוסר רצון.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            "Inevitable" (בלתי נמנע) מתאר תוצאה שחייבת לקרות עקב נסיבות מסוימות (כמו אי-למידה למבחן).
        </div>`,
        final_answer: "inevitably (באופן בלתי נמנע)"
    },

    // ========================================================================
    // תת נושא 4: Cloze Practice - Junior High (השלמת משפטים לחטיבה)
    // 15 שאלות דקדוקיות והקשריות לחטיבת ביניים
    // ========================================================================

    // --- שאלה 16 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Cloze Practice - Junior High (השלמת משפטים לחטיבה)",
        question: "Dan is very tall, _____ his brother is quite short.",
        options: [
            "but",
            "because",
            "so",
            "or"
        ],
        correctAnswer: 0,
        hint: "אחד גבוה, השני נמוך. איזו מילת קישור (Connector) מציגה ניגוד?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "דן מאוד גבוה, _____ אחיו די נמוך."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>but</strong> - אבל (מילת ניגוד). <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>because</strong> - בגלל ש (סיבה).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>so</strong> - לכן (תוצאה).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>or</strong> - או (ברירה).</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            יש כאן השוואה בין שתי תכונות הפוכות (tall מול short), ולכן הקישור הנכון הוא כזה המבטא ניגוד ("אבל").
        </div>`,
        final_answer: "but (אבל - מילת ניגוד)"
    },

    // --- שאלה 17 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Cloze Practice - Junior High (השלמת משפטים לחטיבה)",
        question: "I am going to the supermarket _____ buy some milk and eggs.",
        options: [
            "to",
            "for",
            "with",
            "at"
        ],
        correctAnswer: 0,
        hint: "באנגלית, כשרוצים לבטא 'מטרה' או 'כדי', משתמשים במילת יחס מסוימת לפני הפועל.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "אני הולך לסופרמרקט _____ לקנות חלב וביצים."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח דקדוקי (Infinitive of Purpose):</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'>המילה <strong style='font-family: sans-serif;' dir='ltr'>to</strong> משמשת לפני פועל בצורת המקור (buy) כדי לציין מטרה: "כדי לקנות". <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>for</strong> - למען / בשביל. (היה נכון אם המילה הבאה הייתה שם עצם: "for milk", ולא פועל).</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            הצורה התקנית לומר "כדי לעשות משהו" באנגלית היא "To + Verb".
        </div>`,
        final_answer: "to (כדי / למטרת)"
    },

    // --- שאלה 18 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Cloze Practice - Junior High (השלמת משפטים לחטיבה)",
        question: "She didn't go to school yesterday _____ she was sick.",
        options: [
            "because",
            "although",
            "so",
            "until"
        ],
        correctAnswer: 0,
        hint: "החלק השני של המשפט מסביר מה הייתה ה*סיבה* לאירוע בחלק הראשון.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "היא לא הלכה לבית הספר אתמול _____ שהיא הייתה חולה."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>because</strong> - מפני ש / בגלל ש. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>although</strong> - למרות ש (מבטא ניגוד, לא הגיוני פה).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>so</strong> - אז / לכן.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>until</strong> - עד ש.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            כאשר אנו מספקים סיבה למעשה, מילת החיבור הקלאסית היא Because.
        </div>`,
        final_answer: "because (מפני ש / בגלל ש)"
    },

    // --- שאלה 19 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Cloze Practice - Junior High (השלמת משפטים לחטיבה)",
        question: "My father is the _____ person I know. He always helps everyone.",
        options: [
            "kindest",
            "kind",
            "kinder",
            "kindly"
        ],
        correctAnswer: 0,
        hint: "שימו לב למילה 'the' לפני הרווח. היא מרמזת על תואר בהפלגה (הכי... מכולם).",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "אבא שלי הוא האדם ה_____ ביותר שאני מכיר. הוא תמיד עוזר לכולם."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח דקדוקי (Superlatives):</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>kindest</strong> - הנחמד/הטוב ביותר (צרוף של The + est). <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>kind</strong> - נחמד (תואר רגיל).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>kinder</strong> - נחמד יותר מ... (השוואה בין שניים - Comparatives).</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            מכיוון שהדובר משווה את אביו ל*כל* האנשים שהוא מכיר ("person I know"), ומופיעה המילה "the", נשתמש בצורת ההפלגה הגבוהה ביותר: kindest.
        </div>`,
        final_answer: "kindest (הנחמד/הטוב ביותר)"
    },

    // --- שאלה 20 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Cloze Practice - Junior High (השלמת משפטים לחטיבה)",
        question: "Look at those dark clouds! I think it _____ rain soon.",
        options: [
            "is going to",
            "was going to",
            "have to",
            "did"
        ],
        correctAnswer: 0,
        hint: "כאשר יש לנו הוכחה פיזית בהווה (עננים שחורים) שמשהו עומד לקרות בעתיד הקרוב, אנו משתמשים במבנה זמן מסוים.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "הסתכל על העננים השחורים האלו! אני חושב ש_____ לרדת גשם בקרוב."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח דקדוקי (Future with Going to):</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>is going to</strong> - עומד ל... (מבטא עתיד המבוסס על ראיות בהווה). <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>was going to</strong> - התכוון ל... (זמן עבר).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>have to</strong> - חייב ל... (לא מתאים עם הגוף It).</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            באנגלית, לניבוי עתיד הקרוב וודאי (בזכות העננים), המבנה "be going to" הוא המדויק ביותר.
        </div>`,
        final_answer: "is going to (עומד לרדת גשם)"
    },

    // --- שאלה 21 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Cloze Practice - Junior High (השלמת משפטים לחטיבה)",
        question: "I have been living in this city _____ 2015.",
        options: [
            "since",
            "for",
            "in",
            "from"
        ],
        correctAnswer: 0,
        hint: "לציון נקודת התחלה מדויקת בזמן (שנה ספציפית) עם זמני Perfect, משתמשים במילה מסוימת.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "אני גר בעיר הזאת _____ שנת 2015."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>since</strong> - מאז. מציין נקודת התחלה מוגדרת בזמן (כמו 2015, אתמול, מאי). <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>for</strong> - במשך. משמש לתיאור תקופת זמן (כמו: for 5 years).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>in</strong> - בתוך / בשנת. לא מתאים לתחביר של Present Perfect Continuous ("have been living").</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            "Since 2015" (מאז 2015) מסביר מתי הפעולה התחילה, ונמשכת עד היום.
        </div>`,
        final_answer: "since (מאז)"
    },

    // --- שאלה 22 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Cloze Practice - Junior High (השלמת משפטים לחטיבה)",
        question: "Please turn off the lights _____ you leave the room.",
        options: [
            "when",
            "which",
            "where",
            "who"
        ],
        correctAnswer: 0,
        hint: "מילת חיבור המתארת את 'הזמן' שבו יש לבצע את הפעולה.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "אנא כבה את האורות _____ שאתה עוזב את החדר."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>when</strong> - כאשר / כש... <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>which</strong> - אשר / איזה.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>where</strong> - איפה / במקום ש...</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>who</strong> - מי ש...</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            המשפט מחבר שתי פעולות על ציר הזמן. "כאשר (when) אתה יוצא – תכבה את האור".
        </div>`,
        final_answer: "when (כאשר / בזמן ש...)"
    },

    // --- שאלה 23 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Cloze Practice - Junior High (השלמת משפטים לחטיבה)",
        question: "He is _____ best student in the class, getting 100 on every test.",
        options: [
            "the",
            "a",
            "an",
            "some"
        ],
        correctAnswer: 0,
        hint: "כשאנו מציינים מישהו יחיד ומיוחד ('הכי טוב'), חובה להשתמש בתווית הידיעה (Definite Article).",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "הוא ה-תלמיד ה-טוב ביותר בכיתה, ומקבל 100 בכל מבחן."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח דקדוקי (Articles):</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>the</strong> - תווית הידיעה ("ה-"). חובה להשתמש בה לפני תארי הפלגה (superlatives) כמו 'best' (הכי טוב). <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>a / an</strong> - תווית סתמית (תלמיד כלשהו). לא מתאים כשיש רק 'הכי טוב' אחד מוגדר.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            "The best" (הכי טוב / הטוב ביותר) הוא ביטוי קבוע שאינו ניתן להפרדה במקרה זה.
        </div>`,
        final_answer: "the (תווית הידיעה)"
    },

    // --- שאלה 24 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Cloze Practice - Junior High (השלמת משפטים לחטיבה)",
        question: "_____ are many beautiful parks in our neighborhood.",
        options: [
            "There",
            "They",
            "Their",
            "Those"
        ],
        correctAnswer: 0,
        hint: "כדי לומר בעברית 'ישנם' או 'קיימים', אנו משתמשים באנגלית בצירוף מילים שמתחיל במילה המציינת מיקום.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "_____ (ישנם) הרבה פארקים יפים בשכונה שלנו."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>There</strong> - הצירוף "There are" מתורגם לעברית כ-"ישנם" (לרבים). <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>They</strong> - הם. לא מתחבר דקדוקית ליצירת משמעות של 'יש'.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>Their</strong> - שלהם (שייכות).</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            "There is" (ליחיד) ו-"There are" (לרבים) הם הדרך התקנית לציין קיום של עצמים במקום מסוים.
        </div>`,
        final_answer: "There (כחלק מהצירוף 'There are' = ישנם)"
    },

    // --- שאלה 25 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Cloze Practice - Junior High (השלמת משפטים לחטיבה)",
        question: "If you study hard, you _____ pass the test easily.",
        options: [
            "will",
            "would",
            "did",
            "are"
        ],
        correctAnswer: 0,
        hint: "המשפט מציג תנאי בעתיד: אם תעשה ככה בהווה (תלמד), מה תהיה התוצאה בעתיד?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "אם תלמד קשה, אתה _____ (בעתיד) תעבור את המבחן בקלות."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח דקדוקי (First Conditional - תנאי ראשון):</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>will</strong> - פועל עזר לעתיד (will pass = תעבור). <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>would</strong> - משמש לתנאי שני (היפותטי), ולא מתאים כאן כי החלק הראשון הוא בהווה (study).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>did</strong> - עבר.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            משפטי 'תנאי ראשון' בנויים מהתבנית: If + הווה (study), אז החלק השני יהיה Will + פועל מקור.
        </div>`,
        final_answer: "will (פועל עזר לעתיד)"
    },

    // --- שאלה 26 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Cloze Practice - Junior High (השלמת משפטים לחטיבה)",
        question: "I wanted to buy the shoes, _____ I didn't have enough money with me.",
        options: [
            "but",
            "and",
            "so",
            "or"
        ],
        correctAnswer: 0,
        hint: "האם המשפט השני ממשיך את הראשון באותו כיוון, או שובר אותו?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "רציתי לקנות את הנעליים, _____ לא היה לי מספיק כסף עלי."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>but</strong> - אבל (מציג את הבעיה/הניגוד שמנע את הקנייה). <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>and</strong> - ו... (הוספת מידע באותו כיוון).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>so</strong> - לכן (תוצאה).</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            קיימת סתירה בין 'הרצון לקנות' לבין 'המחסור בכסף', מה שמחייב מילת ניגוד ברורה.
        </div>`,
        final_answer: "but (אבל)"
    },

    // --- שאלה 27 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Cloze Practice - Junior High (השלמת משפטים לחטיבה)",
        question: "The book _____ you gave me last week is very interesting.",
        options: [
            "which",
            "who",
            "where",
            "whose"
        ],
        correctAnswer: 0,
        hint: "באיזו מילת קישור נשתמש כדי להרחיב מידע על 'חפץ' (במקרה זה, ספר)?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "הספר _____ נתת לי בשבוע שעבר הוא מאוד מעניין."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח דקדוקי (Relative Pronouns):</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>which</strong> - אשר / ש... (משמש לתיאור חפצים ובעלי חיים). <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>who</strong> - אשר / מי ש... (משמש לתיאור בני אדם בלבד).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>where</strong> - איפה / מקום ש... (משמש לתיאור מיקומים).</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            מכיוון שהמילה המקדימה היא 'ספר' (The book - עצם דומם), המילה which היא התקנית לחיבור המשפט (אפשר היה להשתמש גם ב-that).
        </div>`,
        final_answer: "which (אשר / ש... - לחפצים)"
    },

    // --- שאלה 28 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Cloze Practice - Junior High (השלמת משפטים לחטיבה)",
        question: "She plays the piano very _____. Everyone loves listening to her.",
        options: [
            "well",
            "good",
            "bad",
            "fastly"
        ],
        correctAnswer: 0,
        hint: "אנחנו רוצים לתאר *איך* היא מנגנת (לתאר את הפעולה, לא אותה).",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "היא מנגנת בפסנתר מאוד _____. כולם אוהבים להקשיב לה."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח דקדוקי (Adjective vs. Adverb):</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>well</strong> - היטב (בצורה טובה). זהו תואר-הפועל (Adverb) שמתאר איך מתבצעת הפעולה 'לנגן'. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>good</strong> - טוב. (זהו שם תואר שמתאר שמות עצם. למשל: She is a 'good' player).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>fastly</strong> - מילה שאינה קיימת באנגלית (התואר הוא fast בלבד).</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            כדי לתאר את הפעולה עצמה (plays) עלינו להשתמש ב-well ולא ב-good.
        </div>`,
        final_answer: "well (היטב / בצורה טובה)"
    },

    // --- שאלה 29 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Cloze Practice - Junior High (השלמת משפטים לחטיבה)",
        question: "They were exhausted, so they decided to take a break _____ the long hike.",
        options: [
            "during",
            "while",
            "because",
            "at"
        ],
        correctAnswer: 0,
        hint: "מילה זו מתארת משהו שקורה 'במהלך' זמן של אירוע מסוים.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "הם היו מותשים, אז הם החליטו לקחת הפסקה _____ הטיול הארוך."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>during</strong> - במהלך. (מגיעה תמיד לפני שם עצם, במקרה זה 'the long hike'). <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>while</strong> - בזמן ש... (דורשת לאחריה משפט פועלי, כמו while they were hiking).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>at</strong> - בְּ... (מילת מיקום או נקודת זמן, לא מתאימה לאירוע מתמשך).</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            המילה During היא מילת היחס המדויקת לתיאור זמן התרחשות בתוך שם עצם ('במהלך הסרט', 'במהלך הטיול').
        </div>`,
        final_answer: "during (במהלך)"
    },

    // --- שאלה 30 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Cloze Practice - Junior High (השלמת משפטים לחטיבה)",
        question: "I have _____ been to Paris, but I really want to go there someday.",
        options: [
            "never",
            "ever",
            "always",
            "already"
        ],
        correctAnswer: 0,
        hint: "המשך המשפט אומר 'אבל אני ממש רוצה ללכת לשם יום אחד'. משמע, הדבר טרם קרה.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "_____ (מעולם לא) הייתי בפריז, אבל אני ממש רוצה לנסוע לשם יום אחד."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>never</strong> - מעולם לא. (יוצרת משפט שלילי ללא המילה 'not'). <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>ever</strong> - אי פעם (משמשת בעיקר בשאלות: Have you ever been...?).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>already</strong> - כבר. (סותר את החצי השני של המשפט).</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            הניגוד עם המילה "אבל" דורש שהחלק הראשון יהיה שלילי: 'מעולם לא הייתי, *אבל* אני רוצה לנסוע'.
        </div>`,
        final_answer: "never (מעולם לא)"
    },
    // ========================================================================
    // תת נושא 5: Cloze Practice - High School (השלמת משפטים לתיכון)
    // 15 שאלות דקדוק, חיבור והקשר מתקדם
    // ========================================================================

    // --- שאלה 1 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Cloze Practice - High School (השלמת משפטים לתיכון)",
        question: "_____ you study harder, you will not pass the final exams.",
        options: [
            "Unless",
            "If",
            "Despite",
            "Because"
        ],
        correctAnswer: 0,
        hint: "מילת התנאי החסרה משמעותה 'אלא אם כן' (אם לא).",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "_____ תלמד קשה יותר, לא תעבור את בחינות הגמר."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>Unless</strong> - אלא אם כן / אם לא. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>If</strong> - אם (לו היינו שמים If, המשפט היה אומר: "אם תלמד קשה, לא תעבור" - וזה לא הגיוני).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>Despite</strong> - למרות (דורשת אחריה שם עצם, לא משפט פועלי).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>Because</strong> - בגלל.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            "Unless" שווה במשמעותה ל-"If not". 'אלא אם כן תלמד, תיכשל'.
        </div>`,
        final_answer: "Unless (אלא אם כן)"
    },
    // --- שאלה 2 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Cloze Practice - High School (השלמת משפטים לתיכון)",
        question: "She _____ have left early, because her car is not in the parking lot.",
        options: [
            "must",
            "can",
            "should",
            "wouldn't"
        ],
        correctAnswer: 0,
        hint: "אנחנו מסיקים מסקנה ודאית (לוגית) לגבי משהו שקרה בעבר, בהתבסס על עובדה בהווה (האוטו לא שם).",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "היא _____ עזבה מוקדם, מכיוון שהמכונית שלה לא נמצאת במגרש החניה."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח דקדוקי (Modals of Deduction):</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>must (have)</strong> - בטח / בוודאי (הסקת מסקנה חזקה בעבר). <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>can</strong> - יכולה. לא מתאים במבנה של Perfect Modal בעבר חיובי.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>should (have)</strong> - הייתה צריכה (מבטא חרטה או המלצה שלא קוימה, ולא מסקנה).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>wouldn't</strong> - לא הייתה (תנאי).</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            המבנה "Must have + V3" משמש כדי להגיד "אני בטוח שכך קרה". 'היא בוודאי עזבה מוקדם'.
        </div>`,
        final_answer: "must (בוודאי / בטח - הסקת מסקנה)"
    },
    // --- שאלה 3 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Cloze Practice - High School (השלמת משפטים לתיכון)",
        question: "The company experienced severe financial losses; _____, they had to lay off several employees.",
        options: [
            "consequently",
            "however",
            "previously",
            "whereas"
        ],
        correctAnswer: 0,
        hint: "החצי הראשון מתאר סיבה (הפסדים), והחצי השני מתאר את התוצאה (פיטורים). איזו מילה מחברת בין סיבה לתוצאה?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "החברה חוותה הפסדים כספיים חמורים; _____, הם נאלצו לפטר מספר עובדים."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח מילות קישור (Connectors):</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>consequently</strong> - כתוצאה מכך. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>however</strong> - אולם / יחד עם זאת (ניגוד).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>previously</strong> - קודם לכן.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>whereas</strong> - בעוד ש... (השוואה).</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            כשיש קשר של סיבה ותוצאה (Cause and Effect), נשתמש במילים כמו Therefore, Thus, או Consequently.
        </div>`,
        final_answer: "consequently (כתוצאה מכך)"
    },
    // --- שאלה 4 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Cloze Practice - High School (השלמת משפטים לתיכון)",
        question: "The new hospital _____ by the mayor next Tuesday.",
        options: [
            "will be opened",
            "will open",
            "is opening",
            "opens"
        ],
        correctAnswer: 0,
        hint: "בית החולים לא 'פותח' את עצמו, מישהו פותח אותו (סביל). הפעולה תקרה בשבוע הבא.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "בית החולים החדש _____ (ייפתח) על ידי ראש העיר ביום שלישי הבא."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח דקדוקי (Future Passive):</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>will be opened</strong> - ייפתח (פעולה סבילה בעתיד). <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>will open</strong> - יפתח (פעולה אקטיבית, לא מתאים).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>is opening / opens</strong> - הווה, לא מתאים למילה 'by' (על ידי) הדורשת משפט סביל.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            משפט סביל (Passive Voice) בעתיד מורכב מ: Will + be + Verb(V3).
        </div>`,
        final_answer: "will be opened (ייפתח - סביל עתיד)"
    },
    // --- שאלה 5 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Cloze Practice - High School (השלמת משפטים לתיכון)",
        question: "The scientist _____ research was published yesterday won a Nobel Prize.",
        options: [
            "whose",
            "who",
            "which",
            "whom"
        ],
        correctAnswer: 0,
        hint: "כינוי הזיקה כאן מציין שייכות: המחקר *של* המדען.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "המדען _____ (שהמחקר שלו) פורסם אתמול, זכה בפרס נובל."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח דקדוקי (Relative Pronouns):</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>whose</strong> - אשר שלו / ששייך לו. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>who</strong> - אשר (מתייחס למדען עצמו כנושא, אך חסר פועל אחריו).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>which</strong> - אשר (מיועד לחפצים וחיות, לא למדען אנושי).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>whom</strong> - אותו / שאותו (משמש כמושא).</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            המילה "Whose" מחברת בין אדם לבין דבר ששייך לו (The scientist -> whose -> research).
        </div>`,
        final_answer: "whose (ש...שלו / שלגביו)"
    },
    // --- שאלה 6 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Cloze Practice - High School (השלמת משפטים לתיכון)",
        question: "_____ the heavy rain, the football match continued as planned.",
        options: [
            "Despite",
            "Although",
            "However",
            "Furthermore"
        ],
        correctAnswer: 0,
        hint: "מילת הניגוד כאן באה לפני 'שם עצם' (the heavy rain) ולא לפני משפט פועלי מלא.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "_____ (למרות) הגשם הכבד, משחק הכדורגל נמשך כמתוכנן."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח מילות קישור:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>Despite</strong> - למרות (דורשת שם עצם אחריה, Noun Phrase). <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>Although</strong> - אף על פי ש... (דורשת אחריה משפט מלא: נושא + פועל. כגון: Although it was raining).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>However</strong> - יחד עם זאת (מתחילה משפט חדש עם פסיק).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>Furthermore</strong> - יתר על כן.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            ההבדל בין Despite ל-Although הוא תחבירי נטו. לפני צירוף שמני ("the heavy rain") נשתמש ב-Despite.
        </div>`,
        final_answer: "Despite (למרות - לפני שם עצם)"
    },
    // --- שאלה 7 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Cloze Practice - High School (השלמת משפטים לתיכון)",
        question: "He admitted _____ the mistake during the presentation.",
        options: [
            "making",
            "to make",
            "make",
            "made"
        ],
        correctAnswer: 0,
        hint: "הפועל 'admit' (להודות במשהו) דורש תמיד אחריו פועל בצורת Gerund (תוספת ing).",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "הוא הודה ש_____ את הטעות במהלך המצגת."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח דקדוקי (Gerunds vs Infinitives):</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>making</strong> - עשיית / בכך שעשה (V+ing). <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>to make</strong> - לעשות (Infinitive). פעלים כמו want או plan מקבלים To, אך לא admit.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>make / made</strong> - צורות בסיס ועבר שאינן יכולות לשמש כמושא.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            באנגלית יש רשימת פעלים קבועה (כמו admit, avoid, enjoy) המחייבת שהפועל שיבוא מיד אחריהם יהיה בצורת V-ing.
        </div>`,
        final_answer: "making (לאחר הפועל admit)"
    },
    // --- שאלה 8 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Cloze Practice - High School (השלמת משפטים לתיכון)",
        question: "By the time we arrive at the theater, the movie _____.",
        options: [
            "will have started",
            "will start",
            "starts",
            "started"
        ],
        correctAnswer: 0,
        hint: "אנו מתארים פעולה שתהיה *כבר מושלמת וגמורה* בנקודת זמן מסוימת בעתיד (כאשר נגיע לקולנוע).",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "עד שנגיע לקולנוע, הסרט _____ (כבר יתחיל)."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח דקדוקי (Future Perfect):</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>will have started</strong> - יהיה התחיל כבר. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>will start</strong> - יתחיל (לא מציין שהפעולה כבר הסתיימה בנקודת היעד).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>starts</strong> - מתחיל (הווה פשוט).</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            הביטוי "By the time" בעתיד מחייב כמעט תמיד את הזמן Future Perfect (Will + have + V3) כדי להראות שפעולה א' תושלם לפני פעולה ב'.
        </div>`,
        final_answer: "will have started (עתיד מושלם)"
    },
    // --- שאלה 9 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Cloze Practice - High School (השלמת משפטים לתיכון)",
        question: "It is _____ that we find a solution before the deadline expires.",
        options: [
            "imperative",
            "trivial",
            "redundant",
            "obsolete"
        ],
        correctAnswer: 0,
        hint: "אם הדד-ליין עומד לפוג, מציאת הפתרון היא עניין דחוף, הכרחי וקריטי.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "זה _____ (הכרחי/דחוף) שנמצא פתרון לפני שהמועד האחרון יפוג."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>imperative</strong> - חיוני / הכרחי / דחוף. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>trivial</strong> - חסר חשיבות.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>redundant</strong> - מיותר.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>obsolete</strong> - מיושן.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            המבנה "It is imperative that..." הוא דרך רשמית וחזקה לומר "אנחנו חייבים לעשות את זה מיד".
        </div>`,
        final_answer: "imperative (הכרחי ודחוף)"
    },
    // --- שאלה 10 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Cloze Practice - High School (השלמת משפטים לתיכון)",
        question: "Not only _____ late to the meeting, but he also forgot to bring his laptop.",
        options: [
            "did he arrive",
            "he arrived",
            "arrived he",
            "he did arrive"
        ],
        correctAnswer: 0,
        hint: "כשמשפט באנגלית מתחיל בביטוי שלילי כמו 'Not only', מתרחש 'היפוך' (Inversion) של הנושא ופועל העזר כמו בשאלה.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "לא רק שהוא _____ מאוחר לפגישה, אלא הוא גם שכח להביא את המחשב הנייד שלו."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח דקדוקי (Inversion):</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>did he arrive</strong> - <span style='color: #166534;'>(התשובה הנכונה)</span>. היפוך (פועל עזר -> נושא -> פועל).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>he arrived</strong> - סדר מילים רגיל. (שגוי לאחר מילת שלילה בתחילת המשפט).</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            חוק דקדוק מתקדם בתיכון: פתיחת משפט ב-"Not only", "Never", או "Rarely" דורשת הפיכת הסדר הפנימי לסדר של שאלה (Inversion).
        </div>`,
        final_answer: "did he arrive (חוק ההיפוך - Inversion)"
    },
    // --- שאלה 11 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Cloze Practice - High School (השלמת משפטים לתיכון)",
        question: "The success of the new project depends heavily _____ the dedication of the team.",
        options: [
            "on",
            "at",
            "to",
            "with"
        ],
        correctAnswer: 0,
        hint: "הפועל depend (תלוי) לוקח תמיד מילת יחס (Preposition) ספציפית אחריו.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "ההצלחה של הפרויקט החדש תלויה במידה רבה _____ המסירות של הצוות."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח מילות יחס (Prepositions):</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>on</strong> - על / ב... <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>at / to / with</strong> - לא משתלבות עם הפועל depend.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            "Depend on" הוא ביטוי קבוע (Collocation) שפירושו "תלוי ב-".
        </div>`,
        final_answer: "on (תלוי ב... - Depend on)"
    },
    // --- שאלה 12 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Cloze Practice - High School (השלמת משפטים לתיכון)",
        question: "You _____ apologize to her; what you said yesterday was really hurtful.",
        options: [
            "ought to",
            "can",
            "might",
            "would"
        ],
        correctAnswer: 0,
        hint: "המשפט מביע המלצה חזקה, עצה או סוג של חובה מוסרית.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "אתה _____ להתנצל בפניה; מה שאמרת אתמול היה ממש פוגעני."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח דקדוקי (Modals of Advice/Obligation):</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>ought to</strong> - צריך / כדאי ש (מקביל ל-should). <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>can</strong> - יכול (יכולת בלבד).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>might</strong> - אולי / ייתכן ש.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>would</strong> - היית... (תנאי).</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            הצירוף "ought to" הוא פועל עזר (Modal) פורמלי המבטא חובה מוסרית או עצה חזקה.
        </div>`,
        final_answer: "ought to (כדאי ש / אתה צריך)"
    },
    // --- שאלה 13 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Cloze Practice - High School (השלמת משפטים לתיכון)",
        question: "If I had known about the heavy traffic, I _____ a different route.",
        options: [
            "would have taken",
            "will take",
            "took",
            "take"
        ],
        correctAnswer: 0,
        hint: "זהו משפט תנאי על העבר (Third Conditional): חרטה על מצב שכבר קרה ואי אפשר לשנותו.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "אילו הייתי יודע על התנועה הכבדה, _____ (הייתי לוקח) מסלול אחר."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח דקדוקי (Third Conditional):</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>would have taken</strong> - הייתי לוקח (בעבר). <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>will take</strong> - מתאים לתנאי עתידי (First Conditional).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>took</strong> - עבר פשוט (Past Simple).</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            תנאי שלישי מורכב מ: If + Past Perfect (had known), ולאחריו המבנה Would + have + V3.
        </div>`,
        final_answer: "would have taken (תנאי שלישי)"
    },
    // --- שאלה 14 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Cloze Practice - High School (השלמת משפטים לתיכון)",
        question: "Because of the sudden storm, the manager decided to _____ the meeting off until next week.",
        options: [
            "call",
            "put",
            "take",
            "set"
        ],
        correctAnswer: 0,
        hint: "איזה פועל, בצירוף המילה 'off', יוצר ביטוי שמשמעותו 'לבטל' משהו מתוכנן?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "בגלל הסופה הפתאומית, המנהל החליט ל_____ את הפגישה לשבוע הבא (לבטל / לדחות)."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח ניבים (Phrasal Verbs):</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>call off</strong> - לבטל משהו שתוכנן. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>put off</strong> - לדחות (לרוב למורעד מאוחר יותר, אך התחביר דורש "put off the meeting" ללא הפרדה כאן).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>take off</strong> - להמריא / לפשוט (בגד).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>set off</strong> - לצאת לדרך.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            הצירוף "call off" הוא phrasal verb נפוץ מאוד באנגלית שפירושו לבטל. 
        </div>`,
        final_answer: "call (call off = לבטל)"
    },
    // --- שאלה 15 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Cloze Practice - High School (השלמת משפטים לתיכון)",
        question: "The hotel was extremely expensive. _____, the room service was quite poor.",
        options: [
            "Furthermore",
            "Therefore",
            "For instance",
            "Nevertheless"
        ],
        correctAnswer: 0,
        hint: "המשפט הראשון מתאר תלונה (יקר מאוד). המשפט השני מוסיף תלונה נוספת (שירות גרוע). המילה צריכה לבטא הוספה של מידע מאותו סוג.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "המלון היה יקר להחריד. _____, שירות החדרים היה די גרוע."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח מילות קישור (Connectors of Addition):</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>Furthermore</strong> - יתר על כן / בנוסף. (מוסיף טענה באותו כיוון שלילי). <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>Therefore</strong> - לכן (תוצאה).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>For instance</strong> - לדוגמה.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>Nevertheless</strong> - אף על פי כן (מביע ניגוד).</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            "Furthermore" או "Moreover" משמשות כדי להוסיף טיעון או נדבך נוסף לרעיון שכבר הוצג (המשך הרצאת התלונות על המלון).
        </div>`,
        final_answer: "Furthermore (יתר על כן / בנוסף)"
    },

    // ========================================================================
    // תת נושא 6: Synonyms & Antonyms (מילים נרדפות והפכים)
    // 15 שאלות אוצר מילים לפסיכומטרי/בגרות
    // ========================================================================

    // --- שאלה 16 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Synonyms & Antonyms (מילים נרדפות והפכים)",
        question: "Which of the following words is the closest SYNONYM for the word 'abundant'?",
        options: [
            "plentiful",
            "scarce",
            "rare",
            "empty"
        ],
        correctAnswer: 0,
        hint: "המילה abundant מתארת משהו שיש ממנו שפע או כמות גדולה מאוד.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח המילה:</strong><br>
            המילה <strong>abundant</strong> פירושה 'שופע', 'מצוי בשפע' או 'רב'.<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות (Synonyms):</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>plentiful</strong> - בשפע / רב. זוהי המילה הנרדפת המדויקת. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>scarce</strong> - במחסור (זהו ההיפך - Antonym).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>rare</strong> - נדיר.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>empty</strong> - ריק.</li>
            </ul>
        </div>`,
        final_answer: "plentiful (שופע / בשפע)"
    },
    // --- שאלה 17 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Synonyms & Antonyms (מילים נרדפות והפכים)",
        question: "Choose the best ANTONYM (opposite) for the word 'diligent'.",
        options: [
            "lazy",
            "hardworking",
            "careful",
            "smart"
        ],
        correctAnswer: 0,
        hint: "אדם שהוא diligent הוא אדם שעובד מאוד קשה ושקדן. מה ההיפך מזה?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח המילה:</strong><br>
            המילה <strong>diligent</strong> פירושה 'שקדן', 'חרוץ', 'משקיען'.<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות (Antonyms):</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>lazy</strong> - עצלן. זהו ההיפך המדויק. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>hardworking</strong> - עובד קשה (זוהי מילה נרדפת - Synonym).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>careful</strong> - זהיר.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>smart</strong> - חכם.</li>
            </ul>
        </div>`,
        final_answer: "lazy (עצלן)"
    },
    // --- שאלה 18 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Synonyms & Antonyms (מילים נרדפות והפכים)",
        question: "Which word means the same as 'crucial'?",
        options: [
            "essential",
            "trivial",
            "optional",
            "flexible"
        ],
        correctAnswer: 0,
        hint: "משהו שהוא crucial הוא גורלי וקריטי להצלחה. לא ניתן בלעדיו.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח המילה:</strong><br>
            המילה <strong>crucial</strong> פירושה 'מכריע', 'קריטי', 'חיוני ביותר'.<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>essential</strong> - חיוני / הכרחי. (זו המילה הנרדפת). <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>trivial</strong> - חסר חשיבות (היפך).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>optional</strong> - נתון לבחירה.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>flexible</strong> - גמיש.</li>
            </ul>
        </div>`,
        final_answer: "essential (חיוני / הכרחי)"
    },
    // --- שאלה 19 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Synonyms & Antonyms (מילים נרדפות והפכים)",
        question: "What is the opposite (ANTONYM) of the verb 'prohibit'?",
        options: [
            "allow",
            "ban",
            "forbid",
            "prevent"
        ],
        correctAnswer: 0,
        hint: "לשון החוק לעיתים 'אוסרת' דברים. ההיפך מלאסור הוא...",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח המילה:</strong><br>
            הפועל <strong>prohibit</strong> משמעותו 'לאסור' (חוקית), 'למנוע'.<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>allow</strong> - להרשות / לאפשר. זהו ההיפך המדויק. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>ban</strong> - להחרים / לאסור (זוהי מילה נרדפת).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>forbid</strong> - לאסור (מילה נרדפת חזקה).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>prevent</strong> - למנוע.</li>
            </ul>
        </div>`,
        final_answer: "allow (להרשות / לאפשר)"
    },
    // --- שאלה 20 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Synonyms & Antonyms (מילים נרדפות והפכים)",
        question: "Which word is a SYNONYM for 'inevitable'?",
        options: [
            "unavoidable",
            "surprising",
            "doubtful",
            "unlikely"
        ],
        correctAnswer: 0,
        hint: "משהו שהוא inevitable הוא משהו שאי אפשר לברוח ממנו, הוא בטוח יקרה.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח המילה:</strong><br>
            המילה <strong>inevitable</strong> פירושה 'בלתי נמנע', 'הכרחי המציאות'.<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>unavoidable</strong> - בלתי ניתן למניעה / לא ניתן להתחמק ממנו (Synonym). <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>surprising</strong> - מפתיע.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>doubtful</strong> - מוטל בספק.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>unlikely</strong> - לא סביר (זהו ההיפך).</li>
            </ul>
        </div>`,
        final_answer: "unavoidable (בלתי נמנע)"
    },
    // --- שאלה 21 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Synonyms & Antonyms (מילים נרדפות והפכים)",
        question: "Select the ANTONYM for the word 'obsolete'.",
        options: [
            "modern",
            "outdated",
            "old-fashioned",
            "ancient"
        ],
        correctAnswer: 0,
        hint: "משהו שהוא obsolete הוא טכנולוגיה ישנה שעבר זמנה (כמו קלטות טייפ). מה ההיפך מזה?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח המילה:</strong><br>
            המילה <strong>obsolete</strong> פירושה 'מיושן', 'שעבר זמנו', 'יצא משימוש'.<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>modern</strong> - מודרני / חדשני (Antonym). <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>outdated</strong> - מיושן (מילה נרדפת ל-obsolete).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>old-fashioned</strong> - מיושן / של פעם (מילה נרדפת).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>ancient</strong> - עתיק.</li>
            </ul>
        </div>`,
        final_answer: "modern (מודרני)"
    },
    // --- שאלה 22 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Synonyms & Antonyms (מילים נרדפות והפכים)",
        question: "Which word means the same as 'adequate'?",
        options: [
            "sufficient",
            "lacking",
            "poor",
            "exceptional"
        ],
        correctAnswer: 0,
        hint: "כשהמורה אומר שהעבודה שלך 'adequate', הוא מתכוון שהיא עומדת ברף הבסיסי, היא מספקת, יש בה די והותר.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח המילה:</strong><br>
            המילה <strong>adequate</strong> פירושה 'הולם', 'מספיק', 'מספק את הצרכים'.<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>sufficient</strong> - מספיק (Synonym מדויק). <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>lacking</strong> - חסר (Antonym).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>poor</strong> - עני / עלוב.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>exceptional</strong> - יוצא מן הכלל (הרבה מעבר ל'מספיק').</li>
            </ul>
        </div>`,
        final_answer: "sufficient (מספיק / הולם)"
    },
    // --- שאלה 23 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Synonyms & Antonyms (מילים נרדפות והפכים)",
        question: "What is the opposite of 'pessimistic'?",
        options: [
            "optimistic",
            "negative",
            "sad",
            "depressed"
        ],
        correctAnswer: 0,
        hint: "אדם פסימי תמיד רואה את חצי הכוס הריקה ואת השלילי בכל דבר. ההיפך ממנו רואה את החיובי.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח המילה:</strong><br>
            המילה <strong>pessimistic</strong> פירושה פסימי, רואה שחורות.<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>optimistic</strong> - אופטימי (מצפה לטוב). זהו ההיפך. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>negative</strong> - שלילי (זוהי מילה נרדפת).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>sad</strong> - עצוב.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>depressed</strong> - מדוכא.</li>
            </ul>
        </div>`,
        final_answer: "optimistic (אופטימי)"
    },
    // --- שאלה 24 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Synonyms & Antonyms (מילים נרדפות והפכים)",
        question: "What is a SYNONYM for 'decline' as in 'decline an invitation'?",
        options: [
            "refuse",
            "accept",
            "ignore",
            "explain"
        ],
        correctAnswer: 0,
        hint: "אם מישהו מזמין אתכם למסיבה ואתם עושים 'decline', אתם אומרים לו בנימוס 'לא, תודה'.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח המילה:</strong><br>
            לפועל <strong>decline</strong> יש שני פירושים מרכזיים: 1) לרדת/לדעוך. 2) לדחות (הצעה/הזמנה). בהקשר המשפט, הכוונה היא לדחות הזמנה.<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>refuse</strong> - לסרב / לדחות. (מילה נרדפת). <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>accept</strong> - לקבל (זהו ההיפך - Antonym).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>ignore</strong> - להתעלם.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>explain</strong> - להסביר.</li>
            </ul>
        </div>`,
        final_answer: "refuse (לסרב / לדחות)"
    },
    // --- שאלה 25 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Synonyms & Antonyms (מילים נרדפות והפכים)",
        question: "Choose the ANTONYM for 'vast'.",
        options: [
            "tiny",
            "huge",
            "enormous",
            "broad"
        ],
        correctAnswer: 0,
        hint: "האוקיינוס מתואר כ-'vast' (רחב ידיים, עצום). אנחנו מחפשים את ההיפך של עצום.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח המילה:</strong><br>
            המילה <strong>vast</strong> פירושה 'עצום', 'רחב ידיים', 'כביר' (למשל: The vast ocean).<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>tiny</strong> - זעיר. זהו ההיפך המדויק. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>huge</strong> - ענק (זוהי מילה נרדפת - Synonym).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>enormous</strong> - עצום (מילה נרדפת).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>broad</strong> - רחב (מילה נרדפת).</li>
            </ul>
        </div>`,
        final_answer: "tiny (זעיר)"
    },
    // --- שאלה 26 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Synonyms & Antonyms (מילים נרדפות והפכים)",
        question: "Which word is a SYNONYM for 'comprehend'?",
        options: [
            "understand",
            "confuse",
            "forget",
            "teach"
        ],
        correctAnswer: 0,
        hint: "במבחן באנגלית קוראים לקטע הקריאה 'Reading Comprehension', כלומר הבנת הנקרא.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח המילה:</strong><br>
            הפועל <strong>comprehend</strong> הוא מילה אקדמית שפירושה 'להבין', 'לתפוס את המשמעות'.<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>understand</strong> - להבין. (השם המוכר והפשוט של המילה). <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>confuse</strong> - לבלבל.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>forget</strong> - לשכוח.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>teach</strong> - ללמד.</li>
            </ul>
        </div>`,
        final_answer: "understand (להבין)"
    },
    // --- שאלה 27 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Synonyms & Antonyms (מילים נרדפות והפכים)",
        question: "What is the ANTONYM of 'arrogant'?",
        options: [
            "humble",
            "proud",
            "loud",
            "clever"
        ],
        correctAnswer: 0,
        hint: "אדם arrogant (יהיר ושחצן) חושב שהוא טוב מכולם. ההיפך ממנו הוא אדם צנוע שאינו מתרברב.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח המילה:</strong><br>
            המילה <strong>arrogant</strong> פירושה 'יהיר', 'שחצן', אדם שחש עליונות על אחרים.<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות (Antonyms):</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>humble</strong> - עניו / צנוע. זהו ההיפך הקלאסי באנגלית. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>proud</strong> - גאה (קרוב יותר במשמעותו למילה המקורית).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>loud</strong> - רועש.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>clever</strong> - פיקח.</li>
            </ul>
        </div>`,
        final_answer: "humble (עניו / צנוע)"
    },
    // --- שאלה 28 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Synonyms & Antonyms (מילים נרדפות והפכים)",
        question: "Which word is a SYNONYM for 'conceal'?",
        options: [
            "hide",
            "reveal",
            "show",
            "open"
        ],
        correctAnswer: 0,
        hint: "נשים לעיתים קונות איפור מסוג 'קונסילר' (Concealer). התפקיד שלו הוא להסתיר פגמים בעור. מה הפירוש הפשוט של הפועל?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח המילה:</strong><br>
            הפועל <strong>conceal</strong> פירושו 'להסתיר', 'להסוות', 'להעלים מידע'.<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>hide</strong> - להחביא / להסתיר. (Synonym). <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>reveal</strong> - לגלות / לחשוף (זה ההיפך - Antonym).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>show</strong> - להראות (היפך).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>open</strong> - לפתוח.</li>
            </ul>
        </div>`,
        final_answer: "hide (להסתיר / להחביא)"
    },
    // --- שאלה 29 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Synonyms & Antonyms (מילים נרדפות והפכים)",
        question: "What is the opposite of 'permanent'?",
        options: [
            "temporary",
            "forever",
            "lasting",
            "eternal"
        ],
        correctAnswer: 0,
        hint: "עבודה permanent היא עבודה קבועה. מה ההיפך מקבוע?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח המילה:</strong><br>
            המילה <strong>permanent</strong> מתארת משהו קבוע, תמידי, שלא נועד להשתנות (כמו Permanent marker - טוש לא מחיק).<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות (Antonyms):</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>temporary</strong> - זמני. זהו ההיפך המדויק. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>forever</strong> - לתמיד (מילה נרדפת).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>lasting</strong> - ממושך / מחזיק מעמד.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>eternal</strong> - נצחי.</li>
            </ul>
        </div>`,
        final_answer: "temporary (זמני)"
    },
    // --- שאלה 30 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Synonyms & Antonyms (מילים נרדפות והפכים)",
        question: "Which word means the same as 'hazardous'?",
        options: [
            "dangerous",
            "safe",
            "secure",
            "easy"
        ],
        correctAnswer: 0,
        hint: "במעבדות רשום לעיתים 'Hazardous materials' (חומרים מסוכנים). מדובר בסיכון לבריאות או לשלמות.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח המילה:</strong><br>
            המילה <strong>hazardous</strong> נובעת מהמילה hazard (סכנה), ומשמעותה 'מסוכן' (לרוב בהקשרים של חומרים כימיים או תנאי דרך).<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות (Synonyms):</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>dangerous</strong> - מסוכן. זו המילה הנרדפת המדויקת ביותר. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>safe</strong> - בטוח (זהו ההיפך - Antonym).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>secure</strong> - מאובטח / בטוח.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>easy</strong> - קל.</li>
            </ul>
        </div>`,
        final_answer: "dangerous (מסוכן)"
    },
    // ========================================================================
    // תת נושא 7: Phrasal Verbs & Idioms (ניבים וביטויים)
    // 15 שאלות
    // ========================================================================

    // --- שאלה 1 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Phrasal Verbs & Idioms (ניבים וביטויים)",
        question: "Even though the math problem was very difficult, she refused to _____.",
        options: [
            "give up",
            "look up",
            "take off",
            "break down"
        ],
        correctAnswer: 0,
        hint: "היא סירבה 'להרים ידיים' או לפרוש למרות הקושי.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "למרות שבעיית המתמטיקה הייתה קשה מאוד, היא סירבה _____ (לוותר)."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>give up</strong> - לוותר / להיכנע. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>look up</strong> - לחפש מידע (במילון/באינטרנט) או לשאת עיניים.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>take off</strong> - להמריא / לפשוט בגד.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>break down</strong> - להתקלקל / להישבר נפשית.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            "Give up" הוא אחד הפעלים הפריזליים (Phrasal Verbs) הנפוצים ביותר לתיאור כניעה בפני קושי.
        </div>`,
        final_answer: "give up (לוותר / להיכנע)"
    },

    // --- שאלה 2 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Phrasal Verbs & Idioms (ניבים וביטויים)",
        question: "I am really _____ seeing my grandparents next weekend.",
        options: [
            "looking forward to",
            "getting along with",
            "running out of",
            "putting up with"
        ],
        correctAnswer: 0,
        hint: "ביטוי זה משמש כדי לתאר התרגשות או ציפייה חיובית לקראת אירוע עתידי.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "אני ממש _____ (מצפה בכיליון עיניים) לראות את סבא וסבתא שלי בסוף השבוע הבא."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>looking forward to</strong> - לצפות ל... / לחכות בקוצר רוח. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>getting along with</strong> - להסתדר עם (מישהו).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>running out of</strong> - אוזל ל... / נגמר המלאי של...</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>putting up with</strong> - להשלים עם מצב מעצבן / לסבול משהו.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            שימו לב לדקדוק: אחרי הביטוי "look forward to", הפועל הבא תמיד יקבל תוספת ing (לכן כתוב seeing).
        </div>`,
        final_answer: "looking forward to (מצפה ל... / מחכה ל...)"
    },

    // --- שאלה 3 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Phrasal Verbs & Idioms (ניבים וביטויים)",
        question: "Don't _____ your homework until the last minute; do it now!",
        options: [
            "put off",
            "call off",
            "show off",
            "turn off"
        ],
        correctAnswer: 0,
        hint: "לדחות דברים לרגע האחרון (דחיינות).",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "אל ת_____ (תדחה) את שיעורי הבית שלך לרגע האחרון; עשה אותם עכשיו!"<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>put off</strong> - לדחות (למועד מאוחר יותר). <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>call off</strong> - לבטל לחלוטין.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>show off</strong> - להשוויץ.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>turn off</strong> - לכבות (מכשיר חשמלי).</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            "Put off" משמעותו Procrastinate (לדחות מטלות).
        </div>`,
        final_answer: "put off (לדחות)"
    },

    // --- שאלה 4 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Phrasal Verbs & Idioms (ניבים וביטויים)",
        question: "I offered him a job at my company, but he decided to _____ it _____.",
        options: [
            "turn (it) down",
            "bring (it) up",
            "make (it) up",
            "work (it) out"
        ],
        correctAnswer: 0,
        hint: "הוא החליט לסרב להצעה או לדחות אותה.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "הצעתי לו עבודה בחברה שלי, אבל הוא החליט _____ (לדחות אותה)."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>turn down</strong> - לסרב / לדחות הצעה (וגם להנמיך ווליום). <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>bring up</strong> - להעלות נושא לדיון / לגדל ילדים.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>make up</strong> - להמציא / להשלים אחרי ריב.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>work out</strong> - לפתור בעיה / להתאמן.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            כאשר מסרבים בנימוס להזמנה או להצעת עבודה, משתמשים בביטוי "turn down".
        </div>`,
        final_answer: "turn down (לדחות הצעה / לסרב)"
    },

    // --- שאלה 5 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Phrasal Verbs & Idioms (ניבים וביטויים)",
        question: "We couldn't drive to Eilat because our car _____ in the middle of the highway.",
        options: [
            "broke down",
            "passed away",
            "ran away",
            "went on"
        ],
        correctAnswer: 0,
        hint: "מה קורה למכונית כשהמנוע שלה מפסיק לעבוד לפתע באמצע הכביש?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "לא יכולנו לנסוע לאילת כי המכונית שלנו _____ (התקלקלה) באמצע הכביש המהיר."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>broke down</strong> - התקלקלה (למכונות/רכבים), או נשבר מנטלית (לאנשים). <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>passed away</strong> - הלך לעולמו / נפטר (נאמר על בני אדם).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>ran away</strong> - ברח.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>went on</strong> - המשיך.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            הביטוי "break down" הוא הביטוי התקני לתקלה מכנית ברכב שמשביתה אותו.
        </div>`,
        final_answer: "broke down (התקלקלה)"
    },

    // --- שאלה 6 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Phrasal Verbs & Idioms (ניבים וביטויים)",
        question: "I need to go to the supermarket. We have _____ milk and bread.",
        options: [
            "run out of",
            "given up on",
            "looked down on",
            "caught up with"
        ],
        correctAnswer: 0,
        hint: "כשמצרכים נגמרים במקרר, אנו משתמשים בביטוי זה כדי לציין שהמלאי אזל.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "אני צריך ללכת לסופרמרקט. _____ (אזל לנו / נגמר לנו) החלב והלחם."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>run out of</strong> - לאזול / להיגמר (מלאי של משהו). <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>given up on</strong> - להתייאש ממישהו או משהו.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>looked down on</strong> - לזלזל / להסתכל מלמעלה.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>caught up with</strong> - להדביק את הפער עם...</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            כשאומרים "We ran out of time" או "We ran out of milk", הכוונה היא שהמצרך או הזמן הסתיימו לחלוטין.
        </div>`,
        final_answer: "run out of (אזל / נגמר המלאי)"
    },

    // --- שאלה 7 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Phrasal Verbs & Idioms (ניבים וביטויים)",
        question: "Don't worry about the history test. For me, it was a _____.",
        options: [
            "piece of cake",
            "drop in the ocean",
            "blessing in disguise",
            "pain in the neck"
        ],
        correctAnswer: 0,
        hint: "ביטוי (אידיום) מוכר המתאר משימה קלה מאוד לביצוע.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "אל תדאג לגבי מבחן ההיסטוריה. בשבילי, זה היה _____ (קלי קלות)."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות (Idioms):</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>piece of cake</strong> - קל מאוד / 'קלי קלות'. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>drop in the ocean</strong> - טיפה בים (חסר משמעות ביחס לתמונה הגדולה).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>blessing in disguise</strong> - מעז יצא מתוק / ברכה במסווה.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>pain in the neck</strong> - כאב ראש / מטרד (משהו מעצבן).</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            "Piece of cake" הוא ניב סלנגי שכיח שמשמעותו שהדבר לא דרש מאמץ כלל.
        </div>`,
        final_answer: "piece of cake (קלי קלות)"
    },

    // --- שאלה 8 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Phrasal Verbs & Idioms (ניבים וביטויים)",
        question: "It took me a long time to _____ how to solve this puzzle.",
        options: [
            "figure out",
            "pass out",
            "give away",
            "look after"
        ],
        correctAnswer: 0,
        hint: "הביטוי אומר 'להבין', 'לפצח' או 'לפתור' בעיה מסוימת.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "לקח לי הרבה זמן ל_____ (להבין/לפצח) איך לפתור את הפאזל הזה."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>figure out</strong> - להבין / למצוא פתרון לבעיה. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>pass out</strong> - להתעלף.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>give away</strong> - למסור בחינם / להסגיר סוד.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>look after</strong> - להשגיח על / לטפל ב...</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            To figure something out הוא המקבילה היומיומית ל-"Understand" כשמדובר בפתרון בעיה או חידה.
        </div>`,
        final_answer: "figure out (להבין / לפצח)"
    },

    // --- שאלה 9 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Phrasal Verbs & Idioms (ניבים וביטויים)",
        question: "Please _____ your little sister while I am at the grocery store.",
        options: [
            "look after",
            "look down",
            "take back",
            "give in"
        ],
        correctAnswer: 0,
        hint: "מה האם מבקשת מהאח הגדול לעשות לאחותו בזמן שהיא לא בבית?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "בבקשה _____ (תשגיח על) אחותך הקטנה בזמן שאני במכולת."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>look after</strong> - לטפל / להשגיח / לדאוג ל... <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>look down</strong> - להשפיל מבט (או לזלזל: look down on).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>take back</strong> - לקחת חזרה / לחזור בך ממה שאמרת.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>give in</strong> - להיכנע / לוותר.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            "Look after" הוא מילה נרדפת ל-"Take care of", ומתייחס לשמירה על בני אדם, חיות מחמד או רכוש.
        </div>`,
        final_answer: "look after (להשגיח / לטפל ב...)"
    },

    // --- שאלה 10 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Phrasal Verbs & Idioms (ניבים וביטויים)",
        question: "I hadn't seen her for years, and then she called me _____.",
        options: [
            "out of the blue",
            "in the red",
            "over the moon",
            "under the weather"
        ],
        correctAnswer: 0,
        hint: "ביטוי זה מתאר משהו שקורה באופן פתאומי לחלוטין, ללא אזהרה מוקדמת.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "לא ראיתי אותה שנים, ואז היא התקשרה אליי _____ (בהפתעה גמורה / משום מקום)."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח אידיומים (Idioms):</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>out of the blue</strong> - בהפתעה מוחלטת, ללא התראה ("כרעם ביום בהיר"). <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>in the red</strong> - בחובות כספיים / באוברדרפט.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>over the moon</strong> - מאושר עד הגג / בעננים.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>under the weather</strong> - מרגיש קצת חולה.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            הביטוי מגיע מהדימוי של ברק שמכה לפתע מתוך שמיים כחולים ונקיים.
        </div>`,
        final_answer: "out of the blue (בהפתעה מוחלטת / משום מקום)"
    },

    // --- שאלה 11 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Phrasal Verbs & Idioms (ניבים וביטויים)",
        question: "If you don't understand the meaning of the word, _____ in the dictionary.",
        options: [
            "look it up",
            "make it up",
            "put it out",
            "give it away"
        ],
        correctAnswer: 0,
        hint: "לחפש מידע ספציפי (כמו מספר טלפון או פירוש מילה) בתוך ספר או מאגר נתונים.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "אם אינך מבין את פירוש המילה, _____ (חפש אותה) במילון."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>look (it) up</strong> - לחפש מידע / לבדוק בספר עיון. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>make (it) up</strong> - להמציא (סיפור או תירוץ).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>put (it) out</strong> - לכבות אש / לפרסם.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>give (it) away</strong> - לחלק בחינם / למסור.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            "Look up" הוא הפועל הספציפי לחיפוש הגדרות, עובדות או מספרים במקור מידע.
        </div>`,
        final_answer: "look it up (לחפש מידע/פירוש במקור מידע)"
    },

    // --- שאלה 12 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Phrasal Verbs & Idioms (ניבים וביטויים)",
        question: "The two brothers are very different, but they _____ very well.",
        options: [
            "get along",
            "fall apart",
            "break in",
            "show off"
        ],
        correctAnswer: 0,
        hint: "למרות שהם שונים, יש להם מערכת יחסים טובה והם מסתדרים זה עם זה.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "שני האחים מאוד שונים, אבל הם _____ (מסתדרים) טוב מאוד."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>get along</strong> - להסתדר / להיות ביחסים טובים. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>fall apart</strong> - להתפרק (מילולית או רגשית).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>break in</strong> - לפרוץ פנימה.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>show off</strong> - להשוויץ / להתרברב.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            "To get along" פירושו להיות ביחסי חברות תקינים ללא מריבות.
        </div>`,
        final_answer: "get along (להסתדר יחד)"
    },

    // --- שאלה 13 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Phrasal Verbs & Idioms (ניבים וביטויים)",
        question: "Please stop talking and _____ with your work.",
        options: [
            "get on",
            "make up",
            "turn down",
            "run over"
        ],
        correctAnswer: 0,
        hint: "מה אומרים למישהו כרוצים שימשיך לבצע את המשימה שהתחיל?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "בבקשה תפסיק לדבר ו_____ (תמשיך) בעבודתך."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>get on (with)</strong> - להמשיך במשימה מסוימת (Go ahead). <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>make up</strong> - להמציא / להשלים אחרי ריב.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>turn down</strong> - לסרב.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>run over</strong> - לדרוס.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            הביטוי "Get on with it" משמעותו: "קדימה, תמשיך לעבוד, אל תתעכב".
        </div>`,
        final_answer: "get on (להמשיך הלאה במשימה)"
    },

    // --- שאלה 14 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Phrasal Verbs & Idioms (ניבים וביטויים)",
        question: "I was sick for a week, so now I have to _____ on all the school materials I missed.",
        options: [
            "catch up",
            "give up",
            "bring up",
            "grow up"
        ],
        correctAnswer: 0,
        hint: "כשחסרים לכם חומרים כי לא הייתם בכיתה, אתם צריכים 'להדביק את הפער'.",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "הייתי חולה במשך שבוע, אז עכשיו אני חייב _____ (להשלים פערים) לגבי כל חומרי הלימוד שפספסתי."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח האפשרויות:</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>catch up (on/with)</strong> - להדביק פערים / להשלים חוסרים. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>give up</strong> - לוותר.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>bring up</strong> - להעלות נושא / לגדל.</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>grow up</strong> - להתבגר / לגדול.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            "To catch up" פירושו להגיע לאותה נקודה שבה נמצאים האחרים, במקרה זה בלימודים (או בהליכה/ריצה משותפת).
        </div>`,
        final_answer: "catch up (להשלים פערים / להדביק את הקצב)"
    },

    // --- שאלה 15 ---
    {
        subject: "אנגלית",
        topic: "אוצר מילים",
        subTopic: "Phrasal Verbs & Idioms (ניבים וביטויים)",
        question: "You have been thinking about this job offer for days. It's time to _____.",
        options: [
            "make up your mind",
            "call it a day",
            "break the ice",
            "let the cat out of the bag"
        ],
        correctAnswer: 0,
        hint: "כשחושבים יותר מדי על משהו, מגיע הרגע שבו צריך להחליט (Decide). איזה ביטוי מקביל ל'לקבל החלטה'?",
        solution: `<div style='text-align: right; line-height: 1.6; font-size: 1.05rem;'>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>תרגום המשפט:</strong><br>
            "אתה חושב על הצעת העבודה הזו כבר ימים. הגיע הזמן _____ (להחליט)."<br><br>
            <strong style='color: var(--primary-blue); font-size: 1.15rem;'>ניתוח אידיומים (Idioms):</strong>
            <ul style='margin-top: 5px; padding-right: 20px;'>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>make up your mind</strong> - לקבל החלטה / להחליט. <span style='color: #166534;'>(התשובה הנכונה)</span></li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>call it a day</strong> - 'לסגור את הבאסטה' (לסיים לעבוד להיום).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>break the ice</strong> - לשבור את הקרח (להתחיל בשיחה עם אדם זר).</li>
                <li style='margin-bottom: 8px;'><strong style='font-family: sans-serif;' dir='ltr'>let the cat out of the bag</strong> - לחשוף סוד שלא היה אמור להתגלות.</li>
            </ul>
            <strong style='color: #166534; font-size: 1.15rem;'>השורה התחתונה:</strong><br>
            "Make up one's mind" הוא הביטוי השגור ביותר לקבלת החלטות סופיות לאחר התלבטות.
        </div>`,
        final_answer: "make up your mind (לקבל החלטה / להחליט)"
    }
];