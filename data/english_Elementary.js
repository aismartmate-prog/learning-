// ========================================================================
// נושא: אנגלית (English)
// כיתות: יסודי ה'-ו' (Elementary School)
// תתי נושאים: Basic Vocabulary + Pronouns & Be verb
// רמה: יסודי - מותאם תוכנית הלימודים של משרד החינוך (Band 1)
// ========================================================================

const questionsDB = [

    // ---------------------------------------------------------
    // Subtopic 1: Basic Vocabulary (חיות, צבעים, מספרים, משפחה)
    // ---------------------------------------------------------

    // Question 1
    {
        topic: "english",
        subTopic: "Basic Vocabulary (חיות, צבעים, מספרים, משפחה)",
        question_text: `<strong>Colors (צבעים):</strong><br>
        השלימו את המשפט הבא עם הצבע הנכון:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">The sky is blue and the sun is ________.</span>`,
        options: [
            "<span dir=\"ltr\">yellow</span>",
            "<span dir=\"ltr\">green</span>",
            "<span dir=\"ltr\">red</span>",
            "<span dir=\"ltr\">black</span>"
        ],
        correctAnswer: 0,
        hint: "Sun משמעותו שמש. באיזה צבע השמש?",
        solution: `<strong>הסבר מלא:</strong><br>
        המשפט באנגלית אומר: "השמיים הם כחולים (blue) והשמש היא..."<br>
        התשובה הנכונה היא צהובה - <strong>yellow</strong>.<br><br>
        <strong>אוצר מילים שכדאי לזכור:</strong><br>
        <ul>
            <li><span dir="ltr"><strong>Blue</strong></span> - כחול</li>
            <li><span dir="ltr"><strong>Yellow</strong></span> - צהוב</li>
            <li><span dir="ltr"><strong>Green</strong></span> - ירוק</li>
            <li><span dir="ltr"><strong>Red</strong></span> - אדום</li>
            <li><span dir="ltr"><strong>Black</strong></span> - שחור</li>
        </ul>`
    },

    // Question 2
    {
        topic: "english",
        subTopic: "Basic Vocabulary (חיות, צבעים, מספרים, משפחה)",
        question_text: `<strong>Family (משפחה):</strong><br>
        השלימו את המשפט בהתאם לקשר המשפחתי:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">My mother's brother is my ________.</span>`,
        options: [
            "<span dir=\"ltr\">uncle</span>",
            "<span dir=\"ltr\">grandfather</span>",
            "<span dir=\"ltr\">cousin</span>",
            "<span dir=\"ltr\">sister</span>"
        ],
        correctAnswer: 0,
        hint: "האח (brother) של אמא שלי (mother). איך קוראים בעברית לאח של אמא?",
        solution: `<strong>הסבר מלא:</strong><br>
        המשפט מתורגם כך: "האח של אמא שלי הוא ה... שלי".<br>
        האח של אמא (או אבא) הוא ה<strong>דוד</strong> שלנו. באנגלית: <strong>Uncle</strong>.<br><br>
        <strong>בואו נלמד בני משפחה חשובים:</strong><br>
        <ul>
            <li><span dir="ltr"><strong>Uncle</strong></span> - דוד</li>
            <li><span dir="ltr"><strong>Aunt</strong></span> - דודה</li>
            <li><span dir="ltr"><strong>Grandfather / Grandpa</strong></span> - סבא</li>
            <li><span dir="ltr"><strong>Cousin</strong></span> - בן דוד / בת דודה</li>
            <li><span dir="ltr"><strong>Sister</strong></span> - אחות</li>
        </ul>`
    },

    // Question 3
    {
        topic: "english",
        subTopic: "Basic Vocabulary (חיות, צבעים, מספרים, משפחה)",
        question_text: `<strong>Numbers (מספרים):</strong><br>
        פתרו את התרגיל הבא באנגלית:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">Five plus (+) four is ________.</span>`,
        options: [
            "<span dir=\"ltr\">nine</span>",
            "<span dir=\"ltr\">eight</span>",
            "<span dir=\"ltr\">ten</span>",
            "<span dir=\"ltr\">seven</span>"
        ],
        correctAnswer: 0,
        hint: "חשבו את התרגיל במספרים: 5 ועוד 4. מה התוצאה ואיך אומרים אותה באנגלית?",
        solution: `<strong>הסבר מלא:</strong><br>
        התרגיל הוא: חמש (Five) פלוס ארבע (four). <br>
        <span dir="ltr">5 + 4 = 9</span>.<br>
        המספר 9 באנגלית הוא <strong>Nine</strong>.<br><br>
        <strong>חזרה על המספרים 6 עד 10:</strong><br>
        <ul>
            <li><span dir="ltr">6 = <strong>Six</strong></span></li>
            <li><span dir="ltr">7 = <strong>Seven</strong></span></li>
            <li><span dir="ltr">8 = <strong>Eight</strong></span></li>
            <li><span dir="ltr">9 = <strong>Nine</strong></span></li>
            <li><span dir="ltr">10 = <strong>Ten</strong></span></li>
        </ul>`
    },

    // Question 4
    {
        topic: "english",
        subTopic: "Basic Vocabulary (חיות, צבעים, מספרים, משפחה)",
        question_text: `<strong>Animals (חיות):</strong><br>
        קראו את המשפט ובחרו את המספר הנכון להשלמה:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">A dog has four legs, but a bird has ________ legs.</span>`,
        options: [
            "<span dir=\"ltr\">two</span>",
            "<span dir=\"ltr\">three</span>",
            "<span dir=\"ltr\">six</span>",
            "<span dir=\"ltr\">four</span>"
        ],
        correctAnswer: 0,
        hint: "כמה רגליים (legs) יש לציפור (bird)?",
        solution: `<strong>הסבר מלא:</strong><br>
        המשפט אומר: "לכלב (dog) יש ארבע רגליים, אבל לציפור (bird) יש... רגליים".<br>
        לציפורים יש שתי רגליים, ולכן התשובה היא <strong>Two</strong> (שתיים).<br><br>
        <strong>מילים חשובות מהמשפט:</strong><br>
        <ul>
            <li><span dir="ltr"><strong>Dog</strong></span> - כלב</li>
            <li><span dir="ltr"><strong>Bird</strong></span> - ציפור</li>
            <li><span dir="ltr"><strong>Legs</strong></span> - רגליים</li>
            <li><span dir="ltr"><strong>Has</strong></span> - יש לו/לה</li>
        </ul>`
    },

    // Question 5
    {
        topic: "english",
        subTopic: "Basic Vocabulary (חיות, צבעים, מספרים, משפחה)",
        question_text: `<strong>Categories (קטגוריות):</strong><br>
        איזו מהמילים הבאות <strong>אינה</strong> שייכת לקבוצת בעלי החיים (Animals)?`,
        options: [
            "<span dir=\"ltr\">Apple</span>",
            "<span dir=\"ltr\">Cat</span>",
            "<span dir=\"ltr\">Lion</span>",
            "<span dir=\"ltr\">Fish</span>"
        ],
        correctAnswer: 0,
        hint: "חפשו את המילה שהיא בעצם סוג של אוכל (פרי) ולא חיה.",
        solution: `<strong>הסבר מלא:</strong><br>
        כדי לפתור שאלות יוצא דופן (Odd one out), עלינו לתרגם את המילים:<br>
        <ul>
            <li><span dir="ltr"><strong>Cat</strong></span> - חתול (חיה)</li>
            <li><span dir="ltr"><strong>Lion</strong></span> - אריה (חיה)</li>
            <li><span dir="ltr"><strong>Fish</strong></span> - דג (חיה)</li>
            <li><span dir="ltr"><strong>Apple</strong></span> - תפוח (פרי - Fruit).</li>
        </ul>
        לכן, <strong>Apple</strong> היא המילה שאינה שייכת לקבוצת החיות.`
    },

    // Question 6
    {
        topic: "english",
        subTopic: "Basic Vocabulary (חיות, צבעים, מספרים, משפחה)",
        question_text: `<strong>Family (משפחה):</strong><br>
        השלימו את המשפט הבא:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">My parents are my mother and my ________.</span>`,
        options: [
            "<span dir=\"ltr\">father</span>",
            "<span dir=\"ltr\">sister</span>",
            "<span dir=\"ltr\">grandmother</span>",
            "<span dir=\"ltr\">boy</span>"
        ],
        correctAnswer: 0,
        hint: "המילה Parents משמעותה 'הורים'. ההורים שלי הם אמא שלי ו...?",
        solution: `<strong>הסבר מלא:</strong><br>
        המשפט אומר: "ההורים שלי (Parents) הם אמא שלי (Mother) ו...".<br>
        הורה נוסף הוא כמובן האבא. באנגלית אבא זה <strong>Father</strong>.<br><br>
        <strong>מילים קשורות למשפחה הקרובה:</strong><br>
        <ul>
            <li><span dir="ltr"><strong>Parents</strong></span> - הורים</li>
            <li><span dir="ltr"><strong>Mother / Mom</strong></span> - אמא</li>
            <li><span dir="ltr"><strong>Father / Dad</strong></span> - אבא</li>
            <li><span dir="ltr"><strong>Brother</strong></span> - אח</li>
            <li><span dir="ltr"><strong>Sister</strong></span> - אחות</li>
        </ul>`
    },

    // Question 7
    {
        topic: "english",
        subTopic: "Basic Vocabulary (חיות, צבעים, מספרים, משפחה)",
        question_text: `<strong>Colors Mix (שילוב צבעים):</strong><br>
        קראו את המשפט ובחרו את הצבע המתקבל:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">If you mix red and white, you get ________.</span>`,
        options: [
            "<span dir=\"ltr\">pink</span>",
            "<span dir=\"ltr\">purple</span>",
            "<span dir=\"ltr\">brown</span>",
            "<span dir=\"ltr\">orange</span>"
        ],
        correctAnswer: 0,
        hint: "המילה mix משמעותה לערבב. מה קורה כשמערבבים אדום (red) ולבן (white)? מקבלים צבע ורוד.",
        solution: `<strong>הסבר מלא:</strong><br>
        המשפט אומר: "אם אתה מערבב (mix) אדום ולבן, אתה מקבל...".<br>
        אדום + לבן יוצרים צבע ורוד. באנגלית ורוד זה <strong>Pink</strong>.<br><br>
        <strong>צבעים נוספים שכדאי להכיר:</strong><br>
        <ul>
            <li><span dir="ltr"><strong>Pink</strong></span> - ורוד</li>
            <li><span dir="ltr"><strong>Purple</strong></span> - סגול</li>
            <li><span dir="ltr"><strong>Brown</strong></span> - חום</li>
            <li><span dir="ltr"><strong>Orange</strong></span> - כתום (וגם פרי התפוז!)</li>
        </ul>`
    },

    // Question 8
    {
        topic: "english",
        subTopic: "Basic Vocabulary (חיות, צבעים, מספרים, משפחה)",
        question_text: `<strong>Numbers Sequence (סדרות מספרים עשרוניות):</strong><br>
        איזה מספר חסר בסדרה הבאה?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">Ten, twenty, thirty, ________, fifty.</span>`,
        options: [
            "<span dir=\"ltr\">forty</span>",
            "<span dir=\"ltr\">fourteen</span>",
            "<span dir=\"ltr\">four</span>",
            "<span dir=\"ltr\">five</span>"
        ],
        correctAnswer: 0,
        hint: "זו סדרה בקפיצות של עשר. עשר (10), עשרים (20), שלושים (30)... מה בא אחרי 30?",
        solution: `<strong>הסבר מלא:</strong><br>
        בסדרה מופיעות העשרות: 10 (Ten), 20 (Twenty), 30 (Thirty).<br>
        המספר הבא בסדרה הוא 40. באנגלית קוראים לזה <strong>Forty</strong>.<br><br>
        <strong>שימו לב להבדלים החשובים הבאים:</strong><br>
        <ul>
            <li><span dir="ltr"><strong>Four</strong></span> - המספר 4 (ארבע)</li>
            <li><span dir="ltr"><strong>Fourteen</strong></span> - המספר 14 (ארבע-עשרה. כל מספר שמסתיים ב-teen הוא בגיל העשרה).</li>
            <li><span dir="ltr"><strong>Forty</strong></span> - המספר 40 (ארבעים. עשרות מסתיימות באות y).</li>
        </ul>`
    },

    // Question 9
    {
        topic: "english",
        subTopic: "Basic Vocabulary (חיות, צבעים, מספרים, משפחה)",
        question_text: `<strong>Animals Description (תיאור חיות):</strong><br>
        על איזו חיה מדובר במשפט הבא?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">This animal is very tall and has a long neck.</span>`,
        options: [
            "<span dir=\"ltr\">a giraffe</span>",
            "<span dir=\"ltr\">an elephant</span>",
            "<span dir=\"ltr\">a monkey</span>",
            "<span dir=\"ltr\">a snake</span>"
        ],
        correctAnswer: 0,
        hint: "Tall = גבוה. Long neck = צוואר ארוך. לאיזו חיה יש צוואר מאוד ארוך?",
        solution: `<strong>הסבר מלא:</strong><br>
        המשפט מתאר חיה: "החיה הזו מאוד גבוהה (tall) ויש לה צוואר (neck) ארוך (long)".<br>
        החיה בעלת הצוואר הארוך מכולן היא ה<strong>ג'ירפה (Giraffe)</strong>.<br><br>
        <strong>פירוש שאר החיות בתשובות:</strong><br>
        <ul>
            <li><span dir="ltr"><strong>Elephant</strong></span> - פיל (חיה גדולה - big)</li>
            <li><span dir="ltr"><strong>Monkey</strong></span> - קוף (אוהב בננות ולקפוץ)</li>
            <li><span dir="ltr"><strong>Snake</strong></span> - נחש (חיה ארוכה - long, אך ללא רגליים וללא צוואר).</li>
        </ul>`
    },

    // Question 10
    {
        topic: "english",
        subTopic: "Basic Vocabulary (חיות, צבעים, מספרים, משפחה)",
        question_text: `<strong>Everyday Words (מילות יומיום):</strong><br>
        השלימו את המשפט לפי ההיגיון של חלקי היום:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">We eat breakfast in the ________.</span>`,
        options: [
            "<span dir=\"ltr\">morning</span>",
            "<span dir=\"ltr\">evening</span>",
            "<span dir=\"ltr\">night</span>",
            "<span dir=\"ltr\">afternoon</span>"
        ],
        correctAnswer: 0,
        hint: "המילה Breakfast משמעותה ארוחת בוקר. מתי אוכלים ארוחת בוקר?",
        solution: `<strong>הסבר מלא:</strong><br>
        המשפט אומר: "אנחנו אוכלים ארוחת בוקר (breakfast) ב...".<br>
        ארוחת בוקר אוכלים כמובן בבוקר. באנגלית בוקר זה <strong>Morning</strong>.<br><br>
        <strong>חלקי היום באנגלית (Parts of the Day):</strong><br>
        <ul>
            <li><span dir="ltr"><strong>Morning</strong></span> - בוקר (ארוחה: Breakfast)</li>
            <li><span dir="ltr"><strong>Afternoon</strong></span> - אחר הצהריים (ארוחה: Lunch - צהריים)</li>
            <li><span dir="ltr"><strong>Evening</strong></span> - ערב (ארוחה: Dinner - ארוחת ערב)</li>
            <li><span dir="ltr"><strong>Night</strong></span> - לילה (זמן לישון!)</li>
        </ul>`
    },


    // ---------------------------------------------------------
    // Subtopic 2: Pronouns & Be verb (Am, Is, Are)
    // ---------------------------------------------------------

    // Question 11
    {
        topic: "english",
        subTopic: "Pronouns & Be verb (Am, Is, Are)",
        question_text: `<strong>The Verb To Be (פועל העזר 'להיות'):</strong><br>
        בחרו את הפועל המתאים להשלמת המשפט:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">Hello, I ________ Dan.</span>`,
        options: [
            "<span dir=\"ltr\">am</span>",
            "<span dir=\"ltr\">is</span>",
            "<span dir=\"ltr\">are</span>",
            "<span dir=\"ltr\">be</span>"
        ],
        correctAnswer: 0,
        hint: "הכינוי 'I' (אני) הוא מיוחד, ויש לו פועל To Be ששייך אך ורק לו ומתחיל באות a.",
        solution: `<strong>הסבר מלא (חוקי פועל To Be):</strong><br>
        באנגלית, אנחנו לא אומרים "אני דן", אלא צריכים להגיד "אני *הינו* דן". הפועל שמתאר "הינו" קרוי פועל <strong>To Be</strong> (להיות).<br><br>
        הפועל משתנה לפי מי שמדבר (הגוף):<br>
        <table dir="ltr" style="width:100%; border-collapse: collapse; margin-top:10px; text-align:left;">
            <tr style="background:#e2e8f0;">
                <th style="padding:5px; border:1px solid #cbd5e1;">Pronoun (כינוי גוף)</th>
                <th style="padding:5px; border:1px solid #cbd5e1;">Verb To Be</th>
            </tr>
            <tr><td style="padding:5px; border:1px solid #cbd5e1;">I (אני)</td><td style="padding:5px; border:1px solid #cbd5e1; font-weight:bold; color:#dc2626;">am</td></tr>
            <tr><td style="padding:5px; border:1px solid #cbd5e1;">He / She / It (הוא/היא/זה)</td><td style="padding:5px; border:1px solid #cbd5e1; font-weight:bold; color:#16a34a;">is</td></tr>
            <tr><td style="padding:5px; border:1px solid #cbd5e1;">We / You / They (אנחנו/אתם/הם)</td><td style="padding:5px; border:1px solid #cbd5e1; font-weight:bold; color:#2563eb;">are</td></tr>
        </table>
        <br>
        מכיוון שהמשפט מתחיל ב-<strong>I</strong>, התשובה היחידה היא <strong>am</strong>.`
    },

    // Question 12
    {
        topic: "english",
        subTopic: "Pronouns & Be verb (Am, Is, Are)",
        question_text: `<strong>Subject Pronouns (כינויי גוף):</strong><br>
        השלימו את המשפט השני בכינוי הגוף הנכון:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">Sara is my friend. ________ is 10 years old.</span>`,
        options: [
            "<span dir=\"ltr\">She</span>",
            "<span dir=\"ltr\">He</span>",
            "<span dir=\"ltr\">It</span>",
            "<span dir=\"ltr\">They</span>"
        ],
        correctAnswer: 0,
        hint: "Sara (שרה) היא בת (נקבה יחידה). איזה כינוי גוף מחליף שם של בת?",
        solution: `<strong>הסבר מלא:</strong><br>
        כדי לא לחזור על השם "Sara" שוב ושוב, אנחנו משתמשים בכינוי גוף (Pronoun).<br>
        מכיוון ששרה היא בת יחידה (נקבה), הכינוי המתאים הוא "היא", ובאנגלית <strong>She</strong>.<br><br>
        <strong>מילון כינויי גוף בסיסי:</strong><br>
        <ul>
            <li><span dir="ltr"><strong>He</strong></span> - הוא (לבנים/גברים)</li>
            <li><span dir="ltr"><strong>She</strong></span> - היא (לבנות/נשים)</li>
            <li><span dir="ltr"><strong>It</strong></span> - זה / הוא / היא (לחיות או חפצים יחידים - למשל כלב או שולחן)</li>
            <li><span dir="ltr"><strong>They</strong></span> - הם / הן (לרבים)</li>
        </ul>`
    },

    // Question 13
    {
        topic: "english",
        subTopic: "Pronouns & Be verb (Am, Is, Are)",
        question_text: `<strong>To Be in Plural (פועל To Be ברבים):</strong><br>
        בחרו את הפועל המתאים:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">My parents ________ at home today.</span>`,
        options: [
            "<span dir=\"ltr\">are</span>",
            "<span dir=\"ltr\">is</span>",
            "<span dir=\"ltr\">am</span>",
            "<span dir=\"ltr\">be</span>"
        ],
        correctAnswer: 0,
        hint: "המילה Parents משמעותה 'הורים'. יש פה יותר מאדם אחד (רבים = They). איזה פועל To Be הולך עם רבים?",
        solution: `<strong>הסבר מלא:</strong><br>
        הנושא במשפט הוא <span dir="ltr">"My parents"</span> (ההורים שלי). <br>
        "הורים" הם יותר מאדם אחד (רבים). אם נרצה להחליף אותם בכינוי גוף, נשתמש במילה <span dir="ltr"><strong>They</strong></span> (הם).<br><br>
        לפי חוקי הדקדוק, עם כינויי הגוף של רבים (We, You, They) תמיד נשתמש בפועל <strong>are</strong>.<br>
        לכן המשפט הנכון הוא: <span dir="ltr">My parents <strong>are</strong> at home</span>.`
    },

    // Question 14
    {
        topic: "english",
        subTopic: "Pronouns & Be verb (Am, Is, Are)",
        question_text: `<strong>Replacing Nouns with Pronouns (החלפת שמות עצם):</strong><br>
        איזה כינוי גוף יכול להחליף את המילים המודגשות?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;"><u>The dog</u> is very big. ________ is brown.</span>`,
        options: [
            "<span dir=\"ltr\">It</span>",
            "<span dir=\"ltr\">He</span>",
            "<span dir=\"ltr\">They</span>",
            "<span dir=\"ltr\">She</span>"
        ],
        correctAnswer: 0,
        hint: "The dog (הכלב) הוא חיה ביחיד (חיה אחת). באנגלית יש כינוי גוף מיוחד לחיות ולחפצים ביחיד.",
        solution: `<strong>הסבר מלא:</strong><br>
        באנגלית, כשאנחנו מדברים על חיה אחת (כמו כלב, חתול, פיל) או על חפץ אחד (שולחן, מחשב, בית), אנחנו לא משתמשים ב-He או She.<br><br>
        המילה המיוחדת שנועדה לתאר בעלי חיים ודוממים ביחיד היא <strong>It</strong> (זה).<br>
        לכן, במקום להגיד "הכלב הוא חום", אפשר פשוט להגיד: <span dir="ltr"><strong>It</strong> is brown</span>.<br><br>
        <em>*הערה: אם מדובר בחיית מחמד פרטית של המשפחה שיודעים מה מינה, לפעמים דוברי אנגלית כן משתמשים ב-He/She, אבל בלימודי דקדוק רשמיים חיה היא תמיד It.</em>`
    },

    // Question 15
    {
        topic: "english",
        subTopic: "Pronouns & Be verb (Am, Is, Are)",
        question_text: `<strong>Negative Sentences (משפטי שלילה):</strong><br>
        השלימו את המשפט השלילי הבא:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">I ________ not a teacher. I am a student.</span>`,
        options: [
            "<span dir=\"ltr\">am</span>",
            "<span dir=\"ltr\">is</span>",
            "<span dir=\"ltr\">are</span>",
            "<span dir=\"ltr\">do</span>"
        ],
        correctAnswer: 0,
        hint: "כדי לעשות שלילה מוסיפים את המילה not אחרי פועל ה-To Be הרגיל. מהו פועל ה-To be שהולך עם האות I?",
        solution: `<strong>הסבר מלא (יצירת שלילה):</strong><br>
        כדי להגיד משפט שלילי (למשל "אני לא..."), אנחנו פשוט מוסיפים את המילה <strong>not</strong> (לא) <u>מיד אחרי</u> פועל ה-To Be.<br><br>
        מכיוון שהמשפט מתחיל ב-<strong>I</strong> (אני), הפועל ששייך אליו הוא <strong>am</strong>.<br>
        לכן, כדי להגיד "אני לא מורה", נרכיב: <span dir="ltr">I + <strong>am</strong> + not a teacher</span>.<br><br>
        <strong>קיצורים (Short forms):</strong><br>
        באנגלית אוהבים לחבר מילים:
        <ul>
            <li><span dir="ltr">I am not -> I'm not</span></li>
            <li><span dir="ltr">He is not -> He isn't</span></li>
            <li><span dir="ltr">They are not -> They aren't</span></li>
        </ul>`
    },

    // Question 16
    {
        topic: "english",
        subTopic: "Pronouns & Be verb (Am, Is, Are)",
        question_text: `<strong>Questions with To Be (שאלות עם פועל העזר):</strong><br>
        איך מתחילים את השאלה הבאה?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">________ you from Israel?</span>`,
        options: [
            "<span dir=\"ltr\">Are</span>",
            "<span dir=\"ltr\">Is</span>",
            "<span dir=\"ltr\">Am</span>",
            "<span dir=\"ltr\">Do</span>"
        ],
        correctAnswer: 0,
        hint: "כדי לשאול שאלה באנגלית, הפועל To Be קופץ לתחילת המשפט! מהו פועל ה-To Be שהולך עם המילה You (אתה)?",
        solution: `<strong>הסבר מלא (בניית שאלות כן/לא):</strong><br>
        בשפה האנגלית, כשרוצים לשאול שאלה שמקבלת תשובת כן/לא (האם אתה...), מבצעים <strong>היפוך</strong>. פועל ה-To Be קופץ לעמוד ראשון בתחילת המשפט!<br><br>
        <strong>השלבים:</strong><br>
        1. משפט רגיל: <span dir="ltr"><strong>You are</strong> from Israel</span>. (אתה מישראל).<br>
        2. הופכים לשאלה: <span dir="ltr"><strong>Are you</strong> from Israel?</span> (האם אתה מישראל?).<br><br>
        מכיוון שהנושא במשפט הוא <span dir="ltr"><strong>you</strong></span>, פועל העזר המתאים הוא <strong>Are</strong>. אל תשכחו שזו המילה הראשונה במשפט ולכן היא מתחילה באות גדולה (Capital A).`
    },

    // Question 17
    {
        topic: "english",
        subTopic: "Pronouns & Be verb (Am, Is, Are)",
        question_text: `<strong>Tricky Singular Nouns (שמות עצם יחיד מבלבלים):</strong><br>
        בחרו את הפועל המתאים:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">The apple ________ red and tasty.</span>`,
        options: [
            "<span dir=\"ltr\">is</span>",
            "<span dir=\"ltr\">are</span>",
            "<span dir=\"ltr\">am</span>",
            "<span dir=\"ltr\">it</span>"
        ],
        correctAnswer: 0,
        hint: "The apple משמעותו 'התפוח'. זהו חפץ/אוכל אחד ביחיד (שקול לכינוי הגוף It).",
        solution: `<strong>הסבר מלא:</strong><br>
        כשיש לנו שם של חפץ במשפט ולא כינוי גוף (כמו I, He, She), אנחנו צריכים בראש "לתרגם" אותו לכינוי גוף כדי לדעת איזה פועל לשים.<br><br>
        <span dir="ltr"><strong>The apple</strong></span> (התפוח) הוא שם עצם דומם ביחיד. הכינוי שמתאים לו הוא <span dir="ltr"><strong>It</strong></span>.<br>
        אנו יודעים שהחוק אומר שעבור He / She / It אנו משתמשים בפועל <strong>is</strong>.<br>
        לכן התשובה הנכונה היא: <span dir="ltr">The apple <strong>is</strong> red.</span><br><br>
        <em>*אם היה כתוב The apples (התפוחים - ברבים), הפועל היה הופך ל-are.</em>`
    },

    // Question 18
    {
        topic: "english",
        subTopic: "Pronouns & Be verb (Am, Is, Are)",
        question_text: `<strong>Compound Subjects (נושאים מורכבים):</strong><br>
        איזה פועל מתאים למשפט הבא?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">Tom and I ________ good friends.</span>`,
        options: [
            "<span dir=\"ltr\">are</span>",
            "<span dir=\"ltr\">am</span>",
            "<span dir=\"ltr\">is</span>",
            "<span dir=\"ltr\">be</span>"
        ],
        correctAnswer: 0,
        hint: "היזהרו ממלכודת! הרבה תלמידים רואים את המילה 'I' ומיד בוחרים 'am'. אבל שימו לב מי מבצע את הפעולה: 'טום ואני' (אנחנו - We).",
        solution: `<strong>הסבר מלא (מניעת טעויות נפוצות):</strong><br>
        זוהי אחת משאלות ה'מלכודת' הנפוצות ביותר במבחני אנגלית!<br><br>
        כאשר תלמיד רואה את המילה <span dir="ltr"><strong>I</strong></span>, היד שלו אוטומטית רוצה לבחור <span dir="ltr"><strong>am</strong></span>.<br>
        אך כאן, הנושא של המשפט הוא לא רק "אני", אלא הקבוצה <span dir="ltr"><strong>Tom and I</strong></span> (טום ואני).<br><br>
        "טום ואני" זו קבוצה שמשמעותה בעברית "אנחנו" (<span dir="ltr"><strong>We</strong></span>).<br>
        מכיוון שהפועל ששייך ל-We הוא <strong>are</strong>, זוהי התשובה הנכונה.<br>
        המשפט הנכון: <span dir="ltr">Tom and I <strong>are</strong> good friends</span>.`
    },

    // Question 19
    {
        topic: "english",
        subTopic: "Pronouns & Be verb (Am, Is, Are)",
        question_text: `<strong>Identifying Plural Pronouns (זיהוי כינויי גוף ברבים):</strong><br>
        השלימו את המשפט בעזרת כינוי הגוף הנכון:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">Look at the boys! ________ are playing football.</span>`,
        options: [
            "<span dir=\"ltr\">They</span>",
            "<span dir=\"ltr\">He</span>",
            "<span dir=\"ltr\">We</span>",
            "<span dir=\"ltr\">It</span>"
        ],
        correctAnswer: 0,
        hint: "המילה boys (בנים) מסתיימת באות 's', מה שאומר שמדובר ברבים. איזה כינוי גוף מתאר אנשים רבים ('הם')?",
        solution: `<strong>הסבר מלא:</strong><br>
        המשפט הראשון אומר: "הסתכלו על הבנים (the boys)!". האות s בסוף המילה מעידה על צורת הרבים.<br>
        כדי להמשיך לדבר עליהם במשפט הבא בלי להגיד שוב "הבנים", נשתמש במילה שמשמעותה "הם".<br>
        באנגלית, "הם" (או "הן") מתורגם למילה <strong>They</strong>.<br><br>
        <strong>למה התשובות האחרות שגויות?</strong>
        <ul>
            <li><span dir="ltr"><strong>He</strong></span> - אומרים רק על בן אחד ביחיד (הוא).</li>
            <li><span dir="ltr"><strong>We</strong></span> - אומרים כש'אני' נמצא בתוך הקבוצה (אנחנו). כאן אנחנו רק מסתכלים עליהם מרחוק.</li>
        </ul>`
    },

    // Question 20
    {
        topic: "english",
        subTopic: "Pronouns & Be verb (Am, Is, Are)",
        question_text: `<strong>Mixed Context (שילוב יחיד וראשון):</strong><br>
        בחרו את הצמד הנכון להשלמת המשפט (שימו לב לסדר!):<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">My name ________ Maya, and I ________ a pupil.</span>`,
        options: [
            "<span dir=\"ltr\">is / am</span>",
            "<span dir=\"ltr\">am / is</span>",
            "<span dir=\"ltr\">is / is</span>",
            "<span dir=\"ltr\">are / am</span>"
        ],
        correctAnswer: 0,
        hint: "בחלק הראשון, הנושא הוא 'השם שלי' (My name) - שזה חפץ/דבר ביחיד (It). בחלק השני, הנושא הוא 'אני' (I).",
        solution: `<strong>הסבר מלא (פירוק המשפט לשניים):</strong><br>
        כשיש לנו שני חלקים במשפט, נבדוק כל אחד בנפרד:<br><br>
        <strong>חלק ראשון:</strong> <span dir="ltr">My name... Maya</span>.<br>
        הנושא כאן הוא <span dir="ltr">"My name"</span> (השם שלי). שם זה דבר/מושג ביחיד, שמקביל לכינוי הגוף <span dir="ltr"><strong>It</strong></span>. הפועל שמתאים ליחיד הוא <strong>is</strong>. <br>
        <span dir="ltr">(My name <strong>is</strong> Maya)</span>.<br><br>
        <strong>חלק שני:</strong> <span dir="ltr">...and I... a pupil</span>.<br>
        הנושא כאן הוא כינוי הגוף <span dir="ltr"><strong>I</strong></span> (אני). הפועל היחיד והמיוחד שמתאים לו הוא <strong>am</strong>. <br>
        <span dir="ltr">(I <strong>am</strong> a pupil)</span>.<br><br>
        לכן, הזוג הנכון (בסדר הנכון) הוא <strong>is / am</strong>.`
    },// ---------------------------------------------------------
    // Subtopic 3: Have / Has got (שאלות 21-35)
    // ---------------------------------------------------------

    // Question 21
    {
        topic: "english",
        subTopic: "Have / Has got",
        question_text: `<strong>Basic Ownership (שייכות בסיסית - I):</strong><br>
        בחרו את הפועל המתאים להשלמת המשפט:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">I ________ got a new bicycle.</span>`,
        options: [
            "<span dir=\"ltr\">have</span>",
            "<span dir=\"ltr\">has</span>",
            "<span dir=\"ltr\">am</span>",
            "<span dir=\"ltr\">is</span>"
        ],
        correctAnswer: 0,
        hint: "כשאנחנו מדברים על עצמנו ('I'), אנחנו משתמשים בצורה הרגילה של הפועל - Have.",
        solution: `<strong>הסבר מלא (חוקי Have / Has got):</strong><br>
        הביטוי <span dir="ltr"><strong>Have got / Has got</strong></span> משמעותו "יש ל..." (שייכות).<br>
        החוק באנגלית הוא פשוט מאוד ומבוסס על כינויי הגוף:<br>
        <table dir="ltr" style="width:100%; border-collapse: collapse; margin-top:10px; text-align:left;">
            <tr style="background:#e2e8f0;">
                <th style="padding:5px; border:1px solid #cbd5e1;">Pronoun (כינוי גוף)</th>
                <th style="padding:5px; border:1px solid #cbd5e1;">Verb (פועל)</th>
            </tr>
            <tr><td style="padding:5px; border:1px solid #cbd5e1;">I, You, We, They</td><td style="padding:5px; border:1px solid #cbd5e1; font-weight:bold; color:#2563eb;">have got</td></tr>
            <tr><td style="padding:5px; border:1px solid #cbd5e1;">He, She, It (גוף שלישי יחיד)</td><td style="padding:5px; border:1px solid #cbd5e1; font-weight:bold; color:#dc2626;">has got</td></tr>
        </table>
        <br>
        במשפט שלנו הנושא הוא <span dir="ltr"><strong>I</strong></span> (אני), ולכן התשובה הנכונה היא <span dir="ltr"><strong>have</strong></span>.`
    },
    // Question 22
    {
        topic: "english",
        subTopic: "Have / Has got",
        question_text: `<strong>Ownership for Singular (שייכות ביחיד - She):</strong><br>
        השלימו את המשפט הבא:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">Sarah ________ got brown eyes.</span>`,
        options: [
            "<span dir=\"ltr\">has</span>",
            "<span dir=\"ltr\">have</span>",
            "<span dir=\"ltr\">is</span>",
            "<span dir=\"ltr\">are</span>"
        ],
        correctAnswer: 0,
        hint: "Sarah היא בת אחת (She). מה הפועל המיוחד שאנחנו נותנים לגוף שלישי יחיד (He, She, It)?",
        solution: `<strong>הסבר מלא:</strong><br>
        הנושא במשפט הוא <span dir="ltr"><strong>Sarah</strong></span>. <br>
        שרה היא אישה אחת, ולכן היא מקבילה לכינוי הגוף <span dir="ltr"><strong>She</strong></span> (היא).<br><br>
        הכלל אומר שעבור He, She, It אנחנו חייבים להשתמש בצורה <span dir="ltr"><strong>has got</strong></span> (שימו לב לאות 's' שבסוף המילה, שאופיינית מאוד לגוף שלישי יחיד באנגלית).<br>
        המשפט המלא: <span dir="ltr">Sarah <strong>has</strong> got brown eyes.</span> (לשרה יש עיניים חומות).`
    },
    // Question 23
    {
        topic: "english",
        subTopic: "Have / Has got",
        question_text: `<strong>Ownership for Plural (שייכות ברבים - They):</strong><br>
        איזו מילה חסרה כאן?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">The students ________ got a lot of books.</span>`,
        options: [
            "<span dir=\"ltr\">have</span>",
            "<span dir=\"ltr\">has</span>",
            "<span dir=\"ltr\">are</span>",
            "<span dir=\"ltr\">do</span>"
        ],
        correctAnswer: 0,
        hint: "המילה students (תלמידים) מסתיימת ב-s, כלומר מדובר ברבים (They - הם). ברבים תמיד משתמשים בצורה הרגילה.",
        solution: `<strong>הסבר מלא:</strong><br>
        במשפט הזה אנחנו מדברים על <span dir="ltr"><strong>The students</strong></span> (התלמידים).<br>
        הם קבוצה של אנשים (רבים), ולכן אפשר להחליף אותם בכינוי הגוף <span dir="ltr"><strong>They</strong></span> (הם).<br><br>
        לפי טבלת החוקים, עבור I, You, We, They אנחנו משתמשים ב-<span dir="ltr"><strong>have got</strong></span>.<br>
        המשפט המלא: <span dir="ltr">The students <strong>have</strong> got a lot of books.</span>`
    },
    // Question 24
    {
        topic: "english",
        subTopic: "Have / Has got",
        question_text: `<strong>Negative Ownership (שלילה - We):</strong><br>
        איך נאמר "אין לנו" באנגלית?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">We ________ got any homework today!</span>`,
        options: [
            "<span dir=\"ltr\">haven't</span>",
            "<span dir=\"ltr\">hasn't</span>",
            "<span dir=\"ltr\">don't have</span>",
            "<span dir=\"ltr\">aren't</span>"
        ],
        correctAnswer: 0,
        hint: "כדי ליצור שלילה מוסיפים not ל-have או ל-has. למשל: have not = haven't. מכיוון שהמשפט מתחיל ב-We, מה נבחר?",
        solution: `<strong>הסבר מלא (משפטי שלילה עם Got):</strong><br>
        כאשר משתמשים במבנה של <span dir="ltr">have/has <strong>got</strong></span>, כדי להגיד "אין ל...", פשוט מדביקים את המילה <strong>not</strong> לפועל have או has.<br><br>
        <strong>קיצורי השלילה:</strong><br>
        <ul>
            <li><span dir="ltr">have not got &rarr; <strong>haven't got</strong></span></li>
            <li><span dir="ltr">has not got &rarr; <strong>hasn't got</strong></span></li>
        </ul>
        במשפט שלנו הנושא הוא <span dir="ltr"><strong>We</strong></span> (אנחנו), שלוקח have. לכן השלילה שלו היא <span dir="ltr"><strong>haven't</strong></span>.<br>
        *הערה: התשובה "don't have" נכונה דקדוקית כשאין את המילה "got" אחרי זה, אבל פה המילה "got" מופיעה במשפט, ולכן חובה להשתמש ב-haven't.`
    },
    // Question 25
    {
        topic: "english",
        subTopic: "Have / Has got",
        question_text: `<strong>Negative Ownership (שלילה - She):</strong><br>
        השלימו את משפט השלילה הבא:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">She ________ got a pen, so she can't write.</span>`,
        options: [
            "<span dir=\"ltr\">hasn't</span>",
            "<span dir=\"ltr\">haven't</span>",
            "<span dir=\"ltr\">isn't</span>",
            "<span dir=\"ltr\">doesn't</span>"
        ],
        correctAnswer: 0,
        hint: "She (היא) מקבלת has. איך כותבים has not בקיצור?",
        solution: `<strong>הסבר מלא:</strong><br>
        המשפט אומר: "אין לה עט, אז היא לא יכולה לכתוב".<br>
        הנושא הוא <span dir="ltr"><strong>She</strong></span> (היא). כזכור, הגופים He, She, It תמיד הולכים עם <span dir="ltr"><strong>has</strong></span>.<br><br>
        כדי להפוך את זה לשלילה (אין לה), נחבר את has עם not ונקבל <span dir="ltr"><strong>hasn't</strong></span>.<br>
        המשפט המלא: <span dir="ltr">She <strong>hasn't</strong> got a pen.</span>`
    },
    // Question 26
    {
        topic: "english",
        subTopic: "Have / Has got",
        question_text: `<strong>Questions (שאלות כן/לא - You):</strong><br>
        איך מתחילים את שאלת השייכות הבאה?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">________ you got a brother?</span>`,
        options: [
            "<span dir=\"ltr\">Have</span>",
            "<span dir=\"ltr\">Has</span>",
            "<span dir=\"ltr\">Do</span>",
            "<span dir=\"ltr\">Are</span>"
        ],
        correctAnswer: 0,
        hint: "כדי לשאול 'האם יש לך?', המילה Have קופצת לתחילת המשפט, והמילה got נשארת במקום שלה. מכיוון שהנושא הוא You, נשתמש ב-Have.",
        solution: `<strong>הסבר מלא (יצירת שאלות עם Got):</strong><br>
        כדי ליצור שאלה עם הביטוי have/has got, אנחנו משתמשים ב<strong>היפוך</strong> (כמו בפועל To Be). אנחנו לוקחים את ה-Have או ה-Has ומקפיצים אותם לעמוד הראשון במשפט.<br><br>
        <strong>שלבים:</strong><br>
        1. משפט חיובי: <span dir="ltr"><strong>You have</strong> got a brother.</span><br>
        2. שאלה: <span dir="ltr"><strong>Have you</strong> got a brother?</span><br><br>
        הנושא פה הוא <span dir="ltr"><strong>you</strong></span>, שלוקח have. אל תשכחו לכתוב באות גדולה (Capital Letter) בתחילת שאלה.`
    },
    // Question 27
    {
        topic: "english",
        subTopic: "Have / Has got",
        question_text: `<strong>Questions (שאלות כן/לא - He/She):</strong><br>
        השלימו את תחילת השאלה:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">________ your friend got a pet?</span>`,
        options: [
            "<span dir=\"ltr\">Has</span>",
            "<span dir=\"ltr\">Have</span>",
            "<span dir=\"ltr\">Is</span>",
            "<span dir=\"ltr\">Does</span>"
        ],
        correctAnswer: 0,
        hint: "שימו לב: לא שואלים עליכם (You), אלא על החבר שלכם (your friend). חבר זה הוא (He) או היא (She). לכן הוא צריך פועל שמתאים ליחיד.",
        solution: `<strong>הסבר מלא (זיהוי נושא מבלבל):</strong><br>
        זוהי אחת השאלות המבלבלות ביותר! תלמידים רואים את המילה <span dir="ltr">your</span> (שלך) ומיד קופצים לבחור <span dir="ltr">Have</span> (כי זה מזכיר להם You).<br><br>
        אבל... הנושא של המשפט הוא לא "אתה", אלא <span dir="ltr"><strong>your friend</strong></span> (החבר שלך). החבר הוא אדם אחד – צד שלישי (He או She).<br>
        ולכן, כמו כל שם עצם ביחיד, אנחנו חייבים להשתמש ב-<span dir="ltr"><strong>Has</strong></span>.<br>
        השאלה המלאה: <span dir="ltr"><strong>Has</strong> your friend got a pet?</span> (האם לחבר שלך יש חיית מחמד?)`
    },
    // Question 28
    {
        topic: "english",
        subTopic: "Have / Has got",
        question_text: `<strong>Animals (בעלי חיים - It):</strong><br>
        השלימו את המשפט לגבי הכלב:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">The dog ________ got a long tail.</span>`,
        options: [
            "<span dir=\"ltr\">has</span>",
            "<span dir=\"ltr\">have</span>",
            "<span dir=\"ltr\">is</span>",
            "<span dir=\"ltr\">hasn't</span>"
        ],
        correctAnswer: 0,
        hint: "כלב אחד מקביל לכינוי הגוף 'It' (זה), וגוף שלישי יחיד תמיד לוקח has.",
        solution: `<strong>הסבר מלא:</strong><br>
        המשפט מתאר כלב: "לכלב יש זנב (tail) ארוך (long)".<br>
        הנושא <span dir="ltr"><strong>The dog</strong></span> הוא חיה יחידה, ולכן ניתן להחליפו בכינוי הגוף <span dir="ltr"><strong>It</strong></span>.<br>
        כמו He ו-She, גם It דורש את הפועל <span dir="ltr"><strong>has</strong></span>.<br>
        התשובה הנכונה היא: <span dir="ltr">The dog <strong>has</strong> got a long tail.</span>`
    },
    // Question 29
    {
        topic: "english",
        subTopic: "Have / Has got",
        question_text: `<strong>Compound Subjects (נושא מורכב):</strong><br>
        בחרו את הפועל המתאים לנושא המורכב:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">Dan and I ________ got the same shirt.</span>`,
        options: [
            "<span dir=\"ltr\">have</span>",
            "<span dir=\"ltr\">has</span>",
            "<span dir=\"ltr\">am</span>",
            "<span dir=\"ltr\">are</span>"
        ],
        correctAnswer: 0,
        hint: "הנושא כאן הוא 'דן ואני'. ביחד אנחנו 'אנחנו' (We). ו-We בא יחד עם have.",
        solution: `<strong>הסבר מלא (מלכודת הנושא המורכב):</strong><br>
        גם כאן, היזהרו לא לקפוץ ישר כשאתם רואים את המילה <span dir="ltr"><strong>I</strong></span>.<br>
        הנושא המלא הוא <span dir="ltr"><strong>Dan and I</strong></span> (דן ואני). כשמישהו ואני נמצאים יחד, זה הופך לקבוצה ברבים: "אנחנו" (<span dir="ltr"><strong>We</strong></span>).<br><br>
        עבור כינוי הגוף We, אנו משתמשים ב-<span dir="ltr"><strong>have</strong></span>.<br>
        לכן התשובה היא: <span dir="ltr">Dan and I <strong>have</strong> got the same shirt.</span>`
    },
    // Question 30
    {
        topic: "english",
        subTopic: "Have / Has got",
        question_text: `<strong>Short Answers (תשובות קצרות חיוביות):</strong><br>
        השלימו את התשובה הקצרה לשאלה:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">"Have you got a car?" - "Yes, I ________."</span>`,
        options: [
            "<span dir=\"ltr\">have</span>",
            "<span dir=\"ltr\">do</span>",
            "<span dir=\"ltr\">got</span>",
            "<span dir=\"ltr\">am</span>"
        ],
        correctAnswer: 0,
        hint: "באנגלית, עונים עם המילה הראשונה שבה השתמשו כדי לשאול את השאלה. לא מוסיפים את המילה 'got' לתשובות קצרות.",
        solution: `<strong>הסבר מלא (חוק התשובות הקצרות):</strong><br>
        כאשר מישהו שואל אותנו שאלת כן/לא שמתחילה ב-Have או Has, עלינו לענות עם אותה מילה בדיוק!<br><br>
        - שאלה: <span dir="ltr"><strong>Have</strong> you got...?</span><br>
        - תשובה חיובית: <span dir="ltr">Yes, I <strong>have</strong>.</span><br>
        - תשובה שלילית: <span dir="ltr">No, I <strong>haven't</strong>.</span><br><br>
        <strong>כלל ברזל חשוב:</strong> בתשובות קצרות אנחנו לעולם <u>לא מוסיפים</u> את המילה 'got'. המילה got שמורה רק למשפטים שלמים.`
    },
    // Question 31
    {
        topic: "english",
        subTopic: "Have / Has got",
        question_text: `<strong>Short Answers (תשובות קצרות שליליות):</strong><br>
        השלימו את התשובה הקצרה השלילית לשאלה:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">"Has David got a sister?" - "No, he ________."</span>`,
        options: [
            "<span dir=\"ltr\">hasn't</span>",
            "<span dir=\"ltr\">doesn't</span>",
            "<span dir=\"ltr\">isn't</span>",
            "<span dir=\"ltr\">haven't</span>"
        ],
        correctAnswer: 0,
        hint: "השאלה מתחילה במילה Has, והיא שואלת על 'הוא' (he). לכן נענה עם has בתוספת שלילה (not).",
        solution: `<strong>הסבר מלא (תשובות קצרות בשלילה):</strong><br>
        בדיוק כמו בשאלה הקודמת, אנחנו עונים עם פועל העזר שפתח את השאלה.<br>
        - שאלה: <span dir="ltr"><strong>Has</strong> David got...?</span><br>
        - תשובה: מכיוון שהתשובה היא לא (No), ניקח את המילה <span dir="ltr">Has</span> ונוסיף לה <span dir="ltr">not</span>.<br><br>
        נקבל: <span dir="ltr">No, he <strong>hasn't</strong>.</span> (לא, אין לו).`
    },
    // Question 32
    {
        topic: "english",
        subTopic: "Have / Has got",
        question_text: `<strong>Irregular Nouns Plural (רבים יוצאי דופן):</strong><br>
        איזה פועל מתאים למשפט הבא?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">The children ________ got new books.</span>`,
        options: [
            "<span dir=\"ltr\">have</span>",
            "<span dir=\"ltr\">has</span>",
            "<span dir=\"ltr\">are</span>",
            "<span dir=\"ltr\">do</span>"
        ],
        correctAnswer: 0,
        hint: "המילה children משמעותה ילדים (רבים). אף על פי שאין בסופה את האות S, היא מילת רבים (They), ולכן היא מקבלת have.",
        solution: `<strong>הסבר מלא (מלכודת ילדים):</strong><br>
        המילה <span dir="ltr"><strong>children</strong></span> פירושה <strong>ילדים</strong> (יותר מילד אחד).<br>
        זהו צורת רבים יוצאת דופן באנגלית (המילה ביחיד היא child - ילד).<br><br>
        מכיוון שמדובר ברבים (הם - <span dir="ltr"><strong>They</strong></span>), אנו נשתמש בצורה של <span dir="ltr"><strong>have</strong></span>.<br>
        המשפט הנכון: <span dir="ltr">The children <strong>have</strong> got new books.</span>`
    },
    // Question 33
    {
        topic: "english",
        subTopic: "Have / Has got",
        question_text: `<strong>Mixed Sentences (חיוב ושלילה יחד):</strong><br>
        השלימו את החצי השני של המשפט (שימו לב למילה 'but'):<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">I have got a sister, but I ________ got a brother.</span>`,
        options: [
            "<span dir=\"ltr\">haven't</span>",
            "<span dir=\"ltr\">hasn't</span>",
            "<span dir=\"ltr\">don't</span>",
            "<span dir=\"ltr\">not</span>"
        ],
        correctAnswer: 0,
        hint: "המילה but (אבל) מראה לנו שיש כאן ניגודיות. אם בחלק הראשון 'יש לי' אחות, אז בחלק השני 'אין לי' אח. הנושא הוא I (אני).",
        solution: `<strong>הסבר מלא (קריאת הקשר - ניגודיות):</strong><br>
        המשפט מורכב משני חלקים המחוברים במילת הניגוד <span dir="ltr"><strong>but</strong></span> (אבל).<br>
        - חלק ראשון: <span dir="ltr">I <strong>have got</strong> a sister</span> (יש לי אחות).<br>
        - חלק שני: "אבל... אין לי אח".<br><br>
        כדי להגיד "אין לי" עם המילה got, אנחנו משתמשים ב-<span dir="ltr"><strong>haven't</strong></span> (שילוב של have ו-not).<br>
        המשפט המלא: <span dir="ltr">I have got a sister, but I <strong>haven't</strong> got a brother.</span>`
    },
    // Question 34
    {
        topic: "english",
        subTopic: "Have / Has got",
        question_text: `<strong>Error Correction (זיהוי שגיאות):</strong><br>
        איזה מהמשפטים הבאים הוא <strong>הנכון</strong> מבחינה דקדוקית?`,
        options: [
            "<span dir=\"ltr\">The monster has got three eyes!</span>",
            "<span dir=\"ltr\">The monster have got three eyes!</span>",
            "<span dir=\"ltr\">The monster is got three eyes!</span>",
            "<span dir=\"ltr\">The monster hasn't get three eyes!</span>"
        ],
        correctAnswer: 0,
        hint: "Monster (מפלצת) היא יצור יחיד (It). גוף שלישי יחיד מקבל תמיד has.",
        solution: `<strong>הסבר מלא:</strong><br>
        בואו ננתח את המשפטים ונמצא את הנכון:<br>
        הנושא הוא <span dir="ltr"><strong>The monster</strong></span> (המפלצת). זוהי מפלצת אחת יחידה, כלומר כינוי הגוף שלה הוא <span dir="ltr"><strong>It</strong></span>.<br><br>
        הכלל: He, She, It דורשים את המילה <strong>has</strong>.<br>
        לכן המשפט הנכון והיחיד הוא: <span dir="ltr">The monster <strong>has got</strong> three eyes!</span> (למפלצת יש 3 עיניים!).<br>
        האופציה של have שגויה כי היא מיועדת לרבים. האופציה של is שגויה כי אי אפשר לחבר is עם got.`
    },
    // Question 35
    {
        topic: "english",
        subTopic: "Have / Has got",
        question_text: `<strong>Meaning Translation (משמעות ותרגום):</strong><br>
        מהי המשמעות המדויקת של הביטוי <span dir="ltr">"have got"</span> בשפה האנגלית?`,
        options: [
            "<span dir=\"ltr\">יש ל... (כמו הפועל have לבדו, המציין בעלות או שייכות).</span>",
            "<span dir=\"ltr\">לקבל (to receive).</span>",
            "<span dir=\"ltr\">ללכת ל... (to go).</span>",
            "<span dir=\"ltr\">לעשות (to do).</span>"
        ],
        correctAnswer: 0,
        hint: "כשמישהו אומר 'I have got a car', הוא אומר בדיוק את אותו הדבר כמו 'I have a car'.",
        solution: `<strong>הסבר מלא (תשובת מפתח):</strong><br>
        באנגלית הבריטית (וגם בתוכנית הלימודים בישראל ביסודי), הביטוי <span dir="ltr"><strong>have got</strong></span> הוא פשוט דרך ארוכה וחביבה יותר להגיד <span dir="ltr"><strong>have</strong></span> (יש לי / בעלות).<br><br>
        אין שום הבדל במשמעות בין שני המשפטים הבאים:<br>
        1. <span dir="ltr">I <strong>have got</strong> a dog.</span> (יש לי כלב).<br>
        2. <span dir="ltr">I <strong>have</strong> a dog.</span> (יש לי כלב).<br><br>
        שניהם נכונים, אך הדרך להפוך אותם לשאלה או שלילה קצת שונה. בכל מקרה, המשמעות היא תמיד "בעלות / שייכות".`
    },


    // ---------------------------------------------------------
    // Subtopic 4: Present Simple (Basic) (שאלות 36-50)
    // ---------------------------------------------------------

    // Question 36
    {
        topic: "english",
        subTopic: "Present Simple (Basic)",
        question_text: `<strong>Present Simple (I, You, We, They):</strong><br>
        בחרו את הפועל המתאים להשלמת המשפט:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">I ________ an apple every morning.</span>`,
        options: [
            "<span dir=\"ltr\">eat</span>",
            "<span dir=\"ltr\">eats</span>",
            "<span dir=\"ltr\">eating</span>",
            "<span dir=\"ltr\">ate</span>"
        ],
        correctAnswer: 0,
        hint: "בזמן הווה פשוט (הרגל), הגופים I, You, We, They מקבלים את הפועל בצורתו הרגילה (V1), ללא שום תוספת.",
        solution: `<strong>הסבר מלא (זמן הווה פשוט - Present Simple):</strong><br>
        הזמן הזה משמש כדי לתאר הרגלים, דברים שקורים תמיד (every morning).<br><br>
        <strong>חוקי הפועל החיובי:</strong><br>
        <ul>
            <li>עבור הגופים <span dir="ltr">I, You, We, They</span> - הפועל נשאר <strong>בצורת המקור שלו (V1)</strong>. לא מוסיפים לו כלום! (למשל: eat, play, run).</li>
            <li>עבור הגופים <span dir="ltr">He, She, It</span> - אנו מוסיפים לפועל <span dir="ltr"><strong>s</strong></span>, <span dir="ltr"><strong>es</strong></span> או <span dir="ltr"><strong>ies</strong></span>.</li>
        </ul>
        כיוון שהמשפט מתחיל ב-<span dir="ltr"><strong>I</strong></span> (אני), הפועל יישאר נקי: <span dir="ltr"><strong>eat</strong></span>.`
    },
    // Question 37
    {
        topic: "english",
        subTopic: "Present Simple (Basic)",
        question_text: `<strong>Present Simple (He, She, It - חוק ה-s):</strong><br>
        איזה פועל מתאים למשפט הבא?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">My brother ________ football on Fridays.</span>`,
        options: [
            "<span dir=\"ltr\">plays</span>",
            "<span dir=\"ltr\">play</span>",
            "<span dir=\"ltr\">playing</span>",
            "<span dir=\"ltr\">player</span>"
        ],
        correctAnswer: 0,
        hint: "הנושא הוא 'אח שלי' (My brother), כלומר אדם אחד זכר (He). גוף שלישי יחיד אוהב לקבל תוספת 's' לפועל בהווה פשוט.",
        solution: `<strong>הסבר מלא:</strong><br>
        המשפט מתאר פעולה קבועה (on Fridays - בימי שישי). לכן אנו בהווה פשוט.<br><br>
        הנושא הוא <span dir="ltr"><strong>My brother</strong></span> (אח שלי). אם נחליף אותו בכינוי גוף, נקבל <span dir="ltr"><strong>He</strong></span> (הוא).<br>
        כזכור, החוק בהווה פשוט אומר שגוף שלישי יחיד (He, She, It) מקבל <strong>תוספת של האות s</strong> לפועל.<br>
        לכן, במקום <span dir="ltr">play</span> נאמר <span dir="ltr"><strong>plays</strong></span>.<br>
        התשובה הנכונה: <span dir="ltr">My brother <strong>plays</strong> football</span>.`
    },
    // Question 38
    {
        topic: "english",
        subTopic: "Present Simple (Basic)",
        question_text: `<strong>Spelling Rules (חוקי איות - הוספת es):</strong><br>
        השלימו את המשפט הבא בצורה הנכונה:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">She ________ to school by bus.</span>`,
        options: [
            "<span dir=\"ltr\">goes</span>",
            "<span dir=\"ltr\">gos</span>",
            "<span dir=\"ltr\">go</span>",
            "<span dir=\"ltr\">going</span>"
        ],
        correctAnswer: 0,
        hint: "הפועל הוא go (ללכת). פעלים שמסתיימים באותיות מיוחדות (כמו o, s, x, ch, sh) מקבלים תוספת מיוחדת של es, ולא רק s.",
        solution: `<strong>הסבר מלא (חוקי איות בגוף שלישי יחיד):</strong><br>
        כאשר הנושא הוא He/She/It ואנו צריכים להוסיף s לפועל, יש פעלים 'מיוחדים' הדורשים תוספת של <span dir="ltr"><strong>es</strong></span>.<br><br>
        <strong>מתי מוסיפים es?</strong><br>
        כאשר הפועל מסתיים באותיות השורקות: <span dir="ltr"><strong>o, x, ss, sh, ch, z</strong></span>.<br>
        לדוגמה:<br>
        - <span dir="ltr">go &rarr; go<strong>es</strong></span><br>
        - <span dir="ltr">watch &rarr; watch<strong>es</strong></span><br>
        - <span dir="ltr">wash &rarr; wash<strong>es</strong></span><br><br>
        הנושא כאן הוא She והפועל מסתיים ב-o, ולכן התשובה היא <span dir="ltr"><strong>goes</strong></span>.`
    },
    // Question 39
    {
        topic: "english",
        subTopic: "Present Simple (Basic)",
        question_text: `<strong>Spelling Rules (חוקי איות - הוספת ies):</strong><br>
        בחרו באיות הנכון של הפועל cry (לבכות) במשפט הבא:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">The baby ________ when he is hungry.</span>`,
        options: [
            "<span dir=\"ltr\">cries</span>",
            "<span dir=\"ltr\">crys</span>",
            "<span dir=\"ltr\">cry</span>",
            "<span dir=\"ltr\">cryes</span>"
        ],
        correctAnswer: 0,
        hint: "כאשר פועל מסתיים באות y, ולפניה יש 'אות רגילה' (עיצור, כמו האות r), מוחקים את ה-y והופכים אותה ל-ies.",
        solution: `<strong>הסבר מלא (חוק ה-y):</strong><br>
        בגוף שלישי יחיד (The baby = He), יש חוק מיוחד לפעלים שמסתיימים באות <span dir="ltr"><strong>y</strong></span>.<br><br>
        <strong>איך זה עובד?</strong><br>
        מסתכלים על האות ש<strong>לפני ה-y</strong>:<br>
        1. אם יש <u>עיצור</u> (כמו המילה c<strong>r</strong>y - לפני ה-y יש r), מוחקים את ה-y ומוסיפים <strong>ies</strong>. לכן: <span dir="ltr"><strong>cries</strong></span>.<br>
        2. אם יש <u>אות ניקוד</u> (a, e, i, o, u) (כמו במילה pl<strong>a</strong>y), ה-y נשארת כרגיל ומוסיפים רק <strong>s</strong>. לכן: plays.<br><br>
        במשפט שלנו (cry), נמחק את ה-y ונבחר ב-<span dir="ltr"><strong>cries</strong></span>.`
    },
    // Question 40
    {
        topic: "english",
        subTopic: "Present Simple (Basic)",
        question_text: `<strong>Negative Sentences (משפטי שלילה בסיסיים):</strong><br>
        איך נאמר "אנחנו לא אוהבים" באנגלית?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">We ________ like pizza.</span>`,
        options: [
            "<span dir=\"ltr\">don't</span>",
            "<span dir=\"ltr\">doesn't</span>",
            "<span dir=\"ltr\">aren't</span>",
            "<span dir=\"ltr\">not</span>"
        ],
        correctAnswer: 0,
        hint: "בהווה פשוט, אנחנו קוראים ל'פועל עוזר' כדי להפוך משפט לשלילי. עבור We (אנחנו), פועל העזר הוא do. בתוספת not, נקבל don't.",
        solution: `<strong>הסבר מלא (יצירת שלילה בהווה פשוט):</strong><br>
        בזמן הווה פשוט, פעלים רגילים (כמו like, eat, play) לא יודעים להחזיק את מילת השלילה <span dir="ltr">not</span> לבדם. הם צריכים עזרה!<br><br>
        לכן אנחנו קוראים לפועלי העזר <span dir="ltr"><strong>Do</strong></span> ו-<span dir="ltr"><strong>Does</strong></span>.<br>
        <table dir="ltr" style="width:100%; border-collapse: collapse; margin-top:10px; text-align:left;">
            <tr style="background:#e2e8f0;">
                <th style="padding:5px; border:1px solid #cbd5e1;">Pronoun</th>
                <th style="padding:5px; border:1px solid #cbd5e1;">Negative Helper (שלילה)</th>
            </tr>
            <tr><td style="padding:5px; border:1px solid #cbd5e1;">I, You, We, They</td><td style="padding:5px; border:1px solid #cbd5e1; font-weight:bold; color:#2563eb;">don't (do not)</td></tr>
            <tr><td style="padding:5px; border:1px solid #cbd5e1;">He, She, It</td><td style="padding:5px; border:1px solid #cbd5e1; font-weight:bold; color:#dc2626;">doesn't (does not)</td></tr>
        </table>
        <br>
        מכיוון שהמשפט שלנו מתחיל ב-<span dir="ltr"><strong>We</strong></span>, נשתמש במילה <span dir="ltr"><strong>don't</strong></span>.`
    },
    // Question 41
    {
        topic: "english",
        subTopic: "Present Simple (Basic)",
        question_text: `<strong>Negative for Singular (doesn't + Base verb):</strong><br>
        השלימו את משפט השלילה הבא:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">Maya ________ play computer games.</span>`,
        options: [
            "<span dir=\"ltr\">doesn't</span>",
            "<span dir=\"ltr\">don't</span>",
            "<span dir=\"ltr\">isn't</span>",
            "<span dir=\"ltr\">not</span>"
        ],
        correctAnswer: 0,
        hint: "מאיה היא בת יחידה (She). לכן היא מקבלת את פועל העזר does, שביחד עם not הופך ל-doesn't.",
        solution: `<strong>הסבר מלא:</strong><br>
        במשפט השלילה הזה, הנושא הוא <span dir="ltr"><strong>Maya</strong></span> (היא - She).<br>
        כפי שלמדנו בטבלה הקודמת, הגופים של היחיד (He, She, It) מקבלים את השלילה בעזרת <span dir="ltr"><strong>doesn't</strong></span>.<br><br>
        <strong>חוק ה-"s" הגנב! (קריטי לזכור):</strong><br>
        ברגע שהשתמשנו במילה doesn't (שיש בה כבר את האות s), היא "גונבת" את ה-s מהפועל הראשי! לכן הפועל שבא אחריה חוזר למקור (בלי s בכלל). <br>
        המשפט יהיה: <span dir="ltr">Maya <strong>doesn't</strong> <u>play</u></span> (ולא doesn't plays!).`
    },
    // Question 42
    {
        topic: "english",
        subTopic: "Present Simple (Basic)",
        question_text: `<strong>Questions in Present Simple (Do/Does):</strong><br>
        איך מתחילים את השאלה הבאה באנגלית?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">________ you speak English?</span>`,
        options: [
            "<span dir=\"ltr\">Do</span>",
            "<span dir=\"ltr\">Does</span>",
            "<span dir=\"ltr\">Are</span>",
            "<span dir=\"ltr\">Is</span>"
        ],
        correctAnswer: 0,
        hint: "כדי לשאול שאלה בהווה פשוט (האם אתה..?), שמים את פועל העזר Do או Does בתחילת המשפט. בגלל שהנושא הוא You, מה נבחר?",
        solution: `<strong>הסבר מלא (בניית שאלות):</strong><br>
        בשאלות בהווה פשוט (שאינן כוללות את פועל ה-To Be), אנו מוסיפים את פועלי העזר <span dir="ltr"><strong>Do</strong></span> או <span dir="ltr"><strong>Does</strong></span> בתחילת המשפט.<br><br>
        החוקים זהים לשלילה:<br>
        - שואלים עם <strong>Do</strong> כשמדובר ב- <span dir="ltr">I, You, We, They</span>.<br>
        - שואלים עם <strong>Does</strong> כשמדובר ב- <span dir="ltr">He, She, It</span>.<br><br>
        מכיוון שהמשפט מתייחס ל-<span dir="ltr"><strong>you</strong></span>, נתחיל את השאלה עם המילה <strong>Do</strong>. <br>
        <span dir="ltr"><strong>Do</strong> you speak English?</span>`
    },
    // Question 43
    {
        topic: "english",
        subTopic: "Present Simple (Basic)",
        question_text: `<strong>Questions with Does (שאלות בגוף שלישי):</strong><br>
        בחרו את המילה שפותחת את השאלה הבאה:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">________ your mom work in a hospital?</span>`,
        options: [
            "<span dir=\"ltr\">Does</span>",
            "<span dir=\"ltr\">Do</span>",
            "<span dir=\"ltr\">Is</span>",
            "<span dir=\"ltr\">Has</span>"
        ],
        correctAnswer: 0,
        hint: "היזהרו מהמילה your (שלך). הנושא האמיתי של השאלה הוא 'אמא שלך' (your mom), שהיא אישה אחת - She.",
        solution: `<strong>הסבר מלא (זיהוי מדויק של הנושא בשאלה):</strong><br>
        הרבה תלמידים נופלים כאן ובוחרים Do כי הם רואים את המילה <span dir="ltr">your</span>.<br><br>
        אבל על מי אנחנו בעצם שואלים? אנחנו שואלים על <strong>אמא שלך</strong> (<span dir="ltr">your mom</span>). אמא היא בן אדם אחד, ולכן כינוי הגוף שלה הוא <span dir="ltr"><strong>She</strong></span> (היא).<br>
        ועבור כינוי הגוף She, פועל העזר לשאלות הוא <strong>Does</strong>.<br><br>
        ושוב, זכרו את "חוק הגנב": ברגע שהשתמשנו ב-Does, הפועל (work) נשאר נקי וללא s!<br>
        <span dir="ltr"><strong>Does</strong> your mom <u>work</u> in a hospital?</span>`
    },
    // Question 44
    {
        topic: "english",
        subTopic: "Present Simple (Basic)",
        question_text: `<strong>Identify the Grammar Mistake (זיהוי שגיאה כפולה):</strong><br>
        איזה מהמשפטים השליליים הבאים כתוב <strong>נכון</strong> וללא שגיאות?`,
        options: [
            "<span dir=\"ltr\">He doesn't like tomatoes.</span>",
            "<span dir=\"ltr\">He doesn't likes tomatoes.</span>",
            "<span dir=\"ltr\">He don't like tomatoes.</span>",
            "<span dir=\"ltr\">He isn't like tomatoes.</span>"
        ],
        correctAnswer: 0,
        hint: "זכרו את החוק: doesn't הוא 'גנב'! כשהוא מופיע במשפט, הוא לוקח את ה-s לעצמו והפועל הופך לנקי וחף מפשע.",
        solution: `<strong>הסבר מלא:</strong><br>
        נבדוק מדוע שאר התשובות שגויות, כדי להבין את החוק לעומק:<br>
        <ul>
            <li><span dir="ltr" style="text-decoration: line-through;">He don't like</span> - שגוי, כי עבור He אי אפשר להשתמש ב-don't.</li>
            <li><span dir="ltr" style="text-decoration: line-through;">He doesn't likes</span> - זוהי שגיאה כפולה נפוצה! הוספנו s גם ל-doesn't וגם ל-likes. זה אסור. ברגע שיש doesn't, הפועל הראשי חוזר לצורת הבסיס (V1).</li>
        </ul>
        לכן, המשפט התקין והיחיד הוא: <span dir="ltr">He <strong>doesn't like</strong> tomatoes.</span>`
    },
    // Question 45
    {
        topic: "english",
        subTopic: "Present Simple (Basic)",
        question_text: `<strong>Short Answers (תשובות קצרות - Does):</strong><br>
        כיצד יש להשיב בחיוב על השאלה: <span dir="ltr">"Does he like apples?"</span>`,
        options: [
            "<span dir=\"ltr\">Yes, he does.</span>",
            "<span dir=\"ltr\">Yes, he likes.</span>",
            "<span dir=\"ltr\">Yes, he is.</span>",
            "<span dir=\"ltr\">Yes, he do.</span>"
        ],
        correctAnswer: 0,
        hint: "באנגלית עונים 'כמו הד למה ששאלו'. אם השאלה התחילה במילה Does, נסיים את התשובה הקצרה עם אותה מילה בדיוק.",
        solution: `<strong>הסבר מלא (תשובות קצרות בהווה פשוט):</strong><br>
        כששואלים אותנו שאלת כן/לא, התשובה הקצרה תמיד תשתמש בפועל העזר שפתח את השאלה (Do או Does).<br><br>
        - שאלה: <span dir="ltr"><strong>Does</strong> he like apples?</span><br>
        - תשובה חיובית: <span dir="ltr">Yes, he <strong>does</strong>.</span><br>
        - תשובה שלילית: <span dir="ltr">No, he <strong>doesn't</strong>.</span><br><br>
        לעולם אל תענו <span dir="ltr">"Yes, he likes"</span>. זוהי שגיאה נפוצה מאוד שמקורה בתרגום ישיר מעברית.`
    },
    // Question 46
    {
        topic: "english",
        subTopic: "Present Simple (Basic)",
        question_text: `<strong>Animals in Present Simple (חיות בהווה פשוט):</strong><br>
        השלימו את המשפט הבא:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">My cat ________ a lot of milk.</span>`,
        options: [
            "<span dir=\"ltr\">drinks</span>",
            "<span dir=\"ltr\">drink</span>",
            "<span dir=\"ltr\">drinking</span>",
            "<span dir=\"ltr\">are drink</span>"
        ],
        correctAnswer: 0,
        hint: "החתול שלי (My cat) הוא בעל חיים אחד. כינוי הגוף שלו הוא It. לכן נוסיף s לפועל.",
        solution: `<strong>הסבר מלא:</strong><br>
        המשפט אומר: "החתול שלי שותה הרבה חלב".<br>
        הנושא <span dir="ltr"><strong>My cat</strong></span> הוא יצור חי יחיד, שמקביל לכינוי הגוף <span dir="ltr"><strong>It</strong></span>.<br>
        מכיוון שאנו מדברים על מנהג קבוע (הרגל) של החתול, אנו משתמשים בהווה פשוט.<br>
        לפי החוק עבור He, She, It – הפועל חייב לקבל את האות <strong>s</strong> בסופו.<br>
        לכן התשובה הנכונה היא <span dir="ltr"><strong>drinks</strong></span>.`
    },
    // Question 47
    {
        topic: "english",
        subTopic: "Present Simple (Basic)",
        question_text: `<strong>Compound Subjects Plural (נושאים מרובים - They):</strong><br>
        בחרו את הפועל הנכון לתיאור שני אנשים:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">Dana and Ron ________ English together.</span>`,
        options: [
            "<span dir=\"ltr\">study</span>",
            "<span dir=\"ltr\">studies</span>",
            "<span dir=\"ltr\">studying</span>",
            "<span dir=\"ltr\">is study</span>"
        ],
        correctAnswer: 0,
        hint: "דנה ורון הם שני אנשים. ביחד הם 'הם' (They). עבור They, הפועל נשאר נקי וללא תוספות.",
        solution: `<strong>הסבר מלא (זהירות מנושא מורכב):</strong><br>
        העין שלנו לפעמים מטעה אותנו. אם היינו מסתכלים רק על "רון" (He), היינו צריכים להוסיף s או ies (למשל studies).<br><br>
        אבל הנושא האמיתי של המשפט הוא <span dir="ltr"><strong>Dana and Ron</strong></span> (דנה ורון). <br>
        שני אנשים הופכים את המשפט לרבים! אנחנו יכולים להחליף את השמות שלהם במילה "הם" (<span dir="ltr"><strong>They</strong></span>).<br>
        עבור הקבוצה של I, You, We, <strong>They</strong>, הפועל נשאר בצורתו המקורית והבסיסית (V1).<br>
        לכן התשובה היא פשוט: <span dir="ltr"><strong>study</strong></span>.`
    },
    // Question 48
    {
        topic: "english",
        subTopic: "Present Simple (Basic)",
        question_text: `<strong>Time Expressions (ביטויי זמן - רמזים):</strong><br>
        מהו ביטוי הזמן (רמז) המתאים ביותר לזמן הווה פשוט (Present Simple)?`,
        options: [
            "<span dir=\"ltr\">every day</span>",
            "<span dir=\"ltr\">now</span>",
            "<span dir=\"ltr\">yesterday</span>",
            "<span dir=\"ltr\">tomorrow</span>"
        ],
        correctAnswer: 0,
        hint: "הווה פשוט מדבר על דברים שקורים בשגרה, בתדירות קבועה, כל יום, כל שבוע...",
        solution: `<strong>הסבר מלא (מילות רמז לזמנים):</strong><br>
        באנגלית, לכל זמן דקדוקי יש את מילות הרמז שלו ("מילות זמן" או Time Expressions), שעוזרות לנו לזהות איזה פועל צריך לשים.<br><br>
        זמן הווה פשוט מדבר על הרגלים ושגרה. מילות הרמז שלו הן מילות תדירות:<br>
        <ul>
            <li><span dir="ltr"><strong>Always</strong></span> (תמיד)</li>
            <li><span dir="ltr"><strong>Usually</strong></span> (בדרך כלל)</li>
            <li><span dir="ltr"><strong>Sometimes</strong></span> (לפעמים)</li>
            <li><span dir="ltr"><strong>Every day / week</strong></span> (כל יום / שבוע)</li>
        </ul>
        שאר התשובות שגויות: <span dir="ltr">Now</span> (עכשיו) שייך להווה ממושך. <span dir="ltr">Yesterday</span> (אתמול) שייך לעבר. <span dir="ltr">Tomorrow</span> (מחר) שייך לעתיד.`
    },
    // Question 49
    {
        topic: "english",
        subTopic: "Present Simple (Basic)",
        question_text: `<strong>Facts in Present Simple (תיאור עובדות טבע):</strong><br>
        השלימו את עובדת הטבע הבאה:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">The sun ________ in the east.</span>`,
        options: [
            "<span dir=\"ltr\">rises</span>",
            "<span dir=\"ltr\">rise</span>",
            "<span dir=\"ltr\">rising</span>",
            "<span dir=\"ltr\">rose</span>"
        ],
        correctAnswer: 0,
        hint: "שמש (sun) היא מילה ביחיד (It). הפועל לקום/לזרוח הוא rise. הוסיפו לו s.",
        solution: `<strong>הסבר מלא (עובדות כלליות - General Truths):</strong><br>
        אחד השימושים המרכזיים של ההווה הפשוט הוא לתאר דברים שהם תמיד נכונים - עובדות טבע וחיים (למשל, השמש זורחת במזרח, מים רותחים ב-100 מעלות).<br><br>
        הנושא שלנו הוא <span dir="ltr"><strong>The sun</strong></span> (השמש). מכיוון שזוהי עצם (דומם) ביחיד, היא מקבילה ל-<span dir="ltr"><strong>It</strong></span>.<br>
        על פי חוקי ההווה הפשוט, יש להוסיף <strong>s</strong> לפועל.<br>
        הפועל לזרוח הוא <span dir="ltr">rise</span>. נוסיף לו s, ונקבל: <span dir="ltr"><strong>rises</strong></span>.`
    },
    // Question 50
    {
        topic: "english",
        subTopic: "Present Simple (Basic)",
        question_text: `<strong>Fixing the Error (תיקון טעויות נפוצות):</strong><br>
        קראו את המשפט הבא הכולל טעות אחת. מהי הדרך הנכונה לכתוב אותו?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #dc2626;">She don't like milk.</span>`,
        options: [
            "<span dir=\"ltr\">She doesn't like milk.</span>",
            "<span dir=\"ltr\">She isn't like milk.</span>",
            "<span dir=\"ltr\">She hasn't like milk.</span>",
            "<span dir=\"ltr\">She don't likes milk.</span>"
        ],
        correctAnswer: 0,
        hint: "כשמשתמשים ב-She (היא), אסור להשתמש ב-don't. חייבים להשתמש במילה המקבילה שמכילה את האות s.",
        solution: `<strong>הסבר מלא (תיקון שגיאה בשלילה):</strong><br>
        המשפט המקורי שגוי כי המילה <span dir="ltr"><strong>don't</strong></span> מותרת לשימוש רק עבור הגופים I, You, We, They.<br><br>
        הנושא כאן הוא <span dir="ltr"><strong>She</strong></span> (היא - גוף שלישי יחיד). לכן, אנחנו חייבים להשתמש בפועל העזר לשלילה <span dir="ltr"><strong>doesn't</strong></span>.<br><br>
        המשפט התקין והיחיד הוא: <span dir="ltr"><strong>She doesn't like milk</strong></span>.<br>
        *(זכרו גם שהפועל like נשאר נקי וללא תוספת s, כי המילה doesn't כבר 'גנבה' לו את ה-s).*`
    },// ---------------------------------------------------------
    // Subtopic 5: Present Progressive (Basic) (שאלות 51-65)
    // ---------------------------------------------------------

    // Question 51
    {
        topic: "english",
        subTopic: "Present Progressive (Basic)",
        question_text: `<strong>Basic Form (I):</strong><br>
        השלימו את המשפט המתאר פעולה שקורית <u>עכשיו</u>:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">Right now, I ________ a book.</span>`,
        options: [
            "<span dir=\"ltr\">am reading</span>",
            "<span dir=\"ltr\">is reading</span>",
            "<span dir=\"ltr\">are reading</span>",
            "<span dir=\"ltr\">read</span>"
        ],
        correctAnswer: 0,
        hint: "בהווה ממושך (עכשיו), אנחנו חייבים את פועל העזר To Be (am/is/are) ומיד אחריו את הפועל עם ing. מה מתאים ל-I?",
        solution: `<strong>הסבר מלא (מבנה ההווה הממושך):</strong><br>
        זמן <strong>Present Progressive</strong> (הווה ממושך) מתאר פעולה שמתרחשת ברגע זה ממש.<br><br>
        <strong>הנוסחה המנצחת:</strong><br>
        <span dir="ltr">Subject (נושא) + <strong>Am / Is / Are</strong> + Verb+<strong>ing</strong></span><br><br>
        מכיוון שהמשפט מתחיל ב-<span dir="ltr"><strong>I</strong></span> (אני), פועל העזר המתאים הוא <span dir="ltr"><strong>am</strong></span>, ולאחריו נוסיף לפועל קריאה (read) את הסיומת ing.<br>
        התשובה הנכונה: <span dir="ltr">I <strong>am reading</strong></span>.`
    },
    // Question 52
    {
        topic: "english",
        subTopic: "Present Progressive (Basic)",
        question_text: `<strong>Basic Form (He/She/It):</strong><br>
        בחרו את הפועל הנכון:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">Look! The monkey ________ a banana.</span>`,
        options: [
            "<span dir=\"ltr\">is eating</span>",
            "<span dir=\"ltr\">are eating</span>",
            "<span dir=\"ltr\">am eating</span>",
            "<span dir=\"ltr\">eat</span>"
        ],
        correctAnswer: 0,
        hint: "הקוף (The monkey) הוא חיה אחת (It). לכן הוא דורש את פועל העזר Is.",
        solution: `<strong>הסבר מלא:</strong><br>
        המילה <span dir="ltr"><strong>Look!</strong></span> (הסתכל!) היא מילת רמז מצוינת. אם מישהו אומר לנו להסתכל, סימן שהפעולה קורית ממש עכשיו, מול העיניים שלנו. זה מחייב אותנו להשתמש ב-ing.<br><br>
        הנושא הוא <span dir="ltr"><strong>The monkey</strong></span> (הקוף), שהוא מקביל לכינוי הגוף <span dir="ltr"><strong>It</strong></span>.<br>
        לפי החוקים: He, She, It מקבלים את פועל העזר <strong>is</strong>.<br>
        המשפט הנכון: <span dir="ltr">The monkey <strong>is eating</strong> a banana.</span>`
    },
    // Question 53
    {
        topic: "english",
        subTopic: "Present Progressive (Basic)",
        question_text: `<strong>Basic Form (Plural):</strong><br>
        השלימו את המשפט:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">The children ________ in the park at the moment.</span>`,
        options: [
            "<span dir=\"ltr\">are playing</span>",
            "<span dir=\"ltr\">is playing</span>",
            "<span dir=\"ltr\">am playing</span>",
            "<span dir=\"ltr\">playing</span>"
        ],
        correctAnswer: 0,
        hint: "המילה children משמעותה 'ילדים' (רבים = They). רבים הולכים עם Are.",
        solution: `<strong>הסבר מלא (רבים בהווה ממושך):</strong><br>
        מילת הרמז היא <span dir="ltr"><strong>at the moment</strong></span> (ברגע זה), מה שמכריח אותנו להשתמש בהווה ממושך.<br><br>
        הנושא הוא <span dir="ltr"><strong>The children</strong></span> (הילדים). מכיוון שזו מילת רבים (They), פועל העזר חייב להיות <strong>are</strong>.<br>
        שימו לב לטעות נפוצה (תשובה 4): אסור לכתוב פועל עם ing לבדו בלי ה-am/is/are לפניו. (לא אומרים <span dir="ltr">They playing</span>, חייבים להגיד <span dir="ltr">They <strong>are</strong> playing</span>).`
    },
    // Question 54
    {
        topic: "english",
        subTopic: "Present Progressive (Basic)",
        question_text: `<strong>Spelling Rules (Drop the 'e'):</strong><br>
        הפועל הוא <strong>ride</strong> (לרכוב). כיצד נכתוב אותו נכון עם ing?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">She is ________ her bike now.</span>`,
        options: [
            "<span dir=\"ltr\">riding</span>",
            "<span dir=\"ltr\">rideing</span>",
            "<span dir=\"ltr\">ridding</span>",
            "<span dir=\"ltr\">ridng</span>"
        ],
        correctAnswer: 0,
        hint: "חוק איות: כאשר פועל מסתיים באות 'e' שקטה, אנחנו מוחקים אותה (מעיפים אותה) לפני שמוסיפים ing.",
        solution: `<strong>הסבר מלא (חוק ה-E האילמת):</strong><br>
        כאשר אנו רוצים להוסיף <strong>ing</strong> לפועל שמסתיים באות <strong>e</strong> שלא שומעים אותה (כמו make, write, ride, dance), יש חוק קבוע:<br>
        <strong>"זורקים" את ה-e ורק אז מוסיפים ing!</strong><br><br>
        דוגמאות:<br>
        - <span dir="ltr">rid<strong>e</strong> &rarr; ridi<strong>ng</strong></span><br>
        - <span dir="ltr">mak<strong>e</strong> &rarr; maki<strong>ng</strong></span><br>
        - <span dir="ltr">writ<strong>e</strong> &rarr; writi<strong>ng</strong></span><br><br>
        לכן התשובה הנכונה היא <span dir="ltr"><strong>riding</strong></span> (ולא rideing).`
    },
    // Question 55
    {
        topic: "english",
        subTopic: "Present Progressive (Basic)",
        question_text: `<strong>Spelling Rules (Double Consonant / C-V-C):</strong><br>
        הפועל הוא <strong>swim</strong> (לשחות). כיצד יש לאיית אותו בהווה ממושך?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">The boys are ________ in the pool.</span>`,
        options: [
            "<span dir=\"ltr\">swimming</span>",
            "<span dir=\"ltr\">swiming</span>",
            "<span dir=\"ltr\">swimeng</span>",
            "<span dir=\"ltr\">swimeing</span>"
        ],
        correctAnswer: 0,
        hint: "חוק הכריך (עיצור-אות ניקוד-עיצור): כשפועל קצר מסתיים בעיצור, לפניו אות ניקוד, ולפניו עיצור (CVC), נכפיל את האות האחרונה.",
        solution: `<strong>הסבר מלא (חוק הכפלת האות האחרונה):</strong><br>
        יש פעלים קצרים שמסתיימים ב"כריך" מיוחד: אות רגילה (עיצור), אחריה אות ניקוד אחת בלבד (a,e,i,o,u), ואחריה שוב אות רגילה.<br>
        במצב כזה, <strong>מכפילים את האות האחרונה</strong> לפני שמוסיפים ing.<br><br>
        דוגמאות פופולריות שכדאי לזכור בעל פה:<br>
        - <span dir="ltr">swi<strong>m</strong> &rarr; swim<strong>ming</strong></span> (ה-m הוכפלה)<br>
        - <span dir="ltr">ru<strong>n</strong> &rarr; run<strong>ning</strong></span> (ה-n הוכפלה)<br>
        - <span dir="ltr">si<strong>t</strong> &rarr; sit<strong>ting</strong></span><br><br>
        לכן הצורה התקינה היא <span dir="ltr"><strong>swimming</strong></span> עם פעמיים m.`
    },
    // Question 56
    {
        topic: "english",
        subTopic: "Present Progressive (Basic)",
        question_text: `<strong>Negative Form (isn't):</strong><br>
        איך נאמר "היא לא ישנה" באנגלית?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">She ________ sleeping right now.</span>`,
        options: [
            "<span dir=\"ltr\">isn't</span>",
            "<span dir=\"ltr\">aren't</span>",
            "<span dir=\"ltr\">doesn't</span>",
            "<span dir=\"ltr\">don't</span>"
        ],
        correctAnswer: 0,
        hint: "בהווה ממושך (כשיש ing), משתמשים בפועל To be גם כדי לעשות שלילה. לכן נוסיף not ל-is.",
        solution: `<strong>הסבר מלא (שלילה בהווה ממושך):</strong><br>
        יצירת שלילה בזמן הווה ממושך היא קלה מאוד! אין צורך להביא את Don't או Doesn't. פועל ה-To be כבר נמצא שם, והוא חזק מספיק כדי להחזיק את מילת השלילה (Not).<br><br>
        - <span dir="ltr">am not</span> (אין קיצור)<br>
        - <span dir="ltr">is not &rarr; <strong>isn't</strong></span><br>
        - <span dir="ltr">are not &rarr; <strong>aren't</strong></span><br><br>
        הנושא הוא <span dir="ltr"><strong>She</strong></span> (היא), שלוקח <span dir="ltr">is</span>. לכן התשובה השלילית היא <span dir="ltr"><strong>isn't</strong></span>.<br>
        *אסור בתכלית האיסור להגיד doesn't sleeping. המילה doesn't שייכת רק להווה פשוט (ללא ing).*`
    },
    // Question 57
    {
        topic: "english",
        subTopic: "Present Progressive (Basic)",
        question_text: `<strong>Negative Form (aren't):</strong><br>
        השלימו את משפט השלילה הבא:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">We ________ doing our homework. We are watching TV.</span>`,
        options: [
            "<span dir=\"ltr\">aren't</span>",
            "<span dir=\"ltr\">don't</span>",
            "<span dir=\"ltr\">isn't</span>",
            "<span dir=\"ltr\">am not</span>"
        ],
        correctAnswer: 0,
        hint: "הנושא הוא We (אנחנו). לכן נשתמש בפועל To be שמתאים לרבים + Not.",
        solution: `<strong>הסבר מלא:</strong><br>
        המשפט אומר: "אנחנו לא עושים שיעורי בית. אנחנו צופים בטלוויזיה".<br>
        הנושא הוא <span dir="ltr"><strong>We</strong></span>, שדורש את הפועל <span dir="ltr"><strong>are</strong></span>.<br>
        כדי להפוך ל"לא עושים", נחבר את <span dir="ltr">are</span> עם <span dir="ltr">not</span> ונקבל את הקיצור <span dir="ltr"><strong>aren't</strong></span>.<br>
        המשפט המלא: <span dir="ltr">We <strong>aren't</strong> doing our homework.</span>`
    },
    // Question 58
    {
        topic: "english",
        subTopic: "Present Progressive (Basic)",
        question_text: `<strong>Questions (Yes/No Questions):</strong><br>
        איך נשאל חבר: "האם אתה מקשיב?"<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">________ you listening to me?</span>`,
        options: [
            "<span dir=\"ltr\">Are</span>",
            "<span dir=\"ltr\">Do</span>",
            "<span dir=\"ltr\">Is</span>",
            "<span dir=\"ltr\">Does</span>"
        ],
        correctAnswer: 0,
        hint: "כשיש פועל עם ing (listening), השאלה תמיד תתחיל עם Am, Is או Are. מה הולך עם You?",
        solution: `<strong>הסבר מלא (יצירת שאלה בהווה ממושך):</strong><br>
        כדי לשאול שאלה בזמן שקורה <strong>עכשיו</strong>, אנחנו לוקחים את פועל העזר (Am, Is, Are) ופשוט מקפיצים אותו לתחילת המשפט!<br><br>
        - משפט רגיל: <span dir="ltr">You <strong>are</strong> listening</span>.<br>
        - שאלת כן/לא: <span dir="ltr"><strong>Are</strong> you listening?</span><br><br>
        מכיוון שהפועל מסתיים ב-ing, אסור לנו להשתמש במילה Do או Does. אנו חייבים את ה"זוג" של ה-ing, שהוא פועל ה-To be.`
    },
    // Question 59
    {
        topic: "english",
        subTopic: "Present Progressive (Basic)",
        question_text: `<strong>Questions (3rd Person Singular):</strong><br>
        השלימו את תחילת השאלה:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">________ your mom driving the car?</span>`,
        options: [
            "<span dir=\"ltr\">Is</span>",
            "<span dir=\"ltr\">Does</span>",
            "<span dir=\"ltr\">Are</span>",
            "<span dir=\"ltr\">Has</span>"
        ],
        correctAnswer: 0,
        hint: "הנושא הוא 'אמא שלך' (אישה אחת = She). יש לנו פעולה עם ing (driving). מה מתאים לתחילת השאלה?",
        solution: `<strong>הסבר מלא:</strong><br>
        שוב טריק ה-"your"! מילת הנושא היא לא "you", אלא <span dir="ltr"><strong>your mom</strong></span> (אמא שלך). זוהי מילת יחיד (<span dir="ltr">She</span>).<br>
        מאחר שיש לנו פועל עם <strong>ing</strong> (<span dir="ltr">driving</span>), אנו חייבים לפתוח את השאלה עם פועל To Be.<br>
        עבור יחיד (She), הפועל הוא <strong>Is</strong>.<br>
        השאלה התקינה: <span dir="ltr"><strong>Is</strong> your mom driving the car?</span>`
    },
    // Question 60
    {
        topic: "english",
        subTopic: "Present Progressive (Basic)",
        question_text: `<strong>Time Expressions (רמזי זמן):</strong><br>
        איזו מהמילים הבאות היא מילת רמז אופיינית לזמן Present Progressive (הווה ממושך)?`,
        options: [
            "<span dir=\"ltr\">Right now</span>",
            "<span dir=\"ltr\">Usually</span>",
            "<span dir=\"ltr\">Every week</span>",
            "<span dir=\"ltr\">Always</span>"
        ],
        correctAnswer: 0,
        hint: "הזמן הזה מדבר על פעולה שמתרחשת *עכשיו*.",
        solution: `<strong>הסבר מלא (מילות רמז):</strong><br>
        מילות רמז אומרות לנו מיד באיזה זמן דקדוקי אנחנו צריכים להשתמש.<br><br>
        עבור ההווה הממושך (פעולה שקורית עכשיו), מילות הרמז הנפוצות הן:<br>
        <ul>
            <li><span dir="ltr"><strong>Now</strong></span> (עכשיו)</li>
            <li><span dir="ltr"><strong>Right now</strong></span> (ממש עכשיו)</li>
            <li><span dir="ltr"><strong>At the moment</strong></span> (ברגע זה)</li>
            <li><span dir="ltr"><strong>Today</strong></span> (היום - לפעולה זמנית)</li>
        </ul>
        המילים Usually (בדרך כלל), Always (תמיד) ו-Every week (כל שבוע) שייכות כולן לזמן הווה פשוט (הרגלים).`
    },
    // Question 61
    {
        topic: "english",
        subTopic: "Present Progressive (Basic)",
        question_text: `<strong>Exclamation Clues (מילות קריאה):</strong><br>
        בחרו את הפועל המתאים:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">Listen! The birds ________.</span>`,
        options: [
            "<span dir=\"ltr\">are singing</span>",
            "<span dir=\"ltr\">is singing</span>",
            "<span dir=\"ltr\">sing</span>",
            "<span dir=\"ltr\">sings</span>"
        ],
        correctAnswer: 0,
        hint: "אם אומרים לנו 'הקשב!' זה אומר שזה קורה באותו הרגע, מול האוזניים שלנו. The birds (הציפורים) זה רבים.",
        solution: `<strong>הסבר מלא (מילות קריאה כרמז):</strong><br>
        מילות קריאה כמו <span dir="ltr"><strong>!Look</strong></span> (הבט!) או <span dir="ltr"><strong>!Listen</strong></span> (הקשב!) הן סממן מובהק לכך שמשהו מתרחש מולנו בדיוק ברגע זה. לכן נשתמש בהווה ממושך (ing).<br><br>
        הנושא הוא <span dir="ltr"><strong>The birds</strong></span> (הציפורים - רבים).<br>
        עבור רבים נשתמש בפועל העזר <strong>are</strong> פלוס פועל עם <strong>ing</strong>.<br>
        המשפט הנכון: <span dir="ltr">Listen! The birds <strong>are singing</strong>.</span>`
    },
    // Question 62
    {
        topic: "english",
        subTopic: "Present Progressive (Basic)",
        question_text: `<strong>Present Simple vs. Progressive (הבדל במשמעות):</strong><br>
        קראו את המשפט ובחרו את הפירוש הנכון שלו בעברית:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">I wear a uniform every day, but today I am wearing jeans.</span>`,
        options: [
            "<span dir=\"ltr\">אני לובש תלבושת אחידה כל יום, אבל היום אני לובש ג'ינס.</span>",
            "<span dir=\"ltr\">אני תמיד לובש ג'ינס, אבל היום לבשתי תלבושת אחידה.</span>",
            "<span dir=\"ltr\">אני שונא תלבושת אחידה ולכן אני תמיד קונה ג'ינס.</span>",
            "<span dir=\"ltr\">אני לובש מדים רק מחר בבוקר.</span>"
        ],
        correctAnswer: 0,
        hint: "המשפט מדגים את ההבדל: הרגל קבוע (every day = I wear) מול משהו זמני שקורה באופן חריג עכשיו (today = I am wearing).",
        solution: `<strong>הסבר מלא (השוואת זמנים):</strong><br>
        זהו משפט קלאסי שמראה למה אנחנו צריכים שני זמני הווה שונים באנגלית:<br><br>
        1. <span dir="ltr">"I <strong>wear</strong> a uniform <strong>every day</strong>"</span> -> זהו הרגל קבוע ושגרתי (Present Simple). "אני לובש...".<br>
        2. <span dir="ltr">"But <strong>today</strong> I <strong>am wearing</strong> jeans"</span> -> זהו מצב זמני או יוצא דופן שקורה רק בזמן הקרוב (Present Progressive). "היום אני לובש/ת...".<br><br>
        השילוב של השניים מבהיר לנו מתי להשתמש בכל זמן.`
    },
    // Question 63
    {
        topic: "english",
        subTopic: "Present Progressive (Basic)",
        question_text: `<strong>Stative Verbs (פעלים חריגים שלא מקבלים ing):</strong><br>
        איזה מהמשפטים הבאים כתוב <strong>נכון</strong> מבחינה דקדוקית? (זכרו שיש פעלים שמתארים רגש, ואסור להוסיף להם ing).`,
        options: [
            "<span dir=\"ltr\">I want a pizza right now.</span>",
            "<span dir=\"ltr\">I am wanting a pizza right now.</span>",
            "<span dir=\"ltr\">I is want a pizza right now.</span>",
            "<span dir=\"ltr\">I wanting a pizza right now.</span>"
        ],
        correctAnswer: 0,
        hint: "פעלים של רגש, מחשבה או חושים (כמו like, love, want) לא יכולים להופיע עם ing, גם אם הפעולה קורית 'עכשיו'.",
        solution: `<strong>הסבר מלא (פעלי מצב - Stative Verbs):</strong><br>
        יש קבוצת פעלים באנגלית שמתארת "מצב" במוח או בלב, ולא פעולה פיזית שאפשר לצלם בוידאו. פעלים אלו <strong>לעולם לא מקבלים סיומת ing!</strong><br><br>
        פעלים פופולריים שלא מקבלים ing:<br>
        - <span dir="ltr"><strong>Like</strong></span> (לחבב)<br>
        - <span dir="ltr"><strong>Love</strong></span> (לאהוב)<br>
        - <span dir="ltr"><strong>Want</strong></span> (לרצות)<br>
        - <span dir="ltr"><strong>Know</strong></span> (לדעת)<br><br>
        לכן, גם אם המילה <span dir="ltr">right now</span> מופיעה במשפט, אנחנו חייבים להשתמש בהווה פשוט. המשפט התקין הוא: <span dir="ltr">I <strong>want</strong> a pizza right now</span>.`
    },
    // Question 64
    {
        topic: "english",
        subTopic: "Present Progressive (Basic)",
        question_text: `<strong>Spelling Rule (Verbs ending in 'y'):</strong><br>
        הפועל הוא <strong>play</strong>. מהי הדרך הנכונה לכתוב אותו עם ing?`,
        options: [
            "<span dir=\"ltr\">playing</span>",
            "<span dir=\"ltr\">plaing</span>",
            "<span dir=\"ltr\">playying</span>",
            "<span dir=\"ltr\">plaiing</span>"
        ],
        correctAnswer: 0,
        hint: "בהווה ממושך (ing), אין חוקים מסובכים לאות y. פשוט מוסיפים את הסיומת בסוף.",
        solution: `<strong>הסבר מלא (אין חוק Y ב-ing!):</strong><br>
        בזמן הווה פשוט (Present Simple) למדנו שלפעמים מוחקים את האות <strong>y</strong> (כמו ב-cries).<br>
        <strong>אבל בזמן הווה ממושך (Progressive), לא מוחקים את האות y לעולם!</strong><br><br>
        החוק הוא פשוט: כל פועל שמסתיים ב-y, פשוט "מדביקים" לו ing בסוף, וזהו.<br>
        - <span dir="ltr">play &rarr; <strong>playing</strong></span><br>
        - <span dir="ltr">cry &rarr; <strong>crying</strong></span><br>
        - <span dir="ltr">fly &rarr; <strong>flying</strong></span>`
    },
    // Question 65
    {
        topic: "english",
        subTopic: "Present Progressive (Basic)",
        question_text: `<strong>Short Answers (תשובות קצרות):</strong><br>
        כיצד תענו נכון על השאלה הבאה בחיוב?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">"Are you writing a letter?"</span>`,
        options: [
            "<span dir=\"ltr\">Yes, I am.</span>",
            "<span dir=\"ltr\">Yes, I are.</span>",
            "<span dir=\"ltr\">Yes, I am writing.</span>",
            "<span dir=\"ltr\">Yes, I do.</span>"
        ],
        correctAnswer: 0,
        hint: "כשהשאלה מופנית אליכם ('האם אתה...?'), התשובה צריכה להיות 'כן, אני...'. מהו פועל העזר ששייך למילה 'אני' (I)?",
        solution: `<strong>הסבר מלא (תשובות קצרות):</strong><br>
        שימו לב לשינוי הגוף! כששואלים "האם <strong>אתה</strong>...?", אתם צריכים לענות "כן, <strong>אני</strong>...".<br><br>
        - שאלה: <span dir="ltr"><strong>Are you</strong> writing...?</span><br>
        הופך לתשובה: <span dir="ltr">Yes, <strong>I am</strong>.</span><br><br>
        *מדוע לא תשובה 3 (Yes, I am writing)? כי בתשובות קצרות באנגלית (Short Answers) <strong>אף פעם לא מוסיפים את הפועל המרכזי</strong> עם ה-ing. התשובה עוצרת אחרי פועל ה-To be.`
    },

    // ---------------------------------------------------------
    // Subtopic 6: Wh- Questions (מילות שאלה) (שאלות 66-80)
    // ---------------------------------------------------------

    // Question 66
    {
        topic: "english",
        subTopic: "Wh- Questions (מילות שאלה)",
        question_text: `<strong>Who (מי):</strong><br>
        באיזו מילת שאלה נשתמש כדי לשאול על <strong>אנשים</strong> (זהות האדם)?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">________ is your best friend? - Tom.</span>`,
        options: [
            "<span dir=\"ltr\">Who</span>",
            "<span dir=\"ltr\">What</span>",
            "<span dir=\"ltr\">Where</span>",
            "<span dir=\"ltr\">Why</span>"
        ],
        correctAnswer: 0,
        hint: "התשובה היא 'טום' - אדם. המילה ששואלת 'מי זה' היא Who.",
        solution: `<strong>הסבר מלא (Who):</strong><br>
        מילת השאלה <strong>Who</strong> פירושה <strong>מי</strong>.<br>
        אנו משתמשים בה אך ורק כדי לשאול על אנשים.<br><br>
        דוגמאות:<br>
        - <span dir="ltr"><strong>Who</strong> is your best friend?</span> (מי החבר הכי טוב שלך?)<br>
        - <span dir="ltr"><strong>Who</strong> is that man?</span> (מי האיש הזה?)`
    },
    // Question 67
    {
        topic: "english",
        subTopic: "Wh- Questions (מילות שאלה)",
        question_text: `<strong>Where (איפה):</strong><br>
        השלימו את השאלה. התשובה מתייחסת ל<strong>מקום</strong>.<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">________ is the book? - It is on the table.</span>`,
        options: [
            "<span dir=\"ltr\">Where</span>",
            "<span dir=\"ltr\">When</span>",
            "<span dir=\"ltr\">Who</span>",
            "<span dir=\"ltr\">How</span>"
        ],
        correctAnswer: 0,
        hint: "התשובה אומרת 'זה על השולחן' (מקום). המילה ששואלת 'איפה' או 'היכן' היא Where.",
        solution: `<strong>הסבר מלא (Where):</strong><br>
        מילת השאלה <strong>Where</strong> פירושה <strong>איפה / היכן / לאן</strong>.<br>
        אנו משתמשים בה כדי לשאול על מיקומים של חפצים, אנשים או מקומות בעולם.<br><br>
        דוגמאות:<br>
        - <span dir="ltr"><strong>Where</strong> is the book?</span> (איפה הספר?)<br>
        - <span dir="ltr"><strong>Where</strong> do you live?</span> (היכן אתה גר?)`
    },
    // Question 68
    {
        topic: "english",
        subTopic: "Wh- Questions (מילות שאלה)",
        question_text: `<strong>When (מתי):</strong><br>
        התשובה לשאלה מציינת <strong>זמן</strong> (Tomorrow). באיזו מילת שאלה נשתמש?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">________ is the party? - Tomorrow at 8:00.</span>`,
        options: [
            "<span dir=\"ltr\">When</span>",
            "<span dir=\"ltr\">What</span>",
            "<span dir=\"ltr\">Why</span>",
            "<span dir=\"ltr\">Where</span>"
        ],
        correctAnswer: 0,
        hint: "המילה When משמעותה 'מתי', ושואלת על תאריכים או זמנים.",
        solution: `<strong>הסבר מלא (When):</strong><br>
        מילת השאלה <strong>When</strong> פירושה <strong>מתי</strong>.<br>
        היא משמשת כשאנחנו רוצים לדעת מועד, שעה, יום, חודש או שנה שבהם משהו יקרה או קרה.<br><br>
        דוגמאות:<br>
        - <span dir="ltr"><strong>When</strong> is your birthday?</span> (מתי יום ההולדת שלך?)<br>
        - <span dir="ltr"><strong>When</strong> does the train arrive?</span> (מתי הרכבת מגיעה?)`
    },
    // Question 69
    {
        topic: "english",
        subTopic: "Wh- Questions (מילות שאלה)",
        question_text: `<strong>What (מה):</strong><br>
        באיזו מילת שאלה נשתמש כדי לשאול על <strong>חפצים או פעולות</strong>?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">________ are you doing? - I am playing.</span>`,
        options: [
            "<span dir=\"ltr\">What</span>",
            "<span dir=\"ltr\">Who</span>",
            "<span dir=\"ltr\">Where</span>",
            "<span dir=\"ltr\">When</span>"
        ],
        correctAnswer: 0,
        hint: "המילה What משמעותה 'מה' או 'איזה'. משתמשים בה לברר דברים כלליים.",
        solution: `<strong>הסבר מלא (What):</strong><br>
        מילת השאלה <strong>What</strong> פירושה <strong>מה / איזה</strong>.<br>
        זוהי מילת השאלה הנפוצה ביותר. היא משמשת לשאול על חפצים, רעיונות או אילו פעולות מתבצעות כעת.<br><br>
        דוגמאות:<br>
        - <span dir="ltr"><strong>What</strong> is your name?</span> (מה השם שלך?)<br>
        - <span dir="ltr"><strong>What</strong> are you doing?</span> (מה אתה עושה?)`
    },
    // Question 70
    {
        topic: "english",
        subTopic: "Wh- Questions (מילות שאלה)",
        question_text: `<strong>Why (למה):</strong><br>
        כשהתשובה מתחילה במילה <span dir="ltr">"Because"</span> (בגלל ש...), השאלה בהכרח שואלת על <strong>סיבה</strong>.<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">________ are you crying? - Because I fell down.</span>`,
        options: [
            "<span dir=\"ltr\">Why</span>",
            "<span dir=\"ltr\">How</span>",
            "<span dir=\"ltr\">What</span>",
            "<span dir=\"ltr\">Who</span>"
        ],
        correctAnswer: 0,
        hint: "Why = מדוע/למה. התשובה ל-Why תמיד תתחיל עם Because.",
        solution: `<strong>הסבר מלא (Why & Because):</strong><br>
        זהו צמד המילים המפורסם ביותר באנגלית!<br>
        מילת השאלה <strong>Why</strong> (מדוע / למה) מבקשת לדעת סיבה למשהו.<br>
        התשובה אליה תמיד תפתח במילה <strong>Because</strong> (מפני ש... / בגלל ש...).<br><br>
        לכן, אם ראיתם בתשובה "Because", אתם יודעים מיד שמילת השאלה הייתה Why.<br>
        <span dir="ltr"><strong>Why</strong> are you crying?</span> (למה אתה בוכה?)`
    },
    // Question 71
    {
        topic: "english",
        subTopic: "Wh- Questions (מילות שאלה)",
        question_text: `<strong>How (איך / כיצד):</strong><br>
        איזו מילת שאלה מתאימה למשפט הבא המברר על אופן הפעולה (הדרך שבה מגיעים)?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">________ do you go to school? - By bus.</span>`,
        options: [
            "<span dir=\"ltr\">How</span>",
            "<span dir=\"ltr\">What</span>",
            "<span dir=\"ltr\">When</span>",
            "<span dir=\"ltr\">Where</span>"
        ],
        correctAnswer: 0,
        hint: "How משמעותו 'איך' (באיזו דרך). 'איך אתה הולך לבית הספר?'.",
        solution: `<strong>הסבר מלא (How):</strong><br>
        מילת השאלה <strong>How</strong> פירושה <strong>איך / כיצד</strong>.<br>
        אנו משתמשים בה כדי לברר על "אופן הפעולה" – איך מישהו מרגיש, באיזו דרך מישהו נוסע, או איך עושים משהו.<br><br>
        דוגמאות:<br>
        - <span dir="ltr"><strong>How</strong> are you?</span> (איך אתה?)<br>
        - <span dir="ltr"><strong>How</strong> do you make a cake?</span> (איך מכינים עוגה?)`
    },
    // Question 72
    {
        topic: "english",
        subTopic: "Wh- Questions (מילות שאלה)",
        question_text: `<strong>How many (כמה - לדברים שאפשר לספור):</strong><br>
        השלימו את השאלה המבררת <strong>כמות</strong>:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">________ brothers do you have? - I have two brothers.</span>`,
        options: [
            "<span dir=\"ltr\">How many</span>",
            "<span dir=\"ltr\">How much</span>",
            "<span dir=\"ltr\">How old</span>",
            "<span dir=\"ltr\">What</span>"
        ],
        correctAnswer: 0,
        hint: "אפשר לספור אחים (אח אחד, שני אחים). באנגלית, כשאפשר לספור משהו, משתמשים ב-How many.",
        solution: `<strong>הסבר מלא (How many vs How much):</strong><br>
        כששואלים על "כמות" באנגלית, יש הבדל בין דברים שאפשר לספור לדברים שאי אפשר.<br><br>
        - <span dir="ltr"><strong>How many</strong></span> (כמה) מיועד לדברים פריטים שאפשר לספור (אחים, ספרים, תפוחים, כיסאות). המילה שאחרי how many תמיד תהיה ברבים עם s.<br>
        - <span dir="ltr"><strong>How much</strong></span> מיועד לדברים שאי אפשר לספור בנקל כי הם "חומר" (מים, כסף, סוכר, זמן).<br><br>
        מכיוון ש-brothers (אחים) אפשר לספור, התשובה היא <span dir="ltr"><strong>How many</strong></span>.`
    },
    // Question 73
    {
        topic: "english",
        subTopic: "Wh- Questions (מילות שאלה)",
        question_text: `<strong>How old (בן כמה):</strong><br>
        השלימו את שאלת הגיל הבאה:<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">________ is your sister? - She is 12.</span>`,
        options: [
            "<span dir=\"ltr\">How old</span>",
            "<span dir=\"ltr\">How many</span>",
            "<span dir=\"ltr\">What</span>",
            "<span dir=\"ltr\">When</span>"
        ],
        correctAnswer: 0,
        hint: "כדי לשאול על גיל (בן כמה), מצמידים למילה How את המילה Old (ישן/זקן). 'כמה זקנה אחותך?'.",
        solution: `<strong>הסבר מלא (שאלות גיל):</strong><br>
        באנגלית לא שואלים "What is your age" בשיחות יומיומיות, אלא משתמשים בביטוי מיוחד: <strong>How old</strong>.<br>
        בתרגום מילולי משעשע זה אומר "כמה זקן אתה?", אך הכוונה היא כמובן "בן כמה אתה?".<br><br>
        דוגמאות:<br>
        - <span dir="ltr"><strong>How old</strong> are you?</span> (בן כמה אתה?)<br>
        - <span dir="ltr"><strong>How old</strong> is she?</span> (בת כמה היא?)`
    },
    // Question 74
    {
        topic: "english",
        subTopic: "Wh- Questions (מילות שאלה)",
        question_text: `<strong>Matching Question to Answer (זיהוי רמז בתשובה):</strong><br>
        קראו את התשובה והחליטו איזו מילת שאלה פתחה את השאלה.<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">________ are you tired? - <u>Because</u> I went to sleep late.</span>`,
        options: [
            "<span dir=\"ltr\">Why</span>",
            "<span dir=\"ltr\">When</span>",
            "<span dir=\"ltr\">Who</span>",
            "<span dir=\"ltr\">Where</span>"
        ],
        correctAnswer: 0,
        hint: "זוכרים את הצמד? כשהתשובה מתחילה ב-Because (בגלל ש...), השאלה תמיד תהיה מדוע/למה.",
        solution: `<strong>הסבר מלא:</strong><br>
        התשובה מתחילה במילה <span dir="ltr"><strong>Because</strong></span> (בגלל ש... / מפני ש...). זהו רמז שמסביר סיבה.<br>
        מילת השאלה היחידה שמחפשת סיבה היא <span dir="ltr"><strong>Why</strong></span> (מדוע/למה).<br><br>
        השאלה הייתה: "למה אתה עייף?" (Why are you tired?).`
    },
    // Question 75
    {
        topic: "english",
        subTopic: "Wh- Questions (מילות שאלה)",
        question_text: `<strong>Matching Question to Answer (מקום):</strong><br>
        איזו שאלה מתאימה לתשובה הבאה?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">Answer: "I play football <u>in the park</u>."</span>`,
        options: [
            "<span dir=\"ltr\">Where do you play football?</span>",
            "<span dir=\"ltr\">When do you play football?</span>",
            "<span dir=\"ltr\">Who plays football?</span>",
            "<span dir=\"ltr\">Why do you play football?</span>"
        ],
        correctAnswer: 0,
        hint: "התשובה מציינת את 'הפארק'. פארק הוא מקום (Location).",
        solution: `<strong>הסבר מלא:</strong><br>
        נסתכל על התשובה שקיבלנו: "אני משחק כדורגל <strong>בפארק</strong>".<br>
        המילה "פארק" מציינת מיקום פיזי (מקום).<br>
        מילת השאלה שמבררת על מקום היא <span dir="ltr"><strong>Where</strong></span> (היכן / איפה).<br>
        לכן השאלה הנכונה היא: "איפה אתה משחק כדורגל?" (<span dir="ltr">Where do you play...</span>).`
    },
    // Question 76
    {
        topic: "english",
        subTopic: "Wh- Questions (מילות שאלה)",
        question_text: `<strong>Question Structure (מבנה שאלה - הווה פשוט):</strong><br>
        איזה מהמשפטים הבאים בנוי <strong>נכון</strong> מבחינה דקדוקית? (זכרו שצריך פועל עזר אחרי מילת השאלה).`,
        options: [
            "<span dir=\"ltr\">Where do you live?</span>",
            "<span dir=\"ltr\">Where you live?</span>",
            "<span dir=\"ltr\">Where live you?</span>",
            "<span dir=\"ltr\">Where you do live?</span>"
        ],
        correctAnswer: 0,
        hint: "בניית שאלה באנגלית פועלת לפי נוסחת WHAS: \nWh-word (מילת שאלה) + Helper (פועל עזר do/does) + Subject (נושא) + Action (פועל).",
        solution: `<strong>הסבר מלא (מבנה שאלת Wh):</strong><br>
        באנגלית לא מספיק לשים את מילת השאלה בהתחלה כמו בעברית ("איפה אתה גר?").<br>
        חייבים להוסיף <strong>פועל עזר</strong> (Do או Does) מיד אחרי מילת השאלה!<br><br>
        <strong>הנוסחה המנצחת:</strong><br>
        1. מילת שאלה (<span dir="ltr">Where</span>)<br>
        2. פועל עזר (<span dir="ltr">do</span> - כי הנושא הוא you)<br>
        3. נושא (אדם - <span dir="ltr">you</span>)<br>
        4. פועל רגיל (<span dir="ltr">live</span>)<br><br>
        המשפט היחיד שבנוי לפי הסדר הוא: <span dir="ltr">Where <strong>do</strong> you live?</span>`
    },
    // Question 77
    {
        topic: "english",
        subTopic: "Wh- Questions (מילות שאלה)",
        question_text: `<strong>Question Structure (מבנה שאלה - פועל בגוף שלישי):</strong><br>
        השלימו את השאלה כראוי (שימו לב לפועל העזר הנדרש עבור She):<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">What ________ she like to read?</span>`,
        options: [
            "<span dir=\"ltr\">does</span>",
            "<span dir=\"ltr\">do</span>",
            "<span dir=\"ltr\">is</span>",
            "<span dir=\"ltr\">are</span>"
        ],
        correctAnswer: 0,
        hint: "אחרי מילת השאלה What צריכה לבוא מילת עזר. בגלל שהנושא הוא She, מילת העזר מקבלת s.",
        solution: `<strong>הסבר מלא (התאמת פועל העזר לנושא):</strong><br>
        כמו שלמדנו בפרק ה-Present Simple, הגופים He, She, It דורשים יחס מיוחד (תוספת s).<br>
        כשמרכיבים שאלה, ה-s הזו מופיעה בתוך פועל העזר.<br><br>
        הנושא בשאלה הוא <span dir="ltr"><strong>she</strong></span> (היא). לכן פועל העזר שחייב לעמוד לפניו הוא <span dir="ltr"><strong>does</strong></span>.<br>
        המשפט המושלם הוא: <span dir="ltr">What <strong>does</strong> she like to read?</span> (מה היא אוהבת לקרוא?).`
    },
    // Question 78
    {
        topic: "english",
        subTopic: "Wh- Questions (מילות שאלה)",
        question_text: `<strong>Whose (של מי):</strong><br>
        ישנה מילת שאלה אחת שמשמעותה <strong>"של מי"</strong> (מתארת שייכות). איזו מהבאות היא הנכונה?<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">________ bag is this? - It is my bag.</span>`,
        options: [
            "<span dir=\"ltr\">Whose</span>",
            "<span dir=\"ltr\">Who</span>",
            "<span dir=\"ltr\">Which</span>",
            "<span dir=\"ltr\">How</span>"
        ],
        correctAnswer: 0,
        hint: "Who זה 'מי'. אבל כשמוסיפים סיומת מיוחדת (Whose) זה הופך להיות 'של מי'.",
        solution: `<strong>הסבר מלא (Whose):</strong><br>
        מילת השאלה <strong>Whose</strong> פירושה <strong>של מי</strong>.<br>
        אנו משתמשים בה כדי לברר למי שייך חפץ מסוים.<br><br>
        בדרך כלל, החפץ שעליו שואלים יופיע <u>מיד</u> אחרי המילה Whose.<br>
        דוגמאות:<br>
        - <span dir="ltr"><strong>Whose</strong> bag is this?</span> (של מי התיק הזה?)<br>
        - <span dir="ltr"><strong>Whose</strong> shoes are these?</span> (של מי הנעליים האלה?)`
    },
    // Question 79
    {
        topic: "english",
        subTopic: "Wh- Questions (מילות שאלה)",
        question_text: `<strong>Which (איזה - מתוך אפשרויות):</strong><br>
        המוכרת בחנות מציגה לכם שני צבעים של חולצה ושואלת: "<strong>איזו</strong> חולצה אתה רוצה, האדומה או הכחולה?".<br>
        באיזו מילת שאלה היא תשתמש?`,
        options: [
            "<span dir=\"ltr\">Which</span>",
            "<span dir=\"ltr\">What</span>",
            "<span dir=\"ltr\">Why</span>",
            "<span dir=\"ltr\">Where</span>"
        ],
        correctAnswer: 0,
        hint: "כששואלים על בחירה מתוך קבוצה ספציפית ומצומצמת (איזה מבין השניים), משתמשים במילה Which ולא במילה What.",
        solution: `<strong>הסבר מלא (Which לעומת What):</strong><br>
        תלמידים רבים מתבלבלים בין שתי המילים האלו, כי בעברית שתיהן מתורגמות ל"איזה/מה".<br><br>
        - <strong>What:</strong> שאלה פתוחה לחלוטין מתוך המון אפשרויות בעולם. (<span dir="ltr">What is your favorite food?</span> - מה המאכל האהוב עליך?).<br>
        - <strong>Which:</strong> שאלה סגורה מתוך אפשרויות ברורות ומוגבלות שניצבות מולנו. ("איזו מהחולצות שכאן אתה מעדיף?").<br><br>
        לכן, השאלה של המוכרת תהיה: <span dir="ltr"><strong>Which</strong> shirt do you want, the red or the blue?</span>`
    },
    // Question 80
    {
        topic: "english",
        subTopic: "Wh- Questions (מילות שאלה)",
        question_text: `<strong>Mixed Wh- Questions (תרגול מסכם):</strong><br>
        השלימו את השיחה הבאה עם המילה הנכונה. שימו לב לתשובה!<br>
        <span dir="ltr" style="font-size: 1.3em; font-weight: bold; color: #1e40af;">A: ________ is your teacher?<br>B: Mrs. Cohen.</span>`,
        options: [
            "<span dir=\"ltr\">Who</span>",
            "<span dir=\"ltr\">What</span>",
            "<span dir=\"ltr\">Where</span>",
            "<span dir=\"ltr\">When</span>"
        ],
        correctAnswer: 0,
        hint: "גברת כהן היא בן אדם (אנשים). מילת השאלה לזיהוי בני אדם היא 'מי' (Who).",
        solution: `<strong>הסבר מלא:</strong><br>
        תמיד כדאי להסתכל על התשובה כדי להבין מה שאלו.<br>
        התשובה היא <span dir="ltr"><strong>Mrs. Cohen</strong></span> (גברת כהן). זהו שם של אדם.<br>
        מילת השאלה היחידה שמבררת זהות של אדם היא <span dir="ltr"><strong>Who</strong></span> (מי).<br>
        (What - מה, Where - איפה, When - מתי).`
    },

    // ---------------------------------------------------------
    // Subtopic 7: Basic Reading Comprehension (שאלות 81-95)
    // ---------------------------------------------------------

    // Question 81
    {
        topic: "english",
        subTopic: "Basic Reading Comprehension (טקסטים קצרים)",
        question_text: `<strong>Reading 1: A Pet (Finding details):</strong><br>
        <span dir="ltr" style="background-color: #f1f5f9; padding: 10px; display: block; border-radius: 8px; margin-bottom: 10px;">Dan has a small dog. His dog is brown and white. The dog likes to play with a red ball in the garden.</span><br>
        What color is the ball?`,
        options: [
            "<span dir=\"ltr\">Red</span>",
            "<span dir=\"ltr\">Brown and white</span>",
            "<span dir=\"ltr\">Green</span>",
            "<span dir=\"ltr\">Blue</span>"
        ],
        correctAnswer: 0,
        hint: "חפשו בטקסט את המילה 'ball' (כדור) וקראו איזו מילת צבע מופיעה בדיוק לפניה.",
        solution: `<strong>הסבר מלא (אסטרטגיית קריאה - מציאת פרטים):</strong><br>
        בטקסטים באנגלית, התשובה לרוב מופיעה סמוך למילת המפתח מהשאלה. <br>
        השאלה מחפשת את צבע הכדור (ball). נסרוק את הטקסט למילה ball ונמצא את המשפט:<br>
        <span dir="ltr">"The dog likes to play with a <strong>red</strong> ball..."</span><br>
        המילה שמתארת את הכדור היא red (אדום). "Brown and white" אלו הצבעים של הכלב עצמו, ולכן הם מסיחים (מלכודת).`
    },
    // Question 82
    {
        topic: "english",
        subTopic: "Basic Reading Comprehension (טקסטים קצרים)",
        question_text: `<strong>Reading 1: A Pet (Where questions):</strong><br>
        <span dir="ltr" style="background-color: #f1f5f9; padding: 10px; display: block; border-radius: 8px; margin-bottom: 10px;">Dan has a small dog. His dog is brown and white. The dog likes to play with a red ball in the garden.</span><br>
        Where does the dog play?`,
        options: [
            "<span dir=\"ltr\">In the garden</span>",
            "<span dir=\"ltr\">In the house</span>",
            "<span dir=\"ltr\">At school</span>",
            "<span dir=\"ltr\">In the park</span>"
        ],
        correctAnswer: 0,
        hint: "מילת השאלה Where שואלת 'איפה'. חפשו בטקסט מקום (Location).",
        solution: `<strong>הסבר מלא (אסטרטגיית קריאה - זיהוי מיקום):</strong><br>
        כאשר אנו רואים את המילה <span dir="ltr"><strong>Where</strong></span>, אנו מיד סורקים את הטקסט כדי לחפש מילות יחס המציינות מקום (in, on, at).<br>
        נלך למשפט שמתאר את המשחק (play): <span dir="ltr">"The dog likes to play... <strong>in the garden</strong>."</span><br>
        המילה garden משמעותה "גינה/חצר", וזו התשובה המדויקת.`
    },
    // Question 83
    {
        topic: "english",
        subTopic: "Basic Reading Comprehension (טקסטים קצרים)",
        question_text: `<strong>Reading 2: Daily Routine (True/False):</strong><br>
        <span dir="ltr" style="background-color: #f1f5f9; padding: 10px; display: block; border-radius: 8px; margin-bottom: 10px;">Every morning, Maya gets up at 7:00. She eats breakfast with her family. She eats toast and drinks milk. She doesn't like tea.</span><br>
        Is the following sentence True (נכון) or False (לא נכון)?<br>
        <strong>Maya likes tea.</strong>`,
        options: [
            "<span dir=\"ltr\">False (לא נכון)</span>",
            "<span dir=\"ltr\">True (נכון)</span>"
        ],
        correctAnswer: 0,
        hint: "הסתכלו על המשפט האחרון בטקסט. המילה doesn't הופכת את המשפט לשלילה (לא).",
        solution: `<strong>הסבר מלא (קריאה זהירה - שימת לב לשלילה):</strong><br>
        זהו מבחן קלאסי לבדיקת תשומת לב של התלמיד.<br>
        תלמידים ממהרים רואים את המילה "tea" בטקסט ומסמנים שזה נכון. אך עלינו לקרוא את המשפט המלא בטקסט:<br>
        <span dir="ltr">"She <strong>doesn't</strong> like tea."</span><br>
        המילה doesn't (Does not) קובעת שהיא <u>אינה</u> אוהבת תה, ולכן המשפט בשאלה שטוען שהיא כן אוהבת תה הוא שקרי (False).`
    },
    // Question 84
    {
        topic: "english",
        subTopic: "Basic Reading Comprehension (טקסטים קצרים)",
        question_text: `<strong>Reading 2: Daily Routine (When questions):</strong><br>
        <span dir="ltr" style="background-color: #f1f5f9; padding: 10px; display: block; border-radius: 8px; margin-bottom: 10px;">Every morning, Maya gets up at 7:00. She eats breakfast with her family. She eats toast and drinks milk. She doesn't like tea.</span><br>
        When does Maya get up?`,
        options: [
            "<span dir=\"ltr\">At 7:00</span>",
            "<span dir=\"ltr\">At 8:00</span>",
            "<span dir=\"ltr\">Every night</span>",
            "<span dir=\"ltr\">At noon</span>"
        ],
        correctAnswer: 0,
        hint: "מילת השאלה When שואלת 'מתי'. חפשו מספרים או שעות בטקסט (במיוחד ליד צמד המילים 'gets up').",
        solution: `<strong>הסבר מלא:</strong><br>
        השאלה משתמשת במילה <span dir="ltr"><strong>When</strong></span> (מתי). עלינו לחפש ביטויי זמן או שעות.<br>
        בטקסט מופיע המשפט: <span dir="ltr">"Maya gets up <strong>at 7:00</strong>."</span> (מאיה קמה בשעה שבע).<br>
        התשובה מופיעה באופן ברור וישיר כבר במשפט הראשון.`
    },
    // Question 85
    {
        topic: "english",
        subTopic: "Basic Reading Comprehension (טקסטים קצרים)",
        question_text: `<strong>Reading 3: Pronoun Reference (למי הכוונה?):</strong><br>
        <span dir="ltr" style="background-color: #f1f5f9; padding: 10px; display: block; border-radius: 8px; margin-bottom: 10px;">Ron loves reading. He has a lot of books in his room. <strong><u>They</u></strong> are on the big shelf.</span><br>
        What does the word "<strong>They</strong>" refer to? (למי/למה המילה מתייחסת?)`,
        options: [
            "<span dir=\"ltr\">The books</span>",
            "<span dir=\"ltr\">Ron</span>",
            "<span dir=\"ltr\">The room</span>",
            "<span dir=\"ltr\">The shelf</span>"
        ],
        correctAnswer: 0,
        hint: "כינוי גוף תמיד מחליף שם של משהו שהוזכר בדיוק במשפט שלפניו. חפשו מילת רבים (כי They זה 'הם') במשפט הקודם.",
        solution: `<strong>הסבר מלא (אסטרטגיית הבנת כינויי גוף):</strong><br>
        בשאלות "למי מתייחסת המילה" (Pronoun Reference), הפתרון תמיד נמצא <strong>צעד אחד אחורה</strong> בטקסט.<br><br>
        המילה <span dir="ltr"><strong>They</strong></span> משמעותה "הם" (לדברים ברבים). נלך משפט אחד אחורה ונחפש שם עצם ברבים:<br>
        <span dir="ltr">"He has a lot of <strong>books</strong> in his room."</span><br>
        המילה היחידה ברבים שם היא books (ספרים). לכן, "הם" (שנמצאים על המדף) הם בעצם הספרים.`
    },
    // Question 86
    {
        topic: "english",
        subTopic: "Basic Reading Comprehension (טקסטים קצרים)",
        question_text: `<strong>Reading 4: Short Email (Understanding Format):</strong><br>
        <div dir="ltr" style="background-color: #f1f5f9; padding: 10px; border-radius: 8px; margin-bottom: 10px; font-family: monospace;">
            <strong>To:</strong> Sara<br>
            <strong>From:</strong> Ben<br>
            <strong>Message:</strong> Happy Birthday! I bought a great present for you. See you at the party.
        </div>
        Who is writing the email? (מי כותב את המייל?)`,
        options: [
            "<span dir=\"ltr\">Ben</span>",
            "<span dir=\"ltr\">Sara</span>",
            "<span dir=\"ltr\">The party</span>",
            "<span dir=\"ltr\">A friend</span>"
        ],
        correctAnswer: 0,
        hint: "הסתכלו על הכותרות של המייל. המילה 'From' אומרת 'מאת' (מי ששלח). המילה 'To' אומרת 'אל' (מי שמקבל).",
        solution: `<strong>הסבר מלא (קריאת כותרות של הודעות):</strong><br>
        כדי להבין פורמט של אימייל, צריך להכיר את המילים הקטנות בהתחלה:<br>
        <ul>
            <li><span dir="ltr"><strong>To</strong></span> (אל) - מי שמקבל את ההודעה (כאן: שרה מקבלת).</li>
            <li><span dir="ltr"><strong>From</strong></span> (מאת / מ-) - מי ששולח או כותב את ההודעה (כאן: <strong>בן</strong> הוא הכותב).</li>
        </ul>
        מכיוון שהשאלה היא "מי כותב" (Who is writing), התשובה נמצאת ליד המילה From.`
    },
    // Question 87
    {
        topic: "english",
        subTopic: "Basic Reading Comprehension (טקסטים קצרים)",
        question_text: `<strong>Reading 5: Inferring Emotion (הסקת רגשות מתוך טקסט):</strong><br>
        <span dir="ltr" style="background-color: #f1f5f9; padding: 10px; display: block; border-radius: 8px; margin-bottom: 10px;">David is smiling. He is jumping up and down. He got a new bicycle for his birthday.</span><br>
        How does David feel?`,
        options: [
            "<span dir=\"ltr\">Happy</span>",
            "<span dir=\"ltr\">Sad</span>",
            "<span dir=\"ltr\">Angry</span>",
            "<span dir=\"ltr\">Tired</span>"
        ],
        correctAnswer: 0,
        hint: "המילים 'smiling' (מחייך) ו-'jumping' (קופץ מרוב שמחה) הן רמזים ברורים לרגש חיובי מאוד.",
        solution: `<strong>הסבר מלא (אסטרטגיית הסקה - Inferring):</strong><br>
        לפעמים התשובה לא כתובה במפורש בטקסט (המילה Happy לא נמצאת שם), ואנחנו צריכים להיות בלשים ולהסיק אותה מתוך הרמזים.<br><br>
        <strong>הפעולות של דוד:</strong><br>
        1. <span dir="ltr">Smiling</span> (מחייך).<br>
        2. <span dir="ltr">Jumping up and down</span> (קופץ למעלה ולמטה).<br>
        3. קיבל מתנה אופניים ליום הולדת.<br><br>
        כל הפעולות הללו מעידות על כך שדוד שמח (<strong>Happy</strong>). (Sad = עצוב, Angry = כועס, Tired = עייף).`
    },
    // Question 88
    {
        topic: "english",
        subTopic: "Basic Reading Comprehension (טקסטים קצרים)",
        question_text: `<strong>Reading 6: Notices and Signs (קריאת שלטים):</strong><br>
        You see this sign in a museum: <br>
        <div dir="ltr" style="background-color: #f1f5f9; border: 2px solid #ef4444; padding: 10px; text-align:center; font-weight:bold; font-size:1.2em; border-radius: 8px; margin-bottom: 10px;">DO NOT TOUCH THE PICTURES</div>
        What must you NOT do? (מה אסור לעשות?)`,
        options: [
            "<span dir=\"ltr\">Put your hands on the pictures.</span>",
            "<span dir=\"ltr\">Look at the pictures.</span>",
            "<span dir=\"ltr\">Walk in the museum.</span>",
            "<span dir=\"ltr\">Take a photo of the pictures.</span>"
        ],
        correctAnswer: 0,
        hint: "המילה 'Touch' משמעותה לגעת (עם הידיים). השלט אוסר על מגע.",
        solution: `<strong>הסבר מלא (הבנת מילים נרדפות):</strong><br>
        השלט אומר: "אל <strong>תיגע</strong> בתמונות" (<span dir="ltr">Do not touch</span>).<br><br>
        מבחנים באנגלית אוהבים להשתמש ב"מילים נרדפות" בתשובות. התשובה לא תמיד תשתמש באותה מילה שהייתה בשלט.<br>
        במקום לכתוב "touch" (לגעת), התשובה הנכונה אומרת: "לשים את הידיים שלך על..." (<span dir="ltr">Put your hands on</span>), שזה בדיוק אותו הדבר. השלט אוסר עלינו לעשות זאת.`
    },
    // Question 89
    {
        topic: "english",
        subTopic: "Basic Reading Comprehension (טקסטים קצרים)",
        question_text: `<strong>Reading 7: Word Meaning from Context (משמעות מתוך הקשר):</strong><br>
        <span dir="ltr" style="background-color: #f1f5f9; padding: 10px; display: block; border-radius: 8px; margin-bottom: 10px;">The elephant is <u>huge</u>! It is the biggest animal in the zoo. It eats 150 kilos of food every day!</span><br>
        What does the word "<strong>huge</strong>" mean in this text?`,
        options: [
            "<span dir=\"ltr\">Very big</span>",
            "<span dir=\"ltr\">Very small</span>",
            "<span dir=\"ltr\">Fast</span>",
            "<span dir=\"ltr\">Green</span>"
        ],
        correctAnswer: 0,
        hint: "קראו את המשפט שבא מיד אחרי המילה הקשה: 'הוא החיה הכי גדולה בגן החיות'. מה לדעתכם אומרת המילה הקשה?",
        solution: `<strong>הסבר מלא (ניחוש מילים קשות מההקשר):</strong><br>
        אם נתקלתם במילה שאתם לא מכירים, אל תיכנסו לפאניקה! קראו את המשך הטקסט – הוא בדרך כלל יסביר אותה.<br><br>
        אנחנו לא יודעים מה זה <strong>huge</strong>.<br>
        אבל המשפט הבא אומר: <span dir="ltr">"It is the <strong>biggest</strong> animal"</span> (זו החיה הכי גדולה). מזה אפשר להבין בקלות שהמילה huge היא מילה נרדפת ל"גדול מאוד" (Very big).`
    },
    // Question 90
    {
        topic: "english",
        subTopic: "Basic Reading Comprehension (טקסטים קצרים)",
        question_text: `<strong>Reading 8: The Weather (זיהוי מזג אוויר):</strong><br>
        <span dir="ltr" style="background-color: #f1f5f9; padding: 10px; display: block; border-radius: 8px; margin-bottom: 10px;">It is a cold day. People are wearing warm coats and hats. White snow is falling from the sky.</span><br>
        What season is it probably? (איזו עונה זו כנראה?)`,
        options: [
            "<span dir=\"ltr\">Winter</span>",
            "<span dir=\"ltr\">Summer</span>",
            "<span dir=\"ltr\">Spring</span>",
            "<span dir=\"ltr\">Autumn</span>"
        ],
        correctAnswer: 0,
        hint: "המילים cold (קר), coats (מעילים) ו-snow (שלג) מרמזות לעונה ספציפית מאוד.",
        solution: `<strong>הסבר מלא:</strong><br>
        הטקסט מתאר אווירה של מזג אוויר ודורש מאיתנו להסיק (לנחש) מהי העונה.<br>
        <strong>רמזים בטקסט:</strong><br>
        - <span dir="ltr">cold</span> (קר)<br>
        - <span dir="ltr">coats and hats</span> (מעילים וכובעים)<br>
        - <span dir="ltr">snow</span> (שלג)<br><br>
        כל הרמזים הללו מצביעים בוודאות על עונת ה<strong>חורף (Winter)</strong>.<br>
        *(Summer = קיץ, Spring = אביב, Autumn = סתיו).*`
    },
    // Question 91
    {
        topic: "english",
        subTopic: "Basic Reading Comprehension (טקסטים קצרים)",
        question_text: `<strong>Reading 9: Connecting ideas (מילות קישור):</strong><br>
        <span dir="ltr" style="background-color: #f1f5f9; padding: 10px; display: block; border-radius: 8px; margin-bottom: 10px;">Tom wanted to play outside, <strong><u>but</u></strong> it started to rain heavily. So, he stayed inside.</span><br>
        Why did Tom stay inside? (מדוע טום נשאר בפנים?)`,
        options: [
            "<span dir=\"ltr\">Because it started to rain.</span>",
            "<span dir=\"ltr\">Because he wanted to play outside.</span>",
            "<span dir=\"ltr\">Because he likes the house.</span>",
            "<span dir=\"ltr\">Because it was sunny.</span>"
        ],
        correctAnswer: 0,
        hint: "המילה 'but' (אבל) מראה לנו שמשהו שיבש לו את התוכניות. מה קרה פתאום?",
        solution: `<strong>הסבר מלא (סיבה ותוצאה):</strong><br>
        הטקסט מתאר רצף אירועים:<br>
        1. טום רצה לשחק בחוץ.<br>
        2. המילה <strong>but</strong> (אבל) עושה תפנית: התחיל לרדת גשם כבד (<span dir="ltr">rain heavily</span>).<br>
        3. המילה <strong>So</strong> (לכן) מציגה את התוצאה: הוא נשאר בפנים.<br><br>
        השאלה היא "למה" הוא נשאר. הסיבה הישירה היא שהתחיל לרדת גשם (Because it started to rain).`
    },
    // Question 92
    {
        topic: "english",
        subTopic: "Basic Reading Comprehension (טקסטים קצרים)",
        question_text: `<strong>Reading 10: Family Tree (הבנת קשרים):</strong><br>
        <span dir="ltr" style="background-color: #f1f5f9; padding: 10px; display: block; border-radius: 8px; margin-bottom: 10px;">Anna has a brother. His name is Leo. Anna and Leo have a mother named Sarah.</span><br>
        Who is Sarah?`,
        options: [
            "<span dir=\"ltr\">She is Leo's mother.</span>",
            "<span dir=\"ltr\">She is Anna's sister.</span>",
            "<span dir=\"ltr\">She is Leo's friend.</span>",
            "<span dir=\"ltr\">She is Anna's grandmother.</span>"
        ],
        correctAnswer: 0,
        hint: "אם שרה היא אמא של אנה, ואנה היא אחות של ליאו, מי שרה עבור ליאו?",
        solution: `<strong>הסבר מלא:</strong><br>
        נצייר את 'עץ המשפחה' בראש מתוך הטקסט:<br>
        - אנה היא אחות של ליאו.<br>
        - לאנה וליאו יש אמא שקוראים לה שרה (<span dir="ltr">have a mother named Sarah</span>).<br><br>
        לכן, שרה היא האמא של שניהם! התשובה שאומרת ש"היא האמא של ליאו" (<span dir="ltr">She is Leo's mother</span>) היא המדויקת והנכונה מבין האפשרויות.`
    },
    // Question 93
    {
        topic: "english",
        subTopic: "Basic Reading Comprehension (טקסטים קצרים)",
        question_text: `<strong>Reading 11: Food and Likes (העדפות אוכל):</strong><br>
        <span dir="ltr" style="background-color: #f1f5f9; padding: 10px; display: block; border-radius: 8px; margin-bottom: 10px;">I like to eat fruit. My favorite fruit is the banana. I also like apples, but I don't like oranges.</span><br>
        Which fruit does the writer NOT like? (איזה פרי הכותב <u>לא</u> אוהב?)`,
        options: [
            "<span dir=\"ltr\">Oranges</span>",
            "<span dir=\"ltr\">Bananas</span>",
            "<span dir=\"ltr\">Apples</span>",
            "<span dir=\"ltr\">Fruit in general</span>"
        ],
        correctAnswer: 0,
        hint: "חפשו בטקסט את צמד המילים של שלילה (don't like) ובדקו איזו מילה מופיעה אחריהן.",
        solution: `<strong>הסבר מלא:</strong><br>
        השאלה מבקשת למצוא מה הכותב <strong>אינו</strong> אוהב (NOT like).<br>
        נסרוק את הטקסט ונמצא את משפט השלילה בסוף:<br>
        <span dir="ltr">"...but I <strong>don't like</strong> oranges."</span><br>
        לכן, הפרי שהוא שונא הוא תפוזים (Oranges). בננות ותפוחים הם פירות שהוא כן אוהב.`
    },
    // Question 94
    {
        topic: "english",
        subTopic: "Basic Reading Comprehension (טקסטים קצרים)",
        question_text: `<strong>Reading 12: Finding the Main Idea (הרעיון המרכזי):</strong><br>
        <span dir="ltr" style="background-color: #f1f5f9; padding: 10px; display: block; border-radius: 8px; margin-bottom: 10px;">Lions live in Africa. They eat meat. They sleep a lot during the day and hunt at night. Lions are strong animals.</span><br>
        What is a good title (כותרת) for this text?`,
        options: [
            "<span dir=\"ltr\">All About Lions</span>",
            "<span dir=\"ltr\">Africa's Weather</span>",
            "<span dir=\"ltr\">Animals that Eat Meat</span>",
            "<span dir=\"ltr\">Sleeping in the Day</span>"
        ],
        correctAnswer: 0,
        hint: "כותרת צריכה לתאר באופן כללי את 'הנושא הגדול' של הפסקה. כל המשפטים מדברים על משהו (או מישהו) אחד בלבד.",
        solution: `<strong>הסבר מלא (מציאת רעיון מרכזי):</strong><br>
        בשאלה מסוג זה (Title / Main Idea) אנו צריכים להבין על מה "סובב" הטקסט.<br>
        - האם כל הטקסט מדבר על מזג אוויר? לא.<br>
        - האם הוא מספר לנו על נמרים וכלבים שאוכלים בשר? לא, רק על אריות.<br><br>
        מכיוון שכל משפט בטקסט מוסר לנו עובדה אחרת על אריות (היכן הם גרים, מה אוכלים, מתי ישנים), הכותרת המושלמת שמכסה את הכל היא "הכל אודות אריות" (<span dir="ltr">All About Lions</span>).`
    },
    // Question 95
    {
        topic: "english",
        subTopic: "Basic Reading Comprehension (טקסטים קצרים)",
        question_text: `<strong>Reading 13: Time Sequence (סדר פעולות):</strong><br>
        <span dir="ltr" style="background-color: #f1f5f9; padding: 10px; display: block; border-radius: 8px; margin-bottom: 10px;">First, Ben puts on his shoes. Then, he takes his bag. Finally, he opens the door and goes to school.</span><br>
        What does Ben do FIRST? (מה בן עושה דבר ראשון?)`,
        options: [
            "<span dir=\"ltr\">He puts on his shoes.</span>",
            "<span dir=\"ltr\">He opens the door.</span>",
            "<span dir=\"ltr\">He goes to school.</span>",
            "<span dir=\"ltr\">He takes his bag.</span>"
        ],
        correctAnswer: 0,
        hint: "חפשו את המילה ששואלים עליה בשאלה (FIRST) בתוך הטקסט, ובדקו מה כתוב אחריה.",
        solution: `<strong>הסבר מלא (מילות סדר באנגלית):</strong><br>
        הטקסט משתמש ב"מילות סדר" (Sequencing words) כדי לתאר תהליך:<br>
        - <span dir="ltr"><strong>First</strong></span> (ראשית / דבר ראשון)<br>
        - <span dir="ltr"><strong>Then</strong></span> (ואז / לאחר מכן)<br>
        - <span dir="ltr"><strong>Finally</strong></span> (לבסוף)<br><br>
        מכיוון שהשאלה מחפשת את הפעולה הראשונה (FIRST), אנו נקרא את המשפט שמתחיל במילה זו: <span dir="ltr">"First, Ben <strong>puts on his shoes</strong>"</span> (דבר ראשון, הוא נועל את הנעליים שלו). זוהי התשובה המדויקת.`
    }
];