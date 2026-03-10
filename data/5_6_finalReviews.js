const questionsDB = [
    // ========================================================================
    // תת נושא 1: לקראת כיתה ו'
    // ========================================================================

    // --- שאלה 1 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "לקראת כיתה ו'",
        question: "פתרו את תרגיל החיבור הבא (חיבור שברים מעורבים):<br><br> 2 ו-1/3  +  1 ו-1/4",
        options: ["3 ו-7/12", "3 ו-2/7", "3 ו-5/12", "4 ו-1/12"],
        correctAnswer: 0,
        hint: "לפני שמחברים את השברים, חובה למצוא להם מכנה משותף. המכנה המשותף הקטן ביותר ל-3 ול-4 הוא 12. הרחיבו את השברים בהתאם.",
        solution_steps: [
            { verbal_explanation: "נחבר תחילה את השלמים בנפרד.", math_expression: "2 + 1 = 3" },
            { verbal_explanation: "כעת נחבר את השברים. נמצא מכנה משותף ל-3 ול-4, שהוא 12.", math_expression: "1/3 + 1/4" },
            { verbal_explanation: "נרחיב את השליש (נכפול פי 4) ואת הרבע (נכפול פי 3).", math_expression: "4/12 + 3/12" },
            { verbal_explanation: "נחבר את המונים של השברים המורחבים.", math_expression: "7/12" },
            { verbal_explanation: "נצרף את השלמים והשבר לתשובה סופית.", math_expression: "3 ו-7/12" }
        ],
        final_answer: "3 ו-7/12"
    },

    // --- שאלה 2 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "לקראת כיתה ו'",
        question: "פתרו את תרגיל החיסור הבא הדורש 'פריטת שלם':<br><br> 5 ו-1/4  -  2 ו-3/4",
        options: ["2 ו-1/2", "3 ו-2/4", "2 ו-3/4", "3 ו-1/2"],
        correctAnswer: 0,
        hint: "אי אפשר לחסר 3 מ-1 במונה. לכן, 'פרטו' שלם אחד מתוך ה-5 והפכו אותו ל- 4/4. כעת יש לכם 4 שלמים ו- 5/4.",
        solution_steps: [
            { verbal_explanation: "נשים לב שהשבר הראשון (1/4) קטן מהשבר השני (3/4), לכן נצטרך לפרוט שלם.", math_expression: "1/4 < 3/4" },
            { verbal_explanation: "ניקח שלם אחד מה-5 وנהפוך אותו ל-4 רבעים. נוסיף אותם לרבע הקיים.", math_expression: "5 ו-1/4 = 4 ו-5/4" },
            { verbal_explanation: "כעת נבצע את החיסור: שלמים פחות שלמים, ושברים פחות שברים.", math_expression: "4 ו-5/4  -  2 ו-3/4" },
            { verbal_explanation: "חיסור השלמים: 4 פחות 2 זה 2. חיסור השברים: 5 רבעים פחות 3 רבעים זה 2 רבעים.", math_expression: "2 ו-2/4" },
            { verbal_explanation: "נצמצם את השבר הסופי. שתי רביעיות הן חצי.", math_expression: "2 ו-1/2" }
        ],
        final_answer: "2 ו-1/2"
    },

    // --- שאלה 3 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "לקראת כיתה ו'",
        question: "מהי התוצאה של כפל השבר בשלם: 2/5 × 15 ?",
        options: ["6", "30", "3", "5"],
        correctAnswer: 0,
        hint: "כדי לכפול שבר בשלם, הכפילו את השלם (15) רק במונה של השבר (2). לאחר מכן, חלקו את התוצאה במכנה (5).",
        solution_steps: [
            { verbal_explanation: "בכפל שלם בשבר, השלם מוכפל אך ורק במונה.", math_expression: "(2 × 15) / 5" },
            { verbal_explanation: "נחשב את המכפלה שבמונה.", math_expression: "30 / 5" },
            { verbal_explanation: "נבצע את פעולת החילוק של קו השבר.", math_expression: "30 ÷ 5 = 6" }
        ],
        final_answer: "6"
    },

    // --- שאלה 4 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "לקראת כיתה ו'",
        question: "פתרו את תרגיל החיבור העשרוני הבא:<br><br> 3.45 + 1.6",
        options: ["5.05", "4.05", "5.61", "4.51"],
        correctAnswer: 0,
        hint: "בחיבור וחיסור מספרים עשרוניים במאונך, חובה 'ליישר' את הנקודות העשרוניות אחת מתחת לשנייה. הוסיפו אפס מימין ל-1.6 כדי שיהיה 1.60 ויהיה קל לחבר.",
        solution_steps: [
            { verbal_explanation: "נרשום את התרגיל במאונך ונדאג שהנקודה העשרונית תהיה בדיוק באותו קו.", math_expression: "  3.45 \n+ 1.60" },
            { verbal_explanation: "נחבר את מאיות (הספרה הימנית ביותר): 5 ועוד 0.", math_expression: "5 + 0 = 5" },
            { verbal_explanation: "נחבר את העשיריות: 4 ועוד 6 שווה 10. נרשום 0 ונעביר 1 לשלמים.", math_expression: "4 + 6 = 10" },
            { verbal_explanation: "נחבר את השלמים: 3 ועוד 1, ועוד ה-1 שהעברנו.", math_expression: "1 + 3 + 1 = 5" },
            { verbal_explanation: "התוצאה הסופית, עם הנקודה במקומה.", math_expression: "5.05" }
        ],
        final_answer: "5.05"
    },

    // --- שאלה 5 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "לקראת כיתה ו'",
        question: "חשבו את תוצאת הכפל הבאה ללא מחשבון:<br><br> 4.05 × 10",
        options: ["40.5", "405", "0.405", "45"],
        correctAnswer: 0,
        hint: "כאשר מכפילים מספר עשרוני ב-10, הנקודה העשרונית 'קופצת' צעד אחד ימינה, כי המספר גדל.",
        solution_steps: [
            { verbal_explanation: "כפל ב-10, 100 או 1000 לא דורש חישוב ארוך, אלא רק הזזה של הנקודה העשרונית.", math_expression: "× 10" },
            { verbal_explanation: "למספר 10 יש אפס אחד, לכן הנקודה 'תקפוץ' מקום אחד ימינה.", math_expression: "4.05  =>  40.5" }
        ],
        final_answer: "40.5"
    },

    // --- שאלה 6 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "לקראת כיתה ו'",
        question: `מהו שטחו של המלבן המשורטט מטה? (שימו לב, יש כאן כפל של מספרים עשרוניים)<br><br>
        <svg viewBox="0 0 200 120" style="width:100%; max-width:200px; display:block; margin:10px auto;">
            <rect x="20" y="20" width="160" height="80" fill="#e0f2fe" stroke="#3b82f6" stroke-width="2"/>
            <text x="100" y="15" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">8.5 ס"מ</text>
            <text x="10" y="65" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a" transform="rotate(-90 10,65)">4 ס"מ</text>
        </svg>`,
        options: ["34 סמ\"ר", "32.5 סמ\"ר", "36 סמ\"ר", "12.5 סמ\"ר"],
        correctAnswer: 0,
        hint: "שטח מלבן שווה לאורך כפול רוחב. חשבו 8.5 כפול 4. אפשר לפצל: 8 כפול 4, ועוד חצי כפול 4.",
        solution_steps: [
            { verbal_explanation: "נוסחת שטח מלבן היא מכפלת שתי צלעות סמוכות.", math_expression: "S = 8.5 × 4" },
            { verbal_explanation: "נפצל את הכפל לחישוב קל יותר בעל פה.", math_expression: "S = (8 × 4) + (0.5 × 4)" },
            { verbal_explanation: "נחשב כל חלק בנפרד. 8 כפול 4 זה 32. חצי כפול 4 זה 2.", math_expression: "S = 32 + 2" },
            { verbal_explanation: "נחבר את התוצאות.", math_expression: "S = 34" }
        ],
        final_answer: "34 סמ\"ר"
    },

    // --- שאלה 7 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "לקראת כיתה ו'",
        question: `דוד ושרה הזמינו פיצה משפחתית.<br>
        דוד אכל 1/4 מהפיצה, ושרה אכלה 3/8 מהפיצה.<br>
        איזה חלק מהפיצה נשאר בקרטון?<br><br>
        <svg viewBox="0 0 200 200" style="width:100%; max-width:180px; display:block; margin:10px auto;">
            <circle cx="100" cy="100" r="80" fill="#fcd34d" stroke="#c5a059" stroke-width="4"/>
            <line x1="100" y1="20" x2="100" y2="180" stroke="#f59e0b" stroke-width="2"/>
            <line x1="20" y1="100" x2="180" y2="100" stroke="#f59e0b" stroke-width="2"/>
            <line x1="43" y1="43" x2="157" y2="157" stroke="#f59e0b" stroke-width="2"/>
            <line x1="43" y1="157" x2="157" y2="43" stroke="#f59e0b" stroke-width="2"/>
            <text x="100" y="10" text-anchor="middle" font-size="12" font-weight="bold">פיצה שלמה = 1</text>
        </svg>`,
        options: ["3/8", "5/8", "1/2", "1/4"],
        correctAnswer: 0,
        hint: "הפיצה כולה שווה לשלם אחד (1). חברו את מה שדוד ושרה אכלו יחד (מכנה משותף 8), וחסרו את התוצאה מ-1.",
        solution_steps: [
            { verbal_explanation: "נחשב תחילה כמה פיצה נאכלה בסך הכל.", math_expression: "1/4 + 3/8" },
            { verbal_explanation: "נרחיב את הרבע כך שיהיה עם מכנה 8 (נכפול מונה ומכנה ב-2).", math_expression: "2/8 + 3/8" },
            { verbal_explanation: "נחבר את המונים. דוד ושרה אכלו יחד חמש שמיניות.", math_expression: "5/8 נאכלו" },
            { verbal_explanation: "פיצה שלמה היא שלם אחד, כלומר 8 שמיניות. נחסר את מה שנאכל מהשלם.", math_expression: "8/8 - 5/8" },
            { verbal_explanation: "נחשב את מה שנשאר.", math_expression: "3/8" }
        ],
        final_answer: "3/8"
    },

    // --- שאלה 8 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "לקראת כיתה ו'",
        question: "כיצד נרשום את השבר 3/5 כאחוזים?",
        options: ["60%", "35%", "50%", "30%"],
        correctAnswer: 0,
        hint: "אחוז פירושו 'מתוך מאה'. הרחיבו את השבר כך שהמכנה שלו יהיה 100. בכמה צריך לכפול את 5 כדי להגיע ל-100?",
        solution_steps: [
            { verbal_explanation: "כדי להפוך שבר לאחוז, עלינו להביא את המכנה ל-100.", math_expression: "3/5 = ?/100" },
            { verbal_explanation: "נבדוק בכמה יש להכפיל את המכנה. 100 לחלק ל-5 שווה 20.", math_expression: "הרחבה פי 20" },
            { verbal_explanation: "נרחיב את השבר: נכפיל את המונה והמכנה ב-20.", math_expression: "(3 × 20) / (5 × 20) = 60 / 100" },
            { verbal_explanation: "שבר שהמכנה שלו 100 הוא למעשה אחוז.", math_expression: "60%" }
        ],
        final_answer: "60%"
    },

    // --- שאלה 9 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "לקראת כיתה ו'",
        question: "רוני קנתה ספר שעולה 64.30 שקלים. היא שילמה לקופאי בשטר של 100 שקלים. כמה עודף עליה לקבל?",
        options: ["35.70 שקלים", "45.70 שקלים", "36.70 שקלים", "35.30 שקלים"],
        correctAnswer: 0,
        hint: "זהו תרגיל חיסור עשרוני: 100.00 פחות 64.30. השלימו ל-100 שלב אחרי שלב: מ-64.30 עד ל-65 חסר 70 אגורות (0.70). מ-65 עד ל-100 חסרים 35 שקלים.",
        solution_steps: [
            { verbal_explanation: "נבצע חיסור במאונך, או נשלים לסכום עגול צעד אחר צעד.", math_expression: "100.00 - 64.30" },
            { verbal_explanation: "השלמה: נוסיף 70 אגורות (0.70) כדי להגיע לסכום שלם.", math_expression: "64.30 + 0.70 = 65.00" },
            { verbal_explanation: "כעת נבדוק כמה חסר מ-65 כדי להגיע ל-100.", math_expression: "100 - 65 = 35" },
            { verbal_explanation: "נחבר את שני החלקים שהוספנו.", math_expression: "35 + 0.70 = 35.70" }
        ],
        final_answer: "35.70 שקלים"
    },

    // --- שאלה 10 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "לקראת כיתה ו'",
        question: "שטחו של ריבוע הוא 49 סמ\"ר. מהו ההיקף של הריבוע הזה?",
        options: ["28 ס\"מ", "14 ס\"מ", "49 ס\"מ", "24.5 ס\"מ"],
        correctAnswer: 0,
        hint: "זהו תרגיל בשני שלבים. תחילה מצאו את אורך הצלע של הריבוע (איזה מספר כפול עצמו שווה 49?). לאחר מכן, חשבו את ההיקף (צלע כפול 4).",
        solution_steps: [
            { verbal_explanation: "שטח ריבוע הוא צלע כפול עצמה. נחפש איזה מספר בריבוע נותן 49.", math_expression: "a × a = 49" },
            { verbal_explanation: "המספר הוא 7, מכיוון ש-7 כפול 7 זה 49.", math_expression: "אורך הצלע = 7" },
            { verbal_explanation: "היקף הריבוע הוא סכום 4 צלעותיו (או 4 כפול אורך הצלע).", math_expression: "היקף = 4 × 7" },
            { verbal_explanation: "נחשב את ההכפלה.", math_expression: "28" }
        ],
        final_answer: "28 ס\"מ"
    },

    // --- שאלה 11 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "לקראת כיתה ו'",
        question: "מהי התוצאה (עם שארית) של תרגיל החילוק: 125 ÷ 4 ?",
        options: ["31 ושארית 1", "30 ושארית 5", "31 ושארית 2", "32 ושארית 1"],
        correctAnswer: 0,
        hint: "חלקו קודם את ה-120 ב-4 (שווה 30). אחר כך בדקו כמה זה 5 לחלק ל-4.",
        solution_steps: [
            { verbal_explanation: "נשתמש בחילוק ארוך או בפירוק המספר לחלקים נוחים לחלוקה.", math_expression: "125 = 120 + 5" },
            { verbal_explanation: "נחלק את ה-120 ב-4.", math_expression: "120 ÷ 4 = 30" },
            { verbal_explanation: "כעת נחלק את ה-5 ב-4. התוצאה היא 1, ונשאר עודף (שארית) של 1.", math_expression: "5 ÷ 4 = 1 (שארית 1)" },
            { verbal_explanation: "נחבר את התוצאות.", math_expression: "30 + 1 = 31, והשארית נשארת 1." }
        ],
        final_answer: "31 ושארית 1"
    },

    // --- שאלה 12 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "לקראת כיתה ו'",
        question: "חשבו לפי סדר פעולות חשבון:<br><br> 30 - 3 × (4 + 2)",
        options: ["12", "162", "24", "16"],
        correctAnswer: 0,
        hint: "חוקי סדר פעולות: קודם כל פותרים את מה שבתוך הסוגריים! אחר כך כפל וחילוק, ורק בסוף חיבור וחיסור.",
        solution_steps: [
            { verbal_explanation: "סוגריים קודמים לכל. נחשב את החיבור שבתוך הסוגריים.", math_expression: "4 + 2 = 6" },
            { verbal_explanation: "נכתוב את התרגיל מחדש עם התוצאה.", math_expression: "30 - 3 × 6" },
            { verbal_explanation: "כפל קודם לחיסור. נבצע את פעולת הכפל.", math_expression: "3 × 6 = 18" },
            { verbal_explanation: "נסיים בפעולת החיסור האחרונה.", math_expression: "30 - 18 = 12" }
        ],
        final_answer: "12"
    },

    // --- שאלה 13 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "לקראת כיתה ו'",
        question: "שלושה חברים קיבלו ציונים במבחן: 85, 95 ו-90. מהו הציון הממוצע שלהם?",
        options: ["90", "95", "85", "270"],
        correctAnswer: 0,
        hint: "כדי למצוא ממוצע, חברו את כל הציונים יחד, וחלקו את התוצאה במספר החברים (3).",
        solution_steps: [
            { verbal_explanation: "השלב הראשון במציאת ממוצע הוא חישוב הסכום הכולל.", math_expression: "85 + 95 + 90" },
            { verbal_explanation: "נחבר: 85 ועוד 95 זה 180. 180 ועוד 90 זה 270.", math_expression: "סכום = 270" },
            { verbal_explanation: "השלב השני הוא חלוקת הסכום במספר הנתונים (יש לנו 3 ציונים).", math_expression: "270 ÷ 3" },
            { verbal_explanation: "נחשב את המנה לקבלת הממוצע.", math_expression: "90" }
        ],
        final_answer: "90"
    },

    // --- שאלה 14 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "לקראת כיתה ו'",
        question: "איזה שבר גדול יותר: 5/6 (חמש שישיות) או 7/8 (שבע שמיניות)?",
        options: ["7/8 גדול יותר", "5/6 גדול יותר", "הם שווים", "אי אפשר לדעת ללא מחשבון"],
        correctAnswer: 0,
        hint: "כדי להשוות שברים בקלות, הביאו אותם למכנה משותף. המכנה המשותף ל-6 ול-8 הוא 24.",
        solution_steps: [
            { verbal_explanation: "נמצא מכנה משותף. 24 מתחלק גם ב-6 וגם ב-8.", math_expression: "מכנה משותף = 24" },
            { verbal_explanation: "נרחיב את 5/6: נכפיל מונה ומכנה ב-4.", math_expression: "(5×4) / (6×4) = 20 / 24" },
            { verbal_explanation: "נרחיב את 7/8: נכפיל מונה ומכנה ב-3.", math_expression: "(7×3) / (8×3) = 21 / 24" },
            { verbal_explanation: "כעת נשווה מונים: 21 גדול מ-20, לכן 7/8 הוא השבר הגדול יותר.", math_expression: "21/24 > 20/24" }
        ],
        final_answer: "7/8 גדול יותר"
    },

    // --- שאלה 15 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "לקראת כיתה ו'",
        question: `מהו נפח התיבה המשורטטת מטה?<br><br>
        <svg viewBox="0 0 200 150" style="width:100%; max-width:200px; display:block; margin:10px auto;">
            <rect x="50" y="60" width="80" height="60" fill="#f8fafc" stroke="#0f172a" stroke-width="2"/>
            <polygon points="50,60 80,30 160,30 130,60" fill="#e2e8f0" stroke="#0f172a" stroke-width="2"/>
            <polygon points="130,60 160,30 160,90 130,120" fill="#cbd5e1" stroke="#0f172a" stroke-width="2"/>
            <text x="90" y="135" font-size="12" font-weight="bold">5 ס"מ</text>
            <text x="165" y="110" font-size="12" font-weight="bold">3 ס"מ</text>
            <text x="25" y="95" font-size="12" font-weight="bold">4 ס"מ</text>
        </svg>`,
        options: ["60 סמ\"ק", "12 סמ\"ק", "47 סמ\"ק", "20 סמ\"ק"],
        correctAnswer: 0,
        hint: "נפח תיבה מחושב על ידי הכפלת שלושת מימדיה: אורך × רוחב × גובה.",
        solution_steps: [
            { verbal_explanation: "נזהה את שלושת המימדים מהשרטוט: אורך 5, רוחב 3, גובה 4.", math_expression: "מידות: 5, 4, 3" },
            { verbal_explanation: "נוסחת נפח תיבה היא מכפלת כל המידות.", math_expression: "V = אורך × רוחב × גובה" },
            { verbal_explanation: "נציב את המספרים ונכפיל.", math_expression: "V = 5 × 3 × 4" },
            { verbal_explanation: "נחשב: 5 כפול 3 זה 15. 15 כפול 4 זה 60.", math_expression: "V = 60" }
        ],
        final_answer: "60 סמ\"ק"
    },// ========================================================================
    // תת נושא 2: מבדק מחצית שנה
    // ========================================================================

    // --- שאלה 16 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "מבדק מחצית שנה",
        question: "איזה מספר עשרוני שווה לשבר 3/4 (שלושה רבעים)?",
        options: ["0.75", "0.34", "3.4", "0.50"],
        correctAnswer: 0,
        hint: "כדי להפוך שבר למספר עשרוני, כדאי להרחיב אותו כך שהמכנה יהיה 100. הכפילו גם את המונה וגם את המכנה ב-25.",
        solution_steps: [
            { verbal_explanation: "כדי לכתוב שבר פשוט כמספר עשרוני, נרחיב אותו לשבר שהמכנה שלו הוא 10, 100 או 1000.", math_expression: "3/4 = ?/100" },
            { verbal_explanation: "נכפיל את המכנה 4 ב-25 כדי להגיע ל-100. לכן נכפיל גם את המונה 3 ב-25.", math_expression: "(3 × 25) / (4 × 25) = 75 / 100" },
            { verbal_explanation: "75 מאיות נכתבות כשבר עשרוני כך:", math_expression: "0.75" }
        ],
        final_answer: "0.75"
    },

    // --- שאלה 17 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "מבדק מחצית שנה",
        question: "במפעל ארזו 450 כוסות זכוכית בארגזים. בכל ארגז נכנסות בדיוק 12 כוסות. כמה ארגזים מלאים ארזו במפעל, וכמה כוסות נשארו מחוץ לארגזים?",
        options: ["37 ארגזים מלאים ונשארו 6 כוסות", "38 ארגזים מלאים ולא נשארו כוסות", "37 ארגזים מלאים ונשארו 2 כוסות", "36 ארגזים מלאים ונשארו 8 כוסות"],
        correctAnswer: 0,
        hint: "זהו תרגיל חילוק עם שארית. כמה פעמים 12 נכנס ב-450?",
        solution_steps: [
            { verbal_explanation: "נבצע תרגיל חילוק ארוך כדי לבדוק כמה ארגזים מלאים אפשר ליצור.", math_expression: "450 ÷ 12" },
            { verbal_explanation: "נבדוק תחילה כמה פעמים 12 נכנס ב-45. הוא נכנס 3 פעמים (36) ונשארת שארית 9.", math_expression: "45 ÷ 12 = 3, שארית 9" },
            { verbal_explanation: "נוריד את האפס, ונקבל 90. כמה פעמים 12 נכנס ב-90? הוא נכנס 7 פעמים (84) ונשארת שארית 6.", math_expression: "90 ÷ 12 = 7, שארית 6" },
            { verbal_explanation: "לכן, התשובה היא 37 ארגזים שלמים, ו-6 כוסות בודדות שנותרו.", math_expression: "37 ושארית 6" }
        ],
        final_answer: "37 ארגזים מלאים ונשארו 6 כוסות"
    },

    // --- שאלה 18 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "מבדק מחצית שנה",
        question: "פתרו את התרגיל הבא, הכולל פעולות חשבון עם שברים עשרוניים:<br><br> 5.2 × 100 - 150",
        options: ["370", "37", "505", "420"],
        correctAnswer: 0,
        hint: "קודם יש לבצע את פעולת הכפל. זכרו שכפל ב-100 מזיז את הנקודה העשרונית שני מקומות ימינה.",
        solution_steps: [
            { verbal_explanation: "לפי סדר פעולות חשבון, פעולת הכפל קודמת לחיסור.", math_expression: "קודם נחשב: 5.2 × 100" },
            { verbal_explanation: "כפל ב-100 מזיז את הנקודה שתי ספרות ימינה. אם חסרות ספרות, נוסיף אפס.", math_expression: "5.2 × 100 = 520" },
            { verbal_explanation: "כעת נבצע את פעולת החיסור הנותרת.", math_expression: "520 - 150" },
            { verbal_explanation: "נחשב את התוצאה.", math_expression: "370" }
        ],
        final_answer: "370"
    },

    // --- שאלה 19 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "מבדק מחצית שנה",
        question: `מהו שטחו של המשולש ישר הזווית המשורטט מטה?<br><br>
        <svg viewBox="0 0 200 120" style="width:100%; max-width:200px; display:block; margin:10px auto;">
            <polygon points="30,100 130,100 30,20" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
            <rect x="30" y="90" width="10" height="10" fill="none" stroke="#dc2626" stroke-width="1"/>
            <text x="80" y="115" text-anchor="middle" font-size="12" font-weight="bold">10 ס"מ</text>
            <text x="15" y="65" text-anchor="middle" font-size="12" font-weight="bold">6 ס"מ</text>
            <text x="90" y="55" text-anchor="middle" font-size="12" fill="#64748b" transform="rotate(38 90,55)">11.66 ס"מ</text>
        </svg>`,
        options: ["30 סמ\"ר", "60 סמ\"ר", "69.96 סמ\"ר", "16 סמ\"ר"],
        correctAnswer: 0,
        hint: "במשולש ישר זווית, השטח הוא מכפלת הניצבים (הצלעות המאונכות זו לזו) חלקי 2. אין צורך בצלע הארוכה (היתר) לחישוב השטח.",
        solution_steps: [
            { verbal_explanation: "נזהה את הניצבים במשולש ישר הזווית (הצלעות שיוצרות את הזווית הישרה). הניצבים הם 6 ו-10.", math_expression: "a = 10, b = 6" },
            { verbal_explanation: "נוסחת שטח משולש היא ניצב כפול ניצב חלקי 2.", math_expression: "S = (10 × 6) / 2" },
            { verbal_explanation: "נכפיל את הניצבים.", math_expression: "S = 60 / 2" },
            { verbal_explanation: "נחלק ב-2.", math_expression: "S = 30" }
        ],
        final_answer: "30 סמ\"ר"
    },

    // --- שאלה 20 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "מבדק מחצית שנה",
        question: "איזה מבין השברים הבאים שווה בגודלו לשבר 2/3?",
        options: ["8/12", "4/9", "6/8", "10/12"],
        correctAnswer: 0,
        hint: "נסו להרחיב את השבר 2/3 (לכפול את המונה והמכנה באותו מספר) או לצמצם את השברים שבתשובות כדי לראות מי מהם מגיע ל-2/3.",
        solution_steps: [
            { verbal_explanation: "נבדוק את התשובה הראשונה (8/12). האם נוכל להגיע אליה על ידי הרחבת השבר 2/3?", math_expression: "2/3 = ?/12" },
            { verbal_explanation: "כדי שהמכנה יהיה 12, צריך להכפיל את 3 ב-4. נכפיל גם את המונה 2 ב-4.", math_expression: "(2 × 4) / (3 × 4) = 8/12" },
            { verbal_explanation: "קיבלנו שהשבר 8/12 הוא למעשה הרחבה של 2/3 ולכן הם שווים בגודלם.", math_expression: "2/3 = 8/12" }
        ],
        final_answer: "8/12"
    },

    // --- שאלה 21 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "מבדק מחצית שנה",
        question: "בכיתה יש 30 תלמידים. 20% מהם משתתפים בחוג ציור. כמה תלמידים **לא** משתתפים בחוג ציור?",
        options: ["24 תלמידים", "6 תלמידים", "10 תלמידים", "20 תלמידים"],
        correctAnswer: 0,
        hint: "אם 20% מהתלמידים משתתפים בחוג, אז 80% לא משתתפים. חשבו כמה הם 80 אחוזים מתוך 30 תלמידים (אפשר קודם למצוא כמה זה 10% ואז להכפיל).",
        solution_steps: [
            { verbal_explanation: "נמצא מהו אחוז התלמידים שלא משתתפים. השלם הוא 100%.", math_expression: "100% - 20% = 80%" },
            { verbal_explanation: "כעת עלינו לחשב כמה הם 80% מתוך 30 תלמידים.", math_expression: "30 × 0.80" },
            { verbal_explanation: "אפשר גם לחשב 10% מ-30 (שהם 3 תלמידים) ולהכפיל ב-8.", math_expression: "3 × 8 = 24" }
        ],
        final_answer: "24 תלמידים"
    },

    // --- שאלה 22 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "מבדק מחצית שנה",
        question: "השלימו את הסימן החסר: 0.4 ___ 0.35",
        options: ["> (גדול מ-)", "< (קטן מ-)", "= (שווה ל-)", "לא ניתן להשוות"],
        correctAnswer: 0,
        hint: "הוסיפו אפס בסוף המספר העשרוני הקצר יותר כדי ששניהם יהיו עם שתי ספרות אחרי הנקודה. השוו בין 0.40 ל-0.35.",
        solution_steps: [
            { verbal_explanation: "כדי להשוות מספרים עשרוניים בקלות, כדאי שיהיה להם אותו מספר ספרות אחרי הנקודה.", math_expression: "0.4  =>  0.40" },
            { verbal_explanation: "כעת נשווה בין 40 מאיות ל-35 מאיות.", math_expression: "0.40 ___ 0.35" },
            { verbal_explanation: "40 גדול מ-35, לכן 0.4 גדול מ-0.35.", math_expression: ">" }
        ],
        final_answer: "> (גדול מ-)"
    },

    // --- שאלה 23 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "מבדק מחצית שנה",
        question: "יעל קנתה 3 ק\"ג תפוחים במחיר של 6.50 שקלים לק\"ג, ו-2 ק\"ג אגסים במחיר של 8 שקלים לק\"ג. כמה שילמה יעל בסך הכל?",
        options: ["35.50 שקלים", "34.50 שקלים", "29.00 שקלים", "36.00 שקלים"],
        correctAnswer: 0,
        hint: "חשבו את עלות התפוחים (3 כפול 6.5) ואת עלות האגסים (2 כפול 8) בנפרד, ואז חברו את התוצאות.",
        solution_steps: [
            { verbal_explanation: "נחשב את העלות של התפוחים.", math_expression: "3 × 6.50 = 19.50" },
            { verbal_explanation: "נחשב את העלות של האגסים.", math_expression: "2 × 8.00 = 16.00" },
            { verbal_explanation: "נחבר את שתי העלויות לקבלת הסכום הכולל.", math_expression: "19.50 + 16.00" },
            { verbal_explanation: "נבצע את החיבור.", math_expression: "35.50" }
        ],
        final_answer: "35.50 שקלים"
    },

    // --- שאלה 24 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "מבדק מחצית שנה",
        question: "איזו צורה גיאומטרית מוגדרת כ'מרובע שכל צלעותיו שוות וכל זוויותיו ישרות'?",
        options: ["ריבוע", "מעוין", "מלבן", "מקבילית"],
        correctAnswer: 0,
        hint: "למעוין כל הצלעות שוות, אבל הזוויות שלו לא חייבות להיות ישרות. במלבן כל הזוויות ישרות, אבל הצלעות לא חייבות להיות שוות. הצורה היחידה שמקיימת את שתי התכונות גם יחד היא...",
        solution_steps: [
            { verbal_explanation: "התנאי 'כל זוויותיו ישרות' (90 מעלות) אומר שמדובר במלבן או בריבוע.", math_expression: "זוויות 90°" },
            { verbal_explanation: "התנאי 'כל צלעותיו שוות' פוסל את המלבן הרגיל (שבו רק צלעות נגדיות שוות) ומשאיר אותנו רק עם הריבוע.", math_expression: "צלעות שוות" },
            { verbal_explanation: "לכן, רק ריבוע מקיים את שתי הדרישות יחד.", math_expression: "ריבוע" }
        ],
        final_answer: "ריבוע"
    },

    // --- שאלה 25 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "מבדק מחצית שנה",
        question: "פתרו את תרגיל החילוק הבא (חילוק שבר בשלם):<br><br> 3/4 ÷ 2",
        options: ["3/8", "6/4", "1/2", "3/2"],
        correctAnswer: 0,
        hint: "כאשר מחלקים שבר במספר שלם, אפשר פשוט להכפיל את המכנה של השבר באותו מספר שלם. (במילים אחרות: אם מחלקים 3 רבעים לשני אנשים, כל אחד יקבל חצי מכל רבע, כלומר שמיניות).",
        solution_steps: [
            { verbal_explanation: "חילוק ב-2 שקול להכפלה בחצי (1/2).", math_expression: "3/4 ÷ 2 = 3/4 × 1/2" },
            { verbal_explanation: "נכפיל מונה במונה ומכנה במכנה.", math_expression: "(3 × 1) / (4 × 2)" },
            { verbal_explanation: "נחשב את התוצאה.", math_expression: "3/8" }
        ],
        final_answer: "3/8"
    },

    // --- שאלה 26 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "מבדק מחצית שנה",
        question: `מהו היקף הצורה המורכבת המשורטטת מטה? (כל הזוויות ישרות).<br><br>
        <svg viewBox="0 0 200 150" style="width:100%; max-width:200px; display:block; margin:10px auto;">
            <polygon points="50,110 150,110 150,80 80,80 80,30 50,30" fill="#f8fafc" stroke="#3b82f6" stroke-width="2"/>
            <text x="100" y="125" text-anchor="middle" font-size="12" font-weight="bold">10 מ'</text>
            <text x="30" y="70" text-anchor="middle" font-size="12" font-weight="bold">8 מ'</text>
            <text x="65" y="20" text-anchor="middle" font-size="12" font-weight="bold">3 מ'</text>
            <text x="170" y="95" text-anchor="middle" font-size="12" font-weight="bold">3 מ'</text>
        </svg>`,
        options: ["36 מטרים", "34 מטרים", "24 מטרים", "40 מטרים"],
        correctAnswer: 0,
        hint: "היקף הוא סכום כל הצלעות החיצוניות. קודם כל מצאו את אורכי הצלעות החסרות: הצלע הימנית הפנימית שווה ל-10 פחות 3 (7 מ'). הצלע התחתונה הפנימית שווה ל-8 פחות 3 (5 מ'). כעת חברו הכל.",
        solution_steps: [
            { verbal_explanation: "היקף הצורה מורכב מ-6 צלעות. נחשב את אורכי שתי הצלעות החסרות בשרטוט.", math_expression: "חסרות שתי צלעות פנימיות" },
            { verbal_explanation: "הרוחב הכללי הוא 10. החלק העליון הוא 3. לכן החלק הפנימי המאוזן הוא: 10 פחות 3.", math_expression: "10 - 3 = 7" },
            { verbal_explanation: "הגובה הכללי הוא 8. החלק הימני הוא 3. לכן החלק הפנימי האנכי הוא: 8 פחות 3.", math_expression: "8 - 3 = 5" },
            { verbal_explanation: "נחבר את כל שש הצלעות: 10 (למטה) + 3 (ימין) + 7 (פנים מאוזן) + 5 (פנים אנכי) + 3 (למעלה) + 8 (שמאל).", math_expression: "10 + 3 + 7 + 5 + 3 + 8" },
            { verbal_explanation: "נחשב את הסכום הכולל.", math_expression: "36" }
        ],
        final_answer: "36 מטרים"
    },

    // --- שאלה 27 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "מבדק מחצית שנה",
        question: "בכיתה מסוימת היחס בין מספר הבנים למספר הבנות הוא 3:4. (כלומר, על כל 3 בנים יש 4 בנות). אם בכיתה יש 15 בנים, כמה בנות יש בכיתה?",
        options: ["20 בנות", "16 בנות", "25 בנות", "12 בנות"],
        correctAnswer: 0,
        hint: "מצאו את 'גורם ההרחבה'. בכמה צריך להכפיל את ה-3 (של הבנים) כדי להגיע ל-15? (התשובה היא 5). עכשיו הכפילו גם את ה-4 (של הבנות) באותו מספר.",
        solution_steps: [
            { verbal_explanation: "נרשום את היחס הנתון: בנים לבנות.", math_expression: "3 : 4" },
            { verbal_explanation: "אנו יודעים שהמספר האמיתי של הבנים הוא 15. נבדוק בכמה הכפלנו את ה-3.", math_expression: "15 ÷ 3 = 5" },
            { verbal_explanation: "כדי לשמור על היחס, עלינו להכפיל גם את חלקן של הבנות (4) באותו גורם בדיוק.", math_expression: "4 × 5" },
            { verbal_explanation: "נחשב ונקבל את כמות הבנות.", math_expression: "20" }
        ],
        final_answer: "20 בנות"
    },

    // --- שאלה 28 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "מבדק מחצית שנה",
        question: "מהו המספר החסר בסדרה הבאה? <br> 2 , 5 , 11 , 23 , ___",
        options: ["47", "46", "35", "34"],
        correctAnswer: 0,
        hint: "בדקו מה החוקיות בין כל מספר למספר שאחריו. מ-2 ל-5: אפשר להכפיל ב-2 ולהוסיף 1. האם זה עובד גם על שאר המספרים?",
        solution_steps: [
            { verbal_explanation: "נבחן את הקשר בין המספר הראשון לשני.", math_expression: "2 × 2 + 1 = 5" },
            { verbal_explanation: "נבדוק אם החוקיות הזו (הכפלה ב-2 והוספת 1) פועלת על המספר הבא.", math_expression: "5 × 2 + 1 = 11" },
            { verbal_explanation: "נבדוק את המספר שאחריו כדי לוודא סופית.", math_expression: "11 × 2 + 1 = 23" },
            { verbal_explanation: "נפעיל את אותה החוקיות על המספר 23 כדי למצוא את המספר הבא.", math_expression: "23 × 2 + 1 = 46 + 1 = 47" }
        ],
        final_answer: "47"
    },

    // --- שאלה 29 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "מבדק מחצית שנה",
        question: "איזה מבין המספרים הבאים מתחלק ב-3 ללא שארית?",
        options: ["252", "143", "502", "812"],
        correctAnswer: 0,
        hint: "הסימן לחלוקה ב-3 (סימן ההיכר) הוא שאם סכום הספרות של המספר מתחלק ב-3, אז גם המספר כולו מתחלק ב-3. חברו את הספרות של כל אפשרות.",
        solution_steps: [
            { verbal_explanation: "נבדוק את סכום הספרות של המספר 143.", math_expression: "1 + 4 + 3 = 8 (לא מתחלק ב-3)" },
            { verbal_explanation: "נבדוק את סכום הספרות של המספר 502.", math_expression: "5 + 0 + 2 = 7 (לא מתחלק ב-3)" },
            { verbal_explanation: "נבדוק את סכום הספרות של המספר 812.", math_expression: "8 + 1 + 2 = 11 (לא מתחלק ב-3)" },
            { verbal_explanation: "נבדוק את סכום הספרות של המספר 252.", math_expression: "2 + 5 + 2 = 9" },
            { verbal_explanation: "מכיוון ש-9 מתחלק ב-3, המספר 252 מתחלק גם הוא ב-3 ללא שארית.", math_expression: "252 מתחלק ב-3" }
        ],
        final_answer: "252"
    },

    // --- שאלה 30 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "מבדק מחצית שנה",
        question: "פתרו את תרגיל הכפל של שבר עשרוני בשבר עשרוני:<br><br> 0.5 × 0.8",
        options: ["0.4", "4", "0.04", "0.45"],
        correctAnswer: 0,
        hint: "אפשר להפוך לשברים פשוטים (חצי כפול שמונה עשיריות), או להכפיל 5 ב-8 (נקבל 40), ולאחר מכן להזיז את הנקודה העשרונית שני מקומות שמאלה.",
        solution_steps: [
            { verbal_explanation: "נתעלם מהנקודות העשרוניות לרגע ונכפיל את המספרים השלמים.", math_expression: "5 × 8 = 40" },
            { verbal_explanation: "כעת נספור כמה ספרות יש מימין לנקודה בכל התרגיל. ב-0.5 יש ספרה אחת, וב-0.8 יש ספרה אחת. יחד - שתי ספרות.", math_expression: "2 מקומות עשרוניים" },
            { verbal_explanation: "ניקח את התוצאה (40) ונזיז את הנקודה העשרונית שני מקומות שמאלה.", math_expression: "40  =>  0.40" },
            { verbal_explanation: "האפס הימני אחרי הנקודה אינו משנה את ערך המספר, לכן התשובה היא 0.4.", math_expression: "0.4" }
        ],
        final_answer: "0.4"
    },// ========================================================================
    // תת נושא 3: שאלות אתגר רב-שלביות
    // ========================================================================

    // --- שאלה 31 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "שאלות אתגר רב-שלביות",
        question: "דני הוציא 1/3 מכספו על רכישת משחק, ולאחר מכן הוציא 1/4 מ**מה שנותר לו** על ארוחת צוהריים. לאחר שתי הרכישות, נשארו בארנקו 60 שקלים. כמה כסף היה לדני בהתחלה?",
        options: ["120 שקלים", "180 שקלים", "150 שקלים", "90 שקלים"],
        correctAnswer: 0,
        hint: "זהירות, הרבע הוא 'ממה שנותר', ולא מהסכום המקורי! אם הוא הוציא שליש, נותרו לו שני שלישים. חשבו כמה זה רבע מתוך שני שלישים.",
        solution_steps: [
            { verbal_explanation: "דני הוציא 1/3 מהכסף. המשמעות היא שנותרו לו בארנק 2/3 מהסכום המקורי.", math_expression: "נותר: 2/3" },
            { verbal_explanation: "כעת, הוא מוציא 1/4 (רבע) מתוך ה-2/3 שנותרו. נכפיל את השברים כדי לגלות איזה חלק מהסכום המקורי זה.", math_expression: "1/4 × 2/3 = 2/12 = 1/6" },
            { verbal_explanation: "נסכם את כל ההוצאות שלו יחד: 1/3 על המשחק ועוד 1/6 על הארוחה. נרחיב את ה-1/3 ל-2/6 ונחבר.", math_expression: "הוצאה כוללת = 2/6 + 1/6 = 3/6 = 1/2" },
            { verbal_explanation: "אם דני הוציא חצי מכספו, סימן שגם נשאר לו חצי מכספו. ידוע שהחצי שנשאר שווה ל-60 שקלים.", math_expression: "חצי = 60 שקלים" },
            { verbal_explanation: "אם חצי הוא 60, הסכום השלם כפול מכך.", math_expression: "סך הכל = 60 × 2 = 120" }
        ],
        final_answer: "120 שקלים"
    },

    // --- שאלה 32 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "שאלות אתגר רב-שלביות",
        question: `בתוך חלקה מלבנית שמידותיה 30 מטרים על 20 מטרים, נבנתה בריכה מלבנית.<br>
        הבריכה מרוחקת בדיוק 2 מטרים מכל אחד מקצוות החלקה. מסביב לבריכה שתלו דשא.<br>מהו שטח הדשא?<br><br>
        <svg viewBox="0 0 200 140" style="width:100%; max-width:250px; display:block; margin:10px auto;">
            <rect x="20" y="20" width="160" height="100" fill="#10b981" stroke="#0f172a" stroke-width="2"/>
            <rect x="40" y="40" width="120" height="60" fill="#3b82f6" stroke="#0f172a" stroke-width="2"/>
            <text x="100" y="15" text-anchor="middle" font-size="12" font-weight="bold">30 מ'</text>
            <text x="10" y="70" text-anchor="middle" font-size="12" font-weight="bold" transform="rotate(-90 10,70)">20 מ'</text>
            <line x1="20" y1="70" x2="40" y2="70" stroke="#0f172a" stroke-width="1" stroke-dasharray="2,2"/>
            <text x="30" y="65" text-anchor="middle" font-size="10" fill="#fff" font-weight="bold">2</text>
            <line x1="100" y1="20" x2="100" y2="40" stroke="#0f172a" stroke-width="1" stroke-dasharray="2,2"/>
            <text x="105" y="33" text-anchor="middle" font-size="10" fill="#fff" font-weight="bold">2</text>
        </svg>`,
        options: ["184 מ\"ר", "200 מ\"ר", "196 מ\"ר", "600 מ\"ר"],
        correctAnswer: 0,
        hint: "חשבו את השטח הכולל של החלקה. לאחר מכן, מצאו את המידות הפנימיות של הבריכה (חסרו 2 מטרים מכל צד, כלומר חסרו 4 מטרים מהאורך ו-4 מהרוחב). חשבו את שטח הבריכה וחסרו אותו מהשטח הכולל.",
        solution_steps: [
            { verbal_explanation: "תחילה נחשב את השטח הכולל של החלקה כולה (אורך כפול רוחב).", math_expression: "שטח כולל = 30 × 20 = 600" },
            { verbal_explanation: "כעת נמצא את מידות הבריכה. האורך מתקצר ב-2 מטרים מימין וב-2 מטרים משמאל (סך הכל פחות 4).", math_expression: "אורך בריכה = 30 - 4 = 26" },
            { verbal_explanation: "הרוחב מתקצר ב-2 מטרים מלמעלה ו-2 מלמטה.", math_expression: "רוחב בריכה = 20 - 4 = 16" },
            { verbal_explanation: "נחשב את שטח הבריכה.", math_expression: "שטח בריכה = 26 × 16 = 416" },
            { verbal_explanation: "שטח הדשא הוא השטח הכולל פחות שטח הבריכה.", math_expression: "דשא = 600 - 416 = 184" }
        ],
        final_answer: "184 מ\"ר"
    },

    // --- שאלה 33 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "שאלות אתגר רב-שלביות",
        question: "מחיר של טלפון סלולרי היה 2000 שקלים. תחילה מחירו עלה ב-10%. לאחר מספר חודשים נערך מבצע ומחירו של הטלפון ירד ב-20%. מהו מחיר הטלפון לאחר המבצע?",
        options: ["1760 שקלים", "1800 שקלים", "1900 שקלים", "1750 שקלים"],
        correctAnswer: 0,
        hint: "אסור לחבר ולחסר אחוזים בבת אחת! קודם חשבו את המחיר החדש לאחר ההתייקרות של ה-10%. לאחר מכן, חשבו 20% הנחה מתוך המחיר החדש שמצאתם.",
        solution_steps: [
            { verbal_explanation: "נחשב את עליית המחיר הראשונה. 10% מתוך 2000 הם 200 שקלים.", math_expression: "10% × 2000 = 200" },
            { verbal_explanation: "המחיר החדש של הטלפון לאחר ההתייקרות הוא 2200 שקלים.", math_expression: "מחיר ביניים = 2200" },
            { verbal_explanation: "כעת נחשב את ההנחה. 20% מתוך המחיר החדש (2200). עשרה אחוזים הם 220, לכן עשרים אחוזים הם 440.", math_expression: "הנחה = 2200 × 0.20 = 440" },
            { verbal_explanation: "נחסר את ההנחה מהמחיר כדי לקבל את המחיר הסופי.", math_expression: "מחיר סופי = 2200 - 440 = 1760" }
        ],
        final_answer: "1760 שקלים"
    },

    // --- שאלה 34 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "שאלות אתגר רב-שלביות",
        question: "לאלון ולרועי יש יחד סכום של 240 שקלים. ידוע שאם אלון ייתן לרועי 20 שקלים מהכסף שלו, לשניהם יהיה סכום כסף שווה לחלוטין. כמה כסף יש לאלון עכשיו (לפני ההעברה)?",
        options: ["140 שקלים", "120 שקלים", "100 שקלים", "160 שקלים"],
        correctAnswer: 0,
        hint: "אם לאחר ההעברה יהיה להם סכום שווה, והסכום הכולל נשאר 240, כמה יהיה לכל אחד בסוף? (120). אם אלון הגיע ל-120 אחרי שנתן 20 שקלים, כמה היה לו בהתחלה?",
        solution_steps: [
            { verbal_explanation: "הסכום הכולל שלהם יחד תמיד נשאר 240 שקלים, גם אם הם מעבירים כסף מאחד לשני.", math_expression: "סך הכל = 240" },
            { verbal_explanation: "לאחר ההעברה, הסכום של שניהם שווה. לכן נחלק את הסך הכל ל-2.", math_expression: "240 ÷ 2 = 120" },
            { verbal_explanation: "המצב הסופי הוא: לאלון יש 120 ולרועי יש 120.", math_expression: "אלון בסוף = 120" },
            { verbal_explanation: "אלון הגיע ל-120 שקלים רק אחרי שוויתר על 20. זה אומר שלפני כן, היו לו 20 שקלים יותר.", math_expression: "אלון בהתחלה = 120 + 20 = 140" }
        ],
        final_answer: "140 שקלים"
    },

    // --- שאלה 35 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "שאלות אתגר רב-שלביות",
        question: "נתונה קופסה (תיבה) שמידותיה הן 10 ס\"מ, 5 ס\"מ, ו-8 ס\"מ. כמה קוביות קטנות מעץ שאורך מקצוען הוא 2 ס\"מ, ניתן להכניס בשלמותן (מבלי לחתוך אותן) לתוך הקופסה?",
        options: ["40 קוביות", "50 קוביות", "100 קוביות", "80 קוביות"],
        correctAnswer: 0,
        hint: "זוהי שאלת מכשול נפוצה! אי אפשר פשוט לחלק נפח בנפח, כי הקוביות לא נמסות. יש לחשב כמה קוביות של 2 ס\"מ נכנסות בכל מימד בנפרד (אורך, רוחב וגובה), ואז להכפיל את התוצאות.",
        solution_steps: [
            { verbal_explanation: "נבדוק כמה קוביות נכנסות לאורך (10 ס\"מ). 10 לחלק ל-2 יוצא 5.", math_expression: "לאורך נכנסות: 5 קוביות" },
            { verbal_explanation: "נבדוק כמה נכנסות לרוחב (5 ס\"מ). 5 לחלק ל-2 שווה 2.5, אך לא ניתן להכניס חצי קובייה! לכן נכנסות רק 2 קוביות שלמות (וישאר מרווח ריק).", math_expression: "לרוחב נכנסות: 2 קוביות" },
            { verbal_explanation: "נבדוק כמה נכנסות לגובה (8 ס\"מ). 8 לחלק ל-2 יוצא 4.", math_expression: "לגובה נכנסות: 4 קוביות" },
            { verbal_explanation: "כעת נכפיל את הכמויות שנכנסו בכל מימד כדי למצוא את הסך הכל.", math_expression: "5 × 2 × 4 = 40" }
        ],
        final_answer: "40 קוביות"
    },

    // --- שאלה 36 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "שאלות אתגר רב-שלביות",
        question: "ממוצע הציונים של 4 תלמידים במבחן הוא 85. תלמיד חמישי הצטרף לכיתה, ולאחר שקלול הציון שלו, ממוצע הכיתה כולו ירד ל-82. מה היה הציון של התלמיד החמישי?",
        options: ["70", "75", "80", "82"],
        correctAnswer: 0,
        hint: "חשבו את 'סכום כל הציונים' של 4 התלמידים (4 כפול 85). לאחר מכן, חשבו את סכום הציונים של 5 התלמידים יחד (5 כפול 82). ההפרש ביניהם הוא הציון של התלמיד החדש.",
        solution_steps: [
            { verbal_explanation: "כדי לפתור בעיות ממוצע מורכבות, עוברים לעבוד עם 'סכומים'. נחשב את סכום הציונים המקורי של 4 התלמידים.", math_expression: "סכום ראשוני = 4 × 85 = 340" },
            { verbal_explanation: "נחשב את סכום הציונים החדש לאחר הצטרפות התלמיד החמישי. כעת יש 5 תלמידים בממוצע 82.", math_expression: "סכום חדש = 5 × 82 = 410" },
            { verbal_explanation: "הציון של התלמיד החמישי הוא בדיוק התוספת שהתווספה לסכום הכולל.", math_expression: "ציון חמישי = 410 - 340" },
            { verbal_explanation: "נבצע את החיסור.", math_expression: "70" }
        ],
        final_answer: "70"
    },

    // --- שאלה 37 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "שאלות אתגר רב-שלביות",
        question: "איזה מבין המספרים הבאים הוא גדול מ-0.6 אך קטן מ-2/3 ?",
        options: ["5/8", "1/2", "7/10", "3/4"],
        correctAnswer: 0,
        hint: "המירו הכל לאחוזים כדי שיהיה קל להשוות: 0.6 הוא 60%. השבר 2/3 הוא בערך 66.6%. אתם מחפשים מספר שנמצא בין 60% ל-66.6%. בדקו את 5/8 במחשבון או בחלוקה ארוכה.",
        solution_steps: [
            { verbal_explanation: "נמיר את גבולות הטווח שלנו למספרים עשרוניים או אחוזים לשם נוחות.", math_expression: "גבול תחתון: 0.60 (60%)" },
            { verbal_explanation: "נמיר את 2/3 לשבר עשרוני.", math_expression: "גבול עליון: 2 ÷ 3 ≈ 0.666 (66.6%)" },
            { verbal_explanation: "נבדוק את האפשרות 1/2. זה 50%. קטן מדי.", math_expression: "1/2 = 50%" },
            { verbal_explanation: "נבדוק את 7/10. זה 70%. גדול מדי.", math_expression: "7/10 = 70%" },
            { verbal_explanation: "נבדוק את 5/8. שמינית היא 12.5%, לכן 5 שמיניות הן 62.5%. מספר זה נופל בדיוק בין 60% ל-66.6%.", math_expression: "5/8 = 0.625 (62.5%)" }
        ],
        final_answer: "5/8"
    },

    // --- שאלה 38 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "שאלות אתגר רב-שלביות",
        question: "במשולש שווה שוקיים, ידוע כי כל אחת מזוויות הבסיס גדולה ב-15 מעלות מזווית הראש. מהו גודלה של זווית הראש?",
        options: ["50°", "40°", "65°", "55°"],
        correctAnswer: 0,
        hint: "סמנו את זווית הראש ב-x. לכן כל זווית בסיס תהיה x+15. זכרו שסכום 3 הזוויות במשולש הוא תמיד 180 מעלות. הרכיבו משוואה: x + (x+15) + (x+15) = 180.",
        solution_steps: [
            { verbal_explanation: "נסמן את זווית הראש (הקטנה יותר) במשתנה x.", math_expression: "זווית ראש = x" },
            { verbal_explanation: "שתי זוויות הבסיס שוות זו לזו, וכל אחת גדולה ב-15 מהראש.", math_expression: "זווית בסיס א' = x + 15,  זווית בסיס ב' = x + 15" },
            { verbal_explanation: "סכום הזוויות במשולש הוא 180 מעלות.", math_expression: "x + (x + 15) + (x + 15) = 180" },
            { verbal_explanation: "נכנס איברים: יש לנו 3 איקסים ופעמיים 15.", math_expression: "3x + 30 = 180" },
            { verbal_explanation: "נעביר את ה-30 ימינה ונחסר. 3x שווה ל-150.", math_expression: "3x = 150" },
            { verbal_explanation: "נחלק ב-3 למציאת זווית הראש.", math_expression: "x = 50" }
        ],
        final_answer: "50°"
    },

    // --- שאלה 39 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "שאלות אתגר רב-שלביות",
        question: "סכומם של שלושה מספרים עוקבים זוגיים (למשל 2, 4, 6) הוא 66. מהו המספר הגדול ביותר מבין השלושה?",
        options: ["24", "22", "20", "26"],
        correctAnswer: 0,
        hint: "מספרים עוקבים זוגיים קופצים ב-2. סמנו את המספר האמצעי ב-x. לכן הקטן הוא איקס פחות 2, והגדול הוא איקס פלוס 2. חברו אותם יחד והשוו ל-66.",
        solution_steps: [
            { verbal_explanation: "נייצג את שלושת המספרים סביב המספר האמצעי כדי להקל על החישוב.", math_expression: "מספר אמצעי = x" },
            { verbal_explanation: "מכיוון שהם זוגיים, ההפרש ביניהם הוא 2.", math_expression: "הקטן = x - 2,  הגדול = x + 2" },
            { verbal_explanation: "נחבר את שלושתם ונשווה ל-66. נשים לב שמינוס 2 ופלוס 2 מתבטלים בחיבור.", math_expression: "(x - 2) + x + (x + 2) = 66" },
            { verbal_explanation: "נשארנו עם 3 איקסים השווים ל-66.", math_expression: "3x = 66   =>   x = 22" },
            { verbal_explanation: "מצאנו שהמספר האמצעי הוא 22. המספר הגדול מביניהם הוא איקס פלוס 2.", math_expression: "22 + 2 = 24" }
        ],
        final_answer: "24"
    },

    // --- שאלה 40 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "שאלות אתגר רב-שלביות",
        question: "ברז א' ממלא בריכה ריקה בעצמו תוך 3 שעות בדיוק. ברז ב' איטי יותר, וממלא את אותה בריכה בעצמו תוך 6 שעות בדיוק. אם נפתח את שני הברזים יחד, תוך כמה שעות תתמלא הבריכה?",
        options: ["2 שעות", "4.5 שעות", "9 שעות", "1.5 שעות"],
        correctAnswer: 0,
        hint: "חישבו על קצב העבודה של כל ברז: איזה חלק מהבריכה הוא ממלא בשעה אחת? ברז א' ממלא 1/3 בריכה בשעה. ברז ב' ממלא 1/6 בשעה. חברו את הקצבים (ההספקים) כדי למצוא מה קורה בשעה אחת ביחד.",
        solution_steps: [
            { verbal_explanation: "נחשב את 'הספק העבודה' של ברז א' בשעה אחת.", math_expression: "ברז א' = 1/3 בריכה בשעה" },
            { verbal_explanation: "נחשב את ההספק של ברז ב' בשעה אחת.", math_expression: "ברז ב' = 1/6 בריכה בשעה" },
            { verbal_explanation: "כשהם פתוחים יחד, ההספקים שלהם מתחברים. נחבר שליש ושישית (מכנה משותף 6).", math_expression: "1/3 + 1/6 = 2/6 + 1/6 = 3/6" },
            { verbal_explanation: "שלוש שישיות שווה לחצי. כלומר, יחד הם ממלאים חצי בריכה בשעה אחת.", math_expression: "הספק משותף = 1/2 בשעה" },
            { verbal_explanation: "אם הם ממלאים חצי בריכה בשעה אחת, הרי שייקח להם שעתיים למלא בריכה שלמה (1).", math_expression: "2 שעות" }
        ],
        final_answer: "2 שעות"
    },

    // --- שאלה 41 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "שאלות אתגר רב-שלביות",
        question: `ריבוע שאורך צלעו 4 ס"מ צמוד למשולש שווה צלעות שאורך צלעו גם כן 4 ס"מ, כך שהם חולקים צלע משותפת מלאה.<br>מהו ההיקף של הצורה החדשה שנוצרה מחיבורם?<br><br>
        <svg viewBox="0 0 200 120" style="width:100%; max-width:200px; display:block; margin:10px auto;">
            <rect x="40" y="40" width="60" height="60" fill="#f8fafc" stroke="#3b82f6" stroke-width="2"/>
            <polygon points="100,40 100,100 152,70" fill="#e0f2fe" stroke="#3b82f6" stroke-width="2"/>
            <line x1="100" y1="40" x2="100" y2="100" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,4"/>
            <text x="65" y="115" font-size="12" font-weight="bold">4</text>
        </svg>`,
        options: ["20 ס\"מ", "24 ס\"מ", "16 ס\"מ", "28 ס\"מ"],
        correctAnswer: 0,
        hint: "היקף מורכב אך ורק מהצלעות החיצוניות שעוטפות את הצורה. הצלע המשותפת שבפנים (בצבע אדום מקווקו) אינה נספרת בהיקף! ספרו כמה צלעות חיצונות יש, והכפילו ב-4.",
        solution_steps: [
            { verbal_explanation: "היקף הוא המסגרת החיצונית של הצורה בלבד. קווים פנימיים נמחקים מן החישוב.", math_expression: "אין לחשב את הקו האמצעי" },
            { verbal_explanation: "נבדוק כמה צלעות שלמות מרכיבות את החלק החיצוני של הריבוע. לריבוע היו 4 צלעות, אחת 'נבלעה' בחיבור, לכן נותרו 3.", math_expression: "צלעות ריבוע חיצוניות = 3" },
            { verbal_explanation: "נבדוק כמה צלעות חשופות יש למשולש. היו לו 3, אחת נבלעה, נותרו 2.", math_expression: "צלעות משולש חיצוניות = 2" },
            { verbal_explanation: "סך הכל מעטפת הצורה בנויה מ-5 צלעות שאורך כל אחת מהן הוא 4 ס\"מ.", math_expression: "היקף = 5 × 4 = 20" }
        ],
        final_answer: "20 ס\"מ"
    },

    // --- שאלה 42 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "שאלות אתגר רב-שלביות",
        question: "חצי מ-רבע מ-120. כמה זה?",
        options: ["15", "30", "20", "10"],
        correctAnswer: 0,
        hint: "עבדו בסדר הפוך (משמאל לימין במקרה של משפט באנגלית, או מימין לשמאל בעברית). חשבו קודם כל כמה זה רבע מתוך 120 (120 חלקי 4). לאחר מכן חשבו חצי מהתוצאה שקיבלתם.",
        solution_steps: [
            { verbal_explanation: "נבצע את התרגיל בשלבים. תחילה נחשב את הרבע של הכמות הכוללת.", math_expression: "רבע מ-120 = 120 ÷ 4" },
            { verbal_explanation: "רבע מ-120 הוא 30.", math_expression: "30" },
            { verbal_explanation: "כעת, נחשב חצי מהתוצאה שקיבלנו (כפי שהתבקש במשפט 'חצי מ...').", math_expression: "חצי מ-30 = 30 ÷ 2" },
            { verbal_explanation: "התוצאה הסופית היא 15. (ניתן היה גם לחשב שחצי של רבע זה שמינית. שמינית מ-120 היא 15).", math_expression: "15" }
        ],
        final_answer: "15"
    },

    // --- שאלה 43 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "שאלות אתגר רב-שלביות",
        question: "היום גילו של אב הוא פי 4 מגיל בנו. בעוד 20 שנה, גיל האב יהיה פי 2 בלבד מגיל בנו (של אותו זמן). בן כמה הבן היום?",
        options: ["10 שנים", "8 שנים", "12 שנים", "15 שנים"],
        correctAnswer: 0,
        hint: "סמנו את גיל הבן היום כ-x. לכן האב היום הוא 4x. בעוד 20 שנה הבן יהיה x+20 והאב יהיה 4x+20. המשוואה: גיל האב בעתיד שווה לפעמיים גיל הבן בעתיד.",
        solution_steps: [
            { verbal_explanation: "נגדיר את הגילים בהווה.", math_expression: "בן = x,  אב = 4x" },
            { verbal_explanation: "נגדיר את הגילים בעתיד (נוסיף 20 לכל אחד).", math_expression: "בן בעתיד = x + 20,  אב בעתיד = 4x + 20" },
            { verbal_explanation: "נרכיב משוואה לפי הנתון שבעתיד האב יהיה גדול פי 2.", math_expression: "4x + 20 = 2 × (x + 20)" },
            { verbal_explanation: "נפתח סוגריים.", math_expression: "4x + 20 = 2x + 40" },
            { verbal_explanation: "נעביר את ה-2x שמאלה ואת ה-20 ימינה.", math_expression: "2x = 20" },
            { verbal_explanation: "נחלק ב-2. מצאנו את גיל הבן בהווה.", math_expression: "x = 10" }
        ],
        final_answer: "10 שנים"
    },

    // --- שאלה 44 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "שאלות אתגר רב-שלביות",
        question: "במגירה מעורבבים 5 זוגות של גרביים שחורים ו-3 זוגות של גרביים לבנים (סך הכל 16 גרביים בודדים נפרדים). בחושך מוחלט, כמה גרביים בודדים יש להוציא לכל הפחות כדי להיות בטוחים ב-100% שיש בידכם זוג גרביים אחד באותו הצבע?",
        options: ["3 גרביים", "2 גרביים", "4 גרביים", "8 גרביים"],
        correctAnswer: 0,
        hint: "חישבו על התסריט הכי גרוע (חוק שובך היונים). גרב ראשון שחור. גרב שני... לבן (אין זוג). איזה צבע יהיה הגרב השלישי? לא משנה איזה, הוא בטוח ישלים זוג לאחד מהם!",
        solution_steps: [
            { verbal_explanation: "במגירה יש רק שני סוגי צבעים אפשריים: שחור ולבן.", math_expression: "צבעים: שחור, לבן" },
            { verbal_explanation: "נניח שהוצאנו גרב אחד. הוא בצבע מסוים.", math_expression: "הוצאה 1: שחור" },
            { verbal_explanation: "נוציא את הגרב השני. המקרה הכי 'גרוע' הוא שהוא בצבע השני.", math_expression: "הוצאה 2: לבן (אין זוג עדיין)" },
            { verbal_explanation: "נוציא גרב שלישי. מכיוון שיש רק שני צבעים בנמצא, הגרב השלישי חייב להיות או שחור או לבן. בכל בחירה, הוא ישלים זוג לאחד מהגרביים שכבר ביד שלנו.", math_expression: "הוצאה 3: שחור או לבן (נוצר זוג!)" },
            { verbal_explanation: "לכן 3 גרביים מספיקים כדי להבטיח זוג תואם.", math_expression: "3" }
        ],
        final_answer: "3 גרביים"
    },

    // --- שאלה 45 ---
    {
        subject: "מתמטיקה",
        topic: "תרגול ומבחנים מסכמים",
        subTopic: "שאלות אתגר רב-שלביות",
        question: "נתון התרגיל הבא ללא סוגריים: 5 + 3 × 4 - 2 .<br>היכן יש למקם סוגריים אחד (זוג יחיד) כך שהתוצאה של התרגיל תהיה שווה בדיוק ל-30?",
        options: ["(5 + 3) × 4 - 2", "5 + 3 × (4 - 2)", "5 + (3 × 4) - 2", "(5 + 3) × (4 - 2)"],
        correctAnswer: 0,
        hint: "נבדוק את האפשרות הראשונה: חיבור בסוגריים (5+3) נותן 8. 8 כפול 4 נותן 32. 32 פחות 2 שווה 30. בינגו!",
        solution_steps: [
            { verbal_explanation: "נבחן את האופציות השונות ונפתור לפי סדר פעולות חשבון.", math_expression: "בדיקת אפשרויות" },
            { verbal_explanation: "נבדוק את האפשרות השנייה: 5 + 3 × (4 - 2) שווה ל- 5 + 3 × 2, שזה 5+6=11. לא נכון.", math_expression: "אופציה 2 = 11" },
            { verbal_explanation: "נבדוק את האפשרות השלישית: זהה למצב ללא סוגריים כלל. 5 + 12 - 2 = 15. לא נכון.", math_expression: "אופציה 3 = 15" },
            { verbal_explanation: "נבדוק את האפשרות הראשונה: נחשב קודם את הסוגריים (5+3) שזה 8. נכפיל ב-4 ונקבל 32. נחסר 2 ונקבל בדיוק 30.", math_expression: "(5+3)×4-2 = 8×4-2 = 32-2 = 30" }
        ],
        final_answer: "(5 + 3) × 4 - 2"
    }
];