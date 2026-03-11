const questionsDB = [
    // ========================================================================
    // נושא: שטחים והיקפים | תת נושא: משולש (15 שאלות מושקעות)
    // ========================================================================
    
    // שאלה 1 - שטח משולש בסיסי
    {
        topic: "areas_perimeters_172",
        subTopic: "משולש",
        question_text: `לפניכם משולש שבו אורך הבסיס הוא 10 ס"מ, והגובה היורד אל הבסיס הוא 6 ס"מ.<br>
        <svg viewBox="0 0 200 120" width="100%" height="120" style="display:block; margin:15px auto; max-width:250px;">
            <polygon points="40,100 160,100 120,20" fill="rgba(59,130,246,0.1)" stroke="#0f172a" stroke-width="2"/>
            <line x1="120" y1="20" x2="120" y2="100" stroke="#ef4444" stroke-width="2" stroke-dasharray="5,5"/>
            <polyline points="120,90 130,90 130,100" fill="none" stroke="#ef4444" stroke-width="1.5"/>
            <text x="95" y="115" font-family="Arial" font-size="12" fill="#0f172a" font-weight="bold">10</text>
            <text x="125" y="65" font-family="Arial" font-size="12" fill="#ef4444" font-weight="bold">6</text>
        </svg>
        מהו שטח המשולש?`,
        options: [
            "30 סמ\"ר",
            "60 סמ\"ר",
            "16 סמ\"ר",
            "15 סמ\"ר"
        ],
        correctAnswer: 0,
        hint: "שטח משולש מחושב על ידי הכפלת אורך הבסיס באורך הגובה היורד אליו, וחלוקת התוצאה בשתיים.",
        solution_steps: [
            { verbal_explanation: "נסמן את הבסיס באות ואת הגובה באות, ונציב את הנתונים בנוסחת שטח המשולש.", math_expression: "a = 10 , h = 6" },
            { verbal_explanation: "נכפול את הבסיס בגובה לקבלת שטח של מלבן דמיוני.", math_expression: "10 × 6 = 60" },
            { verbal_explanation: "נחלק את התוצאה בשתיים (כיוון שמשולש הוא חצי ממלבן בעל אותם ממדים) לקבלת השטח הסופי.", math_expression: "S = 60 / 2 = 30" }
        ],
        final_answer: "30 סמ\"ר"
    },

    // שאלה 2 - היקף משולש שווה שוקיים
    {
        topic: "areas_perimeters_172",
        subTopic: "משולש",
        question_text: `לפניכם משולש שווה שוקיים.<br>
        אורך הבסיס הוא 8 ס"מ, ואורך כל אחת מהשוקיים הוא 7 ס"מ.<br>
        <svg viewBox="0 0 200 120" width="100%" height="120" style="display:block; margin:15px auto; max-width:200px;">
            <polygon points="50,100 150,100 100,20" fill="rgba(34,197,94,0.1)" stroke="#0f172a" stroke-width="2"/>
            <line x1="70" y1="55" x2="80" y2="65" stroke="#0f172a" stroke-width="2"/>
            <line x1="130" y1="55" x2="120" y2="65" stroke="#0f172a" stroke-width="2"/>
            <text x="95" y="115" font-family="Arial" font-size="12" fill="#0f172a">8</text>
            <text x="55" y="55" font-family="Arial" font-size="12" fill="#0f172a">7</text>
            <text x="140" y="55" font-family="Arial" font-size="12" fill="#0f172a">7</text>
        </svg>
        מהו היקף המשולש?`,
        options: [
            "22 ס\"מ",
            "15 ס\"מ",
            "28 ס\"מ",
            "56 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "היקף של כל צורה גיאומטרית סגורה הוא סכום אורכי כל הצלעות שלה.",
        solution_steps: [
            { verbal_explanation: "היקף המשולש (מסומן באות פי) שווה לחיבור של שלוש צלעותיו.", math_expression: "P = a + b + c" },
            { verbal_explanation: "מאחר והמשולש שווה שוקיים, יש לנו פעמיים את הצלע שאורכה שבע, ועוד הבסיס שאורכו שמונה.", math_expression: "P = 7 + 7 + 8" },
            { verbal_explanation: "נחבר את המספרים לקבלת סך כל ההיקף.", math_expression: "P = 14 + 8 = 22" }
        ],
        final_answer: "22 ס\"מ"
    },

    // שאלה 3 - משולש ישר זווית (שטח)
    {
        topic: "areas_perimeters_172",
        subTopic: "משולש",
        question_text: `נתון משולש ישר זווית.<br>
        אורכי הניצבים (הצלעות שיוצרות את הזווית הישרה) הם 5 ס"מ ו-12 ס"מ.<br>
        <svg viewBox="0 0 200 120" width="100%" height="120" style="display:block; margin:15px auto; max-width:200px;">
            <polygon points="40,100 160,100 40,30" fill="rgba(249,115,22,0.1)" stroke="#0f172a" stroke-width="2"/>
            <polyline points="40,90 50,90 50,100" fill="none" stroke="#0f172a" stroke-width="1.5"/>
            <text x="95" y="115" font-family="Arial" font-size="12" fill="#0f172a">12</text>
            <text x="25" y="70" font-family="Arial" font-size="12" fill="#0f172a">5</text>
        </svg>
        מהו שטח המשולש?`,
        options: [
            "30 סמ\"ר",
            "60 סמ\"ר",
            "17 סמ\"ר",
            "120 סמ\"ר"
        ],
        correctAnswer: 0,
        hint: "במשולש ישר זווית, הניצבים משמשים כבסיס וכגובה זה לזה. לכן, השטח הוא מכפלת הניצבים חלקי שתיים.",
        solution_steps: [
            { verbal_explanation: "במשולש ישר זווית, אין צורך למצוא גובה חיצוני מכיוון שהניצבים מאונכים זה לזה.", math_expression: "a = 12 , h = 5" },
            { verbal_explanation: "נציב את הניצבים בנוסחת השטח ונחשב את מכפלתם.", math_expression: "12 × 5 = 60" },
            { verbal_explanation: "נחלק את המכפלה בשתיים כדי לקבל את השטח המדויק.", math_expression: "S = 60 / 2 = 30" }
        ],
        final_answer: "30 סמ\"ר"
    },

    // שאלה 4 - מציאת גובה מתוך שטח
    {
        topic: "areas_perimeters_172",
        subTopic: "משולש",
        question_text: `שטחו של משולש הוא 40 סמ"ר. אורך הבסיס של המשולש הוא 10 ס"מ.<br>
        מהו אורך הגובה היורד אל בסיס זה?`,
        options: [
            "8 ס\"מ",
            "4 ס\"מ",
            "20 ס\"מ",
            "16 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "היעזרו בנוסחת השטח. אם השטח הוא ארבעים, אז מכפלת הבסיס בגובה חייבת להיות שמונים (כדי שאחרי החלוקה בשתיים נקבל ארבעים).",
        solution_steps: [
            { verbal_explanation: "נרשום את נוסחת השטח ונציב לתוכה את הנתונים הידועים לנו (שטח ובסיס).", math_expression: "S = (a × h) / 2 <br><br> 40 = (10 × h) / 2" },
            { verbal_explanation: "נכפול את שני אגפי המשוואה בשתיים כדי להיפטר מהשבר.", math_expression: "80 = 10 × h" },
            { verbal_explanation: "נחלק בעשר כדי לבודד ולמצוא את הגובה החסר.", math_expression: "h = 80 / 10 = 8" }
        ],
        final_answer: "8 ס\"מ"
    },

    // שאלה 5 - משולש קהה זווית (גובה חיצוני)
    {
        topic: "areas_perimeters_172",
        subTopic: "משולש",
        question_text: `לפניכם משולש קהה זווית.<br>
        אורך הצלע המסומנת כבסיס הוא 5 ס"מ, והגובה החיצוני היורד להמשך הבסיס הוא 4 ס"מ.<br>
        <svg viewBox="0 0 250 120" width="100%" height="120" style="display:block; margin:15px auto; max-width:250px;">
            <polygon points="100,100 180,100 60,30" fill="rgba(168,85,247,0.1)" stroke="#0f172a" stroke-width="2"/>
            <line x1="60" y1="100" x2="100" y2="100" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4"/>
            <line x1="60" y1="30" x2="60" y2="100" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4"/>
            <polyline points="60,90 70,90 70,100" fill="none" stroke="#ef4444" stroke-width="1.5"/>
            <text x="135" y="115" font-family="Arial" font-size="12" fill="#0f172a" font-weight="bold">5</text>
            <text x="45" y="70" font-family="Arial" font-size="12" fill="#ef4444" font-weight="bold">4</text>
        </svg>
        מהו שטח המשולש?`,
        options: [
            "10 סמ\"ר",
            "20 סמ\"ר",
            "9 סמ\"ר",
            "12 סמ\"ר"
        ],
        correctAnswer: 0,
        hint: "במשולש קהה זווית, הגובה לעיתים נופל מחוץ למשולש. נוסחת השטח נשארת בדיוק אותה נוסחה: בסיס כפול גובה, חלקי שתיים.",
        solution_steps: [
            { verbal_explanation: "העובדה שהגובה נמצא מחוץ למשולש אינה משנה את חוקי החישוב. ניקח את אורך הצלע האמיתית ואת הגובה הנתון.", math_expression: "a = 5 , h = 4" },
            { verbal_explanation: "נכפול אותם זה בזה.", math_expression: "5 × 4 = 20" },
            { verbal_explanation: "נחלק בשתיים לקבלת השטח השלם של המשולש (ללא קו המקווקו החיצוני).", math_expression: "S = 20 / 2 = 10" }
        ],
        final_answer: "10 סמ\"ר"
    },

    // שאלה 6 - בעיה אלגברית היקף משולש
    {
        topic: "areas_perimeters_172",
        subTopic: "משולש",
        question_text: `אורכי צלעותיו של משולש מיוצגים על ידי הביטויים: <span dir="ltr">x</span>, <span dir="ltr">x + 2</span>, <span dir="ltr">x + 4</span>.<br>
        ידוע כי היקף המשולש הוא 24 ס"מ.<br>
        מהו אורך הצלע הקטנה ביותר (x)?`,
        options: [
            "6 ס\"מ",
            "8 ס\"מ",
            "10 ס\"מ",
            "5 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "חברו את שלושת הביטויים של הצלעות, השוו את הסכום לעשרים וארבע, ופתרו את המשוואה כדי למצוא את המשתנה.",
        solution_steps: [
            { verbal_explanation: "נרכיב משוואה: סכום שלוש הצלעות שווה להיקף הנתון.", math_expression: "x + (x + 2) + (x + 4) = 24" },
            { verbal_explanation: "נכנס איברים דומים באגף השמאלי (משתנים לחוד ומספרים לחוד).", math_expression: "3x + 6 = 24" },
            { verbal_explanation: "נעביר את המספר ימינה ונחסר.", math_expression: "3x = 24 - 6 <br><br> 3x = 18" },
            { verbal_explanation: "נחלק בשלוש למציאת הצלע הקטנה.", math_expression: "x = 6" }
        ],
        final_answer: "6 ס\"מ"
    },

    // שאלה 7 - בעיה אלגברית שטח משולש
    {
        topic: "areas_perimeters_172",
        subTopic: "משולש",
        question_text: `במשולש נתון, הגובה קטן ב-2 ס"מ מאורך הבסיס שלו.<br>
        נסמן את אורך הבסיס ב-x. לכן הגובה הוא <span dir="ltr">x - 2</span>.<br>
        אם שטח המשולש הוא 12 סמ"ר, איזו משוואה מאפשרת למצוא את x?`,
        options: [
            "x(x - 2) / 2 = 12",
            "x(x - 2) = 12",
            "2x - 2 = 12",
            "x + (x - 2) / 2 = 12"
        ],
        correctAnswer: 0,
        hint: "זכרו את מבנה הנוסחה: שטח שווה למכפלת הבסיס בגובה, כשהכל מחולק בשתיים.",
        solution_steps: [
            { verbal_explanation: "נגדיר את רכיבי המשולש כפי שמופיעים בשאלה.", math_expression: "Base = x <br><br> Height = x - 2" },
            { verbal_explanation: "נציב את הרכיבים לתוך תבנית הנוסחה הקלאסית לשטח משולש.", math_expression: "S = (Base × Height) / 2" },
            { verbal_explanation: "נשווה לשטח הנתון ונקבל את המשוואה המבוקשת.", math_expression: "(x(x - 2)) / 2 = 12" }
        ],
        final_answer: "x(x - 2) / 2 = 12"
    },

    // שאלה 8 - יחסים במשולש ישר זווית
    {
        topic: "areas_perimeters_172",
        subTopic: "משולש",
        question_text: `במשולש ישר זווית, ניצב אחד ארוך פי 3 מהניצב השני.<br>
        שטח המשולש הוא 24 סמ"ר.<br>
        מהו אורכו של הניצב הקצר מבין השניים?`,
        options: [
            "4 ס\"מ",
            "8 ס\"מ",
            "3 ס\"מ",
            "6 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "סמנו ניצב אחד בנעלם כלשהו, והניצב השני יהיה שלוש פעמים הנעלם הזה. בנו משוואת שטח ופתרו (היזהרו מהחילוק בשתיים!).",
        solution_steps: [
            { verbal_explanation: "נגדיר את הניצב הקצר באמצעות משתנה, ואת הניצב הארוך נכפיל בשלוש.", math_expression: "a = x , b = 3x" },
            { verbal_explanation: "נציב את הניצבים בנוסחת השטח למשולש ישר זווית ונשווה לנתון.", math_expression: "(x × 3x) / 2 = 24" },
            { verbal_explanation: "נכפול בשתיים כדי לבטל את קו השבר.", math_expression: "3x² = 48" },
            { verbal_explanation: "נחלק בשלוש ונוציא שורש ריבועי כדי לגלות את האורך.", math_expression: "x² = 16 <br><br> x = 4" }
        ],
        final_answer: "4 ס\"מ"
    },

    // שאלה 9 - משולש שווה צלעות
    {
        topic: "areas_perimeters_172",
        subTopic: "משולש",
        question_text: `היקפו של משולש שווה צלעות הוא 36 ס"מ.<br>
        <svg viewBox="0 0 200 150" width="100%" height="150" style="display:block; margin:15px auto; max-width:200px;">
            <polygon points="100,20 40,120 160,120" fill="rgba(236,72,153,0.1)" stroke="#0f172a" stroke-width="2"/>
            <line x1="60" y1="70" x2="80" y2="70" stroke="#0f172a" stroke-width="2"/>
            <line x1="120" y1="70" x2="140" y2="70" stroke="#0f172a" stroke-width="2"/>
            <line x1="100" y1="110" x2="100" y2="130" stroke="#0f172a" stroke-width="2"/>
        </svg>
        מהו אורכה של כל צלע במשולש זה?`,
        options: [
            "12 ס\"מ",
            "9 ס\"מ",
            "18 ס\"מ",
            "6 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "במשולש שווה צלעות, כל שלוש הצלעות שוות לחלוטין באורכן. חלקו את ההיקף הכולל במספר הצלעות.",
        solution_steps: [
            { verbal_explanation: "במשולש כזה ההיקף מורכב משלוש צלעות זהות בגודלן.", math_expression: "P = a + a + a = 3a" },
            { verbal_explanation: "נציב את ההיקף הנתון במשוואה.", math_expression: "36 = 3a" },
            { verbal_explanation: "נחלק בשלוש כדי למצוא צלע בודדת אחת.", math_expression: "a = 36 / 3 = 12" }
        ],
        final_answer: "12 ס\"מ"
    },

    // שאלה 10 - חילוץ בסיס ממשוואת שטח
    {
        topic: "areas_perimeters_172",
        subTopic: "משולש",
        question_text: `שטח משולש הוא 50 סמ"ר. הגובה היורד לבסיס הוא 5 ס"מ.<br>
        איזה תרגיל מציג את הדרך הנכונה לחשב את אורך הבסיס?`,
        options: [
            "(50 × 2) / 5",
            "50 / 5",
            "(50 / 2) × 5",
            "50 - 5"
        ],
        correctAnswer: 0,
        hint: "בנוסחת השטח, הבסיס והגובה מחולקים בשתיים. כדי 'ללכת אחורה', נכפול קודם את השטח בשתיים ואז נחלק בגובה הידוע.",
        solution_steps: [
            { verbal_explanation: "נתחיל מהנוסחה המקורית לשטח.", math_expression: "S = (a × h) / 2" },
            { verbal_explanation: "נכפול בשתיים את שני האגפים כדי לבודד את המונה.", math_expression: "2S = a × h" },
            { verbal_explanation: "נחלק בגובה כדי לבודד את הבסיס. זוהי התבנית הסופית לחישוב.", math_expression: "a = (2S) / h <br><br> a = (2 × 50) / 5" }
        ],
        final_answer: "(50 × 2) / 5"
    },

    // שאלה 11 - מציאת שוק במשולש שווה שוקיים
    {
        topic: "areas_perimeters_172",
        subTopic: "משולש",
        question_text: `במשולש שווה שוקיים, אורך הבסיס הוא 10 ס"מ והיקף המשולש הוא 40 ס"מ.<br>
        מהו אורך כל אחת מהשוקיים של המשולש?`,
        options: [
            "15 ס\"מ",
            "30 ס\"מ",
            "20 ס\"מ",
            "10 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "החסירו את הבסיס מההיקף הכולל. מה שנשאר הוא הסכום של שתי השוקיים השוות.",
        solution_steps: [
            { verbal_explanation: "היקף המשולש מורכב מבסיס ועוד פעמיים אורך השוק.", math_expression: "P = Base + 2 × Leg" },
            { verbal_explanation: "נחסר את הבסיס מתוך ההיקף הכולל כדי לגלות כמה נותר לשתי השוקיים יחד.", math_expression: "2 × Leg = 40 - 10 = 30" },
            { verbal_explanation: "נחלק בשתיים כדי למצוא את אורכה של שוק אחת בודדת.", math_expression: "Leg = 30 / 2 = 15" }
        ],
        final_answer: "15 ס\"מ"
    },

    // שאלה 12 - שילוב ישר זווית ושווה שוקיים (היקף)
    {
        topic: "areas_perimeters_172",
        subTopic: "משולש",
        question_text: `נתון משולש שהוא גם ישר זווית וגם שווה שוקיים.<br>
        אורך כל אחד מהניצבים (השוקיים) הוא 6 ס"מ.<br>
        אורך היתר הוא בערך 8.5 ס"מ.<br>
        מהו שטח המשולש ומהו היקפו (בערך)?`,
        options: [
            "שטח 18, היקף 20.5",
            "שטח 36, היקף 20.5",
            "שטח 18, היקף 12",
            "שטח 36, היקף 14.5"
        ],
        correctAnswer: 0,
        hint: "לשטח: כפלו את הניצבים וחלקו בשתיים. להיקף: חברו את כל שלוש הצלעות (שני ניצבים ויתר).",
        solution_steps: [
            { verbal_explanation: "נחשב את השטח. במשולש ישר זווית מכפילים ניצב בניצב ומחלקים בשתיים.", math_expression: "S = (6 × 6) / 2 = 36 / 2 = 18" },
            { verbal_explanation: "נחשב את ההיקף על ידי סכימת כל הצלעות: שני הניצבים הזהים והיתר המקורב.", math_expression: "P = 6 + 6 + 8.5 = 20.5" }
        ],
        final_answer: "שטח 18, היקף 20.5"
    },

    // שאלה 13 - אתגר שטחים מורכב
    {
        topic: "areas_perimeters_172",
        subTopic: "משולש",
        question_text: `במשולש מסוים, הבסיס הוא <span dir="ltr">x + 4</span> והגובה אליו הוא 8.<br>
        אם השטח הוא 40 סמ"ר, מהו הערך של x?`,
        options: [
            "6",
            "10",
            "4",
            "2"
        ],
        correctAnswer: 0,
        hint: "בנו משוואה: 8 כפול הסוגריים, הכל חלקי 2 שווה 40. אפשר לצמצם את ה-8 וה-2 מיד בהתחלה.",
        solution_steps: [
            { verbal_explanation: "נבנה את משוואת השטח המלאה תוך הצבת הביטויים שניתנו.", math_expression: "(8 × (x + 4)) / 2 = 40" },
            { verbal_explanation: "נצמצם את המספר שמונה עם המכנה שתיים כדי לפשט את המשוואה.", math_expression: "4(x + 4) = 40" },
            { verbal_explanation: "נפתח סוגריים ונעביר את המספר ימינה.", math_expression: "4x + 16 = 40 <br><br> 4x = 24" },
            { verbal_explanation: "נחלק בארבע.", math_expression: "x = 6" }
        ],
        final_answer: "6"
    },

    // שאלה 14 - משולשים זהים
    {
        topic: "areas_perimeters_172",
        subTopic: "משולש",
        question_text: `חתכו ריבוע שצלעו 10 ס"מ לאורך האלכסון שלו, וקיבלו שני משולשים ישרי זווית זהים.<br>
        מהו השטח של אחד מהמשולשים שנוצרו?`,
        options: [
            "50 סמ\"ר",
            "100 סמ\"ר",
            "25 סמ\"ר",
            "20 סמ\"ר"
        ],
        correctAnswer: 0,
        hint: "שטח הריבוע המלא הוא צלע כפול צלע. האלכסון מחלק את הריבוע בדיוק לחצי.",
        solution_steps: [
            { verbal_explanation: "נחשב תחילה את שטחו של הריבוע השלם טרם החיתוך.", math_expression: "S_square = 10 × 10 = 100" },
            { verbal_explanation: "האלכסון חוצה את הריבוע לשני משולשים שווים לחלוטין בשטחם. נחלק את השטח הכולל בשתיים.", math_expression: "S_triangle = 100 / 2 = 50" }
        ],
        final_answer: "50 סמ\"ר"
    },

    // שאלה 15 - שטח על מערכת צירים
    {
        topic: "areas_perimeters_172",
        subTopic: "משולש",
        question_text: `על מערכת צירים משורטט משולש.<br>
        קודקודי הבסיס שלו נמצאים על ציר ה-x בנקודות <span dir="ltr">(1, 0)</span> ו- <span dir="ltr">(7, 0)</span>.<br>
        הקודקוד השלישי נמצא בנקודה <span dir="ltr">(4, 5)</span>.<br>
        מהו שטח המשולש?`,
        options: [
            "15 יח\"ר",
            "30 יח\"ר",
            "17.5 יח\"ר",
            "12 יח\"ר"
        ],
        correctAnswer: 0,
        hint: "אורך הבסיס הוא המרחק בין שתי הנקודות על ציר ה-x. גובה המשולש הוא ערך ה-y של הקודקוד העליון.",
        solution_steps: [
            { verbal_explanation: "נחשב את אורך הבסיס על ידי חיסור ערכי הנקודות על הציר האופקי.", math_expression: "a = 7 - 1 = 6" },
            { verbal_explanation: "גובה המשולש נמדד מהבסיס (שגובהו אפס) ועד לקודקוד. זהו בעצם ערך המשתנה השני של הקודקוד.", math_expression: "h = 5" },
            { verbal_explanation: "נציב בנוסחת השטח הרגילה.", math_expression: "S = (6 × 5) / 2 = 30 / 2 = 15" }
        ],
        final_answer: "15 יח\"ר"
    },

    // ========================================================================
    // נושא: שטחים והיקפים | תת נושא: מלבן (15 שאלות מושקעות)
    // ========================================================================
    
    // שאלה 16 - שטח מלבן בסיסי
    {
        topic: "areas_perimeters_172",
        subTopic: "מלבן",
        question_text: `לפניכם מלבן שאורכו 12 ס"מ ורוחבו 5 ס"מ.<br>
        <svg viewBox="0 0 250 120" width="100%" height="120" style="display:block; margin:15px auto; max-width:250px;">
            <rect x="20" y="20" width="200" height="80" fill="rgba(234,179,8,0.1)" stroke="#0f172a" stroke-width="2"/>
            <polyline points="20,40 40,40 40,20" fill="none" stroke="#0f172a" stroke-width="1.5"/>
            <text x="110" y="15" font-family="Arial" font-size="12" fill="#0f172a" font-weight="bold">12</text>
            <text x="5" y="65" font-family="Arial" font-size="12" fill="#0f172a" font-weight="bold">5</text>
        </svg>
        מהו שטח המלבן?`,
        options: [
            "60 סמ\"ר",
            "34 סמ\"ר",
            "17 סמ\"ר",
            "30 סמ\"ר"
        ],
        correctAnswer: 0,
        hint: "שטח מלבן שווה למכפלת האורך ברוחב.",
        solution_steps: [
            { verbal_explanation: "נוסחת השטח למלבן היא פשוטה וכוללת רק הכפלה של שתי הצלעות הסמוכות.", math_expression: "S = a × b" },
            { verbal_explanation: "נציב את המידות הנתונות ונבצע את פעולת הכפל.", math_expression: "S = 12 × 5 = 60" }
        ],
        final_answer: "60 סמ\"ר"
    },

    // שאלה 17 - היקף מלבן בסיסי
    {
        topic: "areas_perimeters_172",
        subTopic: "מלבן",
        question_text: `מהו היקף המלבן מהשאלה הקודמת (אורך 12 ס"מ ורוחב 5 ס"מ)?`,
        options: [
            "34 ס\"מ",
            "17 ס\"מ",
            "60 ס\"מ",
            "24 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "במלבן יש ארבע צלעות בסך הכל: פעמיים צלע האורך ופעמיים צלע הרוחב. חברו את כולן.",
        solution_steps: [
            { verbal_explanation: "נרשום את הנוסחה להיקף מלבן המורכבת מסכום כל הצלעות שלו.", math_expression: "P = 2a + 2b" },
            { verbal_explanation: "נציב את הנתונים, נכפול כל צלע בשתיים ונחבר את התוצאות.", math_expression: "P = 2 × 12 + 2 × 5 <br><br> P = 24 + 10 = 34" }
        ],
        final_answer: "34 ס\"מ"
    },

    // שאלה 18 - חילוץ צלע מתוך שטח
    {
        topic: "areas_perimeters_172",
        subTopic: "מלבן",
        question_text: `שטחו של מלבן הוא 80 סמ"ר. רוחב המלבן הוא 8 ס"מ.<br>
        מהו אורך המלבן?`,
        options: [
            "10 ס\"מ",
            "72 ס\"מ",
            "12 ס\"מ",
            "20 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "היעזרו בנוסחת השטח. אם השטח מתקבל מכפל של האורך ברוחב, פעולת חילוק פשוטה תמצא את הצלע החסרה.",
        solution_steps: [
            { verbal_explanation: "נציב את הנתונים במשוואת שטח המלבן.", math_expression: "S = a × b <br><br> 80 = a × 8" },
            { verbal_explanation: "נחלק את השטח הכולל בצלע הידועה כדי לחלץ את הנעלם.", math_expression: "a = 80 / 8 = 10" }
        ],
        final_answer: "10 ס\"מ"
    },

    // שאלה 19 - חילוץ צלע מתוך היקף
    {
        topic: "areas_perimeters_172",
        subTopic: "מלבן",
        question_text: `היקפו של מלבן הוא 50 ס"מ. אורך המלבן הוא 15 ס"מ.<br>
        מהו רוחב המלבן?`,
        options: [
            "10 ס\"מ",
            "20 ס\"מ",
            "35 ס\"מ",
            "5 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "בהיקף יש שתי צלעות של אורך. חשבו כמה הן שוות יחד, החסירו מההיקף הכללי, וחלקו בשתיים כדי למצוא צלע רוחב אחת.",
        solution_steps: [
            { verbal_explanation: "נרשום את המשוואה המלאה להיקף מלבן ונציב את הערכים.", math_expression: "P = 2a + 2b <br><br> 50 = 2 × 15 + 2b" },
            { verbal_explanation: "נחשב את חלקו של האורך הכפול בהיקף ונחסר אותו.", math_expression: "50 = 30 + 2b <br><br> 20 = 2b" },
            { verbal_explanation: "נחלק את השארית לשניים כדי לקבל את רוחבה של צלע בודדת.", math_expression: "b = 20 / 2 = 10" }
        ],
        final_answer: "10 ס\"מ"
    },

    // שאלה 20 - היקף מלבן עם אלגברה
    {
        topic: "areas_perimeters_172",
        subTopic: "מלבן",
        question_text: `רוחבו של מלבן הוא <span dir="ltr">x</span> ס"מ, ואורכו גדול מרוחבו ב-4 ס"מ (לכן הוא <span dir="ltr">x + 4</span>).<br>
        היקף המלבן הוא 24 ס"מ.<br>
        מהו הרוחב של המלבן?`,
        options: [
            "4 ס\"מ",
            "8 ס\"מ",
            "5 ס\"מ",
            "10 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "חברו את כל ארבע הצלעות: איקס, ועוד איקס, ועוד איקס פלוס ארבע, ועוד איקס פלוס ארבע. השוו לעשרים וארבע ופתרו.",
        solution_steps: [
            { verbal_explanation: "נבנה משוואת היקף הכוללת פעמיים את הרוחב ופעמיים את האורך.", math_expression: "2x + 2(x + 4) = 24" },
            { verbal_explanation: "נפתח את הסוגריים על ידי הכפלה.", math_expression: "2x + 2x + 8 = 24" },
            { verbal_explanation: "נכנס איברים, נעביר את המספר ונחלץ את המשתנה.", math_expression: "4x = 24 - 8 <br><br> 4x = 16 <br><br> x = 4" }
        ],
        final_answer: "4 ס\"מ"
    },

    // שאלה 21 - שטח מלבן עם אלגברה
    {
        topic: "areas_perimeters_172",
        subTopic: "מלבן",
        question_text: `אורך מלבן גדול פי 2 מרוחבו.<br>
        נסמן את הרוחב ב-<span dir="ltr">x</span> ואת האורך ב-<span dir="ltr">2x</span>.<br>
        שטח המלבן הוא 50 סמ"ר. מהו הרוחב?`,
        options: [
            "5 ס\"מ",
            "10 ס\"מ",
            "25 ס\"מ",
            "12.5 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "הכפילו את האורך ברוחב והשוו לחמישים. תקבלו משוואה עם איקס בריבוע.",
        solution_steps: [
            { verbal_explanation: "נרכיב משוואת שטח על סמך המשתנים הנתונים. שטח הוא המכפלה של שתי הצלעות.", math_expression: "x × 2x = 50" },
            { verbal_explanation: "נפשט את המכפלה לחזקה.", math_expression: "2x² = 50" },
            { verbal_explanation: "נחלק בשתיים ואז נוציא שורש לקבלת הצלע החיובית.", math_expression: "x² = 25 <br><br> x = 5" }
        ],
        final_answer: "5 ס\"מ"
    },

    // שאלה 22 - ריבוע מתוך מלבן
    {
        topic: "areas_perimeters_172",
        subTopic: "מלבן",
        question_text: `ריבוע הוא סוג מיוחד של מלבן שבו כל הצלעות שוות.<br>
        היקף של ריבוע מסוים הוא 36 ס"מ. מהו שטחו?`,
        options: [
            "81 סמ\"ר",
            "36 סמ\"ר",
            "9 סמ\"ר",
            "18 סמ\"ר"
        ],
        correctAnswer: 0,
        hint: "בריבוע יש ארבע צלעות שוות. חלקו את ההיקף בארבע כדי למצוא את אורך הצלע, ולאחר מכן העלו את התוצאה בריבוע כדי למצוא שטח.",
        solution_steps: [
            { verbal_explanation: "נחלק את ההיקף הכולל בארבע צלעות שוות כדי למצוא אורך של צלע בודדת בריבוע.", math_expression: "a = 36 / 4 = 9" },
            { verbal_explanation: "נחשב את השטח על ידי הכפלת הצלע בעצמה.", math_expression: "S = a × a = 9 × 9 = 81" }
        ],
        final_answer: "81 סמ\"ר"
    },

    // שאלה 23 - היקף מתוך שטח (ריבוע)
    {
        topic: "areas_perimeters_172",
        subTopic: "מלבן",
        question_text: `שטחו של ריבוע (מלבן מיוחד) הוא 100 סמ"ר. מהו היקפו?`,
        options: [
            "40 ס\"מ",
            "50 ס\"מ",
            "10 ס\"מ",
            "20 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "איזה מספר כפול עצמו נותן מאה? זוהי הצלע. לאחר מכן כפלו את הצלע בארבע.",
        solution_steps: [
            { verbal_explanation: "נוציא שורש ריבועי מהשטח כדי למצוא את אורך הצלע המקורית.", math_expression: "a = √100 = 10" },
            { verbal_explanation: "נכפול את הצלע המוכחת בארבע לקבלת ההיקף המלא שמסביב.", math_expression: "P = 10 × 4 = 40" }
        ],
        final_answer: "40 ס\"מ"
    },

    // שאלה 24 - שטח מסגרת (צורה מורכבת)
    {
        topic: "areas_perimeters_172",
        subTopic: "מלבן",
        question_text: `מלבן גדול שאורכו 10 ס"מ ורוחבו 8 ס"מ מכיל בתוכו מלבן קטן שמידותיו 6 ס"מ על 4 ס"מ.<br>
        השטח שבין המלבנים צבוע באפור. מהו גודל השטח הצבוע?`,
        options: [
            "56 סמ\"ר",
            "80 סמ\"ר",
            "24 סמ\"ר",
            "104 סמ\"ר"
        ],
        correctAnswer: 0,
        hint: "חשבו את השטח של המלבן הגדול, חשבו את השטח של המלבן הקטן הפנימי, וחסרו את הקטן מהגדול.",
        solution_steps: [
            { verbal_explanation: "נחשב את שטחו המלא של המלבן החיצוני והגדול.", math_expression: "S_big = 10 × 8 = 80" },
            { verbal_explanation: "נחשב את שטחו של המלבן הפנימי ש'נגזר' החוצה מהשטח הכללי.", math_expression: "S_small = 6 × 4 = 24" },
            { verbal_explanation: "נחסר את השטח הפנימי מהשטח החיצוני כדי לקבל רק את אזור המסגרת.", math_expression: "S_frame = 80 - 24 = 56" }
        ],
        final_answer: "56 סמ\"ר"
    },

    // שאלה 25 - יחסים במלבן
    {
        topic: "areas_perimeters_172",
        subTopic: "מלבן",
        question_text: `ידוע כי במלבן מסוים האורך גדול ב-2 מהרוחב, ושטח המלבן הוא 24.<br>
        איזה זוג מספרים מתאר את צלעות המלבן?`,
        options: [
            "4 ו-6",
            "3 ו-8",
            "2 ו-12",
            "5 ו-7"
        ],
        correctAnswer: 0,
        hint: "אפשר לפתור על ידי ניסוי וטעייה עם התשובות: באיזה מהזוגות המכפלה היא עשרים וארבע, וההפרש הוא שתיים?",
        solution_steps: [
            { verbal_explanation: "נבדוק את האפשרות הראשונה. ההפרש בין שש לארבע הוא אכן שתיים.", math_expression: "6 - 4 = 2" },
            { verbal_explanation: "נבדוק את שטח המלבן עבור אפשרות זו. המכפלה אכן נותנת את השטח המבוקש.", math_expression: "6 × 4 = 24" }
        ],
        final_answer: "4 ו-6"
    },

    // שאלה 26 - הגדלת צלעות פי שניים
    {
        topic: "areas_perimeters_172",
        subTopic: "מלבן",
        question_text: `לפניכם מלבן שממדיו הם 3 ס"מ ו-5 ס"מ.<br>
        אם נכפיל פי 2 את אורך כל אחת מהצלעות, מה יקרה לשטח המלבן החדש לעומת המקורי?`,
        options: [
            "הוא יגדל פי 4",
            "הוא יגדל פי 2",
            "הוא יגדל ב-10 סמ\"ר",
            "הוא לא ישתנה"
        ],
        correctAnswer: 0,
        hint: "חישבו את השטח המקורי. כעת חשבו את השטח החדש (עם צלעות שש ועשר) ובדקו פי כמה הוא גדול מהמקורי.",
        solution_steps: [
            { verbal_explanation: "נחשב תחילה את שטח המלבן המקורי.", math_expression: "S_old = 3 × 5 = 15" },
            { verbal_explanation: "נגדיל כל צלע פי שניים. שלוש הופך לשש, וחמש הופך לעשר.", math_expression: "New_a = 6 , New_b = 10" },
            { verbal_explanation: "נחשב את השטח של המלבן החדש והגדול יותר.", math_expression: "S_new = 6 × 10 = 60" },
            { verbal_explanation: "נבדוק מהו היחס ביניהם על ידי חלוקה.", math_expression: "Ratio = 60 / 15 = 4" }
        ],
        final_answer: "הוא יגדל פי 4"
    },

    // שאלה 27 - שטח צורה מורכבת (מלבנים מחוברים)
    {
        topic: "areas_perimeters_172",
        subTopic: "מלבן",
        question_text: `לפניכם צורה המורכבת משני מלבנים המחוברים זה לזה (צורת האות L או מדרגה).<br>
        המלבן השמאלי העומד הוא במידות 2 ס"מ רוחב ו-8 ס"מ גובה.<br>
        המלבן הימני השוכב הצמוד אליו למטה הוא במידות 6 ס"מ אורך ו-3 ס"מ גובה.<br>
        מהו השטח הכולל של הצורה?`,
        options: [
            "34 סמ\"ר",
            "48 סמ\"ר",
            "16 סמ\"ר",
            "18 סמ\"ר"
        ],
        correctAnswer: 0,
        hint: "חשבו את השטח של כל אחד מהמלבנים בנפרד, וחברו את השטחים לקבלת השטח המלא.",
        solution_steps: [
            { verbal_explanation: "נחשב את שטחו של מלבן העמוד השמאלי הנתון לנו.", math_expression: "S1 = 2 × 8 = 16" },
            { verbal_explanation: "נחשב את שטחו של מלבן הבסיס הימני.", math_expression: "S2 = 6 × 3 = 18" },
            { verbal_explanation: "נחבר את שני השטחים יחדיו ליצירת שטח הצורה כולה.", math_expression: "S_total = 16 + 18 = 34" }
        ],
        final_answer: "34 סמ\"ר"
    },

    // שאלה 28 - מלבן על מערכת צירים (שטח)
    {
        topic: "areas_perimeters_172",
        subTopic: "מלבן",
        question_text: `על מערכת צירים משורטט מלבן הצמוד לצירים.<br>
        קודקוד אחד שלו נמצא בראשית הצירים <span dir="ltr">(0, 0)</span>.<br>
        הקודקוד הנגדי לו באלכסון נמצא בנקודה <span dir="ltr">(5, 4)</span>.<br>
        מהו שטח המלבן?`,
        options: [
            "20 יח\"ר",
            "9 יח\"ר",
            "18 יח\"ר",
            "10 יח\"ר"
        ],
        correctAnswer: 0,
        hint: "שיעור ה-x של הקודקוד מייצג את אורך המלבן, ושיעור ה-y מייצג את רוחב (או גובה) המלבן.",
        solution_steps: [
            { verbal_explanation: "מאחר והמלבן יושב על נקודת האפס, אורך הצלע האופקית שווה לערך המשתנה הראשון של הקודקוד הרחוק.", math_expression: "Width = 5 - 0 = 5" },
            { verbal_explanation: "אורך הצלע האנכית שווה לערך המשתנה השני של הקודקוד.", math_expression: "Height = 4 - 0 = 4" },
            { verbal_explanation: "נכפיל את הממדים כדי למצוא את השטח הכלוא.", math_expression: "S = 5 × 4 = 20" }
        ],
        final_answer: "20 יח\"ר"
    },

    // שאלה 29 - מלבן על מערכת צירים (היקף)
    {
        topic: "areas_perimeters_172",
        subTopic: "מלבן",
        question_text: `מהו ההיקף של המלבן מהשאלה הקודמת (קודקודים ב-0,0 וב-5,4)?`,
        options: [
            "18 יחידות",
            "20 יחידות",
            "9 יחידות",
            "40 יחידות"
        ],
        correctAnswer: 0,
        hint: "מצאתם שהאורך הוא חמש והרוחב הוא ארבע. השתמשו בנוסחת ההיקף המחברת את כל המסגרת.",
        solution_steps: [
            { verbal_explanation: "נשתמש במידות המלבן שכבר ידועות לנו על גבי מערכת הצירים.", math_expression: "a = 5 , b = 4" },
            { verbal_explanation: "נציב בנוסחת ההיקף הסוכמת פעמיים כל צלע.", math_expression: "P = 2 × 5 + 2 × 4" },
            { verbal_explanation: "נחשב את הסכום הכולל.", math_expression: "P = 10 + 8 = 18" }
        ],
        final_answer: "18 יחידות"
    },

    // שאלה 30 - שוויון שטחים
    {
        topic: "areas_perimeters_172",
        subTopic: "מלבן",
        question_text: `למלבן ולריבוע יש בדיוק את אותו השטח.<br>
        אורך צלע הריבוע הוא 6 ס"מ.<br>
        רוחב המלבן הוא 4 ס"מ. מהו אורך המלבן?`,
        options: [
            "9 ס\"מ",
            "12 ס\"מ",
            "8 ס\"מ",
            "36 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "שלב א: חשבו את שטח הריבוע. שלב ב: מכיוון שהשטחים שווים, שטח המלבן זהה לתוצאה שמצאתם. חלצו את האורך.",
        solution_steps: [
            { verbal_explanation: "נחשב את שטח הריבוע על פי צלעו הידועה.", math_expression: "S_square = 6 × 6 = 36" },
            { verbal_explanation: "שטח המלבן שווה לשטח הריבוע, לכן גם הוא שלושים ושש. נציב זאת בנוסחת שטח המלבן המשלבת את הרוחב הנתון.", math_expression: "a × 4 = 36" },
            { verbal_explanation: "נחלק בארבע כדי למצוא את האורך החסר של המלבן.", math_expression: "a = 36 / 4 = 9" }
        ],
        final_answer: "9 ס\"מ"
    },// ========================================================================
    // תת נושא 3: מקבילית (15 שאלות) - סיום הנושא שטחים והיקפים
    // ========================================================================
    
    // שאלה 31 - שטח מקבילית בסיסי
    {
        topic: "areas_perimeters_172",
        subTopic: "מקבילית",
        question_text: `לפניכם מקבילית. אורך הבסיס הוא 10 ס"מ, והגובה היורד אל בסיס זה הוא 5 ס"מ.<br>
        <svg viewBox="0 0 250 120" width="100%" height="120" style="display:block; margin:15px auto; max-width:250px;">
            <polygon points="40,100 160,100 200,20 80,20" fill="rgba(34,197,94,0.1)" stroke="#0f172a" stroke-width="2"/>
            <line x1="80" y1="20" x2="80" y2="100" stroke="#ef4444" stroke-width="2" stroke-dasharray="5,5"/>
            <polyline points="80,90 90,90 90,100" fill="none" stroke="#ef4444" stroke-width="1.5"/>
            <text x="95" y="115" font-family="Arial" font-size="12" fill="#0f172a" font-weight="bold">10</text>
            <text x="65" y="65" font-family="Arial" font-size="12" fill="#ef4444" font-weight="bold">5</text>
        </svg>
        מהו שטח המקבילית?`,
        options: [
            "50 סמ\"ר",
            "25 סמ\"ר",
            "15 סמ\"ר",
            "100 סמ\"ר"
        ],
        correctAnswer: 0,
        hint: "שטח מקבילית שווה למכפלת הבסיס בגובה היורד אליו (בשונה ממשולש, כאן לא מחלקים בשתיים!).",
        solution_steps: [
            { verbal_explanation: "נסמן את הבסיס באות ואת הגובה באות, ונציב אותם בנוסחת השטח למקבילית.", math_expression: "a = 10 , h = 5" },
            { verbal_explanation: "נוסחת שטח מקבילית זהה לנוסחת שטח מלבן: בסיס כפול גובה.", math_expression: "S = a × h" },
            { verbal_explanation: "נבצע את פעולת הכפל לקבלת השטח המלא.", math_expression: "S = 10 × 5 = 50" }
        ],
        final_answer: "50 סמ\"ר"
    },

    // שאלה 32 - היקף מקבילית בסיסי
    {
        topic: "areas_perimeters_172",
        subTopic: "מקבילית",
        question_text: `לפניכם מקבילית. אורך צלע אחת הוא 8 ס"מ ואורך הצלע הסמוכה לה הוא 6 ס"מ.<br>
        <svg viewBox="0 0 250 120" width="100%" height="120" style="display:block; margin:15px auto; max-width:250px;">
            <polygon points="40,100 160,100 200,20 80,20" fill="rgba(59,130,246,0.1)" stroke="#0f172a" stroke-width="2"/>
            <text x="95" y="115" font-family="Arial" font-size="12" fill="#0f172a" font-weight="bold">8</text>
            <text x="45" y="55" font-family="Arial" font-size="12" fill="#0f172a" font-weight="bold">6</text>
        </svg>
        מהו היקף המקבילית?`,
        options: [
            "28 ס\"מ",
            "14 ס\"מ",
            "48 ס\"מ",
            "24 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "במקבילית, כל שתי צלעות נגדיות (מולות) שוות זו לזו. לכן, יש פעמיים צלע של שמונה ופעמיים צלע של שש.",
        solution_steps: [
            { verbal_explanation: "היקף של מקבילית מחושב בדיוק כמו היקף של מלבן: פעמיים צלע אחת ועוד פעמיים הצלע השנייה.", math_expression: "P = 2a + 2b" },
            { verbal_explanation: "נציב את אורכי הצלעות הנתונות במשוואה.", math_expression: "P = 2 × 8 + 2 × 6" },
            { verbal_explanation: "נחשב את הכפלים ונחבר לקבלת סכום ההיקף הכולל.", math_expression: "P = 16 + 12 = 28" }
        ],
        final_answer: "28 ס\"מ"
    },

    // שאלה 33 - חילוץ גובה מתוך שטח
    {
        topic: "areas_perimeters_172",
        subTopic: "מקבילית",
        question_text: `שטחה של מקבילית הוא 42 סמ"ר. אורך הבסיס שלה הוא 7 ס"מ.<br>
        מהו אורך הגובה היורד לבסיס זה?`,
        options: [
            "6 ס\"מ",
            "35 ס\"מ",
            "12 ס\"מ",
            "3 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "מאחר והשטח מחושב כבסיס כפול גובה, עליכם לחלק את השטח הנתון בבסיס הנתון כדי לחלץ את הגובה.",
        solution_steps: [
            { verbal_explanation: "נרשום את משוואת השטח למקבילית ונציב בה את המספרים הידועים לנו.", math_expression: "S = a × h <br><br> 42 = 7 × h" },
            { verbal_explanation: "נחלק את השטח באורך הבסיס כדי לבודד את הגובה החסר.", math_expression: "h = 42 / 7" },
            { verbal_explanation: "נחשב את תוצאת החלוקה.", math_expression: "h = 6" }
        ],
        final_answer: "6 ס\"מ"
    },

    // שאלה 34 - חילוץ צלע מתוך היקף
    {
        topic: "areas_perimeters_172",
        subTopic: "מקבילית",
        question_text: `היקפה של מקבילית הוא 40 ס"מ. אורך אחת מצלעותיה הוא 12 ס"מ.<br>
        מהו אורך הצלע הסמוכה לה?`,
        options: [
            "8 ס\"מ",
            "16 ס\"מ",
            "28 ס\"מ",
            "14 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "החסרו פעמיים את הצלע הנתונה מההיקף הכולל, וחלקו את השארית לשתיים כדי למצוא את הצלע השנייה.",
        solution_steps: [
            { verbal_explanation: "נציב את ההיקף ואת הצלע הידועה בנוסחת ההיקף הקבועה למקבילית.", math_expression: "P = 2a + 2b <br><br> 40 = 2 × 12 + 2b" },
            { verbal_explanation: "נחשב את סכום שתי הצלעות הידועות ונחסר מההיקף הכללי.", math_expression: "40 = 24 + 2b <br><br> 16 = 2b" },
            { verbal_explanation: "נחלק בשתיים כדי למצוא צלע בודדת מתוך הזוג הנותר.", math_expression: "b = 16 / 2 = 8" }
        ],
        final_answer: "8 ס\"מ"
    },

    // שאלה 35 - מעוין (מקבילית שוות צלעות) - היקף
    {
        topic: "areas_perimeters_172",
        subTopic: "מקבילית",
        question_text: `מעוין הוא מקבילית מיוחדת שבה כל ארבע הצלעות שוות זו לזו.<br>
        אורך צלע של מעוין הוא 9 ס"מ. מהו היקפו?`,
        options: [
            "36 ס\"מ",
            "81 ס\"מ",
            "18 ס\"מ",
            "27 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "מכיוון שכל הצלעות שוות, פשוט כפלו את אורך הצלע בארבע.",
        solution_steps: [
            { verbal_explanation: "במעוין, בדומה לריבוע, יש ארבע צלעות זהות לחלוטין באורכן.", math_expression: "P = 4 × a" },
            { verbal_explanation: "נציב את הנתון הידוע ונבצע פעולת כפל פשוטה למציאת ההיקף הסובב את הצורה.", math_expression: "P = 4 × 9 = 36" }
        ],
        final_answer: "36 ס\"מ"
    },

    // שאלה 36 - מעוין - שטח עם בסיס וגובה
    {
        topic: "areas_perimeters_172",
        subTopic: "מקבילית",
        question_text: `לפניכם מעוין (מקבילית שוות צלעות). אורך צלעו הוא 5 ס"מ והגובה היורד אליה הוא 4 ס"מ.<br>
        מהו שטח המעוין?`,
        options: [
            "20 סמ\"ר",
            "10 סמ\"ר",
            "25 סמ\"ר",
            "40 סמ\"ר"
        ],
        correctAnswer: 0,
        hint: "שטח מעוין ניתן לחישוב בדיוק כמו שטח של כל מקבילית רגילה: בסיס כפול הגובה היורד אליו.",
        solution_steps: [
            { verbal_explanation: "מעוין הוא מקבילית, ולכן נוסחת השטח הסטנדרטית תקפה גם לגביו.", math_expression: "S = a × h" },
            { verbal_explanation: "נציב את הצלע כבסיס ואת הגובה הנתון.", math_expression: "S = 5 × 4" },
            { verbal_explanation: "נבצע את המכפלה.", math_expression: "S = 20" }
        ],
        final_answer: "20 סמ\"ר"
    },

    // שאלה 37 - שטח מקבילית עם משתנה אלגברי
    {
        topic: "areas_perimeters_172",
        subTopic: "מקבילית",
        question_text: `אורכו של בסיס מקבילית מיוצג על ידי הביטוי <span dir="ltr">x + 3</span>.<br>
        הגובה היורד אל הבסיס הוא 4.<br>
        אם שטח המקבילית הוא 32 סמ"ר, מהו הערך של x?`,
        options: [
            "5",
            "8",
            "4",
            "11"
        ],
        correctAnswer: 0,
        hint: "הכפילו את הגובה בסוגריים של הבסיס, השוו לשלושים ושתיים, ופתרו את המשוואה.",
        solution_steps: [
            { verbal_explanation: "נבנה משוואת שטח על סמך הנוסחה, ונציב את הביטוי האלגברי בתוך סוגריים מול הגובה.", math_expression: "4(x + 3) = 32" },
            { verbal_explanation: "נחלק את שני האגפים בארבע כדי לפשט את המשוואה במהירות.", math_expression: "x + 3 = 8" },
            { verbal_explanation: "נעביר את המספר ימינה ונחסר למציאת הערך הסופי.", math_expression: "x = 8 - 3 = 5" }
        ],
        final_answer: "5"
    },// ========================================================================
    // תת נושא 3: מקבילית (15 שאלות) - גרסה מתוקנת לחלוטין ללא אנגלית
    // ========================================================================
    
    // שאלה 31 - שטח מקבילית בסיסי
    {
        topic: "area_perim_172",
        subTopic: "מקבילית",
        question_text: `לפניכם מקבילית. אורך הבסיס הוא 10 ס"מ, והגובה היורד אל בסיס זה הוא 5 ס"מ.<br>
        <svg viewBox="0 0 250 120" width="100%" height="120" style="display:block; margin:15px auto; max-width:250px;">
            <polygon points="40,100 160,100 200,20 80,20" fill="rgba(34,197,94,0.1)" stroke="#0f172a" stroke-width="2"/>
            <line x1="80" y1="20" x2="80" y2="100" stroke="#ef4444" stroke-width="2" stroke-dasharray="5,5"/>
            <polyline points="80,90 90,90 90,100" fill="none" stroke="#ef4444" stroke-width="1.5"/>
            <text x="95" y="115" font-family="Arial" font-size="12" fill="#0f172a" font-weight="bold">10</text>
            <text x="65" y="65" font-family="Arial" font-size="12" fill="#ef4444" font-weight="bold">5</text>
        </svg>
        מהו שטח המקבילית?`,
        options: [
            "50 סמ\"ר",
            "25 סמ\"ר",
            "15 סמ\"ר",
            "100 סמ\"ר"
        ],
        correctAnswer: 0,
        hint: "שטח מקבילית שווה למכפלת הבסיס בגובה היורד אליו (בשונה ממשולש, כאן לא מחלקים בשתיים!).",
        solution_steps: [
            { verbal_explanation: "נסמן את הבסיס ואת הגובה באותיות, ונציב אותם בנוסחת השטח למקבילית.", math_expression: "a = 10 , h = 5" },
            { verbal_explanation: "נוסחת שטח מקבילית זהה לנוסחת שטח מלבן: בסיס כפול גובה.", math_expression: "S = a × h" },
            { verbal_explanation: "נבצע את פעולת הכפל לקבלת השטח המלא.", math_expression: "S = 10 × 5 = 50" }
        ],
        final_answer: "50 סמ\"ר"
    },

    // שאלה 32 - היקף מקבילית בסיסי
    {
        topic: "area_perim_172",
        subTopic: "מקבילית",
        question_text: `לפניכם מקבילית. אורך צלע אחת הוא 8 ס"מ ואורך הצלע הסמוכה לה הוא 6 ס"מ.<br>
        <svg viewBox="0 0 250 120" width="100%" height="120" style="display:block; margin:15px auto; max-width:250px;">
            <polygon points="40,100 160,100 200,20 80,20" fill="rgba(59,130,246,0.1)" stroke="#0f172a" stroke-width="2"/>
            <text x="95" y="115" font-family="Arial" font-size="12" fill="#0f172a" font-weight="bold">8</text>
            <text x="45" y="55" font-family="Arial" font-size="12" fill="#0f172a" font-weight="bold">6</text>
        </svg>
        מהו היקף המקבילית?`,
        options: [
            "28 ס\"מ",
            "14 ס\"מ",
            "48 ס\"מ",
            "24 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "במקבילית, כל שתי צלעות נגדיות (מולות) שוות זו לזו. לכן, יש פעמיים צלע של שמונה ופעמיים צלע של שש.",
        solution_steps: [
            { verbal_explanation: "היקף של מקבילית מחושב בדיוק כמו היקף של מלבן: פעמיים צלע אחת ועוד פעמיים הצלע השנייה.", math_expression: "P = 2a + 2b" },
            { verbal_explanation: "נציב את אורכי הצלעות הנתונות במשוואה.", math_expression: "P = 2 × 8 + 2 × 6" },
            { verbal_explanation: "נחשב את הכפלים ונחבר לקבלת סכום ההיקף הכולל.", math_expression: "P = 16 + 12 = 28" }
        ],
        final_answer: "28 ס\"מ"
    },

    // שאלה 33 - חילוץ גובה מתוך שטח
    {
        topic: "area_perim_172",
        subTopic: "מקבילית",
        question_text: `שטחה של מקבילית הוא 42 סמ"ר. אורך הבסיס שלה הוא 7 ס"מ.<br>
        מהו אורך הגובה היורד לבסיס זה?`,
        options: [
            "6 ס\"מ",
            "35 ס\"מ",
            "12 ס\"מ",
            "3 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "מאחר והשטח מחושב כבסיס כפול גובה, עליכם לחלק את השטח הנתון בבסיס הנתון כדי לחלץ את הגובה.",
        solution_steps: [
            { verbal_explanation: "נרשום את משוואת השטח למקבילית ונציב בה את המספרים הידועים לנו.", math_expression: "S = a × h <br><br> 42 = 7 × h" },
            { verbal_explanation: "נחלק את השטח באורך הבסיס כדי לבודד את הגובה החסר.", math_expression: "h = 42 / 7" },
            { verbal_explanation: "נחשב את תוצאת החלוקה.", math_expression: "h = 6" }
        ],
        final_answer: "6 ס\"מ"
    },

    // שאלה 34 - חילוץ צלע מתוך היקף
    {
        topic: "area_perim_172",
        subTopic: "מקבילית",
        question_text: `היקפה של מקבילית הוא 40 ס"מ. אורך אחת מצלעותיה הוא 12 ס"מ.<br>
        מהו אורך הצלע הסמוכה לה?`,
        options: [
            "8 ס\"מ",
            "16 ס\"מ",
            "28 ס\"מ",
            "14 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "החסרו פעמיים את הצלע הנתונה מההיקף הכולל, וחלקו את השארית לשתיים כדי למצוא את הצלע השנייה.",
        solution_steps: [
            { verbal_explanation: "נציב את ההיקף ואת הצלע הידועה בנוסחת ההיקף הקבועה למקבילית.", math_expression: "P = 2a + 2b <br><br> 40 = 2 × 12 + 2b" },
            { verbal_explanation: "נחשב את סכום שתי הצלעות הידועות ונחסר מההיקף הכללי.", math_expression: "40 = 24 + 2b <br><br> 16 = 2b" },
            { verbal_explanation: "נחלק בשתיים כדי למצוא צלע בודדת מתוך הזוג הנותר.", math_expression: "b = 16 / 2 = 8" }
        ],
        final_answer: "8 ס\"מ"
    },

    // שאלה 35 - מעוין (מקבילית שוות צלעות) - היקף
    {
        topic: "area_perim_172",
        subTopic: "מקבילית",
        question_text: `מעוין הוא מקבילית מיוחדת שבה כל ארבע הצלעות שוות זו לזו.<br>
        אורך צלע של מעוין הוא 9 ס"מ. מהו היקפו?`,
        options: [
            "36 ס\"מ",
            "81 ס\"מ",
            "18 ס\"מ",
            "27 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "מכיוון שכל הצלעות שוות, פשוט כפלו את אורך הצלע בארבע.",
        solution_steps: [
            { verbal_explanation: "במעוין, בדומה לריבוע, יש ארבע צלעות זהות לחלוטין באורכן.", math_expression: "P = 4 × a" },
            { verbal_explanation: "נציב את הנתון הידוע ונבצע פעולת כפל פשוטה למציאת ההיקף הסובב את הצורה.", math_expression: "P = 4 × 9 = 36" }
        ],
        final_answer: "36 ס\"מ"
    },

    // שאלה 36 - מעוין - שטח עם בסיס וגובה
    {
        topic: "area_perim_172",
        subTopic: "מקבילית",
        question_text: `לפניכם מעוין (מקבילית שוות צלעות). אורך צלעו הוא 5 ס"מ והגובה היורד אליה הוא 4 ס"מ.<br>
        מהו שטח המעוין?`,
        options: [
            "20 סמ\"ר",
            "10 סמ\"ר",
            "25 סמ\"ר",
            "40 סמ\"ר"
        ],
        correctAnswer: 0,
        hint: "שטח מעוין ניתן לחישוב בדיוק כמו שטח של כל מקבילית רגילה: בסיס כפול הגובה היורד אליו.",
        solution_steps: [
            { verbal_explanation: "מעוין הוא מקבילית, ולכן נוסחת השטח הסטנדרטית תקפה גם לגביו.", math_expression: "S = a × h" },
            { verbal_explanation: "נציב את הצלע כבסיס ואת הגובה הנתון.", math_expression: "S = 5 × 4" },
            { verbal_explanation: "נבצע את המכפלה.", math_expression: "S = 20" }
        ],
        final_answer: "20 סמ\"ר"
    },

    // שאלה 37 - שטח מקבילית עם משתנה אלגברי
    {
        topic: "area_perim_172",
        subTopic: "מקבילית",
        question_text: `אורכו של בסיס מקבילית מיוצג על ידי הביטוי <span dir="ltr">x + 3</span>.<br>
        הגובה היורד אל הבסיס הוא 4.<br>
        אם שטח המקבילית הוא 32 סמ"ר, מהו הערך של x?`,
        options: [
            "5",
            "8",
            "4",
            "11"
        ],
        correctAnswer: 0,
        hint: "הכפילו את הגובה בסוגריים של הבסיס, השוו לשלושים ושתיים, ופתרו את המשוואה.",
        solution_steps: [
            { verbal_explanation: "נבנה משוואת שטח על סמך הנוסחה, ונציב את הביטוי האלגברי בתוך סוגריים מול הגובה.", math_expression: "4(x + 3) = 32" },
            { verbal_explanation: "נחלק את שני האגפים בארבע כדי לפשט את המשוואה במהירות.", math_expression: "x + 3 = 8" },
            { verbal_explanation: "נעביר את המספר ימינה ונחסר למציאת הערך הסופי.", math_expression: "x = 8 - 3 = 5" }
        ],
        final_answer: "5"
    },

    // שאלה 38 - היקף מקבילית אלגברי
    {
        topic: "area_perim_172",
        subTopic: "מקבילית",
        question_text: `במקבילית, צלע אחת ארוכה פי 2 מהצלע הסמוכה לה.<br>
        נסמן את הצלע הקצרה ב-<span dir="ltr">x</span> ואת הארוכה ב-<span dir="ltr">2x</span>.<br>
        היקף המקבילית הוא 36 ס"מ. מהו הערך של x?`,
        options: [
            "6",
            "12",
            "9",
            "3"
        ],
        correctAnswer: 0,
        hint: "חברו את כל ארבע הצלעות של המקבילית (פעמיים הצלע הקצרה ופעמיים הצלע הארוכה) והשוו ל-36.",
        solution_steps: [
            { verbal_explanation: "נרשום משוואה עבור ההיקף הכוללת פעמיים את הצלע הקצרה ופעמיים את הצלע הארוכה.", math_expression: "2(x) + 2(2x) = 36" },
            { verbal_explanation: "נפתח סוגריים ונסדר את המשוואה.", math_expression: "2x + 4x = 36" },
            { verbal_explanation: "נכנס איברים דומים באגף הנעלמים.", math_expression: "6x = 36" },
            { verbal_explanation: "נחלק בשש כדי לבודד את המשתנה.", math_expression: "x = 6" }
        ],
        final_answer: "6"
    },

    // שאלה 39 - שטח מניב חזקה ריבועית
    {
        topic: "area_perim_172",
        subTopic: "מקבילית",
        question_text: `במקבילית נתונה, אורך הבסיס כפול באורכו מהגובה היורד אליו.<br>
        נסמן את הגובה ב-<span dir="ltr">x</span> ואת הבסיס ב-<span dir="ltr">2x</span>.<br>
        שטח המקבילית הוא 50 סמ"ר. מהו אורך הגובה?`,
        options: [
            "5 ס\"מ",
            "10 ס\"מ",
            "25 ס\"מ",
            "12.5 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "שטח המקבילית הוא בסיס כפול גובה. הכפילו את הביטויים ופתרו את המשוואה הריבועית שתקבלו.",
        solution_steps: [
            { verbal_explanation: "נבנה משוואת שטח על ידי הכפלת הגובה בבסיס המבוטאים במשתנים.", math_expression: "x × 2x = 50" },
            { verbal_explanation: "נפשט את המכפלה לחזקה ריבועית.", math_expression: "2x² = 50" },
            { verbal_explanation: "נחלק בשתיים כדי לבודד את החזקה.", math_expression: "x² = 25" },
            { verbal_explanation: "נוציא שורש. מכיוון שמדובר באורך גיאומטרי, ניקח רק את התוצאה החיובית.", math_expression: "x = 5" }
        ],
        final_answer: "5 ס\"מ"
    },

    // שאלה 40 - השוואת שטחים (הבנה)
    {
        topic: "area_perim_172",
        subTopic: "מקבילית",
        question_text: `<strong>הבנה קונספטואלית:</strong><br>
        נתונים מלבן ומקבילית בעלי אותו אורך בסיס בדיוק, ובעלי אותו גובה בדיוק.<br>
        מה ניתן לומר על השטחים שלהם?`,
        options: [
            "השטחים שלהם שווים בדיוק",
            "שטח המלבן גדול יותר",
            "שטח המקבילית גדול יותר",
            "לא ניתן לדעת ללא מספרים"
        ],
        correctAnswer: 0,
        hint: "היזכרו בנוסחת השטח: בשניהם היא בסיס כפול גובה. אם הרכיבים זהים, התוצאה זהה.",
        solution_steps: [
            { verbal_explanation: "נוסחת השטח עבור מלבן מוגדרת כבסיס כפול גובה. נסמן את שטחו בספרה אחת.", math_expression: "S1 = a × h" },
            { verbal_explanation: "נוסחת השטח עבור מקבילית כללית מוגדרת גם היא כבסיס כפול גובה. נסמן את שטחה בספרה שתיים.", math_expression: "S2 = a × h" },
            { verbal_explanation: "מאחר והמשתנים זהים בשני המקרים, השטחים שווים בהכרח ללא קשר לזווית הנטייה.", math_expression: "S1 = S2" }
        ],
        final_answer: "השטחים שלהם שווים בדיוק"
    },

    // שאלה 41 - מקבילית על מערכת צירים
    {
        topic: "area_perim_172",
        subTopic: "מקבילית",
        question_text: `על מערכת צירים משורטטת מקבילית.<br>
        הבסיס התחתון מונח על ציר ה-x בין הנקודות <span dir="ltr">(1, 0)</span> ל- <span dir="ltr">(6, 0)</span>.<br>
        הבסיס העליון מונח על הישר <span dir="ltr">y = 4</span>.<br>
        מהו שטח המקבילית?`,
        options: [
            "20 יח\"ר",
            "24 יח\"ר",
            "10 יח\"ר",
            "12 יח\"ר"
        ],
        correctAnswer: 0,
        hint: "חשבו את אורך הבסיס על ידי חיסור שיעורי האופק (שש פחות אחד). הגובה הוא המרחק מציר הבסיס לישר העליון.",
        solution_steps: [
            { verbal_explanation: "אורך הבסיס המונח על הציר מחושב כהפרש בין הנקודות המרכיבות אותו.", math_expression: "a = 6 - 1 = 5" },
            { verbal_explanation: "הגובה הוא המרחק האנכי מהבסיס התחתון שגובהו אפס עד לישר של הבסיס העליון.", math_expression: "h = 4" },
            { verbal_explanation: "נציב בנוסחת השטח למקבילית לקבלת הפתרון.", math_expression: "S = 5 × 4 = 20" }
        ],
        final_answer: "20 יח\"ר"
    },

    // שאלה 42 - גובה נוסף למקבילית (אתגר מוכר)
    {
        topic: "area_perim_172",
        subTopic: "מקבילית",
        question_text: `<strong>אתגר שני הגבהים:</strong><br>
        במקבילית אורכי הצלעות הם 10 ס"מ ו-8 ס"מ.<br>
        הגובה היורד לצלע שאורכה 10 ס"מ הוא 4 ס"מ.<br>
        מהו אורך הגובה היורד לצלע שאורכה 8 ס"מ?`,
        options: [
            "5 ס\"מ",
            "4 ס\"מ",
            "8 ס\"מ",
            "10 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "שטח המקבילית קבוע! חשבו אותו בעזרת הצלע והגובה הידועים. לאחר מכן חלקו את השטח בצלע השנייה כדי למצוא את הגובה שלה.",
        solution_steps: [
            { verbal_explanation: "נחשב תחילה את השטח הכולל של המקבילית בעזרת הצמד המלא של צלע וגובה הנתונים לנו.", math_expression: "S = 10 × 4 = 40" },
            { verbal_explanation: "שטח המקבילית אינו משתנה אם נסובב אותה. לכן, גם הכפלת הצלע השנייה בגובה שלה חייבת לתת את אותו השטח.", math_expression: "8 × h = 40" },
            { verbal_explanation: "נחלק בשמונה כדי לחלץ את הגובה השני החסר.", math_expression: "h = 40 / 8 = 5" }
        ],
        final_answer: "5 ס\"מ"
    },

    // שאלה 43 - שינוי ממדים (פרופורציה)
    {
        topic: "area_perim_172",
        subTopic: "מקבילית",
        question_text: `לפניכם מקבילית. אם נגדיל את אורך הבסיס שלה פי 2, ונקטין את הגובה שלה פי 2 (נחלק בשתיים).<br>
        מה יקרה לשטח המקבילית החדשה לעומת המקורית?`,
        options: [
            "השטח יישאר בדיוק אותו הדבר",
            "השטח יוכפל פי 2",
            "השטח יקטן פי 2",
            "לא ניתן לדעת"
        ],
        correctAnswer: 0,
        hint: "הציבו בנוסחה: אם הבסיס מוכפל והגובה מחולק, פעולות הכפל והחילוק מבטלות זו את זו.",
        solution_steps: [
            { verbal_explanation: "נרשום את נוסחת השטח המקורית ונסמן אותה כאחד.", math_expression: "S1 = a × h" },
            { verbal_explanation: "ניצור נוסחה לשטח החדש, בה הבסיס כפול שתיים והגובה מחולק בשתיים.", math_expression: "S2 = (2 × a) × (h / 2)" },
            { verbal_explanation: "שתיים במונה ושתיים במכנה מצטמצמים כליל.", math_expression: "S2 = a × h" },
            { verbal_explanation: "התוצאה זהה לחלוטין לשטח המקורי, ולכן אין שום שינוי בגודל.", math_expression: "S1 = S2" }
        ],
        final_answer: "השטח יישאר בדיוק אותו הדבר"
    },

    // שאלה 44 - משוואה ריבועית מלאה משטח מקבילית
    {
        topic: "area_perim_172",
        subTopic: "מקבילית",
        question_text: `במקבילית, אורך הגובה קטן ב-2 ס"מ מאורך הבסיס.<br>
        נסמן את הבסיס ב-<span dir="ltr">x</span>, ואת הגובה ב-<span dir="ltr">x - 2</span>.<br>
        שטח המקבילית הוא 48 סמ"ר. מהו אורך הבסיס (x)?`,
        options: [
            "8 ס\"מ",
            "6 ס\"מ",
            "12 ס\"מ",
            "4 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "הכפילו את הבסיס בגובה והשוו לארבעים ושמונה. פתרו את המשוואה הריבועית (בעזרת טרינום או נוסחת שורשים).",
        solution_steps: [
            { verbal_explanation: "נבנה משוואה המכפילה את הבסיס בגובה ומשווה אותה לשטח הנתון.", math_expression: "x(x - 2) = 48" },
            { verbal_explanation: "נפתח סוגריים ונעביר את המספר כדי ליצור משוואה ריבועית השווה לאפס.", math_expression: "x² - 2x - 48 = 0" },
            { verbal_explanation: "נפרק לטרינום. מספרים שמכפלתם מינוס ארבעים ושמונה וסכומם מינוס שתיים.", math_expression: "(x - 8)(x + 6) = 0" },
            { verbal_explanation: "נקבל שתי תשובות. מאחר ואורך צלע חייב להיות חיובי תמיד, נפסול את התשובה השלילית ונבחר בתוצאה החיובית.", math_expression: "x1 = 8 , x2 = -6 ➔ x = 8" }
        ],
        final_answer: "8 ס\"מ"
    },

    // שאלה 45 - צורה מורכבת (מקבילית ללא משולש)
    {
        topic: "area_perim_172",
        subTopic: "מקבילית",
        question_text: `שטחה של מקבילית גדולה הוא 60 סמ"ר. אורך הבסיס שלה הוא 12 ס"מ.<br>
        בתוך המקבילית שורטט משולש שיש לו בדיוק את אותו בסיס ובדיוק את אותו גובה כמו של המקבילית.<br>
        אם נגזור ונוציא את המשולש החוצה, מה יהיה השטח של החלק שיישאר במקבילית?`,
        options: [
            "30 סמ\"ר",
            "15 סמ\"ר",
            "45 סמ\"ר",
            "20 סמ\"ר"
        ],
        correctAnswer: 0,
        hint: "למשולש ולמקבילית יש אותם ממדים בדיוק. נוסחת שטח משולש היא בדיוק חצי משטח מקבילית. כלומר, גזרנו חצי, ונשאר חצי.",
        solution_steps: [
            { verbal_explanation: "שטח המקבילית הכללי נתון לנו מראש. נסמן אותו בספרה אחת.", math_expression: "S1 = 60" },
            { verbal_explanation: "שטח של משולש בעל בסיס וגובה זהים למקבילית יהיה תמיד שווה בדיוק לחצי משטחה.", math_expression: "S2 = 60 / 2 = 30" },
            { verbal_explanation: "נחסר את שטח המשולש שגזרנו מתוך השטח הכולל כדי לגלות כמה שטח עוד נשאר.", math_expression: "S3 = 60 - 30 = 30" }
        ],
        final_answer: "30 סמ\"ר"
    }
];