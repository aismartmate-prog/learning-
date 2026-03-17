const questionsDB = [
    // =====================================================================
    // תת-נושא 1: משולשים: משפטי חפיפה, דמיון ופרופורציה (משפט תאלס והרחבותיו) (12 שאלות)
    // =====================================================================
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "משולשים: משפטי חפיפה, דמיון ופרופורציה (משפט תאלס והרחבותיו)",
        question: "במשולש ABC מועבר קטע DE המקביל לצלע BC (הנקודה D על AB והנקודה E על AC). נתון: AD = 4 ס\"מ, DB = 6 ס\"מ, AE = 8 ס\"מ. לפי משפט תאלס, מהו אורך הקטע EC?",
        options: [
            "12 ס\"מ",
            "10 ס\"מ",
            "16 ס\"מ",
            "8 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "לפי משפט תאלס הבסיסי, ישר המקביל לצלע במשולש חותך את שתי הצלעות האחרות בקטעים פרופורציונליים.", math_expression: "AD / DB = AE / EC" },
            { verbal_explanation: "נציב את הנתונים הידועים לתוך הפרופורציה.", math_expression: "4 / 6 = 8 / x" },
            { verbal_explanation: "נבצע כפל בהצלבה כדי לחלץ את הנעלם.", math_expression: "4 &times; x = 6 &times; 8" },
            { verbal_explanation: "נחשב את המכפלה באגף ימין.", math_expression: "4 &times; x = 48" },
            { verbal_explanation: "נחלק בארבע כדי למצוא את אורך הקטע המבוקש.", math_expression: "x = 12" }
        ],
        final_answer: "12"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "משולשים: משפטי חפיפה, דמיון ופרופורציה (משפט תאלס והרחבותיו)",
        question: "נתונים שני ישרים מקבילים AB ו-CD. שני ישרים חותכים אותם ונפגשים בנקודה O שביניהם (נוצרת צורת 'שעון חול'). נתון: AO = 3 ס\"מ, OC = 9 ס\"מ, ואורך AB הוא 5 ס\"מ. לפי הרחבת משפט תאלס (או דמיון משולשים), מהו אורך הקטע CD?",
        options: [
            "15 ס\"מ",
            "12 ס\"מ",
            "18 ס\"מ",
            "20 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "צורת 'שעון חול' בין ישרים מקבילים יוצרת משולשים דומים, והיחס בין חלקי החותך שווה ליחס בין הבסיסים המקבילים.", math_expression: "AO / OC = AB / CD" },
            { verbal_explanation: "נציב את הנתונים למשוואה.", math_expression: "3 / 9 = 5 / x" },
            { verbal_explanation: "נצמצם את השבר באגף שמאל (נחלק מונה ומכנה בשלוש).", math_expression: "1 / 3 = 5 / x" },
            { verbal_explanation: "נבצע כפל בהצלבה.", math_expression: "1 &times; x = 3 &times; 5" },
            { verbal_explanation: "נחשב את התוצאה הסופית.", math_expression: "x = 15" }
        ],
        final_answer: "15"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "משולשים: משפטי חפיפה, דמיון ופרופורציה (משפט תאלס והרחבותיו)",
        question: "שני משולשים דומים זה לזה. יחס הדמיון הקווי (יחס הצלעות) בין המשולש הקטן למשולש הגדול הוא 1:4. אם שטח המשולש הקטן הוא 5 סמ\"ר, מהו שטח המשולש הגדול?",
        options: [
            "80 סמ\"ר",
            "20 סמ\"ר",
            "40 סמ\"ר",
            "100 סמ\"ר"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "במשולשים דומים, יחס השטחים שווה לריבוע יחס הדמיון הקווי.", math_expression: "S_1 / S_2 = k<sup>2</sup>" },
            { verbal_explanation: "יחס הדמיון הנתון הוא רבע.", math_expression: "k = 1 / 4" },
            { verbal_explanation: "נעלה את יחס הדמיון בריבוע כדי למצוא את יחס השטחים.", math_expression: "k<sup>2</sup> = (1 / 4)<sup>2</sup> = 1 / 16" },
            { verbal_explanation: "נציב את שטח המשולש הקטן אל תוך משוואת יחס השטחים.", math_expression: "5 / S_2 = 1 / 16" },
            { verbal_explanation: "נכפיל בהצלבה כדי למצוא את שטח המשולש הגדול.", math_expression: "S_2 = 5 &times; 16 = 80" }
        ],
        final_answer: "80"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "משולשים: משפטי חפיפה, דמיון ופרופורציה (משפט תאלס והרחבותיו)",
        question: "במשולש ABC, הקטע AD חוצה את זווית A (הנקודה D נמצאת על BC). נתון: AB = 10 ס\"מ, AC = 15 ס\"מ, ו-BD = 4 ס\"מ. על פי משפט חוצה הזווית, מהו אורך הקטע DC?",
        options: [
            "6 ס\"מ",
            "8 ס\"מ",
            "5 ס\"מ",
            "10 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "לפי משפט חוצה זווית פנימית, היחס בין קטעי הצלע שממול שווה ליחס הצלעות הכולאות את הזווית.", math_expression: "AB / AC = BD / DC" },
            { verbal_explanation: "נציב את הנתונים הידועים.", math_expression: "10 / 15 = 4 / x" },
            { verbal_explanation: "נצמצם את השבר השמאלי על ידי חלוקה בחמש.", math_expression: "2 / 3 = 4 / x" },
            { verbal_explanation: "נבצע כפל בהצלבה.", math_expression: "2 &times; x = 3 &times; 4" },
            { verbal_explanation: "נחשב ונחלק בשתיים.", math_expression: "2x = 12 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "משולשים: משפטי חפיפה, דמיון ופרופורציה (משפט תאלס והרחבותיו)",
        question: "במשולש ישר זווית ABC (הזווית הקודקודית היא 90&deg;), מורידים גובה ליתר. נתון כי היטל הניצב הראשון על היתר הוא 4 ס\"מ, והיטל הניצב השני על היתר הוא 9 ס\"מ. מהו אורך הגובה?",
        options: [
            "6 ס\"מ",
            "13 ס\"מ",
            "36 ס\"מ",
            "5 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "במשולש ישר זווית, הגובה ליתר בריבוע שווה למכפלת היטלי הניצבים על היתר.", math_expression: "h<sup>2</sup> = x &times; y" },
            { verbal_explanation: "נציב את אורכי ההיטלים הידועים.", math_expression: "h<sup>2</sup> = 4 &times; 9" },
            { verbal_explanation: "נחשב את המכפלה.", math_expression: "h<sup>2</sup> = 36" },
            { verbal_explanation: "נוציא שורש ריבועי כדי למצוא את האורך של הגובה.", math_expression: "h = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "משולשים: משפטי חפיפה, דמיון ופרופורציה (משפט תאלס והרחבותיו)",
        question: "שני משולשים דומים. היקף המשולש הראשון הוא 20 ס\"מ והיקף המשולש השני הוא 60 ס\"מ. אם אורך צלע במשולש הקטן הוא 5 ס\"מ, מהו אורך הצלע המתאימה במשולש הגדול?",
        options: [
            "15 ס\"מ",
            "20 ס\"מ",
            "10 ס\"מ",
            "30 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "במשולשים דומים, יחס ההיקפים שווה ליחס הדמיון הקווי.", math_expression: "k = P_1 / P_2 = 20 / 60" },
            { verbal_explanation: "נצמצם את השבר כדי למצוא את יחס הדמיון המדויק.", math_expression: "k = 1 / 3" },
            { verbal_explanation: "יחס הדמיון הקווי חל על כל זוג צלעות מתאימות.", math_expression: "a / b = 1 / 3" },
            { verbal_explanation: "נציב את אורך הצלע הידועה.", math_expression: "5 / b = 1 / 3" },
            { verbal_explanation: "נכפיל בהצלבה כדי למצוא את אורך הצלע הגדולה.", math_expression: "b = 5 &times; 3 = 15" }
        ],
        final_answer: "15"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "משולשים: משפטי חפיפה, דמיון ופרופורציה (משפט תאלס והרחבותיו)",
        question: "במשולש ABC, נקודה D על AB ונקודה E על AC כך ש-DE מקביל לבסיס BC. לפי משפט תאלס המורחב, נתון: AD = 3, AB (הצלע המלאה) = 9, ואורך הקטע המקביל DE = 4. מהו אורך הבסיס BC?",
        options: [
            "12",
            "16",
            "10",
            "27"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "משפט תאלס המורחב קובע שהיחס בין קטע צדדי עליון לצלע השלמה, שווה ליחס בין שני הישרים המקבילים.", math_expression: "AD / AB = DE / BC" },
            { verbal_explanation: "נציב את הנתונים הידועים למשוואה.", math_expression: "3 / 9 = 4 / x" },
            { verbal_explanation: "נצמצם את השבר משמאל לשליש.", math_expression: "1 / 3 = 4 / x" },
            { verbal_explanation: "נבצע כפל בהצלבה.", math_expression: "1 &times; x = 4 &times; 3" },
            { verbal_explanation: "נחשב את אורך הבסיס המלא.", math_expression: "x = 12" }
        ],
        final_answer: "12"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "משולשים: משפטי חפיפה, דמיון ופרופורציה (משפט תאלס והרחבותיו)",
        question: "נתונים שני משולשים חופפים. במשולש הראשון, שתי זוויות שוות ל-40&deg; ו-60&deg;. מהי הזווית השלישית במשולש השני?",
        options: [
            "80&deg;",
            "100&deg;",
            "60&deg;",
            "40&deg;"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "סכום הזוויות בכל משולש הוא תמיד 180 מעלות. נחשב את הזווית השלישית במשולש הראשון.", math_expression: "&alpha; = 180 - (40 + 60)" },
            { verbal_explanation: "נחבר את הזוויות שבסוגריים.", math_expression: "&alpha; = 180 - 100" },
            { verbal_explanation: "נחשב את ההפרש.", math_expression: "&alpha; = 80" },
            { verbal_explanation: "במשולשים חופפים, כל הזוויות המתאימות שוות. לכן הזווית השלישית במשולש השני היא זהה.", math_expression: "&beta; = 80" }
        ],
        final_answer: "80"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "משולשים: משפטי חפיפה, דמיון ופרופורציה (משפט תאלס והרחבותיו)",
        question: "במשולש ישר זווית, הורידו גובה ליתר. אורך היתר כולו הוא 25 ס\"מ, וההיטל של הניצב על היתר הוא 9 ס\"מ. על פי המשפט שניצב בריבוע שווה למכפלת היתר כולו בהיטל של אותו הניצב, מהו אורך הניצב?",
        options: [
            "15 ס\"מ",
            "20 ס\"מ",
            "12 ס\"מ",
            "16 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נשתמש במשפט ההיטלים במשולש ישר זווית: ניצב בריבוע שווה למכפלת היתר בהיטל של אותו ניצב.", math_expression: "a<sup>2</sup> = c &times; x" },
            { verbal_explanation: "נציב את הנתונים הידועים.", math_expression: "a<sup>2</sup> = 25 &times; 9" },
            { verbal_explanation: "נחשב את המכפלה.", math_expression: "a<sup>2</sup> = 225" },
            { verbal_explanation: "נוציא שורש ריבועי כדי למצוא את אורך הניצב.", math_expression: "a = 15" }
        ],
        final_answer: "15"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "משולשים: משפטי חפיפה, דמיון ופרופורציה (משפט תאלס והרחבותיו)",
        question: "במשולש שווה שוקיים, זווית הראש שווה ל-50&deg;. מה גודלה של כל אחת מזוויות הבסיס?",
        options: [
            "65&deg;",
            "50&deg;",
            "130&deg;",
            "60&deg;"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "סכום כל הזוויות במשולש הוא 180 מעלות. נחסר את זווית הראש מהסכום הכולל כדי למצוא את סכום שתי זוויות הבסיס.", math_expression: "x + y = 180 - 50" },
            { verbal_explanation: "במשולש שווה שוקיים, שתי זוויות הבסיס שוות זו לזו.", math_expression: "x + x = 130" },
            { verbal_explanation: "נחלק את הסכום בשתיים.", math_expression: "2x = 130 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 65" }
        ],
        final_answer: "65"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "משולשים: משפטי חפיפה, דמיון ופרופורציה (משפט תאלס והרחבותיו)",
        question: "בשני משולשים דומים, ידוע כי יחס השטחים הוא 1:25. אם היקף המשולש הקטן הוא 12 ס\"מ, מהו היקף המשולש הגדול?",
        options: [
            "60 ס\"מ",
            "300 ס\"מ",
            "120 ס\"מ",
            "24 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "אנו יודעים כי יחס השטחים שווה לריבוע יחס הדמיון (היחס הקווי).", math_expression: "k<sup>2</sup> = 1 / 25" },
            { verbal_explanation: "נוציא שורש כדי למצוא את יחס הדמיון הקווי.", math_expression: "k = 1 / 5" },
            { verbal_explanation: "יחס הדמיון תקף גם ליחס שבין היקפי המשולשים.", math_expression: "P_1 / P_2 = 1 / 5" },
            { verbal_explanation: "נציב את היקף המשולש הקטן במשוואה.", math_expression: "12 / P_2 = 1 / 5" },
            { verbal_explanation: "נכפיל בהצלבה כדי למצוא את היקף המשולש הגדול.", math_expression: "P_2 = 12 &times; 5 = 60" }
        ],
        final_answer: "60"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "משולשים: משפטי חפיפה, דמיון ופרופורציה (משפט תאלס והרחבותיו)",
        question: "שני קטעים נחתכים בנקודה ויוצרים שני משולשים צמודים קודקוד. נתון: צלע אחת 4 וסמוכה 8 במשולש א'. במשולש ב': צלע מתאימה 5 וסמוכה 10. הזווית ביניהן קודקודית ולכן שווה. מהו יחס הדמיון בין המשולש הקטן לגדול?",
        options: [
            "1:2",
            "1:4",
            "4:5",
            "הם אינם דומים"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נבדוק את יחס הצלעות הכולאות את הזווית הקודקודית במשולש הראשון ביחס למשולש השני.", math_expression: "a / b = 4 / 8 = 1 / 2" },
            { verbal_explanation: "נבדוק את יחס הזוג השני של הצלעות.", math_expression: "c / d = 5 / 10 = 1 / 2" },
            { verbal_explanation: "מכיוון ששני יחסי הצלעות שווים, והזווית הכלואה ביניהן שווה (קודקודית), המשולשים דומים, ויחס הדמיון הוא החלוקה שקיבלנו.", math_expression: "k = 1 / 2" }
        ],
        final_answer: "1:2"
    },

    // =====================================================================
    // תת-נושא 2: משפחת המרובעים: מקבילית, מלבן, מעוין, ריבוע, טרפז, דלתון (12 שאלות)
    // =====================================================================
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "משפחת המרובעים: מקבילית, מלבן, מעוין, ריבוע, טרפז, דלתון",
        question: "במקבילית, ידוע כי זווית אחת שווה ל-75&deg;. מהו גודלה של הזווית הסמוכה לה?",
        options: [
            "105&deg;",
            "75&deg;",
            "15&deg;",
            "180&deg;"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "במקבילית, הצלעות הנגדיות מקבילות זו לזו. לכן, סכום כל שתי זוויות סמוכות הוא 180 מעלות.", math_expression: "x + y = 180" },
            { verbal_explanation: "נציב את הזווית הידועה למשוואה.", math_expression: "75 + y = 180" },
            { verbal_explanation: "נחסר 75 משני אגפי המשוואה.", math_expression: "y = 180 - 75" },
            { verbal_explanation: "נחשב את התוצאה הסופית.", math_expression: "y = 105" }
        ],
        final_answer: "105"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "משפחת המרובעים: מקבילית, מלבן, מעוין, ריבוע, טרפז, דלתון",
        question: "במלבן, אלכסון אחד מחולק לשני חצאים שווים על ידי נקודת המפגש. אם אורך חצי האלכסון הוא 8 ס\"מ, מהו אורך האלכסון השני כולו?",
        options: [
            "16 ס\"מ",
            "8 ס\"מ",
            "32 ס\"מ",
            "4 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "במלבן, האלכסונים חוצים זה את זה. לכן אורך אלכסון שלם שווה לפעמיים החצי שלו.", math_expression: "d_1 = 2 &times; 8 = 16" },
            { verbal_explanation: "בנוסף, תכונה של מלבן היא שהאלכסונים שווים זה לזה באורכם.", math_expression: "d_2 = d_1" },
            { verbal_explanation: "מכאן שאורך האלכסון השני שווה בדיוק לאורך האלכסון שחושב.", math_expression: "d_2 = 16" }
        ],
        final_answer: "16"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "משפחת המרובעים: מקבילית, מלבן, מעוין, ריבוע, טרפז, דלתון",
        question: "במעוין, אורכי האלכסונים הם 10 ס\"מ ו-24 ס\"מ. מהו אורך צלע המעוין?",
        options: [
            "13 ס\"מ",
            "17 ס\"מ",
            "12 ס\"מ",
            "26 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "במעוין, האלכסונים חוצים זה את זה ומאונכים זה לזה. הם מחלקים את המעוין לארבעה משולשים ישרי זווית. נחשב את הניצבים של משולש כזה.", math_expression: "x = 10 / 2 = 5 &nbsp;,&nbsp; y = 24 / 2 = 12" },
            { verbal_explanation: "נשתמש במשפט פיתגורס כדי למצוא את היתר, שהוא צלע המעוין.", math_expression: "a<sup>2</sup> = x<sup>2</sup> + y<sup>2</sup>" },
            { verbal_explanation: "נציב את ערכי הניצבים.", math_expression: "a<sup>2</sup> = 5<sup>2</sup> + 12<sup>2</sup>" },
            { verbal_explanation: "נעלה בריבוע ונחבר.", math_expression: "a<sup>2</sup> = 25 + 144 = 169" },
            { verbal_explanation: "נוציא שורש ריבועי כדי למצוא את אורך הצלע.", math_expression: "a = 13" }
        ],
        final_answer: "13"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "משפחת המרובעים: מקבילית, מלבן, מעוין, ריבוע, טרפז, דלתון",
        question: "מהו שטחו של מעוין שאורכי אלכסוניו הם 10 ס\"מ ו-24 ס\"מ?",
        options: [
            "120 סמ\"ר",
            "240 סמ\"ר",
            "60 סמ\"ר",
            "13 סמ\"ר"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "הנוסחה לחישוב שטח מעוין היא מחצית ממכפלת שני האלכסונים.", math_expression: "S = (d_1 &times; d_2) / 2" },
            { verbal_explanation: "נציב את אורכי האלכסונים בנוסחה.", math_expression: "S = (10 &times; 24) / 2" },
            { verbal_explanation: "נבצע את הכפל במונה.", math_expression: "S = 240 / 2" },
            { verbal_explanation: "נחלק בשתיים לקבלת השטח הסופי.", math_expression: "S = 120" }
        ],
        final_answer: "120"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "משפחת המרובעים: מקבילית, מלבן, מעוין, ריבוע, טרפז, דלתון",
        question: "בריבוע, אורך הצלע הוא 5 ס\"מ. מהו אורך אלכסון הריבוע?",
        options: [
            "5&radic;2 ס\"מ",
            "10 ס\"מ",
            "25 ס\"מ",
            "5&radic;3 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "האלכסון מחלק את הריבוע למשולש ישר זווית ושווה שוקיים. נשתמש במשפט פיתגורס.", math_expression: "d<sup>2</sup> = a<sup>2</sup> + a<sup>2</sup>" },
            { verbal_explanation: "נציב את אורך הצלע במשוואה.", math_expression: "d<sup>2</sup> = 5<sup>2</sup> + 5<sup>2</sup>" },
            { verbal_explanation: "נחשב את הריבועים.", math_expression: "d<sup>2</sup> = 25 + 25 = 50" },
            { verbal_explanation: "נוציא שורש. נפשט אותו על ידי הוצאת גורם שהוא ריבוע שלם החוצה מהשורש.", math_expression: "d = &radic;50 = &radic;(25 &times; 2) = 5&radic;2" }
        ],
        final_answer: "5&radic;2"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "משפחת המרובעים: מקבילית, מלבן, מעוין, ריבוע, טרפז, דלתון",
        question: "בטרפז שווה שוקיים, ידוע כי זווית בסיס אחת היא 65&deg;. מה גודלה של הזווית הצמודה לה על אותה שוק (הזווית שעל הבסיס המקביל)?",
        options: [
            "115&deg;",
            "65&deg;",
            "180&deg;",
            "25&deg;"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "בטרפז, שני הבסיסים מקבילים. לכן, שתי הזוויות הסמוכות לאותה שוק הן זוויות חד-צדדיות, וסכומן הוא תמיד 180 מעלות.", math_expression: "x + y = 180" },
            { verbal_explanation: "נציב את הזווית הידועה.", math_expression: "65 + y = 180" },
            { verbal_explanation: "נחסר 65 משני האגפים.", math_expression: "y = 180 - 65" },
            { verbal_explanation: "נחשב את התוצאה.", math_expression: "y = 115" }
        ],
        final_answer: "115"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "משפחת המרובעים: מקבילית, מלבן, מעוין, ריבוע, טרפז, דלתון",
        question: "בדלתון, אורך האלכסון הראשי הוא 15 ס\"מ, ואורך האלכסון המשני הוא 8 ס\"מ. מהו שטח הדלתון?",
        options: [
            "60 סמ\"ר",
            "120 סמ\"ר",
            "30 סמ\"ר",
            "46 סמ\"ר"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נוסחת שטח דלתון היא מחצית ממכפלת שני האלכסונים (כיוון שהם מאונכים זה לזה).", math_expression: "S = (d_1 &times; d_2) / 2" },
            { verbal_explanation: "נציב את אורכי האלכסונים הנתונים.", math_expression: "S = (15 &times; 8) / 2" },
            { verbal_explanation: "נבצע את הכפל במונה.", math_expression: "S = 120 / 2" },
            { verbal_explanation: "נחלק בשתיים לקבלת השטח.", math_expression: "S = 60" }
        ],
        final_answer: "60"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "משפחת המרובעים: מקבילית, מלבן, מעוין, ריבוע, טרפז, דלתון",
        question: "איזו מהתכונות הבאות מתקיימת תמיד באלכסונים של דלתון?",
        options: [
            "הם מאונכים זה לזה",
            "הם חוצים זה את זה",
            "הם שווים באורכם",
            "הם מקבילים זה לזה"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "בדלתון, האלכסון הראשי הוא ציר סימטריה ומהווה אנך אמצעי לאלכסון המשני.", math_expression: "d_1 &perp; d_2" },
            { verbal_explanation: "המשמעות הגיאומטרית של סימון זה היא שהאלכסונים תמיד מאונכים ויוצרים זווית ישרה.", math_expression: "&ang; = 90&deg;" }
        ],
        final_answer: "הם מאונכים זה לזה"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "משפחת המרובעים: מקבילית, מלבן, מעוין, ריבוע, טרפז, דלתון",
        question: "במקבילית נתון כי צלע אחת ארוכה ב-5 ס\"מ מהצלע הסמוכה לה. היקף המקבילית הוא 50 ס\"מ. מהו אורך הצלע הקצרה?",
        options: [
            "10 ס\"מ",
            "15 ס\"מ",
            "20 ס\"מ",
            "25 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את אורך הצלע הקצרה כנעלם, ואת הצלע הארוכה כנעלם ועוד חמש.", math_expression: "a = x &nbsp;,&nbsp; b = x + 5" },
            { verbal_explanation: "היקף מקבילית שווה לפעמיים סכום צלעות סמוכות.", math_expression: "P = 2(a + b)" },
            { verbal_explanation: "נציב את הנתונים למשוואה.", math_expression: "50 = 2(x + x + 5)" },
            { verbal_explanation: "נחלק את המשוואה בשתיים ונכנס איברים.", math_expression: "25 = 2x + 5" },
            { verbal_explanation: "נעביר אגף.", math_expression: "20 = 2x" },
            { verbal_explanation: "נחלק בשתיים למציאת אורך הצלע הקצרה.", math_expression: "x = 10" }
        ],
        final_answer: "10"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "משפחת המרובעים: מקבילית, מלבן, מעוין, ריבוע, טרפז, דלתון",
        question: "שטחו של מלבן הוא 48 סמ\"ר ואורך אחת מצלעותיו הוא 6 ס\"מ. מהו היקף המלבן?",
        options: [
            "28 ס\"מ",
            "14 ס\"מ",
            "48 ס\"מ",
            "36 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נוסחת שטח מלבן היא אורך כפול רוחב.", math_expression: "S = a &times; b" },
            { verbal_explanation: "נציב את הנתונים הידועים כדי למצוא את הצלע השנייה.", math_expression: "48 = 6 &times; b" },
            { verbal_explanation: "נחלק בשש ונקבל את אורך הצלע השנייה.", math_expression: "b = 8" },
            { verbal_explanation: "היקף מלבן מחושב כפעמיים סכום הצלעות הסמוכות.", math_expression: "P = 2(a + b)" },
            { verbal_explanation: "נציב את אורכי הצלעות לחישוב ההיקף.", math_expression: "P = 2(6 + 8) = 2 &times; 14 = 28" }
        ],
        final_answer: "28"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "משפחת המרובעים: מקבילית, מלבן, מעוין, ריבוע, טרפז, דלתון",
        question: "במעוין, האלכסון חוצה את זווית הקודקוד. נתון כי הזווית שיוצר האלכסון עם צלע המעוין היא 30&deg;. מה גודלה של הזווית הקהה (הגדולה) במעוין זה?",
        options: [
            "120&deg;",
            "150&deg;",
            "60&deg;",
            "90&deg;"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "במעוין, אלכסונים הם גם חוצי זוויות. לכן הזווית השלמה של הקודקוד שווה לפעמיים הזווית שיוצר האלכסון.", math_expression: "x = 2 &times; 30 = 60" },
            { verbal_explanation: "מעוין הוא מקבילית, ולכן סכום שתי זוויות סמוכות משלים תמיד למאה שמונים מעלות.", math_expression: "x + y = 180" },
            { verbal_explanation: "נציב את הזווית שמצאנו כדי לחשב את הזווית הקהה.", math_expression: "60 + y = 180" },
            { verbal_explanation: "נחסר 60 ונמצא את התשובה.", math_expression: "y = 120" }
        ],
        final_answer: "120"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "משפחת המרובעים: מקבילית, מלבן, מעוין, ריבוע, טרפז, דלתון",
        question: "בטרפז נתון כי הבסיס הקטן שווה ל-10 ס\"מ, הבסיס הגדול שווה ל-16 ס\"מ, וגובה הטרפז הוא 5 ס\"מ. מהו שטחו של הטרפז?",
        options: [
            "65 סמ\"ר",
            "130 סמ\"ר",
            "50 סמ\"ר",
            "80 סמ\"ר"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נוסחת שטח טרפז היא סכום הבסיסים כפול הגובה, לחלק בשתיים.", math_expression: "S = ((a + b) &times; h) / 2" },
            { verbal_explanation: "נציב את הנתונים לנוסחה.", math_expression: "S = ((10 + 16) &times; 5) / 2" },
            { verbal_explanation: "נחבר את הערכים בתוך הסוגריים.", math_expression: "S = (26 &times; 5) / 2" },
            { verbal_explanation: "נבצע את פעולת הכפל במונה.", math_expression: "S = 130 / 2" },
            { verbal_explanation: "נחלק בשתיים לקבלת השטח הסופי.", math_expression: "S = 65" }
        ],
        final_answer: "65"
    },

    // =====================================================================
    // תת-נושא 3: קטע אמצעים במשולש ובטרפז (12 שאלות)
    // =====================================================================
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "קטע אמצעים במשולש ובטרפז",
        question: "במשולש שבו אורך הבסיס הוא 14 ס\"מ, מעבירים קטע אמצעים המקביל לבסיס זה. מהו אורך קטע האמצעים?",
        options: [
            "7 ס\"מ",
            "14 ס\"מ",
            "28 ס\"מ",
            "3.5 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "על פי משפט גיאומטרי יסודי, קטע אמצעים במשולש שווה למחצית הבסיס אליו הוא מקביל.", math_expression: "x = y / 2" },
            { verbal_explanation: "נציב את אורך הבסיס במשוואה.", math_expression: "x = 14 / 2" },
            { verbal_explanation: "נחשב את התוצאה.", math_expression: "x = 7" }
        ],
        final_answer: "7"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "קטע אמצעים במשולש ובטרפז",
        question: "בטרפז נתונים אורכי שני הבסיסים: הבסיס הקטן הוא 10 ס\"מ והבסיס הגדול הוא 20 ס\"מ. מהו אורך קטע האמצעים בטרפז?",
        options: [
            "15 ס\"מ",
            "30 ס\"מ",
            "10 ס\"מ",
            "5 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "קטע אמצעים בטרפז שווה לממוצע החשבוני של שני הבסיסים המקבילים שלו.", math_expression: "M = (a + b) / 2" },
            { verbal_explanation: "נציב את אורכי הבסיסים הידועים.", math_expression: "M = (10 + 20) / 2" },
            { verbal_explanation: "נחבר את הערכים במונה.", math_expression: "M = 30 / 2" },
            { verbal_explanation: "נחלק ונקבל את התוצאה הסופית.", math_expression: "M = 15" }
        ],
        final_answer: "15"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "קטע אמצעים במשולש ובטרפז",
        question: "במשולש הגדול מעבירים קטע אמצעים כך שנוצר משולש קטן יותר בחלקו העליון. אם היקף המשולש הגדול הוא 24 ס\"מ, מהו היקפו של המשולש הקטן?",
        options: [
            "12 ס\"מ",
            "6 ס\"מ",
            "24 ס\"מ",
            "8 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "קטע אמצעים חוצה את שתי שוקי המשולש, ושווה למחצית הבסיס. משמעות הדבר היא שכל אחת מצלעות המשולש הקטן שווה למחצית מהצלע המתאימה לה במשולש הגדול.", math_expression: "a_1 = a_2 / 2 , b_1 = b_2 / 2 , c_1 = c_2 / 2" },
            { verbal_explanation: "מכאן נובע כי ההיקף הכולל של המשולש הקטן הוא בדיוק מחצית מהיקף המשולש הגדול.", math_expression: "P_1 = P_2 / 2" },
            { verbal_explanation: "נציב את הנתון הידוע.", math_expression: "P_1 = 24 / 2" },
            { verbal_explanation: "נחשב את התוצאה.", math_expression: "P_1 = 12" }
        ],
        final_answer: "12"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "קטע אמצעים במשולש ובטרפז",
        question: "אורכו של קטע האמצעים בטרפז הוא 15 ס\"מ. ידוע שאורך הבסיס הקטן הוא 10 ס\"מ. מהו אורך הבסיס הגדול בטרפז?",
        options: [
            "20 ס\"מ",
            "25 ס\"מ",
            "5 ס\"מ",
            "30 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נוסחת קטע האמצעים בטרפז מתבססת על ממוצע הבסיסים.", math_expression: "M = (a + b) / 2" },
            { verbal_explanation: "נציב את קטע האמצעים ואת הבסיס הקטן הנתון למשוואה.", math_expression: "15 = (10 + b) / 2" },
            { verbal_explanation: "נכפיל את המשוואה בשתיים כדי לבטל את המכנה.", math_expression: "30 = 10 + b" },
            { verbal_explanation: "נחסר עשר משני האגפים כדי לבודד את הבסיס הגדול.", math_expression: "b = 30 - 10 = 20" }
        ],
        final_answer: "20"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "קטע אמצעים במשולש ובטרפז",
        question: "במשולש מסוים, השטח הכולל הוא 40 סמ\"ר. העבירו קטע אמצעים המקביל לבסיס כך שנוצר משולש קטן. מהו שטחו של המשולש הקטן שנוצר?",
        options: [
            "10 סמ\"ר",
            "20 סמ\"ר",
            "5 סמ\"ר",
            "30 סמ\"ר"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "המשולש הקטן שנוצר על ידי קטע אמצעים דומה למשולש הגדול ביחס דמיון קווי של 1:2.", math_expression: "k = 1 / 2" },
            { verbal_explanation: "יחס השטחים של משולשים דומים תמיד שווה לריבוע יחס הדמיון.", math_expression: "S_1 / S_2 = k<sup>2</sup> = 1 / 4" },
            { verbal_explanation: "מכאן נובע ששטח המשולש הקטן הוא רבע משטח המשולש הגדול.", math_expression: "S_1 = S_2 / 4" },
            { verbal_explanation: "נחשב את התוצאה.", math_expression: "S_1 = 40 / 4 = 10" }
        ],
        final_answer: "10"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "קטע אמצעים במשולש ובטרפז",
        question: "בתוך משולש ששטחו 60 סמ\"ר חיברו את כל שלוש נקודות האמצע של הצלעות, כך שנוצר משולש פנימי. מהו שטח המשולש הפנימי שנוצר?",
        options: [
            "15 סמ\"ר",
            "20 סמ\"ר",
            "30 סמ\"ר",
            "10 סמ\"ר"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "חיבור שלוש נקודות האמצע במשולש מחלק את המשולש לארבעה משולשים קטנים, שכולם חופפים זה לזה.", math_expression: "S_1 = S_2 = S_3 = S_4" },
            { verbal_explanation: "לכן, שטח המשולש הפנימי שווה בדיוק לרבע מהשטח הכולל.", math_expression: "S_1 = S / 4" },
            { verbal_explanation: "נציב את השטח הכולל הנתון.", math_expression: "S_1 = 60 / 4" },
            { verbal_explanation: "נחשב את התוצאה.", math_expression: "S_1 = 15" }
        ],
        final_answer: "15"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "קטע אמצעים במשולש ובטרפז",
        question: "בטרפז מעבירים קטע אמצעים. בנוסף, מעבירים אלכסון לטרפז. האלכסון חותך את קטע האמצעים בנקודה מסוימת. מה ניתן לומר על נקודת החיתוך הזו ביחס לאלכסון?",
        options: [
            "היא אמצע האלכסון",
            "היא נמצאת בשליש האלכסון",
            "היא אינה קשורה לאמצע האלכסון",
            "היא מחלקת את האלכסון ביחס 1:3"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "קטע האמצעים בטרפז מקביל לבסיסים.", math_expression: "M &parallel; a" },
            { verbal_explanation: "החלק של קטע האמצעים שנמצא בתוך משולש יוצא מאמצע שוק ומקביל לבסיס.", math_expression: "M &parallel; b" },
            { verbal_explanation: "לפי המשפט ההפוך לקטע אמצעים במשולש, ישר היוצא מאמצע צלע ומקביל לבסיס, בהכרח חוצה את הצלע השלישית. לכן הנקודה חוצה את האלכסון.", math_expression: "x = y" }
        ],
        final_answer: "היא אמצע האלכסון"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "קטע אמצעים במשולש ובטרפז",
        question: "במשולש ישר זווית מעבירים קטע אמצעים המקביל לאחד הניצבים. איזה קשר מתקיים בין קטע אמצעים זה לבין הניצב השני?",
        options: [
            "הוא מאונך לניצב השני",
            "הוא מקביל לניצב השני",
            "הוא חוצה את הניצב השני",
            "הוא שווה באורכו לניצב השני"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נתון שקטע האמצעים מקביל לאחד הניצבים.", math_expression: "M &parallel; a" },
            { verbal_explanation: "במשולש ישר זווית, שני הניצבים מאונכים זה לזה.", math_expression: "a &perp; b" },
            { verbal_explanation: "מכיוון שקטע האמצעים מקביל לניצב הראשון, זוויות מתאימות שוות, ולכן הוא יוצר זווית ישרה (90 מעלות) עם הניצב השני.", math_expression: "M &perp; b" }
        ],
        final_answer: "הוא מאונך לניצב השני"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "קטע אמצעים במשולש ובטרפז",
        question: "בטרפז נתון כי קטע האמצעים שווה ל-18 ס\"מ. היחס בין הבסיס הקטן לבסיס הגדול הוא 1:2. מהו אורך הבסיס הקטן?",
        options: [
            "12 ס\"מ",
            "24 ס\"מ",
            "9 ס\"מ",
            "6 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את הבסיסים על פי היחס הנתון.", math_expression: "a = x &nbsp;,&nbsp; b = 2x" },
            { verbal_explanation: "נציב את הנתונים לנוסחת קטע האמצעים של טרפז.", math_expression: "M = (a + b) / 2" },
            { verbal_explanation: "נכפיל את המשוואה בשתיים ונכנס איברים במונה.", math_expression: "18 = (x + 2x) / 2" },
            { verbal_explanation: "נחלץ את המשתנה x המייצג את הבסיס הקטן.", math_expression: "36 = 3x &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 12" }
        ],
        final_answer: "12"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "קטע אמצעים במשולש ובטרפז",
        question: "מה קובע המשפט היסודי לגבי קטע אמצעים במשולש?",
        options: [
            "הוא מקביל לצלע השלישית ושווה למחציתה",
            "הוא מאונך לצלע השלישית",
            "הוא חוצה את הזווית שממנה יצא",
            "הוא תיכון לצלע השלישית"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "קטע אמצעים מוגדר כקטע המחבר את האמצעים של שתי צלעות במשולש.", math_expression: "x = y , z = w" },
            { verbal_explanation: "על פי ההוכחה הגיאומטרית, התכונות העיקריות שלו הן הקבלה לצלע הנותרת ויחס אורך של חצי ממנה.", math_expression: "M &parallel; a , M = a / 2" }
        ],
        final_answer: "הוא מקביל לצלע השלישית ושווה למחציתה"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "קטע אמצעים במשולש ובטרפז",
        question: "בטרפז שווה שוקיים, קטע האמצעים הוא באורך 20 ס\"מ, ואורך שוק אחת הוא 10 ס\"מ. מהו היקף הטרפז כולו?",
        options: [
            "60 ס\"מ",
            "50 ס\"מ",
            "40 ס\"מ",
            "70 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "קטע האמצעים שווה למחצית סכום הבסיסים. לכן, סכום שני הבסיסים יחדיו שווה לפעמיים קטע האמצעים.", math_expression: "a + b = 2 &times; M" },
            { verbal_explanation: "נחשב את סכום הבסיסים.", math_expression: "a + b = 2 &times; 20 = 40" },
            { verbal_explanation: "הטרפז הוא שווה שוקיים, לכן שתי השוקיים שוות, ואורכן הכולל כפול.", math_expression: "c + d = 10 + 10 = 20" },
            { verbal_explanation: "היקף הטרפז הוא סכום הבסיסים בתוספת סכום השוקיים.", math_expression: "P = 40 + 20 = 60" }
        ],
        final_answer: "60"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "קטע אמצעים במשולש ובטרפז",
        question: "בטרפז נתון כי הבסיס הקטן שווה ל-x, הבסיס הגדול שווה ל-x+4, וקטע האמצעים הוא x+2. היקף הטרפז הוא 28 ס\"מ. סכום שתי השוקיים הוא 12 ס\"מ. מהו אורך קטע האמצעים M?",
        options: [
            "8",
            "10",
            "6",
            "12"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נרכיב את משוואת היקף הטרפז כסכום ארבע צלעותיו.", math_expression: "P = a + b + c + d" },
            { verbal_explanation: "נציב את הביטויים הידועים.", math_expression: "x + (x + 4) + 12 = 28" },
            { verbal_explanation: "נכנס איברים באגף השמאלי.", math_expression: "2x + 16 = 28" },
            { verbal_explanation: "נחסר 16 משני אגפי המשוואה ונחלק כדי למצוא את המשתנה.", math_expression: "2x = 12 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 6" },
            { verbal_explanation: "נציב את הערך שמצאנו בביטוי של קטע האמצעים.", math_expression: "M = x + 2 = 6 + 2 = 8" }
        ],
        final_answer: "8"
    },// =====================================================================
    // תת-נושא 4: מעגל: תכונות מיתרים, קשתות וזווית מרכזית והיקפית (12 שאלות)
    // =====================================================================
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "מעגל: תכונות מיתרים, קשתות וזווית מרכזית והיקפית",
        question: "במעגל, זווית מרכזית הנשענת על קשת AB שווה ל-84&deg;. מהו גודלה של הזווית ההיקפית הנשענת על אותה הקשת?<br><svg viewBox=\"0 0 200 200\" width=\"160\" height=\"160\" style=\"display:block; margin: 15px auto;\"><circle cx=\"100\" cy=\"100\" r=\"80\" fill=\"#f8fafc\" stroke=\"#0f172a\" stroke-width=\"2\"/><path d=\"M 100,100 L 40,150 A 80 80 0 0 0 160,150 Z\" fill=\"#bfdbfe\" opacity=\"0.5\"/><line x1=\"100\" y1=\"100\" x2=\"40\" y2=\"150\" stroke=\"#3b82f6\" stroke-width=\"2\"/><line x1=\"100\" y1=\"100\" x2=\"160\" y2=\"150\" stroke=\"#3b82f6\" stroke-width=\"2\"/><line x1=\"100\" y1=\"20\" x2=\"40\" y2=\"150\" stroke=\"#ef4444\" stroke-width=\"2\"/><line x1=\"100\" y1=\"20\" x2=\"160\" y2=\"150\" stroke=\"#ef4444\" stroke-width=\"2\"/><circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#0f172a\"/><text x=\"90\" y=\"135\" font-size=\"14\" fill=\"#1d4ed8\" font-weight=\"bold\">84&deg;</text><text x=\"95\" y=\"45\" font-size=\"14\" fill=\"#b91c1c\" font-weight=\"bold\">?</text><text x=\"20\" y=\"165\" font-size=\"14\">A</text><text x=\"170\" y=\"165\" font-size=\"14\">B</text><text x=\"95\" y=\"90\" font-size=\"14\">O</text></svg>",
        options: [
            "42&deg;",
            "84&deg;",
            "168&deg;",
            "21&deg;"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "על פי משפט יסודי במעגל, זווית היקפית שווה בדיוק למחצית הזווית המרכזית הנשענת על אותה קשת.", math_expression: "&alpha; = &beta; / 2" },
            { verbal_explanation: "נציב את גודל הזווית המרכזית הנתונה למשוואה.", math_expression: "&alpha; = 84 / 2" },
            { verbal_explanation: "נבצע את פעולת החילוק בשתיים לקבלת הזווית ההיקפית.", math_expression: "&alpha; = 42" }
        ],
        final_answer: "42"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "מעגל: תכונות מיתרים, קשתות וזווית מרכזית והיקפית",
        question: "שתי זוויות היקפיות, C ו-D, נשענות על אותה קשת AB במעגל. אם ידוע שזווית C שווה ל-55&deg;, מה גודלה של זווית D?<br><svg viewBox=\"0 0 200 200\" width=\"160\" height=\"160\" style=\"display:block; margin: 15px auto;\"><circle cx=\"100\" cy=\"100\" r=\"80\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><path d=\"M 40,150 A 80 80 0 0 0 160,150\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"4\"/><line x1=\"100\" y1=\"20\" x2=\"40\" y2=\"150\" stroke=\"#3b82f6\" stroke-width=\"2\"/><line x1=\"100\" y1=\"20\" x2=\"160\" y2=\"150\" stroke=\"#3b82f6\" stroke-width=\"2\"/><line x1=\"180\" y1=\"100\" x2=\"40\" y2=\"150\" stroke=\"#10b981\" stroke-width=\"2\"/><line x1=\"180\" y1=\"100\" x2=\"160\" y2=\"150\" stroke=\"#10b981\" stroke-width=\"2\"/><text x=\"85\" y=\"45\" font-size=\"14\" fill=\"#1d4ed8\" font-weight=\"bold\">55&deg;</text><text x=\"155\" y=\"110\" font-size=\"14\" fill=\"#047857\" font-weight=\"bold\">?</text><text x=\"25\" y=\"165\" font-size=\"14\">A</text><text x=\"165\" y=\"165\" font-size=\"14\">B</text><text x=\"95\" y=\"12\" font-size=\"14\">C</text><text x=\"188\" y=\"105\" font-size=\"14\">D</text></svg>",
        options: [
            "55&deg;",
            "110&deg;",
            "27.5&deg;",
            "125&deg;"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "המשפט הגיאומטרי קובע כי כל הזוויות ההיקפיות הנשענות על אותה הקשת, מאותו הצד, שוות זו לזו.", math_expression: "x = y" },
            { verbal_explanation: "נציב את גודל הזווית C הנתונה לתוך השוויון.", math_expression: "x = 55" }
        ],
        final_answer: "55"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "מעגל: תכונות מיתרים, קשתות וזווית מרכזית והיקפית",
        question: "קטע AB הוא קוטר במעגל. נקודה C נמצאת על היקף המעגל. מהו גודלה של הזווית &ang;ACB?",
        options: [
            "90&deg;",
            "180&deg;",
            "45&deg;",
            "60&deg;"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "קוטר מחלק את המעגל לשתי קשתות שוות של 180 מעלות. הזווית המרכזית הנשענת על הקוטר היא זווית שטוחה.", math_expression: "&alpha; = 180" },
            { verbal_explanation: "זווית היקפית שווה למחצית הזווית המרכזית הנשענת על אותה קשת.", math_expression: "&beta; = &alpha; / 2" },
            { verbal_explanation: "נציב ונחשב (מכאן הכלל: זווית היקפית הנשענת על קוטר היא זווית ישרה).", math_expression: "&beta; = 180 / 2 = 90" }
        ],
        final_answer: "90"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "מעגל: תכונות מיתרים, קשתות וזווית מרכזית והיקפית",
        question: "רדיוס מעגל הוא 13 ס\"מ. במעגל זה שורטט מיתר שאורכו 24 ס\"מ. מהו מרחק המיתר ממרכז המעגל?<br><svg viewBox=\"0 0 200 200\" width=\"160\" height=\"160\" style=\"display:block; margin: 15px auto;\"><circle cx=\"100\" cy=\"100\" r=\"80\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"40\" y1=\"150\" x2=\"160\" y2=\"150\" stroke=\"#8b5cf6\" stroke-width=\"3\"/><line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"150\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-dasharray=\"5,5\"/><line x1=\"100\" y1=\"100\" x2=\"160\" y2=\"150\" stroke=\"#10b981\" stroke-width=\"2\"/><circle cx=\"100\" cy=\"100\" r=\"3\" fill=\"#000\"/><text x=\"105\" y=\"130\" font-size=\"12\" fill=\"#b91c1c\">d</text><text x=\"135\" y=\"120\" font-size=\"12\" fill=\"#047857\">13</text><text x=\"100\" y=\"168\" font-size=\"12\" fill=\"#6d28d9\">24</text></svg>",
        options: [
            "5 ס\"מ",
            "10 ס\"מ",
            "12 ס\"מ",
            "7 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "המרחק ממרכז המעגל למיתר הוא אנך. האנך ממרכז המעגל למיתר חוצה אותו לשני חצאים שווים.", math_expression: "x = 24 / 2 = 12" },
            { verbal_explanation: "נוצר משולש ישר זווית שבו היתר הוא הרדיוס, ניצב אחד הוא חצי המיתר, והניצב השני הוא המרחק המבוקש. נשתמש במשפט פיתגורס.", math_expression: "d<sup>2</sup> + x<sup>2</sup> = R<sup>2</sup>" },
            { verbal_explanation: "נציב את הנתונים הידועים במשוואה.", math_expression: "d<sup>2</sup> + 12<sup>2</sup> = 13<sup>2</sup>" },
            { verbal_explanation: "נעלה את המספרים בריבוע.", math_expression: "d<sup>2</sup> + 144 = 169" },
            { verbal_explanation: "נחסר 144 משני אגפי המשוואה.", math_expression: "d<sup>2</sup> = 169 - 144 = 25" },
            { verbal_explanation: "נוציא שורש ריבועי כדי למצוא את המרחק הרצוי.", math_expression: "d = 5" }
        ],
        final_answer: "5"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "מעגל: תכונות מיתרים, קשתות וזווית מרכזית והיקפית",
        question: "שני מיתרים AB ו-CD נחתכים בנקודה E בתוך המעגל. נתון: AE = 4 ס\"מ, EB = 9 ס\"מ, CE = 6 ס\"מ. מהו אורך הקטע ED?<br><svg viewBox=\"0 0 200 200\" width=\"150\" height=\"150\" style=\"display:block; margin: 15px auto;\"><circle cx=\"100\" cy=\"100\" r=\"80\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"30\" y1=\"60\" x2=\"170\" y2=\"140\" stroke=\"#3b82f6\" stroke-width=\"2\"/><line x1=\"40\" y1=\"150\" x2=\"150\" y2=\"30\" stroke=\"#ef4444\" stroke-width=\"2\"/><circle cx=\"107\" cy=\"104\" r=\"3\" fill=\"#000\"/><text x=\"60\" y=\"70\" font-size=\"12\">4</text><text x=\"135\" y=\"140\" font-size=\"12\">9</text><text x=\"65\" y=\"140\" font-size=\"12\">6</text><text x=\"140\" y=\"75\" font-size=\"12\" fill=\"#b91c1c\">x</text><text x=\"108\" y=\"120\" font-size=\"14\">E</text></svg>",
        options: [
            "6 ס\"מ",
            "12 ס\"מ",
            "5 ס\"מ",
            "8 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "לפי משפט המיתרים הנחתכים במעגל: מכפלת קטעי מיתר אחד שווה למכפלת קטעי המיתר השני.", math_expression: "a &times; b = c &times; d" },
            { verbal_explanation: "נציב את הנתונים למשוואה.", math_expression: "4 &times; 9 = 6 &times; x" },
            { verbal_explanation: "נחשב את המכפלה באגף שמאל.", math_expression: "36 = 6 &times; x" },
            { verbal_explanation: "נחלק בשש כדי למצוא את אורך הקטע החסר.", math_expression: "x = 36 / 6 = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "מעגל: תכונות מיתרים, קשתות וזווית מרכזית והיקפית",
        question: "במעגל, נתונים שני מיתרים מקבילים. אורך הקשת הכלואה ביניהם מצד ימין הוא 30 ס\"מ. מהו אורך הקשת הכלואה ביניהם מצד שמאל?",
        options: [
            "30 ס\"מ",
            "15 ס\"מ",
            "60 ס\"מ",
            "לא ניתן לדעת"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "משפט יסודי בגיאומטריה קובע: שני מיתרים מקבילים במעגל כולאים ביניהם קשתות שוות באורכן.", math_expression: "L_1 = L_2" },
            { verbal_explanation: "מכיוון שנתון אורך קשת אחת, אורך הקשת השנייה חייב להיות זהה לחלוטין.", math_expression: "L_2 = 30" }
        ],
        final_answer: "30"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "מעגל: תכונות מיתרים, קשתות וזווית מרכזית והיקפית",
        question: "במעגל שרדיוסו 10 ס\"מ, נתונים שני מיתרים שהקשתות שלהם שוות זו לזו. אורך המיתר הראשון הוא 8 ס\"מ. מהו אורך המיתר השני?",
        options: [
            "8 ס\"מ",
            "16 ס\"מ",
            "4 ס\"מ",
            "10 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "משפט במעגל קובע: קשתות שוות נשענות על מיתרים שווים באורכם.", math_expression: "Arc_1 = Arc_2 &nbsp;&rArr;&nbsp; a = b" },
            { verbal_explanation: "לכן, אורך המיתר השני זהה לאורך המיתר הראשון הנתון.", math_expression: "b = 8" }
        ],
        final_answer: "8"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "מעגל: תכונות מיתרים, קשתות וזווית מרכזית והיקפית",
        question: "זווית מרכזית במעגל נשענת על קשת שמהווה שליש (1/3) מהיקף המעגל כולו. מהו גודלה של הזווית המרכזית הזו במעלות?",
        options: [
            "120&deg;",
            "60&deg;",
            "90&deg;",
            "180&deg;"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "המעגל השלם מהווה 360 מעלות. הזווית המרכזית של המעגל כולו היא 360 מעלות.", math_expression: "&alpha; = 360" },
            { verbal_explanation: "יחס הקשתות במעגל שווה ליחס הזוויות המרכזיות הנשענות עליהן. נכפיל את המעגל בשליש.", math_expression: "&beta; = 360 / 3" },
            { verbal_explanation: "נבצע את החילוק לקבלת הזווית המרכזית המתאימה.", math_expression: "&beta; = 120" }
        ],
        final_answer: "120"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "מעגל: תכונות מיתרים, קשתות וזווית מרכזית והיקפית",
        question: "מיתר AB שאורכו 16 ס\"מ נמצא במרחק 6 ס\"מ ממרכז המעגל O. מהו אורך הרדיוס של מעגל זה?",
        options: [
            "10 ס\"מ",
            "8 ס\"מ",
            "14 ס\"מ",
            "12 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "האנך ממרכז המעגל למיתר חוצה את המיתר. נחשב את מחצית המיתר.", math_expression: "x = 16 / 2 = 8" },
            { verbal_explanation: "המרחק ממרכז המעגל (האנך) הוא ניצב שני במשולש ישר זווית. הרדיוס הוא היתר. נציב במשפט פיתגורס.", math_expression: "R<sup>2</sup> = x<sup>2</sup> + d<sup>2</sup>" },
            { verbal_explanation: "נציב את הנתונים.", math_expression: "R<sup>2</sup> = 8<sup>2</sup> + 6<sup>2</sup>" },
            { verbal_explanation: "נעלה בריבוע ונחבר.", math_expression: "R<sup>2</sup> = 64 + 36 = 100" },
            { verbal_explanation: "נוציא שורש למציאת הרדיוס.", math_expression: "R = 10" }
        ],
        final_answer: "10"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "מעגל: תכונות מיתרים, קשתות וזווית מרכזית והיקפית",
        question: "במעגל, שתי זוויות היקפיות נשענות על אותה קשת. זווית אחת שווה ל- x + 20 מעלות, והזווית השנייה שווה ל- 2x - 10 מעלות. מצאו את ערכו של x.",
        options: [
            "30",
            "10",
            "40",
            "50"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "על פי המשפט הגיאומטרי: כל הזוויות ההיקפיות הנשענות על אותה הקשת מאותו צד, שוות זו לזו בגודלן.", math_expression: "&alpha; = &beta;" },
            { verbal_explanation: "נשווה בין שני הביטויים הנתונים.", math_expression: "x + 20 = 2x - 10" },
            { verbal_explanation: "נעביר את המשתנה x לאגף ימין ואת המספרים לאגף שמאל.", math_expression: "20 + 10 = 2x - x" },
            { verbal_explanation: "נכנס איברים ונקבל את התוצאה.", math_expression: "30 = x" }
        ],
        final_answer: "30"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "מעגל: תכונות מיתרים, קשתות וזווית מרכזית והיקפית",
        question: "שני חותכים יוצאים מנקודה P מחוץ למעגל. הראשון עובר דרך הנקודות A ו-B כך שהחלק החיצוני PA שווה ל-4 ס\"מ והחלק הפנימי AB שווה ל-5 ס\"מ (כלומר PB=9). החותך השני עובר דרך הנקודות C ו-D כך שהחלק החיצוני PC שווה ל-3 ס\"מ. מהו אורכו הכולל של החותך השני PD?",
        options: [
            "12 ס\"מ",
            "15 ס\"מ",
            "9 ס\"מ",
            "16 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "לפי משפט שני חותכים היוצאים מנקודה אחת מחוץ למעגל: מכפלת חותך אחד בשלמותו בחלקו החיצוני שווה למכפלת החותך השני בחלקו החיצוני.", math_expression: "PB &times; PA = PD &times; PC" },
            { verbal_explanation: "נציב את הנתונים למשוואה. החותך הראשון אורכו 9 (4+5).", math_expression: "9 &times; 4 = y &times; 3" },
            { verbal_explanation: "נחשב את המכפלה משמאל.", math_expression: "36 = 3y" },
            { verbal_explanation: "נחלק בשלוש למציאת אורכו הכולל של החותך השני.", math_expression: "y = 36 / 3 = 12" }
        ],
        final_answer: "12"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "מעגל: תכונות מיתרים, קשתות וזווית מרכזית והיקפית",
        question: "זווית הפנימית במעגל (שקודקודה בתוך המעגל אך לא במרכז) נוצרת על ידי חיתוך של שני מיתרים. הקשת מולה שווה ל-80&deg; והקשת הנגדית (מאחוריה) שווה ל-40&deg;. מה גודלה של הזווית?",
        options: [
            "60&deg;",
            "40&deg;",
            "120&deg;",
            "20&deg;"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "זווית פנימית במעגל הכלואה בין שני מיתרים נחתכים שווה למחצית סכום שתי הקשתות הכלואות ביניהם.", math_expression: "&alpha; = (x + y) / 2" },
            { verbal_explanation: "נציב את ערכי הקשתות הנתונות למשוואה.", math_expression: "&alpha; = (80 + 40) / 2" },
            { verbal_explanation: "נחבר את המונה.", math_expression: "&alpha; = 120 / 2" },
            { verbal_explanation: "נחלק בשתיים לקבלת הזווית הפנימית.", math_expression: "&alpha; = 60" }
        ],
        final_answer: "60"
    },

    // =====================================================================
    // תת-נושא 5: משיק למעגל וזווית בין משיק למיתר (12 שאלות)
    // =====================================================================
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "משיק למעגל וזווית בין משיק למיתר",
        question: "ישר משיק למעגל בנקודה T. רדיוס המעגל OT מועבר לנקודת ההשקה. מה גודל הזווית הנוצרת בין המשיק לרדיוס?<br><svg viewBox=\"0 0 200 200\" width=\"150\" height=\"150\" style=\"display:block; margin: 15px auto;\"><circle cx=\"100\" cy=\"80\" r=\"60\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"20\" y1=\"140\" x2=\"180\" y2=\"140\" stroke=\"#3b82f6\" stroke-width=\"3\"/><line x1=\"100\" y1=\"80\" x2=\"100\" y2=\"140\" stroke=\"#ef4444\" stroke-width=\"2\"/><rect x=\"100\" y=\"130\" width=\"10\" height=\"10\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"1.5\"/><circle cx=\"100\" cy=\"80\" r=\"3\" fill=\"#000\"/><text x=\"108\" y=\"155\" font-size=\"14\">T</text><text x=\"108\" y=\"75\" font-size=\"14\">O</text></svg>",
        options: [
            "90&deg;",
            "180&deg;",
            "45&deg;",
            "60&deg;"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "משפט גיאומטרי יסודי קובע: רדיוס (או קוטר) העובר בנקודת ההשקה של מעגל מאונך לישר המשיק באותה נקודה.", math_expression: "R &perp; a" },
            { verbal_explanation: "מאונך משמעותו יצירת זווית ישרה של תשעים מעלות.", math_expression: "&alpha; = 90" }
        ],
        final_answer: "90"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "משיק למעגל וזווית בין משיק למיתר",
        question: "מנקודה P הנמצאת מחוץ למעגל יוצאים שני משיקים למעגל, הנוגעים בו בנקודות A ו-B. אורך המשיק PA הוא 14 ס\"מ. מהו אורך המשיק PB?<br><svg viewBox=\"0 0 200 200\" width=\"150\" height=\"150\" style=\"display:block; margin: 15px auto;\"><circle cx=\"130\" cy=\"100\" r=\"50\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"20\" y1=\"100\" x2=\"100\" y2=\"60\" stroke=\"#3b82f6\" stroke-width=\"2\"/><line x1=\"20\" y1=\"100\" x2=\"100\" y2=\"140\" stroke=\"#3b82f6\" stroke-width=\"2\"/><text x=\"10\" y=\"105\" font-size=\"14\">P</text><text x=\"95\" y=\"50\" font-size=\"14\">A</text><text x=\"95\" y=\"160\" font-size=\"14\">B</text><text x=\"50\" y=\"70\" font-size=\"12\" fill=\"#1d4ed8\">14</text><text x=\"50\" y=\"140\" font-size=\"12\" fill=\"#1d4ed8\">x</text></svg>",
        options: [
            "14 ס\"מ",
            "7 ס\"מ",
            "28 ס\"מ",
            "תלוי ברדיוס המעגל"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "משפט יסודי: שני משיקים למעגל היוצאים מאותה נקודה חיצונית, שווים זה לזה באורכם עד נקודת ההשקה.", math_expression: "PA = PB" },
            { verbal_explanation: "מכיוון שנתון משיק אחד באורך ארבע עשרה, אורך המשיק השני שווה לו בדיוק.", math_expression: "PB = 14" }
        ],
        final_answer: "14"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "משיק למעגל וזווית בין משיק למיתר",
        question: "ישר משיק למעגל בנקודה A. מיתר AB יוצא מנקודת ההשקה. הזווית הנוצרת בין המשיק למיתר היא 50&deg;. מהו גודל הזווית ההיקפית הנשענת על המיתר AB מצידו השני (בתוך הקשת הגדולה)?",
        options: [
            "50&deg;",
            "100&deg;",
            "25&deg;",
            "130&deg;"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "לפי המשפט: הזווית הכלואה בין משיק למיתר העובר בנקודת ההשקה שווה לזווית ההיקפית הנשענת על אותו מיתר מצידו השני (כלומר נשענת על הקשת הכלואה בזווית).", math_expression: "&alpha; = &beta;" },
            { verbal_explanation: "נציב את ערך הזווית שבין המשיק למיתר שנתונה לנו.", math_expression: "&alpha; = 50" },
            { verbal_explanation: "לכן, גם הזווית ההיקפית תהיה באותו הגודל.", math_expression: "&beta; = 50" }
        ],
        final_answer: "50"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "משיק למעגל וזווית בין משיק למיתר",
        question: "מנקודה P מחוץ למעגל יוצאים משיק PT (T נקודת ההשקה) וחותך החותך את המעגל בנקודות A ו-B. אורך החלק החיצוני של החותך PA הוא 4 ס\"מ, ואורך החלק הפנימי AB הוא 5 ס\"מ (כלומר אורך החותך כולו PB הוא 9 ס\"מ). לפי משפט חותך ומשיק, מהו אורך המשיק PT?",
        options: [
            "6 ס\"מ",
            "36 ס\"מ",
            "13 ס\"מ",
            "12 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "לפי משפט חותך ומשיק היוצאים מאותה נקודה: ריבוע המשיק שווה למכפלת החותך השלם בחלקו החיצוני.", math_expression: "PT<sup>2</sup> = PB &times; PA" },
            { verbal_explanation: "נציב את הנתונים, כאשר החותך השלם הוא תשע (ארבע ועוד חמש).", math_expression: "x<sup>2</sup> = 9 &times; 4" },
            { verbal_explanation: "נחשב את המכפלה.", math_expression: "x<sup>2</sup> = 36" },
            { verbal_explanation: "נוציא שורש כדי לקבל את אורך המשיק.", math_expression: "x = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "משיק למעגל וזווית בין משיק למיתר",
        question: "מנקודה P יוצאים שני משיקים למעגל בנקודות A ו-B. מרכז המעגל הוא O. זווית AOB (הזווית המרכזית הכלואה בין שני הרדיוסים לנקודות ההשקה) שווה ל-130&deg;. מה גודל הזווית APB הכלואה בין שני המשיקים?",
        options: [
            "50&deg;",
            "130&deg;",
            "65&deg;",
            "25&deg;"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "המרובע OAPB הנוצר מורכב משני רדיוסים ושני משיקים. הזוויות בין הרדיוסים למשיקים הן 90 מעלות כל אחת. לכן סכום שתי הזוויות הנותרות הוא 180 מעלות.", math_expression: "x + y = 180" },
            { verbal_explanation: "נציב את הזווית המרכזית הידועה.", math_expression: "x + 130 = 180" },
            { verbal_explanation: "נחסר 130 משני האגפים.", math_expression: "x = 180 - 130" },
            { verbal_explanation: "נחשב את הזווית בין המשיקים.", math_expression: "x = 50" }
        ],
        final_answer: "50"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "משיק למעגל וזווית בין משיק למיתר",
        question: "ישר משיק למעגל בנקודה C. מיתר CD נמתח מנקודת ההשקה. נתון כי הזווית בין המשיק למיתר היא 40&deg;. מה גודלה של הזווית המרכזית הנשענת על המיתר CD?",
        options: [
            "80&deg;",
            "40&deg;",
            "20&deg;",
            "100&deg;"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "הזווית בין משיק למיתר שווה לזווית ההיקפית הנשענת על אותו המיתר.", math_expression: "&alpha; = 40" },
            { verbal_explanation: "הזווית המרכזית הנשענת על קשת מסוימת שווה תמיד לפעמיים הזווית ההיקפית הנשענת על אותה קשת.", math_expression: "&beta; = 2 &times; &alpha;" },
            { verbal_explanation: "נציב ונחשב.", math_expression: "&beta; = 2 &times; 40 = 80" }
        ],
        final_answer: "80"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "משיק למעגל וזווית בין משיק למיתר",
        question: "ישר משיק למעגל שמרכזו O בנקודה T. מנקודה P על המשיק נמתח ישר למרכז המעגל O. אם רדיוס המעגל הוא 5 ס\"מ, ואורך קטע המשיק PT הוא 12 ס\"מ, מהו אורך הקטע PO?",
        options: [
            "13 ס\"מ",
            "17 ס\"מ",
            "7 ס\"מ",
            "109 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "הרדיוס מאונך למשיק בנקודת ההשקה, לכן המשולש PTO הוא משולש ישר זווית, בו הקטע PO הוא היתר.", math_expression: "x<sup>2</sup> = R<sup>2</sup> + d<sup>2</sup>" },
            { verbal_explanation: "נציב את הנתונים למשפט פיתגורס.", math_expression: "x<sup>2</sup> = 5<sup>2</sup> + 12<sup>2</sup>" },
            { verbal_explanation: "נעלה את המספרים בריבוע.", math_expression: "x<sup>2</sup> = 25 + 144" },
            { verbal_explanation: "נחבר את התוצאות.", math_expression: "x<sup>2</sup> = 169" },
            { verbal_explanation: "נוציא שורש למציאת היתר.", math_expression: "x = 13" }
        ],
        final_answer: "13"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "משיק למעגל וזווית בין משיק למיתר",
        question: "שני מעגלים משיקים זה לזה מבחוץ. רדיוס המעגל האחד הוא 8 ס\"מ, ורדיוס המעגל השני הוא 5 ס\"מ. מהו המרחק בין מרכזי שני המעגלים?",
        options: [
            "13 ס\"מ",
            "3 ס\"מ",
            "40 ס\"מ",
            "לא ניתן לדעת"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כאשר שני מעגלים משיקים זה לזה מבחוץ, קטע המרכזים (הישר המחבר את מרכזיהם) עובר דרך נקודת ההשקה המשותפת.", math_expression: "d = R_1 + R_2" },
            { verbal_explanation: "לכן, המרחק בין המרכזים שווה בדיוק לסכום שני הרדיוסים. נציב את הנתונים.", math_expression: "d = 8 + 5" },
            { verbal_explanation: "נחשב את הסכום.", math_expression: "d = 13" }
        ],
        final_answer: "13"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "משיק למעגל וזווית בין משיק למיתר",
        question: "מנקודה P מחוץ למעגל יוצאים משיק PT וחותך PAB. אורך המשיק PT הוא 8 ס\"מ. אורך החלק הפנימי של החותך AB הוא 12 ס\"מ. נסמן את החלק החיצוני PA ב-x. מצאו את x.",
        options: [
            "4 ס\"מ",
            "2 ס\"מ",
            "8 ס\"מ",
            "6 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נשתמש במשפט משיק וחותך למעגל: ריבוע המשיק שווה למכפלת החותך בשלמותו בחלקו החיצוני.", math_expression: "PT<sup>2</sup> = PB &times; PA" },
            { verbal_explanation: "אורך החותך המלא הוא סכום חלקיו. נציב הכל במשוואה.", math_expression: "8<sup>2</sup> = (x + 12) &times; x" },
            { verbal_explanation: "נעלה בריבוע ונפתח סוגריים ליצירת משוואה ריבועית.", math_expression: "64 = x<sup>2</sup> + 12x" },
            { verbal_explanation: "נסדר את המשוואה.", math_expression: "x<sup>2</sup> + 12x - 64 = 0" },
            { verbal_explanation: "נפרק לטרינום (מספרים שכפלם -64 וסכומם 12 הם 16 ומינוס 4).", math_expression: "(x + 16)(x - 4) = 0" },
            { verbal_explanation: "אורך חייב להיות חיובי, ולכן נבחר בפתרון החיובי.", math_expression: "x = 4" }
        ],
        final_answer: "4"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "משיק למעגל וזווית בין משיק למיתר",
        question: "במשולש ישר זווית, רדיוס המעגל החסום במשולש יוצר ריבוע עם שני ניצבי המשולש בקודקוד הזווית הישרה. מה התכונה של נקודות ההשקה הללו המאפשרת זאת?",
        options: [
            "הרדיוס מאונך למשיק בנקודת ההשקה",
            "הרדיוס מקביל ליתר",
            "הרדיוס חוצה את הניצבים",
            "הרדיוס שווה למחצית היתר"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "ניצבי המשולש ישר הזווית מהווים משיקים למעגל החסום בתוכו.", math_expression: "Lines = Tangents" },
            { verbal_explanation: "הרדיוסים המחברים את מרכז המעגל לנקודות ההשקה מאונכים לצלעות אלו.", math_expression: "R &perp; Tangent" },
            { verbal_explanation: "בגלל שיש כבר זווית ישרה בין הניצבים, נוצר מרובע עם שלוש זוויות ישרות, שהוא בהכרח מלבן. מכיוון ששתי צלעות סמוכות בו הן רדיוסים שווים, זהו ריבוע.", math_expression: "&alpha; = 90" }
        ],
        final_answer: "הרדיוס מאונך למשיק בנקודת ההשקה"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "משיק למעגל וזווית בין משיק למיתר",
        question: "מנקודה P מחוץ למעגל יוצאים שני משיקים PA ו-PB. נתון כי הזווית בין המשיקים &ang;APB היא 60&deg;. כמו כן, רדיוס המעגל אינו ידוע אך אורך המיתר המחבר את נקודות ההשקה, AB, הוא 10 ס\"מ. מהו אורך המשיק PA?",
        options: [
            "10 ס\"מ",
            "5 ס\"מ",
            "15 ס\"מ",
            "20 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "שני משיקים היוצאים מאותה נקודה שווים באורכם, לכן נוצר משולש שווה שוקיים PAB.", math_expression: "PA = PB" },
            { verbal_explanation: "במשולש שווה שוקיים שבו זווית הראש היא 60 מעלות, גם זוויות הבסיס חייבות להיות 60 מעלות, ולכן המשולש הוא שווה צלעות.", math_expression: "&alpha; = (180 - 60) / 2 = 60" },
            { verbal_explanation: "במשולש שווה צלעות, כל הצלעות שוות באורכן. לכן המשיק שווה לאורך המיתר הנתון.", math_expression: "PA = AB = 10" }
        ],
        final_answer: "10"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "משיק למעגל וזווית בין משיק למיתר",
        question: "זווית בין משיק למיתר העובר בנקודת ההשקה היא 45&deg;. מהו אורך הקשת שהמיתר קובע (הקשת הקטנה הכלואה בזווית), אם היקף המעגל כולו הוא 40&pi; ס\"מ?",
        options: [
            "10&pi; ס\"מ",
            "20&pi; ס\"מ",
            "5&pi; ס\"מ",
            "15&pi; ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "הזווית ההיקפית הנשענת על הקשת שווה לזווית שבין המשיק למיתר.", math_expression: "&alpha; = 45" },
            { verbal_explanation: "הזווית המרכזית הנשענת על הקשת היא כפולה מהזווית ההיקפית.", math_expression: "&beta; = 2 &times; 45 = 90" },
            { verbal_explanation: "קשת של 90 מעלות מהווה רבע ממעגל שלם (360 מעלות).", math_expression: "Fraction = 90 / 360 = 1 / 4" },
            { verbal_explanation: "נכפיל את היקף המעגל הכולל ברבע כדי למצוא את אורך הקשת.", math_expression: "L = (1 / 4) &times; 40&pi; = 10&pi;" }
        ],
        final_answer: "10&pi; ס\"מ"
    },
    // =====================================================================
    // תת-נושא 6: מרובע חסום וחוסם מעגל (12 שאלות)
    // =====================================================================
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "מרובע חסום וחוסם מעגל",
        question: "מרובע ABCD חסום במעגל. נתון כי גודל הזווית הקודקודית &ang;A הוא 110&deg;. מהו גודל הזווית הנגדית לה, &ang;C?<br><svg viewBox=\"0 0 200 200\" width=\"150\" height=\"150\" style=\"display:block; margin: 15px auto;\"><circle cx=\"100\" cy=\"100\" r=\"80\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><path d=\"M 50,40 L 160,60 L 140,165 L 40,140 Z\" fill=\"none\" stroke=\"#8b5cf6\" stroke-width=\"2\"/><text x=\"30\" y=\"35\" font-size=\"14\">A</text><text x=\"165\" y=\"55\" font-size=\"14\">B</text><text x=\"145\" y=\"180\" font-size=\"14\">C</text><text x=\"20\" y=\"150\" font-size=\"14\">D</text><text x=\"45\" y=\"65\" font-size=\"12\" fill=\"#1d4ed8\">110&deg;</text></svg>",
        options: [
            "70&deg;",
            "110&deg;",
            "90&deg;",
            "80&deg;"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי שמרובע ייחסם במעגל, סכום כל זוג זוויות נגדיות בו חייב להיות 180 מעלות.", math_expression: "&ang;A + &ang;C = 180" },
            { verbal_explanation: "נציב את ערך הזווית הנתונה למשוואה.", math_expression: "110 + &ang;C = 180" },
            { verbal_explanation: "נחסר 110 משני האגפים למציאת הזווית הנגדית.", math_expression: "&ang;C = 180 - 110" },
            { verbal_explanation: "נחשב את התוצאה הסופית.", math_expression: "&ang;C = 70" }
        ],
        final_answer: "70&deg;"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "מרובע חסום וחוסם מעגל",
        question: "מרובע חוסם מעגל (כל צלעותיו משיקות למעגל). נתון כי אורך צלע אחת הוא 7 ס\"מ ואורך הצלע הנגדית לה הוא 11 ס\"מ. אורך צלע שלישית הוא 8 ס\"מ. מהו אורך הצלע הרביעית?<br><svg viewBox=\"0 0 200 200\" width=\"150\" height=\"150\" style=\"display:block; margin: 15px auto;\"><circle cx=\"100\" cy=\"100\" r=\"60\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><path d=\"M 20,40 L 180,40 L 140,160 L 40,160 Z\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2\"/><text x=\"100\" y=\"30\" font-size=\"14\">7</text><text x=\"100\" y=\"180\" font-size=\"14\">11</text><text x=\"15\" y=\"100\" font-size=\"14\">8</text><text x=\"170\" y=\"100\" font-size=\"14\" fill=\"#b91c1c\">x</text></svg>",
        options: [
            "10 ס\"מ",
            "8 ס\"מ",
            "18 ס\"מ",
            "14 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "במרובע חוסם מעגל, סכום כל שתי צלעות נגדיות שווה לסכום שתי הצלעות הנגדיות האחרות.", math_expression: "a + c = b + d" },
            { verbal_explanation: "נציב את הנתונים למשוואה.", math_expression: "7 + 11 = 8 + x" },
            { verbal_explanation: "נחבר את האיברים באגף שמאל.", math_expression: "18 = 8 + x" },
            { verbal_explanation: "נחסר שמונה כדי לבודד את המשתנה x.", math_expression: "x = 18 - 8 = 10" }
        ],
        final_answer: "10"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "מרובע חסום וחוסם מעגל",
        question: "איזה טרפז מבין הטרפזים הבאים ניתן לחסום במעגל?",
        options: [
            "טרפז שווה שוקיים",
            "טרפז ישר זווית",
            "כל טרפז",
            "אף טרפז אינו בר חסימה"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "כדי שמרובע ייחסם במעגל, סכום זוויות נגדיות בו חייב להיות שווה ל-180 מעלות.", math_expression: "&alpha; + &gamma; = 180" },
            { verbal_explanation: "בטרפז, סכום זוויות סמוכות על שוק שווה ל-180 (ישרים מקבילים). על מנת שגם זווית נגדית תשלים ל-180, זווית הבסיס חייבת להיות שווה לזווית הבסיס השנייה.", math_expression: "&alpha; = &beta;" },
            { verbal_explanation: "הטרפז היחיד שבו זוויות הבסיס שוות זו לזו הוא טרפז שווה שוקיים.", math_expression: "AD = BC" }
        ],
        final_answer: "טרפז שווה שוקיים"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "מרובע חסום וחוסם מעגל",
        question: "אם מקבילית כלשהי חוסמת מעגל (כל צלעותיה משיקות לו), איזו צורה היא בהכרח?",
        options: [
            "מעוין",
            "מלבן",
            "טרפז",
            "דלתון"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "במרובע חוסם, סכום זוג צלעות נגדיות שווה לסכום הזוג השני.", math_expression: "a + c = b + d" },
            { verbal_explanation: "במקבילית, צלעות נגדיות שוות זו לזו.", math_expression: "a = c &nbsp;,&nbsp; b = d" },
            { verbal_explanation: "נציב את השוויונים במשוואה הראשונה.", math_expression: "a + a = b + b" },
            { verbal_explanation: "נפשט ונצמצם בשתיים. המסקנה היא שכל הצלעות הסמוכות שוות.", math_expression: "2a = 2b &nbsp;&nbsp;&rArr;&nbsp;&nbsp; a = b" },
            { verbal_explanation: "מקבילית שבה כל ארבע הצלעות שוות מוגדרת כמעוין.", math_expression: "a = b = c = d" }
        ],
        final_answer: "מעוין"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "מרובע חסום וחוסם מעגל",
        question: "אם מקבילית כלשהי חסומה במעגל (כל קודקודיה על ההיקף), איזו צורה היא בהכרח?",
        options: [
            "מלבן",
            "מעוין",
            "דלתון",
            "ריבוע"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "במרובע חסום, סכום זוויות נגדיות שווה תמיד ל-180 מעלות.", math_expression: "&ang;A + &ang;C = 180" },
            { verbal_explanation: "במקבילית, זוויות נגדיות שוות זו לזו.", math_expression: "&ang;A = &ang;C" },
            { verbal_explanation: "נציב את השוויון למשוואה.", math_expression: "&ang;A + &ang;A = 180" },
            { verbal_explanation: "נחלק בשתיים לקבלת גודל הזווית. מקבילית עם זוויות ישרות היא מלבן.", math_expression: "2&ang;A = 180 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; &ang;A = 90&deg;" }
        ],
        final_answer: "מלבן"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "מרובע חסום וחוסם מעגל",
        question: "מרובע חוסם מעגל. סכום שתי צלעותיו הנגדיות הוא 20 ס\"מ. מהו היקף המרובע כולו?",
        options: [
            "40 ס\"מ",
            "20 ס\"מ",
            "80 ס\"מ",
            "10 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "היקף מרובע מוגדר כסכום אורכי כל ארבע צלעותיו.", math_expression: "P = a + b + c + d" },
            { verbal_explanation: "במרובע חוסם מעגל, סכום זוג צלעות נגדיות שווה לסכום הזוג השני.", math_expression: "a + c = b + d" },
            { verbal_explanation: "נתון שסכום הזוג הראשון הוא 20. לכן גם סכום הזוג השני הוא 20.", math_expression: "a + c = 20 &nbsp;,&nbsp; b + d = 20" },
            { verbal_explanation: "נציב למשוואת ההיקף ונחבר את הסכומים.", math_expression: "P = 20 + 20 = 40" }
        ],
        final_answer: "40"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "מרובע חסום וחוסם מעגל",
        question: "מרובע ABCD חסום במעגל. היחס בין הזווית &ang;A לזווית הנגדית לה &ang;C הוא 2:3. מה גודלה של הזווית הקטנה מביניהן?",
        options: [
            "72&deg;",
            "108&deg;",
            "60&deg;",
            "120&deg;"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את שתי הזוויות באמצעות משתנה עזר ליחס.", math_expression: "&ang;A = 2x &nbsp;,&nbsp; &ang;C = 3x" },
            { verbal_explanation: "במרובע חסום, סכום זוויות נגדיות הוא 180 מעלות.", math_expression: "2x + 3x = 180" },
            { verbal_explanation: "נכנס איברים.", math_expression: "5x = 180" },
            { verbal_explanation: "נחלק בחמש למציאת היחס הבסיסי.", math_expression: "x = 36" },
            { verbal_explanation: "נחשב את הזווית הקטנה (המורכבת מפעמיים x).", math_expression: "&ang;A = 2 &times; 36 = 72" }
        ],
        final_answer: "72"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "מרובע חסום וחוסם מעגל",
        question: "במרובע החסום במעגל, הזווית החיצונית הצמודה לאחד מקודקודי המרובע שווה ל-85&deg;. מה גודלה של הזווית הפנימית הנגדית (הנמצאת ממול לקודקוד זה בתוך המרובע)?",
        options: [
            "85&deg;",
            "95&deg;",
            "180&deg;",
            "105&deg;"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "הזווית החיצונית משלימה את הזווית הפנימית הצמודה לה ל-180 מעלות (זוויות צמודות).", math_expression: "&alpha; + &beta; = 180" },
            { verbal_explanation: "זווית פנימית נגדית במרובע חסום משלימה גם היא את אותה זווית פנימית ל-180 מעלות.", math_expression: "&gamma; + &beta; = 180" },
            { verbal_explanation: "מכאן נובע שזווית חיצונית למרובע חסום תמיד שווה לזווית הפנימית הנגדית לה.", math_expression: "&alpha; = &gamma;" },
            { verbal_explanation: "הצבת הערך הנתון מגלה את התשובה ישירות.", math_expression: "&gamma; = 85" }
        ],
        final_answer: "85"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "מרובע חסום וחוסם מעגל",
        question: "טרפז שווה שוקיים חוסם מעגל. אורך הבסיס הקטן הוא 4 ס\"מ, ואורך הבסיס הגדול הוא 16 ס\"מ. מהו אורך שוק הטרפז?",
        options: [
            "10 ס\"מ",
            "20 ס\"מ",
            "12 ס\"מ",
            "8 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "במרובע חוסם מעגל, סכום הבסיסים שווה לסכום השוקיים.", math_expression: "a + b = c + d" },
            { verbal_explanation: "נציב את הנתונים אודות הבסיסים. הטרפז שווה שוקיים, לכן שתי השוקיים שוות בגודלן.", math_expression: "4 + 16 = x + x" },
            { verbal_explanation: "נחבר את האיברים בכל צד.", math_expression: "20 = 2x" },
            { verbal_explanation: "נחלק בשתיים למציאת אורך שוק בודדת.", math_expression: "x = 10" }
        ],
        final_answer: "10"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "מרובע חסום וחוסם מעגל",
        question: "ריבוע חסום במעגל שרדיוסו R = 5&radic;2 ס\"מ. מהו אורך צלע הריבוע?",
        options: [
            "10 ס\"מ",
            "5 ס\"מ",
            "20 ס\"מ",
            "10&radic;2 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "בריבוע החסום במעגל, אלכסון הריבוע מהווה קוטר במעגל. לכן האלכסון שווה לפעמיים הרדיוס.", math_expression: "d = 2R" },
            { verbal_explanation: "נחשב את אורך האלכסון.", math_expression: "d = 2 &times; 5&radic;2 = 10&radic;2" },
            { verbal_explanation: "נשתמש במשפט פיתגורס על המשולש ישר הזווית הנוצר מהאלכסון וצלעות הריבוע השוות.", math_expression: "a<sup>2</sup> + a<sup>2</sup> = d<sup>2</sup>" },
            { verbal_explanation: "נציב את האלכסון בריבוע למשוואה.", math_expression: "2a<sup>2</sup> = (10&radic;2)<sup>2</sup>" },
            { verbal_explanation: "נחשב את הריבוע (מאה כפול שתיים).", math_expression: "2a<sup>2</sup> = 200" },
            { verbal_explanation: "נחלק בשתיים ונוציא שורש כדי למצוא את אורך הצלע.", math_expression: "a<sup>2</sup> = 100 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; a = 10" }
        ],
        final_answer: "10"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "מרובע חסום וחוסם מעגל",
        question: "מלבן חוסם מעגל והיקפו 24 ס\"מ. מהו אורך כל אחת מצלעותיו?",
        options: [
            "6 ס\"מ",
            "12 ס\"מ",
            "4 ס\"מ ו-8 ס\"מ",
            "3 ס\"מ ו-9 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "מלבן שחוסם מעגל חייב לקיים את התנאי שסכום צלעות נגדיות שווה.", math_expression: "a + c = b + d" },
            { verbal_explanation: "מכיוון שבמלבן הצלעות הנגדיות שוות ממילא, השוויון מראה שכל הצלעות הסמוכות חייבות להיות שוות, ולכן הוא ריבוע.", math_expression: "a = b = c = d" },
            { verbal_explanation: "היקף ריבוע שווה לארבע פעמים הצלע.", math_expression: "P = 4a" },
            { verbal_explanation: "נציב את ההיקף ונחלק בארבע.", math_expression: "24 = 4a &nbsp;&nbsp;&rArr;&nbsp;&nbsp; a = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "מרובע חסום וחוסם מעגל",
        question: "במרובע ABCD החסום במעגל, האלכסונים AC ו-BD נחתכים בנקודה O. מהו הקשר המתמטי הנוצר בין קטעי האלכסונים לפי משפט המיתרים הנחתכים?",
        options: [
            "AO &times; OC = BO &times; OD",
            "AO + OC = BO + OD",
            "AO / OC = BO / OD",
            "AO &times; BO = CO &times; DO"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "האלכסונים במרובע חסום נמתחים מקצה אחד של המעגל לשני, לכן הם למעשה מיתרים הנחתכים בתוך המעגל.", math_expression: "AC &perp; BD &ne; True &nbsp;&nbsp; (General case)" },
            { verbal_explanation: "על פי משפט המיתרים הנחתכים, מכפלת קטעי מיתר אחד שווה למכפלת קטעי המיתר השני.", math_expression: "x_1 &times; x_2 = y_1 &times; y_2" },
            { verbal_explanation: "נציב את שמות הקטעים של האלכסונים לפי הנקודה O.", math_expression: "AO &times; OC = BO &times; OD" }
        ],
        final_answer: "AO &times; OC = BO &times; OD"
    },

    // =====================================================================
    // תת-נושא 7: פרופורציה במעגל (משפט חותכים ומשיק) (12 שאלות)
    // =====================================================================
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "פרופורציה במעגל (משפט חותכים ומשיק)",
        question: "בתוך מעגל נחתכים שני מיתרים AB ו-CD בנקודה E. נתון: AE = 3 ס\"מ, EB = 8 ס\"מ, ו-CE = 4 ס\"מ. על פי משפט המיתרים הנחתכים, מהו אורך הקטע ED?<br><svg viewBox=\"0 0 200 200\" width=\"150\" height=\"150\" style=\"display:block; margin: 15px auto;\"><circle cx=\"100\" cy=\"100\" r=\"80\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"30\" y1=\"60\" x2=\"170\" y2=\"140\" stroke=\"#3b82f6\" stroke-width=\"2\"/><line x1=\"40\" y1=\"150\" x2=\"150\" y2=\"30\" stroke=\"#ef4444\" stroke-width=\"2\"/><circle cx=\"107\" cy=\"104\" r=\"4\" fill=\"#000\"/><text x=\"60\" y=\"75\" font-size=\"14\">3</text><text x=\"135\" y=\"140\" font-size=\"14\">8</text><text x=\"65\" y=\"140\" font-size=\"14\">4</text><text x=\"135\" y=\"75\" font-size=\"14\" fill=\"#b91c1c\">x</text><text x=\"108\" y=\"125\" font-size=\"16\" font-weight=\"bold\">E</text></svg>",
        options: [
            "6 ס\"מ",
            "5 ס\"מ",
            "8 ס\"מ",
            "4 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "על פי משפט המיתרים הנחתכים במעגל, מכפלת קטעי המיתר הראשון שווה למכפלת קטעי המיתר השני.", math_expression: "AE &times; EB = CE &times; ED" },
            { verbal_explanation: "נציב את אורכי הקטעים הידועים לתוך המשוואה.", math_expression: "3 &times; 8 = 4 &times; x" },
            { verbal_explanation: "נחשב את המכפלה באגף שמאל.", math_expression: "24 = 4x" },
            { verbal_explanation: "נחלק בארבע כדי לבודד את הנעלם.", math_expression: "x = 24 / 4 = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "פרופורציה במעגל (משפט חותכים ומשיק)",
        question: "מנקודה P מחוץ למעגל יוצאים שני חותכים: חותך PAB (A הנקודה הקרובה) וחותך PCD (C הקרובה). נתון: PA = 4, AB = 5, PC = 3. מהו אורך הקטע CD בתוך המעגל?",
        options: [
            "9",
            "12",
            "6",
            "8"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "אורך החותך הראשון כולו שווה לסכום חלקיו (החיצוני והפנימי).", math_expression: "PB = 4 + 5 = 9" },
            { verbal_explanation: "לפי משפט שני חותכים היוצאים מאותה נקודה: מכפלת חותך בחלקו החיצוני שווה למכפלת החותך השני בחלקו החיצוני.", math_expression: "PA &times; PB = PC &times; PD" },
            { verbal_explanation: "נציב את הנתונים למשוואה כדי למצוא את אורך החותך השני כולו (PD).", math_expression: "4 &times; 9 = 3 &times; PD" },
            { verbal_explanation: "נחשב את אגף שמאל.", math_expression: "36 = 3 &times; PD" },
            { verbal_explanation: "נחלק בשלוש למציאת החותך המלא.", math_expression: "PD = 12" },
            { verbal_explanation: "הקטע הפנימי המבוקש הוא החותך השלם פחות החלק החיצוני.", math_expression: "CD = 12 - 3 = 9" }
        ],
        final_answer: "9"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "פרופורציה במעגל (משפט חותכים ומשיק)",
        question: "מנקודה P יוצאים משיק PT (T על המעגל) וחותך PAB (B הנקודה הרחוקה). נתון: PA = 2 ס\"מ, AB = 6 ס\"מ. מהו אורך המשיק PT?<br><svg viewBox=\"0 0 200 200\" width=\"150\" height=\"150\" style=\"display:block; margin: 15px auto;\"><circle cx=\"130\" cy=\"100\" r=\"60\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><line x1=\"10\" y1=\"30\" x2=\"100\" y2=\"48\" stroke=\"#10b981\" stroke-width=\"2\"/><line x1=\"10\" y1=\"30\" x2=\"185\" y2=\"125\" stroke=\"#8b5cf6\" stroke-width=\"2\"/><circle cx=\"10\" cy=\"30\" r=\"3\" fill=\"#000\"/><text x=\"5\" y=\"20\" font-size=\"14\">P</text><text x=\"100\" y=\"40\" font-size=\"14\">T</text><text x=\"75\" y=\"80\" font-size=\"14\">A</text><text x=\"190\" y=\"140\" font-size=\"14\">B</text><text x=\"40\" y=\"55\" font-size=\"12\">2</text><text x=\"130\" y=\"100\" font-size=\"12\">6</text><text x=\"50\" y=\"35\" font-size=\"12\" fill=\"#10b981\">x</text></svg>",
        options: [
            "4 ס\"מ",
            "8 ס\"מ",
            "12 ס\"מ",
            "16 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נחשב תחילה את אורכו המלא של החותך PAB.", math_expression: "PB = 2 + 6 = 8" },
            { verbal_explanation: "לפי משפט חותך ומשיק: ריבוע המשיק שווה למכפלת החותך המלא בחלקו החיצוני.", math_expression: "PT<sup>2</sup> = PA &times; PB" },
            { verbal_explanation: "נציב את הערכים למשוואה.", math_expression: "PT<sup>2</sup> = 2 &times; 8" },
            { verbal_explanation: "נחשב את המכפלה.", math_expression: "PT<sup>2</sup> = 16" },
            { verbal_explanation: "נוציא שורש ריבועי למציאת אורך המשיק החיובי.", math_expression: "PT = 4" }
        ],
        final_answer: "4"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "פרופורציה במעגל (משפט חותכים ומשיק)",
        question: "מנקודה P מחוץ למעגל יוצאים משיק PT באורך 12 ס\"מ, וחותך PAB שהחלק החיצוני שלו PA שווה ל-8 ס\"מ. מהו אורך המיתר הפנימי AB?",
        options: [
            "10 ס\"מ",
            "18 ס\"מ",
            "8 ס\"מ",
            "12 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "לפי משפט חותך ומשיק היוצאים מאותה נקודה.", math_expression: "PT<sup>2</sup> = PA &times; PB" },
            { verbal_explanation: "נציב את הנתונים הידועים למשוואה.", math_expression: "12<sup>2</sup> = 8 &times; PB" },
            { verbal_explanation: "נעלה את המשיק בריבוע.", math_expression: "144 = 8 &times; PB" },
            { verbal_explanation: "נחלק בשמונה כדי למצוא את החותך השלם.", math_expression: "PB = 144 / 8 = 18" },
            { verbal_explanation: "הקטע הפנימי שווה לחותך השלם פחות החלק החיצוני.", math_expression: "AB = 18 - 8 = 10" }
        ],
        final_answer: "10"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "פרופורציה במעגל (משפט חותכים ומשיק)",
        question: "שני מיתרים AB ו-CD נחתכים בנקודה E בתוך המעגל. אורכי הקטעים הם: AE = x, EB = x+2, CE = x-1, ED = x+4. מהו ערכו של x?",
        options: [
            "4",
            "2",
            "3",
            "5"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "ניישם את משפט המיתרים הנחתכים: מכפלת חלקי המיתר הראשון שווה למכפלת חלקי המיתר השני.", math_expression: "AE &times; EB = CE &times; ED" },
            { verbal_explanation: "נציב את הביטויים האלגבריים.", math_expression: "x(x + 2) = (x - 1)(x + 4)" },
            { verbal_explanation: "נפתח את הסוגריים משני צידי המשוואה.", math_expression: "x<sup>2</sup> + 2x = x<sup>2</sup> + 4x - x - 4" },
            { verbal_explanation: "נכנס איברים באגף ימין.", math_expression: "x<sup>2</sup> + 2x = x<sup>2</sup> + 3x - 4" },
            { verbal_explanation: "האיבר הריבועי מופיע בשני האגפים ולכן מתבטל. נעביר אגפים למציאת הנעלם.", math_expression: "2x = 3x - 4 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; 4 = x" }
        ],
        final_answer: "4"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "פרופורציה במעגל (משפט חותכים ומשיק)",
        question: "מנקודה P מחוץ למעגל יוצאים שני חותכים: PAB ו-PCD. נתון: PA = 5, PB = 12, PC = 6. מהו אורכו הכולל של החותך השני PD?",
        options: [
            "10",
            "12",
            "8",
            "15"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נשתמש במשפט חותכים למעגל.", math_expression: "PA &times; PB = PC &times; PD" },
            { verbal_explanation: "נציב את הנתונים ישירות למשוואה.", math_expression: "5 &times; 12 = 6 &times; PD" },
            { verbal_explanation: "נחשב את אגף שמאל.", math_expression: "60 = 6 &times; PD" },
            { verbal_explanation: "נחלק בשש כדי לבודד את הנעלם.", math_expression: "PD = 60 / 6 = 10" }
        ],
        final_answer: "10"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "פרופורציה במעגל (משפט חותכים ומשיק)",
        question: "משיק PT וחותך PAB יוצאים מנקודה P אל המעגל. נתון שאורך המשיק הוא 10 ס\"מ, ושאורך הקטע הפנימי במעגל AB גדול פי 3 מאורך הקטע החיצוני PA. מצאו את אורכו של הקטע החיצוני PA.",
        options: [
            "5 ס\"מ",
            "10 ס\"מ",
            "15 ס\"מ",
            "20 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את הקטע החיצוני כנעלם.", math_expression: "PA = x" },
            { verbal_explanation: "לפי הנתון, הקטע הפנימי גדול פי שלושה.", math_expression: "AB = 3x" },
            { verbal_explanation: "אורכו של החותך המלא הוא סכום שני חלקיו.", math_expression: "PB = x + 3x = 4x" },
            { verbal_explanation: "נציב למשפט משיק וחותך.", math_expression: "PT<sup>2</sup> = PA &times; PB" },
            { verbal_explanation: "נציב את הביטויים והערכים.", math_expression: "10<sup>2</sup> = x &times; 4x" },
            { verbal_explanation: "נעלה בריבוע ונכפיל.", math_expression: "100 = 4x<sup>2</sup>" },
            { verbal_explanation: "נחלק בארבע ונוציא שורש חיובי.", math_expression: "x<sup>2</sup> = 25 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 5" }
        ],
        final_answer: "5"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "פרופורציה במעגל (משפט חותכים ומשיק)",
        question: "שני מיתרים נחתכים בתוך מעגל. המיתר הראשון נחצה לשני חצאים שווים (נסמן כל חצי ב-x). המיתר השני מחולק לקטעים שאורכם 4 ס\"מ ו-9 ס\"מ. מהו אורכו הכולל של המיתר הראשון?",
        options: [
            "12 ס\"מ",
            "6 ס\"מ",
            "18 ס\"מ",
            "15 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נשתמש במשפט המיתרים הנחתכים.", math_expression: "x &times; x = 4 &times; 9" },
            { verbal_explanation: "נחשב את המכפלה.", math_expression: "x<sup>2</sup> = 36" },
            { verbal_explanation: "נוציא שורש כדי למצוא חצי מיתר.", math_expression: "x = 6" },
            { verbal_explanation: "המיתר המלא מורכב משני חצאים כאלו.", math_expression: "L = 6 + 6 = 12" }
        ],
        final_answer: "12"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "פרופורציה במעגל (משפט חותכים ומשיק)",
        question: "מנקודה P מחוץ למעגל נמתחים משיק PT באורך 6 ס\"מ, וחותך PAB. נסמן את הקטע החיצוני PA כ-x, ונתון כי הקטע הפנימי AB הוא 5 ס\"מ. מהו אורך הקטע PA?",
        options: [
            "4 ס\"מ",
            "9 ס\"מ",
            "3 ס\"מ",
            "5 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "החותך המלא שווה לחיבור חלקיו.", math_expression: "PB = x + 5" },
            { verbal_explanation: "ניישם את משפט חותך ומשיק.", math_expression: "PT<sup>2</sup> = PA &times; PB" },
            { verbal_explanation: "נציב את הנתונים למשוואה.", math_expression: "6<sup>2</sup> = x(x + 5)" },
            { verbal_explanation: "נפתח סוגריים ונסדר כמשוואה ריבועית.", math_expression: "36 = x<sup>2</sup> + 5x &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x<sup>2</sup> + 5x - 36 = 0" },
            { verbal_explanation: "נפרק לטרינום (מספרים שמכפלתם מינוס 36 וסכומם חמש).", math_expression: "(x + 9)(x - 4) = 0" },
            { verbal_explanation: "אורך חייב להיות חיובי, ולכן נפסול את הפתרון השלילי.", math_expression: "x = 4" }
        ],
        final_answer: "4"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "פרופורציה במעגל (משפט חותכים ומשיק)",
        question: "מנקודה P יוצאים שני חותכים למעגל, PAB ו-PCD. נתון: PA = 2, PB = x+2. חותך שני: PC = 3, PD = x. מהו ערכו של x?",
        options: [
            "4",
            "6",
            "2",
            "8"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "ניישם את המשפט עבור שני חותכים היוצאים מאותה נקודה.", math_expression: "PA &times; PB = PC &times; PD" },
            { verbal_explanation: "נציב את הביטויים הידועים למשוואה.", math_expression: "2(x + 2) = 3 &times; x" },
            { verbal_explanation: "נפתח את הסוגריים באגף השמאלי.", math_expression: "2x + 4 = 3x" },
            { verbal_explanation: "נעביר אגפים ונבודד את הנעלם.", math_expression: "x = 4" }
        ],
        final_answer: "4"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "פרופורציה במעגל (משפט חותכים ומשיק)",
        question: "אורכו של משיק למעגל PT הוא 15 ס\"מ. חותך PAB יוצא מאותה נקודה P, כך שהחלק החיצוני PA ארוך 9 ס\"מ. מהו אורכו של החלק הפנימי AB?",
        options: [
            "16 ס\"מ",
            "25 ס\"מ",
            "9 ס\"מ",
            "15 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "ניעזר במשפט המשיק והחותך.", math_expression: "PT<sup>2</sup> = PA &times; PB" },
            { verbal_explanation: "נציב את הערכים.", math_expression: "15<sup>2</sup> = 9 &times; PB" },
            { verbal_explanation: "נחשב את הריבוע.", math_expression: "225 = 9 &times; PB" },
            { verbal_explanation: "נחלק בתשע כדי למצוא את החותך השלם.", math_expression: "PB = 225 / 9 = 25" },
            { verbal_explanation: "נחסר את החלק החיצוני כדי לקבל את הקטע הפנימי המבוקש.", math_expression: "AB = 25 - 9 = 16" }
        ],
        final_answer: "16"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "פרופורציה במעגל (משפט חותכים ומשיק)",
        question: "שני מיתרים AB ו-CD נחתכים בנקודה P בתוך המעגל. נתון כי AP = 6, PB = 10. המיתר השני מחולק כך ש-CP = x, ו-PD = x + 4. מהו אורך הקטע CP?",
        options: [
            "6",
            "10",
            "4",
            "8"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נשתמש במשפט המיתרים הנחתכים.", math_expression: "AP &times; PB = CP &times; PD" },
            { verbal_explanation: "נציב את הנתונים וניצור משוואה.", math_expression: "6 &times; 10 = x(x + 4)" },
            { verbal_explanation: "נפתח סוגריים ונסדר משוואה ריבועית.", math_expression: "60 = x<sup>2</sup> + 4x &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x<sup>2</sup> + 4x - 60 = 0" },
            { verbal_explanation: "נפרק לטרינום (מכפלה -60, סכום 4).", math_expression: "(x + 10)(x - 6) = 0" },
            { verbal_explanation: "נפסול את התוצאה השלילית.", math_expression: "x = 6" }
        ],
        final_answer: "6"
    },

    // =====================================================================
    // תת-נושא 8: הוכחות גיאומטריות מורכבות וחישובי שטחים/היקפים (12 שאלות)
    // =====================================================================
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "הוכחות גיאומטריות מורכבות וחישובי שטחים/היקפים",
        question: "משולש ישר זווית חסום במעגל שרדיוסו R = 5 ס\"מ. אורך אחד הניצבים במשולש הוא 6 ס\"מ. מהו שטחו של משולש זה?<br><svg viewBox=\"0 0 200 200\" width=\"150\" height=\"150\" style=\"display:block; margin: 15px auto;\"><circle cx=\"100\" cy=\"100\" r=\"80\" fill=\"#f8fafc\" stroke=\"#0f172a\" stroke-width=\"2\"/><polygon points=\"20,100 180,100 144.7,34.1\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"2\"/><line x1=\"20\" y1=\"100\" x2=\"180\" y2=\"100\" stroke=\"#ef4444\" stroke-width=\"2\"/><circle cx=\"100\" cy=\"100\" r=\"4\" fill=\"#000\"/><text x=\"165\" y=\"60\" font-size=\"14\">6</text><text x=\"100\" y=\"120\" font-size=\"14\">R=5</text></svg>",
        options: [
            "24 סמ\"ר",
            "48 סמ\"ר",
            "30 סמ\"ר",
            "60 סמ\"ר"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "במשולש ישר זווית החסום במעגל, היתר של המשולש תמיד מתלכד עם קוטר המעגל.", math_expression: "c = 2R = 2 &times; 5 = 10" },
            { verbal_explanation: "נשתמש במשפט פיתגורס כדי למצוא את הניצב השני.", math_expression: "a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>" },
            { verbal_explanation: "נציב את הערכים הידועים.", math_expression: "6<sup>2</sup> + b<sup>2</sup> = 100" },
            { verbal_explanation: "נחשב ונעביר אגפים.", math_expression: "36 + b<sup>2</sup> = 100 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; b<sup>2</sup> = 64" },
            { verbal_explanation: "נוציא שורש כדי למצוא את אורך הניצב השני.", math_expression: "b = 8" },
            { verbal_explanation: "נחשב את שטח המשולש (מחצית מכפלת הניצבים).", math_expression: "S = (6 &times; 8) / 2 = 24" }
        ],
        final_answer: "24"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "הוכחות גיאומטריות מורכבות וחישובי שטחים/היקפים",
        question: "טרפז שווה שוקיים ABCD חסום במעגל. אורך הבסיס הקטן הוא 10 ס\"מ, ואורך הבסיס הגדול (שהוא גם קוטר המעגל) הוא 26 ס\"מ. מהו שטח הטרפז?",
        options: [
            "216 סמ\"ר",
            "432 סמ\"ר",
            "200 סמ\"ר",
            "108 סמ\"ר"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "הבסיס הגדול הוא קוטר, לכן רדיוס המעגל הוא מחציתו.", math_expression: "R = 26 / 2 = 13" },
            { verbal_explanation: "מרכז המעגל ממוקם על הבסיס הגדול. נוריד אנך מהמרכז לבסיס הקטן. האנך חוצה את הבסיס הקטן לחצאים בני חמישה סנטימטרים.", math_expression: "x = 10 / 2 = 5" },
            { verbal_explanation: "האנך יוצר משולש ישר זווית יחד עם חצי הבסיס הקטן ורדיוס המעגל (כיתר). נחשב את גובה הטרפז בעזרת פיתגורס.", math_expression: "h<sup>2</sup> + 5<sup>2</sup> = 13<sup>2</sup>" },
            { verbal_explanation: "נחשב ונבודד את הגובה.", math_expression: "h<sup>2</sup> + 25 = 169 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; h<sup>2</sup> = 144 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; h = 12" },
            { verbal_explanation: "נציב את הנתונים בנוסחת שטח טרפז.", math_expression: "S = ((a + b) &times; h) / 2" },
            { verbal_explanation: "נחשב את התוצאה הסופית.", math_expression: "S = ((10 + 26) &times; 12) / 2 = 216" }
        ],
        final_answer: "216"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "הוכחות גיאומטריות מורכבות וחישובי שטחים/היקפים",
        question: "שטחו של מעוין הוא 96 סמ\"ר. היחס בין אורכי אלכסוניו הוא 3:4. מהו היקף המעוין?",
        options: [
            "40 ס\"מ",
            "20 ס\"מ",
            "60 ס\"מ",
            "48 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נגדיר את האלכסונים באמצעות יחס משותף.", math_expression: "d_1 = 3x &nbsp;,&nbsp; d_2 = 4x" },
            { verbal_explanation: "נציב בנוסחת השטח של מעוין.", math_expression: "S = (3x &times; 4x) / 2 = 96" },
            { verbal_explanation: "נפשט את המשוואה ונוציא שורש כדי למצוא את המשתנה.", math_expression: "6x<sup>2</sup> = 96 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x<sup>2</sup> = 16 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 4" },
            { verbal_explanation: "נחשב את אורכי האלכסונים השלמים.", math_expression: "d_1 = 12 &nbsp;,&nbsp; d_2 = 16" },
            { verbal_explanation: "אלכסוני מעוין חוצים ומאונכים, לכן יוצרים משולש ישר זווית שניצביו הם חצאי האלכסונים (6 ו-8). נשתמש בפיתגורס למציאת הצלע.", math_expression: "a<sup>2</sup> = 6<sup>2</sup> + 8<sup>2</sup> = 100 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; a = 10" },
            { verbal_explanation: "היקף מעוין הוא כפולה של ארבע פעמים הצלע.", math_expression: "P = 40" }
        ],
        final_answer: "40"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "הוכחות גיאומטריות מורכבות וחישובי שטחים/היקפים",
        question: "מעגל חסום בתוך מעוין. ידוע כי אלכסוני המעוין הם 12 ס\"מ ו-16 ס\"מ. מהו רדיוס המעגל החסום?",
        options: [
            "4.8 ס\"מ",
            "5 ס\"מ",
            "2.4 ס\"מ",
            "9.6 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נחשב תחילה את צלע המעוין בעזרת חצאי האלכסונים ומשפט פיתגורס.", math_expression: "a = &radic;(6<sup>2</sup> + 8<sup>2</sup>) = 10" },
            { verbal_explanation: "נחשב את שטח המעוין בעזרת האלכסונים.", math_expression: "S = (12 &times; 16) / 2 = 96" },
            { verbal_explanation: "שטח מעוין ניתן לחישוב גם כמכפלת הצלע בגובה המעוין. נחלץ את הגובה.", math_expression: "S = a &times; h &nbsp;&nbsp;&rArr;&nbsp;&nbsp; 96 = 10h &nbsp;&nbsp;&rArr;&nbsp;&nbsp; h = 9.6" },
            { verbal_explanation: "במעוין החוסם מעגל, גובה המעוין שווה בדיוק לקוטר המעגל החסום (פעמיים הרדיוס).", math_expression: "2R = 9.6" },
            { verbal_explanation: "נחלק בשתיים לקבלת הרדיוס.", math_expression: "R = 4.8" }
        ],
        final_answer: "4.8"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "הוכחות גיאומטריות מורכבות וחישובי שטחים/היקפים",
        question: "במשולש שווה שוקיים ABC, אורך השוקיים הוא 13 ס\"מ, ואורך הבסיס הוא 10 ס\"מ. מהו שטח המשולש?",
        options: [
            "60 סמ\"ר",
            "120 סמ\"ר",
            "65 סמ\"ר",
            "30 סמ\"ר"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "במשולש שווה שוקיים, הגובה לבסיס חוצה את הבסיס. כך נוצר משולש ישר זווית שהניצב שלו שווה לחמש (מחצית הבסיס).", math_expression: "x = 10 / 2 = 5" },
            { verbal_explanation: "נשתמש במשפט פיתגורס למציאת הגובה.", math_expression: "h<sup>2</sup> + 5<sup>2</sup> = 13<sup>2</sup>" },
            { verbal_explanation: "נחשב ונעביר אגפים.", math_expression: "h<sup>2</sup> + 25 = 169 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; h<sup>2</sup> = 144" },
            { verbal_explanation: "נוציא שורש כדי למצוא את הגובה.", math_expression: "h = 12" },
            { verbal_explanation: "נציב בנוסחת השטח למשולש הכללי (מחצית מכפלת בסיס וגובה).", math_expression: "S = (10 &times; 12) / 2 = 60" }
        ],
        final_answer: "60"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "הוכחות גיאומטריות מורכבות וחישובי שטחים/היקפים",
        question: "מלבן חסום במעגל שרדיוסו 10 ס\"מ. היחס בין צלעות המלבן הוא 3:4. מהו שטח המלבן?<br><svg viewBox=\"0 0 200 200\" width=\"150\" height=\"150\" style=\"display:block; margin: 15px auto;\"><circle cx=\"100\" cy=\"100\" r=\"80\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"2\"/><rect x=\"36\" y=\"52\" width=\"128\" height=\"96\" fill=\"#e0e7ff\" stroke=\"#3b82f6\" stroke-width=\"2\"/><line x1=\"36\" y1=\"52\" x2=\"164\" y2=\"148\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-dasharray=\"4,4\"/><circle cx=\"100\" cy=\"100\" r=\"3\" fill=\"#000\"/><text x=\"100\" y=\"90\" font-size=\"12\" fill=\"#b91c1c\">20</text><text x=\"100\" y=\"165\" font-size=\"14\" font-weight=\"bold\">4x</text><text x=\"15\" y=\"105\" font-size=\"14\" font-weight=\"bold\">3x</text></svg>",
        options: [
            "192 סמ\"ר",
            "96 סמ\"ר",
            "300 סמ\"ר",
            "400 סמ\"ר"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "במלבן החסום במעגל, האלכסון עובר דרך המרכז ולכן מהווה קוטר במעגל.", math_expression: "d = 2R = 20" },
            { verbal_explanation: "נשתמש במשפט פיתגורס תוך הצבת היחס כמשתנה.", math_expression: "(3x)<sup>2</sup> + (4x)<sup>2</sup> = 20<sup>2</sup>" },
            { verbal_explanation: "נעלה בריבוע ונחבר.", math_expression: "9x<sup>2</sup> + 16x<sup>2</sup> = 400 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; 25x<sup>2</sup> = 400" },
            { verbal_explanation: "נחלק בעשרים וחמש ונוציא שורש.", math_expression: "x<sup>2</sup> = 16 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; x = 4" },
            { verbal_explanation: "נחשב את אורכי צלעות המלבן.", math_expression: "a = 12 &nbsp;,&nbsp; b = 16" },
            { verbal_explanation: "שטח המלבן הוא מכפלת הצלעות.", math_expression: "S = 12 &times; 16 = 192" }
        ],
        final_answer: "192"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "הוכחות גיאומטריות מורכבות וחישובי שטחים/היקפים",
        question: "בתוך משולש ישר זווית שאורכי ניצביו הם 9 ס\"מ ו-12 ס\"מ, חסום מעגל. מהו אורך הרדיוס של המעגל החסום במשולש זה?",
        options: [
            "3 ס\"מ",
            "6 ס\"מ",
            "4.5 ס\"מ",
            "2.5 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "תחילה, נחשב את היתר של המשולש בעזרת משפט פיתגורס.", math_expression: "c = &radic;(9<sup>2</sup> + 12<sup>2</sup>) = 15" },
            { verbal_explanation: "נשתמש בנוסחה הייעודית למציאת רדיוס מעגל החסום במשולש ישר זווית, המבוססת על סכום הניצבים פחות היתר, חלקי שתיים.", math_expression: "r = (a + b - c) / 2" },
            { verbal_explanation: "נציב את הנתונים למשוואה.", math_expression: "r = (9 + 12 - 15) / 2" },
            { verbal_explanation: "נחשב את התוצאה במונה, ונחלק.", math_expression: "r = 6 / 2 = 3" }
        ],
        final_answer: "3"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "הוכחות גיאומטריות מורכבות וחישובי שטחים/היקפים",
        question: "שטחו של משולש שווה צלעות הוא 9&radic;3 סמ\"ר (תשע שורש שלוש). מהו היקפו של משולש זה?",
        options: [
            "18 ס\"מ",
            "27 ס\"מ",
            "36 ס\"מ",
            "12 ס\"מ"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "נוסחת השטח למשולש שווה צלעות תלויה בצלע אחת בלבד.", math_expression: "S = (a<sup>2</sup>&radic;3) / 4" },
            { verbal_explanation: "נשווה את הנוסחה לנתון בשאלה.", math_expression: "(a<sup>2</sup>&radic;3) / 4 = 9&radic;3" },
            { verbal_explanation: "הביטוי שורש שלוש מופיע בשני האגפים ולכן מצטמצם.", math_expression: "a<sup>2</sup> / 4 = 9" },
            { verbal_explanation: "נכפיל בארבע ונוציא שורש חיובי למציאת הצלע.", math_expression: "a<sup>2</sup> = 36 &nbsp;&nbsp;&rArr;&nbsp;&nbsp; a = 6" },
            { verbal_explanation: "במשולש שווה צלעות יש שלוש צלעות זהות, לכן נכפיל בשלוש לקבלת ההיקף.", math_expression: "P = 3 &times; 6 = 18" }
        ],
        final_answer: "18"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "הוכחות גיאומטריות מורכבות וחישובי שטחים/היקפים",
        question: "בטרפז, אורך קטע האמצעים הוא 14 ס\"מ, וגובה הטרפז הוא 8 ס\"מ. מהו שטחו של הטרפז?",
        options: [
            "112 סמ\"ר",
            "56 סמ\"ר",
            "224 סמ\"ר",
            "140 סמ\"ר"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "קטע אמצעים בטרפז מוגדר כממוצע החשבוני של הבסיסים.", math_expression: "M = (a + b) / 2 = 14" },
            { verbal_explanation: "נוסחת השטח הרגילה של טרפז שקולה להכפלת קטע האמצעים בגובה ישירות.", math_expression: "S = M &times; h" },
            { verbal_explanation: "נציב את הנתונים ונחשב.", math_expression: "S = 14 &times; 8 = 112" }
        ],
        final_answer: "112"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "הוכחות גיאומטריות מורכבות וחישובי שטחים/היקפים",
        question: "בדלתון, אורך האלכסון הראשי הוא 24 ס\"מ, ואורך האלכסון המשני הוא 10 ס\"מ. מהו שטח הדלתון?",
        options: [
            "120 סמ\"ר",
            "240 סמ\"ר",
            "60 סמ\"ר",
            "100 סמ\"ר"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "אלכסוני הדלתון מאונכים זה לזה. לכן, שטח הדלתון מחושב באופן זהה לשטח מעוין.", math_expression: "S = (d_1 &times; d_2) / 2" },
            { verbal_explanation: "נציב את אורכי האלכסונים למשוואה.", math_expression: "S = (10 &times; 24) / 2" },
            { verbal_explanation: "נחשב את אגף ימין לקבלת התוצאה.", math_expression: "S = 240 / 2 = 120" }
        ],
        final_answer: "120"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "הוכחות גיאומטריות מורכבות וחישובי שטחים/היקפים",
        question: "משושה משוכלל (רגיל) חסום בתוך מעגל שרדיוסו 6 ס\"מ. מהו שטח המשושה כולו?",
        options: [
            "54&radic;3 סמ\"ר",
            "36&radic;3 סמ\"ר",
            "108&radic;3 סמ\"ר",
            "72&radic;3 סמ\"ר"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "משושה משוכלל החסום במעגל מורכב משישה משולשים שווי צלעות חופפים, שאורך צלעם שווה בדיוק לרדיוס המעגל.", math_expression: "a = R = 6" },
            { verbal_explanation: "נחשב תחילה שטח של משולש שווה צלעות אחד כזה.", math_expression: "S_1 = (a<sup>2</sup>&radic;3) / 4" },
            { verbal_explanation: "נציב את ערך הרדיוס בנוסחה למשולש.", math_expression: "S_1 = (36&radic;3) / 4 = 9&radic;3" },
            { verbal_explanation: "נכפיל את השטח הבודד בשש כדי לקבל את השטח הכולל.", math_expression: "S = 6 &times; S_1 = 54&radic;3" }
        ],
        final_answer: "54&radic;3"
    },
    {
        topic: "גאומטריה אוקלידית (הנדסת המישור)",
        subTopic: "הוכחות גיאומטריות מורכבות וחישובי שטחים/היקפים",
        question: "במעגל שרדיוסו 12 ס\"מ, נתונה גזרה מעגלית שהזווית המרכזית שלה היא 60&deg;. מהו שטח גזרה זו?",
        options: [
            "24&pi; סמ\"ר",
            "12&pi; סמ\"ר",
            "48&pi; סמ\"ר",
            "36&pi; סמ\"ר"
        ],
        correctAnswer: 0,
        solution_steps: [
            { verbal_explanation: "הנוסחה לשטח גזרה מעגלית מבוססת על היחס שבין הזווית המרכזית למעגל שלם, כפול שטח המעגל הכולל.", math_expression: "S = &pi;R<sup>2</sup> &times; (&alpha; / 360)" },
            { verbal_explanation: "נציב את הרדיוס והזווית הנתונים בנוסחה.", math_expression: "S = &pi; &times; 12<sup>2</sup> &times; (60 / 360)" },
            { verbal_explanation: "נחשב את החזקה ואת יחס השבר (המהווה שישית).", math_expression: "S = &pi; &times; 144 &times; (1 / 6)" },
            { verbal_explanation: "נחלק בשש ונקבל את התשובה עם פאי.", math_expression: "S = 24&pi;" }
        ],
        final_answer: "24&pi;"
    }
];