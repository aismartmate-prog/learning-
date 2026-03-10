const questionsDB = [
    // ========================================================================
    // תת נושא 1: היקף ושטח מרובעים (מלבן, ריבוע, מקבילית, מעוין, טרפז)
    // ========================================================================

    // --- שאלה 1 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח מרובעים (מלבן, ריבוע, מקבילית, מעוין, טרפז)",
        question: `נתון מלבן שאורך צלעו האחת הוא 8 ס"מ ואורך צלעו השנייה (הסמוכה לה) הוא 5 ס"מ.<br>מהו שטח המלבן?<br><br>
        <svg viewBox="0 0 200 120" style="width:100%; max-width:200px; display:block; margin:10px auto;">
            <rect x="20" y="20" width="160" height="80" fill="#e0f2fe" stroke="#3b82f6" stroke-width="2"/>
            <text x="100" y="15" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">8 ס"מ</text>
            <text x="10" y="65" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a" transform="rotate(-90 10,65)">5 ס"מ</text>
            <rect x="20" y="20" width="10" height="10" fill="none" stroke="#3b82f6" stroke-width="1"/>
        </svg>`,
        options: ["40 סמ\"ר", "26 סמ\"ר", "13 סמ\"ר", "80 סמ\"ר"],
        correctAnswer: 0,
        hint: "שטח מלבן מחושב על ידי הכפלת אורך המלבן ברוחבו.",
        solution_steps: [
            { verbal_explanation: "נרשום את הנוסחה לחישוב שטח מלבן: שטח שווה לאורך כפול רוחב.", math_expression: "S = a × b" },
            { verbal_explanation: "נציב את הנתונים מהשאלה: צלע אחת היא 8 והשנייה היא 5.", math_expression: "S = 8 × 5" },
            { verbal_explanation: "נבצע את פעולת הכפל.", math_expression: "S = 40" }
        ],
        final_answer: "40 סמ\"ר"
    },

    // --- שאלה 2 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח מרובעים (מלבן, ריבוע, מקבילית, מעוין, טרפז)",
        question: "עבור אותו מלבן שמידותיו 8 ס\"מ ו-5 ס\"מ, מהו היקף המלבן?",
        options: ["26 ס\"מ", "40 ס\"מ", "13 ס\"מ", "30 ס\"מ"],
        correctAnswer: 0,
        hint: "היקף מלבן הוא סכום כל ארבע צלעותיו. מכיוון שצלעות נגדיות שוות במלבן, חברו פעמיים את האורך ופעמיים את הרוחב.",
        solution_steps: [
            { verbal_explanation: "נוסחת ההיקף של מלבן מחברת את כל הצלעות: פעמיים צלע א' פלוס פעמיים צלע ב'.", math_expression: "P = 2a + 2b" },
            { verbal_explanation: "נציב את הנתונים בנוסחה.", math_expression: "P = 2 × 8 + 2 × 5" },
            { verbal_explanation: "נחשב כל כפל בנפרד.", math_expression: "P = 16 + 10" },
            { verbal_explanation: "נחבר את התוצאות.", math_expression: "P = 26" }
        ],
        final_answer: "26 ס\"מ"
    },

    // --- שאלה 3 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח מרובעים (מלבן, ריבוע, מקבילית, מעוין, טרפז)",
        question: "שטחו של מלבן הוא 60 סמ\"ר. אורכה של אחת הצלעות הוא 12 ס\"מ. מהו אורכה של הצלע הסמוכה לה?",
        options: ["5 ס\"מ", "6 ס\"מ", "10 ס\"מ", "48 ס\"מ"],
        correctAnswer: 0,
        hint: "אנו יודעים שמכפלת שתי הצלעות היא 60. חלקו את השטח הכולל באורך הצלע הנתונה כדי למצוא את הצלע החסרה.",
        solution_steps: [
            { verbal_explanation: "נוסחת השטח היא מכפלת הצלעות.", math_expression: "S = a × b" },
            { verbal_explanation: "נציב את הנתונים הידועים: השטח הוא 60 וצלע אחת היא 12.", math_expression: "60 = 12 × b" },
            { verbal_explanation: "כדי למצוא את הצלע b, נחלק את שני האגפים ב-12.", math_expression: "b = 60 / 12" },
            { verbal_explanation: "נחשב את החילוק.", math_expression: "b = 5" }
        ],
        final_answer: "5 ס\"מ"
    },

    // --- שאלה 4 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח מרובעים (מלבן, ריבוע, מקבילית, מעוין, טרפז)",
        question: `נתון ריבוע שאורך צלעו הוא 7 מטרים.<br>מהו שטח הריבוע?<br><br>
        <svg viewBox="0 0 150 150" style="width:100%; max-width:150px; display:block; margin:10px auto;">
            <rect x="25" y="25" width="100" height="100" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
            <text x="75" y="15" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">7 מ'</text>
            <text x="10" y="75" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">7 מ'</text>
            <rect x="25" y="25" width="10" height="10" fill="none" stroke="#dc2626" stroke-width="1"/>
            <rect x="115" y="25" width="10" height="10" fill="none" stroke="#dc2626" stroke-width="1"/>
            <rect x="25" y="115" width="10" height="10" fill="none" stroke="#dc2626" stroke-width="1"/>
            <rect x="115" y="115" width="10" height="10" fill="none" stroke="#dc2626" stroke-width="1"/>
        </svg>`,
        options: ["49 מ\"ר", "28 מ\"ר", "14 מ\"ר", "35 מ\"ר"],
        correctAnswer: 0,
        hint: "בריבוע, כל הצלעות שוות. כדי לחשב שטח של ריבוע, יש להכפיל את אורך הצלע בעצמה (העלאה בריבוע).",
        solution_steps: [
            { verbal_explanation: "בדומה למלבן, שטח מחושב על ידי הכפלת שתי צלעות סמוכות.", math_expression: "S = a × b" },
            { verbal_explanation: "בריבוע כל הצלעות שוות, לכן נכפיל את הצלע בעצמה.", math_expression: "S = a × a = a²" },
            { verbal_explanation: "נציב את אורך הצלע, 7, לתוך הנוסחה.", math_expression: "S = 7 × 7" },
            { verbal_explanation: "נחשב את המכפלה.", math_expression: "S = 49" }
        ],
        final_answer: "49 מ\"ר"
    },

    // --- שאלה 5 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח מרובעים (מלבן, ריבוע, מקבילית, מעוין, טרפז)",
        question: "מהו היקף הריבוע שאורך צלעו הוא 9 ס\"מ?",
        options: ["36 ס\"מ", "81 ס\"מ", "18 ס\"מ", "45 ס\"מ"],
        correctAnswer: 0,
        hint: "לריבוע יש 4 צלעות שוות. היקף הוא סכום כל הצלעות. הכפילו את הצלע ב-4.",
        solution_steps: [
            { verbal_explanation: "היקף ריבוע מוגדר כסכום ארבע צלעותיו השוות באורכן.", math_expression: "P = a + a + a + a = 4a" },
            { verbal_explanation: "נציב את אורך הצלע הנתון.", math_expression: "P = 4 × 9" },
            { verbal_explanation: "נבצע את פעולת הכפל.", math_expression: "P = 36" }
        ],
        final_answer: "36 ס\"מ"
    },

    // --- שאלה 6 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח מרובעים (מלבן, ריבוע, מקבילית, מעוין, טרפז)",
        question: "שטחו של ריבוע הוא 81 מ\"ר. מהו אורך צלעו של הריבוע?",
        options: ["9 מטרים", "40.5 מטרים", "8 מטרים", "18 מטרים"],
        correctAnswer: 0,
        hint: "אם שטח הריבוע הוא צלע כפול צלע (צלע בריבוע), הרי שכדי למצוא את הצלע יש לבצע את הפעולה ההפוכה: הוצאת שורש ריבועי מהשטח.",
        solution_steps: [
            { verbal_explanation: "אנו יודעים שהשטח שווה לצלע בריבוע.", math_expression: "S = a²" },
            { verbal_explanation: "נציב את השטח הנתון במשוואה.", math_expression: "81 = a²" },
            { verbal_explanation: "כדי למצוא את a, נוציא שורש ריבועי מ-81. ניקח רק את הפתרון החיובי כי אורך צלע אינו יכול להיות שלילי.", math_expression: "a = √81" },
            { verbal_explanation: "נחשב את השורש.", math_expression: "a = 9" }
        ],
        final_answer: "9 מטרים"
    },

    // --- שאלה 7 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח מרובעים (מלבן, ריבוע, מקבילית, מעוין, טרפז)",
        question: `במקבילית נתונה, אורך הצלע התחתונה (הבסיס) הוא 10 ס"מ.<br>הגובה היורד אל צלע זו הוא באורך 4 ס"מ.<br>מהו שטח המקבילית?<br><br>
        <svg viewBox="0 0 200 120" style="width:100%; max-width:200px; display:block; margin:10px auto;">
            <polygon points="40,90 180,90 150,30 10,30" fill="#f8fafc" stroke="#c5a059" stroke-width="2"/>
            <line x1="40" y1="30" x2="40" y2="90" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,4"/>
            <rect x="40" y="80" width="10" height="10" fill="none" stroke="#dc2626" stroke-width="1"/>
            <text x="110" y="110" text-anchor="middle" font-size="12" font-weight="bold">10</text>
            <text x="30" y="65" text-anchor="middle" font-size="12" fill="#dc2626" font-weight="bold">4</text>
        </svg>`,
        options: ["40 סמ\"ר", "20 סמ\"ר", "28 סמ\"ר", "14 סמ\"ר"],
        correctAnswer: 0,
        hint: "שטח מקבילית מחושב על ידי הכפלת צלע בגובה היורד אליה (בדיוק כמו שטח מלבן). אין צורך לחלק ב-2!",
        solution_steps: [
            { verbal_explanation: "הנוסחה לחישוב שטח מקבילית היא אורך צלע (בסיס) כפול הגובה המאונך אליה.", math_expression: "S = a × h" },
            { verbal_explanation: "נציב את הנתונים. הבסיס a הוא 10, והגובה h הוא 4.", math_expression: "S = 10 × 4" },
            { verbal_explanation: "נבצע את המכפלה.", math_expression: "S = 40" }
        ],
        final_answer: "40 סמ\"ר"
    },

    // --- שאלה 8 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח מרובעים (מלבן, ריבוע, מקבילית, מעוין, טרפז)",
        question: "שטחה של מקבילית הוא 60 סמ\"ר. ידוע כי הגובה של המקבילית הוא 5 ס\"מ. מהו אורך הצלע אליה יורד הגובה?",
        options: ["12 ס\"מ", "300 ס\"מ", "15 ס\"מ", "10 ס\"מ"],
        correctAnswer: 0,
        hint: "מכיוון ששטח מקבילית הוא צלע כפול הגובה אליה, חלקו את השטח (60) בגובה (5) כדי למצוא את אורך הצלע.",
        solution_steps: [
            { verbal_explanation: "נרשום את נוסחת שטח המקבילית.", math_expression: "S = a × h" },
            { verbal_explanation: "נציב את הנתונים הידועים לנו למשוואה.", math_expression: "60 = a × 5" },
            { verbal_explanation: "נבודד את a על ידי חלוקת שני האגפים ב-5.", math_expression: "a = 60 / 5" },
            { verbal_explanation: "נחשב את החילוק.", math_expression: "a = 12" }
        ],
        final_answer: "12 ס\"מ"
    },

    // --- שאלה 9 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח מרובעים (מלבן, ריבוע, מקבילית, מעוין, טרפז)",
        question: "במקבילית נתונות שתי צלעות סמוכות (אחת ליד השנייה): האחת באורך 6 ס\"מ והשנייה באורך 9 ס\"מ. מהו היקף המקבילית?",
        options: ["30 ס\"מ", "15 ס\"מ", "54 ס\"מ", "36 ס\"מ"],
        correctAnswer: 0,
        hint: "תכונה חשובה של מקבילית: צלעות נגדיות שוות זו לזו. לכן, יש למקבילית שתי צלעות באורך 6 ושתי צלעות באורך 9. חברו את כולן.",
        solution_steps: [
            { verbal_explanation: "במקבילית, כל זוג צלעות נגדיות שוות באורכן. לכן, ההיקף מחושב בדיוק כמו במלבן.", math_expression: "P = 2a + 2b" },
            { verbal_explanation: "נציב את אורך שתי הצלעות הסמוכות.", math_expression: "P = 2 × 6 + 2 × 9" },
            { verbal_explanation: "נחשב את פעולות הכפל.", math_expression: "P = 12 + 18" },
            { verbal_explanation: "נחבר לקבלת ההיקף המלא.", math_expression: "P = 30" }
        ],
        final_answer: "30 ס\"מ"
    },

    // --- שאלה 10 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח מרובעים (מלבן, ריבוע, מקבילית, מעוין, טרפז)",
        question: `במעוין אורכי שני האלכסונים הם 8 ס"מ ו-6 ס"מ.<br>מהו שטח המעוין?<br><br>
        <svg viewBox="0 0 200 150" style="width:100%; max-width:200px; display:block; margin:10px auto;">
            <polygon points="100,10 160,75 100,140 40,75" fill="#f8fafc" stroke="#3b82f6" stroke-width="2"/>
            <line x1="100" y1="10" x2="100" y2="140" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,4"/>
            <line x1="40" y1="75" x2="160" y2="75" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,4"/>
            <text x="110" y="45" font-size="12" fill="#dc2626">8</text>
            <text x="70" y="65" font-size="12" fill="#f59e0b">6</text>
        </svg>`,
        options: ["24 סמ\"ר", "48 סמ\"ר", "14 סמ\"ר", "20 סמ\"ר"],
        correctAnswer: 0,
        hint: "הדרך הקלה ביותר לחשב שטח מעוין (וגם דלתון) היא להכפיל את שני האלכסונים זה בזה, ולחלק את התוצאה ב-2.",
        solution_steps: [
            { verbal_explanation: "נוסחת שטח מעוין המבוססת על אלכסוניו היא מכפלת האלכסונים חלקי שתיים.", math_expression: "S = (d1 × d2) / 2" },
            { verbal_explanation: "נציב את הנתונים. האלכסון הראשון הוא 8 והשני הוא 6.", math_expression: "S = (8 × 6) / 2" },
            { verbal_explanation: "נחשב את המונה.", math_expression: "S = 48 / 2" },
            { verbal_explanation: "נחלק ב-2 למציאת השטח הסופי.", math_expression: "S = 24" }
        ],
        final_answer: "24 סמ\"ר"
    },

    // --- שאלה 11 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח מרובעים (מלבן, ריבוע, מקבילית, מעוין, טרפז)",
        question: "במעוין, אורך כל צלע הוא 5 ס\"מ. מהו היקף המעוין?",
        options: ["20 ס\"מ", "25 ס\"מ", "10 ס\"מ", "15 ס\"מ"],
        correctAnswer: 0,
        hint: "תכונת היסוד של מעוין היא שכל ארבע צלעותיו שוות זו לזו (בדיוק כמו בריבוע). לכן, ההיקף הוא 4 פעמים אורך הצלע.",
        solution_steps: [
            { verbal_explanation: "מעוין הוא מרובע שבו כל ארבע הצלעות שוות באורכן. לכן נוסחת ההיקף זהה לזו של ריבוע.", math_expression: "P = 4a" },
            { verbal_explanation: "נציב את אורך הצלע הנתון (5).", math_expression: "P = 4 × 5" },
            { verbal_explanation: "נבצע את הכפל.", math_expression: "P = 20" }
        ],
        final_answer: "20 ס\"מ"
    },

    // --- שאלה 12 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח מרובעים (מלבן, ריבוע, מקבילית, מעוין, טרפז)",
        question: "היקפו של מעוין הוא 40 ס\"מ. מהו אורך צלעו של המעוין?",
        options: ["10 ס\"מ", "20 ס\"מ", "5 ס\"מ", "8 ס\"מ"],
        correctAnswer: 0,
        hint: "מאחר שכל 4 צלעות המעוין שוות, חלקו את ההיקף הכולל ב-4.",
        solution_steps: [
            { verbal_explanation: "אנו יודעים שההיקף מורכב מ-4 צלעות זהות.", math_expression: "P = 4a" },
            { verbal_explanation: "נציב את ההיקף הנתון למשוואה.", math_expression: "40 = 4a" },
            { verbal_explanation: "נחלק ב-4 כדי לבודד את אורך הצלע a.", math_expression: "a = 40 / 4" },
            { verbal_explanation: "התוצאה היא אורך צלע בודדת.", math_expression: "a = 10" }
        ],
        final_answer: "10 ס\"מ"
    },

    // --- שאלה 13 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח מרובעים (מלבן, ריבוע, מקבילית, מעוין, טרפז)",
        question: `בטרפז, אורך הבסיס התחתון הוא 10 ס"מ, ואורך הבסיס העליון הוא 6 ס"מ.<br>גובה הטרפז הוא 4 ס"מ. מהו שטח הטרפז?<br><br>
        <svg viewBox="0 0 200 120" style="width:100%; max-width:200px; display:block; margin:10px auto;">
            <polygon points="30,100 170,100 130,40 70,40" fill="#f8fafc" stroke="#10b981" stroke-width="2"/>
            <line x1="70" y1="40" x2="70" y2="100" stroke="#dc2626" stroke-width="2" stroke-dasharray="3,3"/>
            <rect x="70" y="90" width="10" height="10" fill="none" stroke="#dc2626" stroke-width="1"/>
            <text x="100" y="115" text-anchor="middle" font-size="12" font-weight="bold">10</text>
            <text x="100" y="30" text-anchor="middle" font-size="12" font-weight="bold">6</text>
            <text x="60" y="75" text-anchor="middle" font-size="12" fill="#dc2626" font-weight="bold">4</text>
        </svg>`,
        options: ["32 סמ\"ר", "64 סמ\"ר", "16 סמ\"ר", "40 סמ\"ר"],
        correctAnswer: 0,
        hint: "הנוסחה לשטח טרפז היא: סכום שני הבסיסים, כפול הגובה, וכל התוצאה חלקי 2.",
        solution_steps: [
            { verbal_explanation: "נרשום את הנוסחה לשטח טרפז. a ו-b הם הבסיסים, h הוא הגובה.", math_expression: "S = ((a + b) × h) / 2" },
            { verbal_explanation: "נציב את נתוני הבסיסים: 10 ו-6. הגובה הוא 4.", math_expression: "S = ((10 + 6) × 4) / 2" },
            { verbal_explanation: "נחשב את הסכום בתוך הסוגריים תחילה.", math_expression: "S = (16 × 4) / 2" },
            { verbal_explanation: "נכפיל 16 ב-4.", math_expression: "S = 64 / 2" },
            { verbal_explanation: "נחלק ב-2 לקבלת השטח.", math_expression: "S = 32" }
        ],
        final_answer: "32 סמ\"ר"
    },

    // --- שאלה 14 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח מרובעים (מלבן, ריבוע, מקבילית, מעוין, טרפז)",
        question: "שטחו של טרפז הוא 50 סמ\"ר. אורך הבסיס הגדול הוא 15 ס\"מ ואורך הבסיס הקטן הוא 5 ס\"מ. חשבו את גובה הטרפז.",
        options: ["5 ס\"מ", "10 ס\"מ", "4 ס\"מ", "2.5 ס\"מ"],
        correctAnswer: 0,
        hint: "הציבו את כל הנתונים בנוסחת השטח של הטרפז. (15 ועוד 5) כפול הגובה, חלקי 2, שווה ל-50.",
        solution_steps: [
            { verbal_explanation: "נציב את הנתונים הידועים בתוך נוסחת השטח של הטרפז.", math_expression: "50 = ((15 + 5) × h) / 2" },
            { verbal_explanation: "נחשב את סכום הבסיסים בתוך הסוגריים.", math_expression: "50 = (20 × h) / 2" },
            { verbal_explanation: "נצמצם את השבר (20 חלקי 2 שווה ל-10).", math_expression: "50 = 10h" },
            { verbal_explanation: "נחלק את המשוואה ב-10 כדי לבודד את הגובה h.", math_expression: "h = 50 / 10 = 5" }
        ],
        final_answer: "5 ס\"מ"
    },

    // --- שאלה 15 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח מרובעים (מלבן, ריבוע, מקבילית, מעוין, טרפז)",
        question: "נתון טרפז שווה שוקיים. אורך הבסיס הגדול הוא 12 ס\"מ, אורך הבסיס הקטן הוא 8 ס\"מ, ואורך שוק אחת הוא 5 ס\"מ. מהו היקף הטרפז?",
        options: ["30 ס\"מ", "25 ס\"מ", "35 ס\"מ", "20 ס\"מ"],
        correctAnswer: 0,
        hint: "היקף הוא תמיד סכום כל ארבע הצלעות העוטפות את הצורה. מאחר שהטרפז הוא שווה שוקיים, שתי השוקיים שלו (הצלעות הנטויות) שוות באורכן. הוסיפו את שני הבסיסים לשתי השוקיים.",
        solution_steps: [
            { verbal_explanation: "בטרפז שווה שוקיים, שתי הצלעות שאינן מקבילות (השוקיים) שוות באורכן. לכן אם שוק אחת היא 5, גם השנייה היא 5.", math_expression: "שוק א' = 5, שוק ב' = 5" },
            { verbal_explanation: "הבסיסים נתונים לנו והם 12 ו-8.", math_expression: "בסיסים: 12, 8" },
            { verbal_explanation: "היקף מרובע הוא סכום כל 4 צלעותיו.", math_expression: "P = 12 + 8 + 5 + 5" },
            { verbal_explanation: "נבצע את פעולת החיבור המלאה.", math_expression: "P = 30" }
        ],
        final_answer: "30 ס\"מ"
    },

    // ========================================================================
    // תת נושא 2: היקף ושטח משולש
    // ========================================================================

    // --- שאלה 16 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח משולש",
        question: `במשולש שלפניכם, אורך הבסיס הוא 10 ס"מ והגובה היורד אליו הוא 6 ס"מ.<br>חשבו את שטח המשולש.<br><br>
        <svg viewBox="0 0 200 120" style="width:100%; max-width:200px; display:block; margin:10px auto;">
            <polygon points="30,100 170,100 80,30" fill="#f8fafc" stroke="#3b82f6" stroke-width="2"/>
            <line x1="80" y1="30" x2="80" y2="100" stroke="#dc2626" stroke-width="2" stroke-dasharray="3,3"/>
            <rect x="80" y="90" width="10" height="10" fill="none" stroke="#dc2626" stroke-width="1"/>
            <text x="100" y="115" text-anchor="middle" font-size="12" font-weight="bold">10</text>
            <text x="70" y="70" text-anchor="middle" font-size="12" fill="#dc2626" font-weight="bold">6</text>
        </svg>`,
        options: ["30 סמ\"ר", "60 סמ\"ר", "16 סמ\"ר", "15 סמ\"ר"],
        correctAnswer: 0,
        hint: "נוסחת שטח משולש היא: בסיס כפול הגובה אליו, וכל התוצאה חלקי 2.",
        solution_steps: [
            { verbal_explanation: "נרשום את הנוסחה לחישוב שטח משולש. a הוא הבסיס ו-h הוא הגובה.", math_expression: "S = (a × h) / 2" },
            { verbal_explanation: "נציב את הנתונים מהשאלה.", math_expression: "S = (10 × 6) / 2" },
            { verbal_explanation: "נחשב את המונה (הכפל).", math_expression: "S = 60 / 2" },
            { verbal_explanation: "נחלק ב-2.", math_expression: "S = 30" }
        ],
        final_answer: "30 סמ\"ר"
    },

    // --- שאלה 17 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח משולש",
        question: "במשולש כלשהו אורך צלע הוא 12 מטרים, ואורך הגובה המאונך לה הוא 5 מטרים. מהו שטח המשולש?",
        options: ["30 מ\"ר", "60 מ\"ר", "17 מ\"ר", "45 מ\"ר"],
        correctAnswer: 0,
        hint: "הכפילו את הצלע (12) בגובה (5), ואז חלקו את התוצאה בחצי.",
        solution_steps: [
            { verbal_explanation: "נשתמש בנוסחה הסטנדרטית לשטח משולש.", math_expression: "S = (צלע × גובה) / 2" },
            { verbal_explanation: "נציב את הנתונים: צלע=12, גובה=5.", math_expression: "S = (12 × 5) / 2" },
            { verbal_explanation: "נבצע את הכפל במונה.", math_expression: "S = 60 / 2" },
            { verbal_explanation: "נחלק לשניים לקבלת השטח.", math_expression: "S = 30" }
        ],
        final_answer: "30 מ\"ר"
    },

    // --- שאלה 18 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח משולש",
        question: "שטחו של משולש הוא 40 סמ\"ר. אורך בסיס המשולש הוא 10 ס\"מ. חשבו את הגובה לצלע זו.",
        options: ["8 ס\"מ", "4 ס\"מ", "20 ס\"מ", "5 ס\"מ"],
        correctAnswer: 0,
        hint: "הציבו בנוסחה: (10 כפול h) חלקי 2 שווה ל-40. לחילופין, זכרו שכאשר נתון שטח משולש, מכפלת הבסיס והגובה צריכה להיות כפולה מהשטח (כלומר 80).",
        solution_steps: [
            { verbal_explanation: "נרשום את משוואת השטח עם הנתונים הידועים.", math_expression: "40 = (10 × h) / 2" },
            { verbal_explanation: "כדי להיפטר מהמכנה, נכפיל את שני האגפים ב-2. השטח מוכפל פי 2.", math_expression: "80 = 10 × h" },
            { verbal_explanation: "נחלק ב-10 כדי לבודד את הגובה h.", math_expression: "h = 80 / 10" },
            { verbal_explanation: "נבצע את החילוק.", math_expression: "h = 8" }
        ],
        final_answer: "8 ס\"מ"
    },

    // --- שאלה 19 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח משולש",
        question: "אורכי צלעות משולש הם 5 ס\"מ, 6 ס\"מ ו-7 ס\"מ. מהו היקף המשולש?",
        options: ["18 ס\"מ", "210 ס\"מ", "30 ס\"מ", "11 ס\"מ"],
        correctAnswer: 0,
        hint: "היקף של כל מצולע הוא פשוט סכום אורכי הצלעות העוטפות אותו.",
        solution_steps: [
            { verbal_explanation: "היקף המשולש (מסומן לרוב ב-P) מחושב על ידי חיבור שלושת צלעותיו.", math_expression: "P = a + b + c" },
            { verbal_explanation: "נציב את אורכי הצלעות הנתונות בשאלה.", math_expression: "P = 5 + 6 + 7" },
            { verbal_explanation: "נחבר את המספרים בהדרגה.", math_expression: "5 + 6 = 11" },
            { verbal_explanation: "נוסיף את הצלע השלישית.", math_expression: "11 + 7 = 18" }
        ],
        final_answer: "18 ס\"מ"
    },

    // --- שאלה 20 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח משולש",
        question: `נתון משולש ישר זווית. אורכי הניצבים (הצלעות שיוצרות את הזווית הישרה) הם 6 ס"מ ו-8 ס"מ. מהו שטח המשולש?<br><br>
        <svg viewBox="0 0 150 150" style="width:100%; max-width:150px; display:block; margin:10px auto;">
            <polygon points="30,120 120,120 30,30" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
            <rect x="30" y="110" width="10" height="10" fill="none" stroke="#dc2626" stroke-width="1"/>
            <text x="75" y="135" text-anchor="middle" font-size="12" font-weight="bold">8</text>
            <text x="15" y="75" text-anchor="middle" font-size="12" font-weight="bold">6</text>
        </svg>`,
        options: ["24 סמ\"ר", "48 סמ\"ר", "14 סמ\"ר", "10 סמ\"ר"],
        correctAnswer: 0,
        hint: "במשולש ישר זווית, כל אחד מהניצבים יכול לשמש כבסיס והניצב השני הוא הגובה היורד אליו. פשוט הכפילו ניצב בניצב וחלקו ב-2.",
        solution_steps: [
            { verbal_explanation: "במשולש ישר זווית, הניצבים מאונכים זה לזה, לכן אחד מהם משמש כבסיס והשני כגובה.", math_expression: "S = (ניצב א' × ניצב ב') / 2" },
            { verbal_explanation: "נציב את אורכי הניצבים.", math_expression: "S = (6 × 8) / 2" },
            { verbal_explanation: "נחשב את המכפלה במונה.", math_expression: "S = 48 / 2" },
            { verbal_explanation: "נחלק בשתיים לקבלת השטח.", math_expression: "S = 24" }
        ],
        final_answer: "24 סמ\"ר"
    },

    // --- שאלה 21 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח משולש",
        question: "במשולש ישר זווית, אורכי הניצבים הם 3 ס\"מ ו-4 ס\"מ. מהו אורך היתר (הצלע הארוכה ביותר מול הזווית הישרה)?",
        options: ["5 ס\"מ", "7 ס\"מ", "25 ס\"מ", "12 ס\"מ"],
        correctAnswer: 0,
        hint: "השתמשו במשפט פיתגורס: ניצב בריבוע פלוס ניצב בריבוע שווה ליתר בריבוע.",
        solution_steps: [
            { verbal_explanation: "משפט פיתגורס קובע את הקשר בין צלעות משולש ישר זווית.", math_expression: "a² + b² = c²" },
            { verbal_explanation: "נציב את הניצבים הידועים (3 ו-4) בנוסחה כדי למצוא את היתר c.", math_expression: "3² + 4² = c²" },
            { verbal_explanation: "נחשב את הריבועים.", math_expression: "9 + 16 = c²" },
            { verbal_explanation: "נחבר את התוצאות.", math_expression: "25 = c²" },
            { verbal_explanation: "נוציא שורש ריבועי כדי למצוא את אורך היתר.", math_expression: "c = √25 = 5" }
        ],
        final_answer: "5 ס\"מ"
    },

    // --- שאלה 22 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח משולש",
        question: "מהו היקף המשולש ישר הזווית שאורכי ניצביו הם 3 ס\"מ ו-4 ס\"מ?",
        options: ["12 ס\"מ", "14 ס\"מ", "7 ס\"מ", "25 ס\"מ"],
        correctAnswer: 0,
        hint: "כדי למצוא את ההיקף עליכם לדעת את כל שלוש הצלעות. מצאתם בשאלה הקודמת שהיתר הוא 5. עכשיו חברו את הניצבים והיתר יחד.",
        solution_steps: [
            { verbal_explanation: "תחילה יש לוודא שאנו יודעים את כל 3 הצלעות. הניצבים הם 3 ו-4. היתר מחושב בעזרת פיתגורס.", math_expression: "יתר = √(3² + 4²) = 5" },
            { verbal_explanation: "ההיקף הוא סכום כל הצלעות.", math_expression: "P = 3 + 4 + 5" },
            { verbal_explanation: "נחבר בהדרגה.", math_expression: "P = 7 + 5" },
            { verbal_explanation: "נקבל את ההיקף השלם.", math_expression: "P = 12" }
        ],
        final_answer: "12 ס\"מ"
    },

    // --- שאלה 23 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח משולש",
        question: "שטחו של משולש ישר זווית הוא 20 סמ\"ר. אורך אחד הניצבים הוא 4 ס\"מ. מהו אורך הניצב השני?",
        options: ["10 ס\"מ", "5 ס\"מ", "8 ס\"מ", "16 ס\"מ"],
        correctAnswer: 0,
        hint: "שטח משולש ישר זווית הוא ניצב כפול ניצב חלקי 2. הציבו: (4 כפול הניצב השני) חלקי 2 שווה 20.",
        solution_steps: [
            { verbal_explanation: "נרשום את נוסחת השטח למשולש ישר זווית.", math_expression: "20 = (4 × b) / 2" },
            { verbal_explanation: "נכפיל את שני האגפים ב-2 כדי לבטל את המכנה.", math_expression: "40 = 4 × b" },
            { verbal_explanation: "נחלק ב-4 כדי למצוא את הניצב החסר b.", math_expression: "b = 40 / 4" },
            { verbal_explanation: "נחשב את החילוק.", math_expression: "b = 10" }
        ],
        final_answer: "10 ס\"מ"
    },

    // --- שאלה 24 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח משולש",
        question: `במשולש קהה זווית, אורך צלע הבסיס הוא 8 ס"מ. הגובה החיצוני היורד להמשך צלע הבסיס הוא באורך 5 ס"מ.<br>מהו שטח המשולש?<br><br>
        <svg viewBox="0 0 200 120" style="width:100%; max-width:200px; display:block; margin:10px auto;">
            <polygon points="100,100 170,100 40,20" fill="#f8fafc" stroke="#10b981" stroke-width="2"/>
            <line x1="40" y1="100" x2="100" y2="100" stroke="#0f172a" stroke-dasharray="4,4"/>
            <line x1="40" y1="20" x2="40" y2="100" stroke="#dc2626" stroke-width="2" stroke-dasharray="2,2"/>
            <rect x="40" y="90" width="10" height="10" fill="none" stroke="#dc2626" stroke-width="1"/>
            
            <text x="135" y="115" text-anchor="middle" font-size="12" font-weight="bold">8</text>
            <text x="25" y="65" text-anchor="middle" font-size="12" fill="#dc2626" font-weight="bold">5</text>
        </svg>`,
        options: ["20 סמ\"ר", "40 סמ\"ר", "13 סמ\"ר", "26 סמ\"ר"],
        correctAnswer: 0,
        hint: "במשולש קהה זווית, הגובה לפעמים יורד מחוץ למשולש (להמשך הצלע). עם זאת, חישוב השטח נשאר זהה בדיוק: הבסיס המקורי (8) כפול הגובה (5) חלקי 2.",
        solution_steps: [
            { verbal_explanation: "מיקום הגובה (בפנים או בחוץ) אינו משנה את נוסחת השטח. הנוסחה נשארת בסיס כפול גובה חלקי שתיים.", math_expression: "S = (a × h) / 2" },
            { verbal_explanation: "שימו לב: יש להשתמש רק באורך הבסיס האמיתי של המשולש (8), ולא להוסיף את ההמשך המקווקו.", math_expression: "S = (8 × 5) / 2" },
            { verbal_explanation: "נחשב את המונה.", math_expression: "S = 40 / 2" },
            { verbal_explanation: "נחלק ונקבל את השטח.", math_expression: "S = 20" }
        ],
        final_answer: "20 סמ\"ר"
    },

    // --- שאלה 25 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח משולש",
        question: "במשולש שווה שוקיים, אורך הבסיס הוא 10 ס\"מ. אורך אחת השוקיים (הצלעות השוות) הוא 13 ס\"מ. מהו היקף המשולש?",
        options: ["36 ס\"מ", "23 ס\"מ", "33 ס\"מ", "26 ס\"מ"],
        correctAnswer: 0,
        hint: "אם מדובר במשולש שווה שוקיים, שתי השוקיים שוות זו לזו. לכן, אם שוק אחת היא 13 ס\"מ, גם השנייה היא 13 ס\"מ. חברו הכל יחד.",
        solution_steps: [
            { verbal_explanation: "במשולש שווה שוקיים יש שתי צלעות זהות באורכן. במקרה זה, כל שוק אורכה 13 ס\"מ.", math_expression: "שוק א' = 13, שוק ב' = 13" },
            { verbal_explanation: "אורך הבסיס נתון גם הוא.", math_expression: "בסיס = 10" },
            { verbal_explanation: "היקף הוא סכום כל שלוש הצלעות.", math_expression: "P = 13 + 13 + 10" },
            { verbal_explanation: "נחבר את כל המספרים.", math_expression: "P = 26 + 10 = 36" }
        ],
        final_answer: "36 ס\"מ"
    },

    // --- שאלה 26 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח משולש",
        question: `במשולש שווה שוקיים אורך הבסיס הוא 6 ס"מ. אורך כל שוק הוא 5 ס"מ.<br>חשבו את שטח המשולש.<br>(הדרכה: הגובה לבסיס במשולש שווה שוקיים חוצה את הבסיס, לכן הוא יוצר משולש ישר זווית עם חצי בסיס ששווה ל-3).<br><br>
        <svg viewBox="0 0 200 130" style="width:100%; max-width:200px; display:block; margin:0 auto;">
            <polygon points="40,110 160,110 100,30" fill="#f8fafc" stroke="#0f172a" stroke-width="2"/>
            <line x1="100" y1="30" x2="100" y2="110" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,4"/>
            <rect x="100" y="100" width="10" height="10" fill="none" stroke="#dc2626" stroke-width="1"/>
            <text x="70" y="125" font-size="10">3</text>
            <text x="130" y="125" font-size="10">3</text>
            <text x="60" y="60" font-size="12" font-weight="bold">5</text>
            <text x="140" y="60" font-size="12" font-weight="bold">5</text>
            <text x="105" y="70" font-size="12" fill="#dc2626" font-weight="bold">h</text>
        </svg>`,
        options: ["12 סמ\"ר", "15 סמ\"ר", "24 סמ\"ר", "30 סמ\"ר"],
        correctAnswer: 0,
        hint: "השתמשו במשפט פיתגורס בחצי משולש כדי למצוא את הגובה (h): 3 בריבוע ועוד הגובה בריבוע שווה 5 בריבוע. לאחר שמצאתם את הגובה, חשבו שטח רגיל.",
        solution_steps: [
            { verbal_explanation: "הגובה מחלק את המשולש שווה השוקיים לשני משולשים ישרי זווית זהים. הבסיס של חצי משולש כזה הוא 3 (חצי מ-6) והיתר הוא 5.", math_expression: "בסיס קטן = 3, יתר = 5" },
            { verbal_explanation: "נשתמש במשפט פיתגורס למציאת הגובה המאונך (h).", math_expression: "3² + h² = 5²" },
            { verbal_explanation: "נחשב את הריבועים ונעביר אגף.", math_expression: "9 + h² = 25  =>  h² = 16" },
            { verbal_explanation: "נוציא שורש כדי למצוא את הגובה.", math_expression: "h = 4" },
            { verbal_explanation: "כעת נחשב את שטח המשולש הגדול כולו: בסיס מלא (6) כפול הגובה שמצאנו (4) חלקי 2.", math_expression: "S = (6 × 4) / 2" },
            { verbal_explanation: "נחשב את התוצאה.", math_expression: "S = 24 / 2 = 12" }
        ],
        final_answer: "12 סמ\"ר"
    },

    // --- שאלה 27 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח משולש",
        question: "שטחו של משולש הוא 100 מ\"ר. הגובה של המשולש שווה ל-10 מטרים. מהו אורך הבסיס אליו יורד הגובה?",
        options: ["20 מטרים", "10 מטרים", "50 מטרים", "5 מטרים"],
        correctAnswer: 0,
        hint: "הציבו בנוסחה: (בסיס כפול 10) חלקי 2 שווה 100. הכפילו את שני האגפים ב-2 ואז חלקו ב-10.",
        solution_steps: [
            { verbal_explanation: "נרשום את משוואת השטח של משולש ונציב את הנתונים הידועים.", math_expression: "100 = (a × 10) / 2" },
            { verbal_explanation: "כדי לבטל את המכנה, נכפיל את המשוואה פי 2.", math_expression: "200 = a × 10" },
            { verbal_explanation: "נחלק ב-10 כדי לבודד את הבסיס a.", math_expression: "a = 200 / 10" },
            { verbal_explanation: "התוצאה תיתן את אורך הבסיס.", math_expression: "a = 20" }
        ],
        final_answer: "20 מטרים"
    },

    // --- שאלה 28 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח משולש",
        question: "במשולש ישר זווית אורך היתר הוא 10 ס\"מ ואורך אחד הניצבים הוא 6 ס\"מ. מהו שטח המשולש?",
        options: ["24 סמ\"ר", "48 סמ\"ר", "30 סמ\"ר", "60 סמ\"ר"],
        correctAnswer: 0,
        hint: "כדי לחשב שטח של משולש ישר זווית, עליכם לדעת את שני הניצבים. היעזרו בפיתגורס כדי למצוא את הניצב החסר, ואז הכפילו ניצב בניצב וחלקו ב-2.",
        solution_steps: [
            { verbal_explanation: "תחילה נמצא את הניצב החסר בעזרת משפט פיתגורס. ניצב ידוע הוא 6 והיתר הוא 10.", math_expression: "6² + b² = 10²" },
            { verbal_explanation: "נחשב את הריבועים.", math_expression: "36 + b² = 100" },
            { verbal_explanation: "נעביר את 36 ונוציא שורש למציאת הניצב החסר.", math_expression: "b² = 64  =>  b = 8" },
            { verbal_explanation: "כעת, כשיש לנו את שני הניצבים (6 ו-8), נחשב שטח: ניצב כפול ניצב חלקי 2.", math_expression: "S = (6 × 8) / 2" },
            { verbal_explanation: "נחשב את המנה.", math_expression: "S = 48 / 2 = 24" }
        ],
        final_answer: "24 סמ\"ר"
    },

    // --- שאלה 29 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח משולש",
        question: "מהו היקף משולש שווה צלעות שאורך צלעו הוא 15 ס\"מ?",
        options: ["45 ס\"מ", "30 ס\"מ", "225 ס\"מ", "60 ס\"מ"],
        correctAnswer: 0,
        hint: "במשולש שווה צלעות, כל שלוש הצלעות בעלות אורך זהה. הכפילו את הצלע הנתונה ב-3.",
        solution_steps: [
            { verbal_explanation: "במשולש שווה צלעות, כל שלוש הצלעות שוות לחלוטין.", math_expression: "a = b = c = 15" },
            { verbal_explanation: "ההיקף מחושב על ידי הכפלת הצלע ב-3.", math_expression: "P = 3 × 15" },
            { verbal_explanation: "נבצע את המכפלה.", math_expression: "P = 45" }
        ],
        final_answer: "45 ס\"מ"
    },

    // --- שאלה 30 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח משולש",
        question: `לפניכם צורה מורכבת (דמוית בית) הבנויה ממלבן ועליו משולש.<br>
        אורך מלבן הבית הוא 10 מ' וגובהו 5 מ'. <br>
        המשולש שמעל המלבן מונח על הצלע כולה, וגובהו הוא 4 מ'. <br>
        מהו השטח הכולל של הצורה?<br><br>
        <svg viewBox="0 0 200 160" style="width:100%; max-width:200px; display:block; margin:10px auto;">
            <rect x="50" y="80" width="100" height="60" fill="#f8fafc" stroke="#3b82f6" stroke-width="2"/>
            <polygon points="50,80 150,80 100,30" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
            <line x1="100" y1="30" x2="100" y2="80" stroke="#dc2626" stroke-width="2" stroke-dasharray="3,3"/>
            <text x="100" y="155" text-anchor="middle" font-size="12" font-weight="bold">10</text>
            <text x="35" y="115" font-size="12" font-weight="bold">5</text>
            <text x="110" y="65" font-size="12" fill="#dc2626" font-weight="bold">4</text>
        </svg>`,
        options: ["70 מ\"ר", "50 מ\"ר", "90 מ\"ר", "60 מ\"ר"],
        correctAnswer: 0,
        hint: "חשבו את שטח המלבן בנפרד (10 כפול 5). לאחר מכן חשבו את שטח המשולש בנפרד. הבסיס של המשולש הוא צלע המלבן (10) והגובה שלו 4. חברו את שני השטחים.",
        solution_steps: [
            { verbal_explanation: "כדי לחשב שטח של צורה מורכבת, נפרק אותה לצורות פשוטות יותר ונחבר את שטחיהן.", math_expression: "שטח כולל = שטח מלבן + שטח משולש" },
            { verbal_explanation: "נחשב את שטח המלבן. אורך כפול גובה.", math_expression: "S_rect = 10 × 5 = 50" },
            { verbal_explanation: "נחשב את שטח המשולש. הבסיס שלו זהה לרוחב המלבן (10) והגובה נתון (4).", math_expression: "S_tri = (10 × 4) / 2 = 40 / 2 = 20" },
            { verbal_explanation: "נחבר את שני השטחים שמצאנו לקבלת השטח הכולל.", math_expression: "S_total = 50 + 20 = 70" }
        ],
        final_answer: "70 מ\"ר"
    },// ========================================================================
    // תת נושא 3: היקף ושטח עיגול
    // ========================================================================

    // --- שאלה 31 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח עיגול",
        question: `נתון מעגל שרדיוסו הוא 5 ס"מ. מהו שטח העיגול?<br>(ניתן להשאיר את התשובה עם פאי - π).<br><br>
        <svg viewBox="0 0 200 150" style="width:100%; max-width:180px; display:block; margin:10px auto;">
            <circle cx="100" cy="75" r="60" fill="#f8fafc" stroke="#3b82f6" stroke-width="2"/>
            <line x1="100" y1="75" x2="160" y2="75" stroke="#dc2626" stroke-width="2"/>
            <circle cx="100" cy="75" r="4" fill="#0f172a"/>
            <text x="130" y="65" font-size="14" font-weight="bold" fill="#dc2626">5</text>
        </svg>`,
        options: ["25π סמ\"ר", "10π סמ\"ר", "5π סמ\"ר", "100π סמ\"ר"],
        correctAnswer: 0,
        hint: "נוסחת שטח העיגול היא π כפול הרדיוס בריבוע (S = π × r²). הציבו את הרדיוס הנתון (5).",
        solution_steps: [
            { verbal_explanation: "נרשום את הנוסחה לחישוב שטח עיגול.", math_expression: "S = π × r²" },
            { verbal_explanation: "נציב את ערך הרדיוס הנתון (r = 5) בתוך הנוסחה.", math_expression: "S = π × 5²" },
            { verbal_explanation: "נחשב את החזקה של 5.", math_expression: "5² = 25" },
            { verbal_explanation: "נרשום את השטח הסופי עם פאי (π).", math_expression: "S = 25π" }
        ],
        final_answer: "25π סמ\"ר"
    },

    // --- שאלה 32 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח עיגול",
        question: "מהו היקף המעגל שרדיוסו הוא 5 ס\"מ? (השאירו עם π).",
        options: ["10π ס\"מ", "25π ס\"מ", "5π ס\"מ", "15π ס\"מ"],
        correctAnswer: 0,
        hint: "נוסחת היקף המעגל היא פעמיים π כפול הרדיוס (P = 2 × π × r).",
        solution_steps: [
            { verbal_explanation: "נרשום את הנוסחה למציאת היקף מעגל.", math_expression: "P = 2 × π × r" },
            { verbal_explanation: "נציב את הרדיוס (5) בנוסחה.", math_expression: "P = 2 × π × 5" },
            { verbal_explanation: "נכפיל את המספרים.", math_expression: "2 × 5 = 10" },
            { verbal_explanation: "נרשום את ההיקף הסופי עם הפאי.", math_expression: "P = 10π" }
        ],
        final_answer: "10π ס\"מ"
    },

    // --- שאלה 33 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח עיגול",
        question: `קוטר של מעגל הוא 14 ס"מ. מהו שטח העיגול?<br><br>
        <svg viewBox="0 0 200 150" style="width:100%; max-width:180px; display:block; margin:10px auto;">
            <circle cx="100" cy="75" r="60" fill="#f8fafc" stroke="#10b981" stroke-width="2"/>
            <line x1="40" y1="75" x2="160" y2="75" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5,5"/>
            <circle cx="100" cy="75" r="4" fill="#0f172a"/>
            <text x="100" y="65" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">d = 14</text>
        </svg>`,
        options: ["49π סמ\"ר", "196π סמ\"ר", "14π סמ\"ר", "7π סמ\"ר"],
        correctAnswer: 0,
        hint: "היזהרו: הנוסחה לשטח משתמשת ברדיוס ולא בקוטר! הרדיוס הוא בדיוק חצי מהקוטר. מצאו את הרדיוס ואז חשבו שטח.",
        solution_steps: [
            { verbal_explanation: "הקוטר כולו הוא 14. הרדיוס הוא מחצית מהקוטר.", math_expression: "r = 14 / 2 = 7" },
            { verbal_explanation: "נציב את הרדיוס שמצאנו בנוסחת השטח.", math_expression: "S = π × 7²" },
            { verbal_explanation: "נעלה את 7 בריבוע.", math_expression: "7² = 49" },
            { verbal_explanation: "נקבל את השטח המלא.", math_expression: "S = 49π" }
        ],
        final_answer: "49π סמ\"ר"
    },

    // --- שאלה 34 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח עיגול",
        question: "היקפו של מעגל הוא 18π ס\"מ. מהו אורך הרדיוס שלו?",
        options: ["9 ס\"מ", "18 ס\"מ", "36 ס\"מ", "3 ס\"מ"],
        correctAnswer: 0,
        hint: "הציבו את ההיקף הנתון בנוסחה: 2 × π × r = 18π. ה-π מצטמצם משני האגפים.",
        solution_steps: [
            { verbal_explanation: "נרשום את הנוסחה ומשוואת ההיקף.", math_expression: "2 × π × r = 18π" },
            { verbal_explanation: "ניתן לחלק את שני האגפים ב-π, וכך הוא מתבטל.", math_expression: "2 × r = 18" },
            { verbal_explanation: "נחלק ב-2 למציאת הרדיוס.", math_expression: "r = 18 / 2" },
            { verbal_explanation: "נחשב את המנה.", math_expression: "r = 9" }
        ],
        final_answer: "9 ס\"מ"
    },

    // --- שאלה 35 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח עיגול",
        question: "שטחו של עיגול הוא 100π סמ\"ר. מהו אורך הקוטר של המעגל?",
        options: ["20 ס\"מ", "10 ס\"מ", "50 ס\"מ", "100 ס\"מ"],
        correctAnswer: 0,
        hint: "קודם כל מצאו את הרדיוס. π × r² = 100π. לאחר מכן, זכרו שהשאלה מבקשת את אורך ה-ק-ו-ט-ר (פעמיים הרדיוס).",
        solution_steps: [
            { verbal_explanation: "נבנה משוואה על סמך נוסחת השטח.", math_expression: "π × r² = 100π" },
            { verbal_explanation: "נחלק ב-π משני האגפים.", math_expression: "r² = 100" },
            { verbal_explanation: "נוציא שורש כדי למצוא את הרדיוס.", math_expression: "r = √100 = 10" },
            { verbal_explanation: "השאלה מבקשת את הקוטר (d), שהוא פעמיים הרדיוס.", math_expression: "d = 2 × 10 = 20" }
        ],
        final_answer: "20 ס\"מ"
    },

    // --- שאלה 36 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח עיגול",
        question: `צורה מורכבת מחצי מעגל המונח על קוטר שאורכו 8 ס"מ. מהו שטח חצי העיגול הזה?<br><br>
        <svg viewBox="0 0 200 120" style="width:100%; max-width:200px; display:block; margin:10px auto;">
            <path d="M 40 90 A 60 60 0 0 1 160 90 Z" fill="#e0f2fe" stroke="#3b82f6" stroke-width="2"/>
            <line x1="40" y1="90" x2="160" y2="90" stroke="#0f172a" stroke-width="3"/>
            <circle cx="100" cy="90" r="4" fill="#dc2626"/>
            <text x="100" y="110" text-anchor="middle" font-size="12" font-weight="bold">8</text>
        </svg>`,
        options: ["8π סמ\"ר", "16π סמ\"ר", "32π סמ\"ר", "4π סמ\"ר"],
        correctAnswer: 0,
        hint: "חשבו את השטח של עיגול שלם, ולאחר מכן חלקו את התוצאה ב-2. אל תשכחו שהקוטר הוא 8, לכן הרדיוס הוא 4.",
        solution_steps: [
            { verbal_explanation: "נמצא את הרדיוס מתוך הקוטר הנתון.", math_expression: "r = 8 / 2 = 4" },
            { verbal_explanation: "נחשב את שטחו של עיגול שלם בעל רדיוס 4.", math_expression: "S_שלם = π × 4² = 16π" },
            { verbal_explanation: "מכיוון שמדובר רק בחצי עיגול, נחלק את השטח בשתיים.", math_expression: "S_חצי = 16π / 2" },
            { verbal_explanation: "נחשב לקבלת השטח הסופי.", math_expression: "8π" }
        ],
        final_answer: "8π סמ\"ר"
    },

    // --- שאלה 37 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח עיגול",
        question: "מהו היקף הצורה שתוארה בשאלה הקודמת? (חצי מעגל בעל קוטר 8 ס\"מ כולל הקו הישר של הקוטר שסוגר את הצורה מלמטה).",
        options: ["4π + 8 ס\"מ", "8π ס\"מ", "4π ס\"מ", "8π + 8 ס\"מ"],
        correctAnswer: 0,
        hint: "היקף צורה הוא סך כל הקווים העוטפים אותה. חשבו את אורך 'קשת' חצי המעגל, ואל תשכחו לחבר גם את אורך הקוטר הישר שסוגר אותה.",
        solution_steps: [
            { verbal_explanation: "נחשב תחילה את היקפו של מעגל שלם עם קוטר 8 (רדיוס 4).", math_expression: "P_שלם = 2 × π × 4 = 8π" },
            { verbal_explanation: "הקשת העגולה היא רק חצי ממעגל שלם.", math_expression: "אורך הקשת = 8π / 2 = 4π" },
            { verbal_explanation: "ההיקף הכולל של הצורה מורכב מהקשת העגולה בתוספת הקו הישר (הקוטר) שסוגר אותה.", math_expression: "היקף כולל = 4π + 8" }
        ],
        final_answer: "4π + 8 ס\"מ"
    },

    // --- שאלה 38 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח עיגול",
        question: "בכיכר מרכזית ישנה מדשאה בצורת עיגול שרדיוסו 10 מטרים. העירייה רוצה לשתול דשא על כל הכיכר. בהנחה ש-π הוא בערך 3.14, כמה מ\"ר של דשא נדרשים בקירוב?",
        options: ["314 מ\"ר", "62.8 מ\"ר", "100 מ\"ר", "31.4 מ\"ר"],
        correctAnswer: 0,
        hint: "חשבו את השטח כרגיל עם π, ולאחר מכן הכפילו את התוצאה ב-3.14 במקום להשאיר את האות.",
        solution_steps: [
            { verbal_explanation: "נחשב את השטח העיוני באמצעות פאי.", math_expression: "S = π × 10² = 100π" },
            { verbal_explanation: "נציב את הערך המקורב של פאי כ-3.14 כפי שנתבקש.", math_expression: "S = 100 × 3.14" },
            { verbal_explanation: "הכפלה ב-100 מזיזה את הנקודה העשרונית שני מקומות ימינה.", math_expression: "S = 314" }
        ],
        final_answer: "314 מ\"ר"
    },

    // --- שאלה 39 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח עיגול",
        question: `טבעת (טבעת שטחית) נוצרת משני מעגלים בעלי מרכז משותף. הרדיוס של המעגל הפנימי הקטן הוא 3 ס"מ, והרדיוס של המעגל החיצוני הגדול הוא 5 ס"מ. מהו שטח הטבעת? (השטח הכלוא בין שני המעגלים).<br><br>
        <svg viewBox="0 0 200 200" style="width:100%; max-width:180px; display:block; margin:10px auto;">
            <circle cx="100" cy="100" r="80" fill="#cbd5e1" stroke="#0f172a" stroke-width="2"/>
            <circle cx="100" cy="100" r="48" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
            <circle cx="100" cy="100" r="4" fill="#dc2626"/>
            <line x1="100" y1="100" x2="148" y2="100" stroke="#ef4444" stroke-width="2"/>
            <line x1="100" y1="100" x2="100" y2="20" stroke="#3b82f6" stroke-width="2"/>
            <text x="120" y="90" font-size="12" font-weight="bold" fill="#ef4444">3</text>
            <text x="85" y="60" font-size="12" font-weight="bold" fill="#3b82f6">5</text>
        </svg>`,
        options: ["16π סמ\"ר", "25π סמ\"ר", "9π סמ\"ר", "34π סמ\"ר"],
        correctAnswer: 0,
        hint: "חשבו את השטח של המעגל החיצוני הגדול כולו. מתוכו, חסרו (הפחיתו) את השטח של המעגל הפנימי הקטן.",
        solution_steps: [
            { verbal_explanation: "נחשב את שטח המעגל הגדול כולו (רדיוס 5).", math_expression: "S_גדול = π × 5² = 25π" },
            { verbal_explanation: "נחשב את שטח המעגל הקטן (רדיוס 3).", math_expression: "S_קטן = π × 3² = 9π" },
            { verbal_explanation: "כדי למצוא את שטח הטבעת (החלק המלא בלבד), נחסר את השטח הריק מהשטח הגדול.", math_expression: "S_טבעת = 25π - 9π" },
            { verbal_explanation: "נבצע את פעולת החיסור.", math_expression: "16π" }
        ],
        final_answer: "16π סמ\"ר"
    },

    // --- שאלה 40 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח עיגול",
        question: "גלגל של אופניים, שהיקפו 2 מטרים, התגלגל לאורך כביש ישר. לאחר 50 סיבובים שלמים, איזה מרחק עבר האופניים?",
        options: ["100 מטרים", "50 מטרים", "200 מטרים", "25 מטרים"],
        correctAnswer: 0,
        hint: "סיבוב אחד שלם של גלגל שווה בדיוק לאורך ההיקף שלו. הכפילו את ההיקף במספר הסיבובים.",
        solution_steps: [
            { verbal_explanation: "בכל פעם שגלגל משלים סיבוב אחד, הוא מכסה על פני הקרקע מרחק השווה להיקפו המלא.", math_expression: "מרחק לסיבוב = 2 מטרים" },
            { verbal_explanation: "נתון שהגלגל ביצע 50 סיבובים שלמים.", math_expression: "מרחק כולל = 50 × 2" },
            { verbal_explanation: "נחשב את התוצאה.", math_expression: "100 מטרים" }
        ],
        final_answer: "100 מטרים"
    },

    // --- שאלה 41 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח עיגול",
        question: `עיגול חסום בתוך ריבוע שאורך צלעו הוא 10 ס"מ (העיגול נוגע בצלעות הריבוע מבפנים). מהו שטח העיגול החסום?<br><br>
        <svg viewBox="0 0 200 200" style="width:100%; max-width:180px; display:block; margin:10px auto;">
            <rect x="20" y="20" width="160" height="160" fill="none" stroke="#0f172a" stroke-width="2"/>
            <circle cx="100" cy="100" r="80" fill="#e0f2fe" stroke="#3b82f6" stroke-width="2"/>
            <line x1="20" y1="190" x2="180" y2="190" stroke="#dc2626" stroke-width="1" stroke-dasharray="2,2"/>
            <text x="100" y="195" text-anchor="middle" font-size="12" fill="#dc2626" font-weight="bold">10 ס"מ</text>
        </svg>`,
        options: ["25π סמ\"ר", "100π סמ\"ר", "50π סמ\"ר", "20π סמ\"ר"],
        correctAnswer: 0,
        hint: "כאשר עיגול חסום בריבוע, הקוטר שלו שווה בדיוק לאורך צלע הריבוע (10). מצאו את הרדיוס וחשבו שטח.",
        solution_steps: [
            { verbal_explanation: "ניתן לראות מהאיור שקוטר העיגול נמתח מקצה לקצה בתוך הריבוע, ולכן הוא זהה באורכו לצלע הריבוע.", math_expression: "קוטר = 10" },
            { verbal_explanation: "רדיוס הוא חצי מהקוטר.", math_expression: "r = 10 / 2 = 5" },
            { verbal_explanation: "נציב את הרדיוס שמצאנו בנוסחת שטח העיגול.", math_expression: "S = π × 5²" },
            { verbal_explanation: "נחשב את החזקה.", math_expression: "25π" }
        ],
        final_answer: "25π סמ\"ר"
    },

    // --- שאלה 42 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח עיגול",
        question: "אם נכפיל את הרדיוס של עיגול מסוים פי 2, מה יקרה לשטח העיגול?",
        options: ["יגדל פי 4", "יגדל פי 2", "ישאר ללא שינוי", "יגדל פי π"],
        correctAnswer: 0,
        hint: "בנוסחת השטח (π × r²), הרדיוס עולה בריבוע. אם נציב (2r) בריבוע, נקבל 4r².",
        solution_steps: [
            { verbal_explanation: "שטח עיגול מקורי מחושב כך.", math_expression: "S_1 = π × r²" },
            { verbal_explanation: "שטח עיגול חדש עם רדיוס כפול (2r) מחושב על ידי הכנסת ה-2r כולו לסוגריים.", math_expression: "S_2 = π × (2r)²" },
            { verbal_explanation: "נעלה את תוכן הסוגריים בריבוע (גם את 2 וגם את r).", math_expression: "S_2 = π × 4r² = 4 × (π × r²)" },
            { verbal_explanation: "אנו רואים שהשטח החדש הוא בדיוק פי 4 מהשטח המקורי.", math_expression: "השטח גדל פי 4" }
        ],
        final_answer: "יגדל פי 4"
    },

    // --- שאלה 43 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח עיגול",
        question: "מהו שטחו של 'רבע מעגל' שהרדיוס שלו הוא 6 ס\"מ?",
        options: ["9π סמ\"ר", "36π סמ\"ר", "18π סמ\"ר", "12π סמ\"ר"],
        correctAnswer: 0,
        hint: "חשבו את השטח כאילו מדובר בעיגול שלם, ולאחר מכן חלקו את התוצאה ב-4.",
        solution_steps: [
            { verbal_explanation: "נחשב תחילה את שטחו של עיגול מלא עם רדיוס 6.", math_expression: "S_שלם = π × 6² = 36π" },
            { verbal_explanation: "רבע מעגל הוא בדיוק חתיכה אחת מתוך 4 חלקים שווים.", math_expression: "S_רבע = 36π / 4" },
            { verbal_explanation: "נבצע את החילוק.", math_expression: "9π" }
        ],
        final_answer: "9π סמ\"ר"
    },

    // --- שאלה 44 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח עיגול",
        question: "משולש ישר זווית חסום בתוך חצי מעגל. יתר המשולש (הצלע הארוכה) מתלכד עם קוטר חצי המעגל. אורך היתר הוא 10 ס\"מ. מהו שטח חצי העיגול?",
        options: ["12.5π סמ\"ר", "25π סמ\"ר", "100π סמ\"ר", "50π סמ\"ר"],
        correctAnswer: 0,
        hint: "מכיוון שהיתר הוא קוטר המעגל, הקוטר שווה 10. מצאו את הרדיוס (5), חשבו שטח מעגל שלם וזכרו לחלק ב-2.",
        solution_steps: [
            { verbal_explanation: "הקוטר נתון לנו והוא שווה לאורך היתר, 10.", math_expression: "d = 10" },
            { verbal_explanation: "הרדיוס הוא חצי מהקוטר.", math_expression: "r = 5" },
            { verbal_explanation: "נחשב שטח של עיגול מלא.", math_expression: "S_שלם = π × 5² = 25π" },
            { verbal_explanation: "אנו צריכים רק את השטח של חצי העיגול.", math_expression: "S_חצי = 25π / 2 = 12.5π" }
        ],
        final_answer: "12.5π סמ\"ר"
    },

    // --- שאלה 45 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "היקף ושטח עיגול",
        question: "פיצרייה מציעה שתי אפשרויות במחיר זהה: פיצה אחת אישית שקוטרה 20 ס\"מ, או שתי מיני-פיצות שקוטר כל אחת מהן הוא 10 ס\"מ. מה עדיף לקחת (איפה מקבלים יותר פיצה)?",
        options: ["פיצה אחת של 20 ס\"מ", "שתי פיצות של 10 ס\"מ", "זה בדיוק אותה כמות", "תלוי בעובי הבצק"],
        correctAnswer: 0,
        hint: "חשבו את השטח. הרדיוס של הפיצה הגדולה הוא 10. הרדיוס של הקטנה הוא 5. חשבו את השטח הכולל בשני המקרים והשוו.",
        solution_steps: [
            { verbal_explanation: "נחשב את השטח של הפיצה הגדולה. הקוטר הוא 20, ולכן הרדיוס הוא 10.", math_expression: "שטח גדולה = π × 10² = 100π" },
            { verbal_explanation: "נחשב את השטח של פיצה קטנה אחת. הקוטר הוא 10, ולכן הרדיוס הוא 5.", math_expression: "שטח קטנה אחת = π × 5² = 25π" },
            { verbal_explanation: "נחשב את השטח של שתי הפיצות הקטנות יחד.", math_expression: "שטח שתיים קטנות = 2 × 25π = 50π" },
            { verbal_explanation: "נשווה: 100π גדול מ-50π. הפיצה הגדולה מספקת כמות כפולה של בצק!", math_expression: "100π > 50π" }
        ],
        final_answer: "פיצה אחת של 20 ס\"מ"
    },

    // ========================================================================
    // תת נושא 4: תיבה וקובייה
    // ========================================================================

    // --- שאלה 46 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "תיבה וקובייה",
        question: `מהו נפח התיבה שמידותיה נתונות בשרטוט: אורך=4, רוחב=3, גובה=5 ?<br><br>
        <svg viewBox="0 0 200 150" style="width:100%; max-width:200px; display:block; margin:10px auto;">
            <rect x="50" y="60" width="80" height="60" fill="#f8fafc" stroke="#0f172a" stroke-width="2"/>
            <polygon points="50,60 80,30 160,30 130,60" fill="#e2e8f0" stroke="#0f172a" stroke-width="2"/>
            <polygon points="130,60 160,30 160,90 130,120" fill="#cbd5e1" stroke="#0f172a" stroke-width="2"/>
            <text x="80" y="135" font-size="12" font-weight="bold">אורך = 4</text>
            <text x="165" y="110" font-size="12" font-weight="bold">רוחב = 3</text>
            <text x="15" y="95" font-size="12" font-weight="bold">גובה = 5</text>
        </svg>`,
        options: ["60 יחידות נפח", "12 יחידות נפח", "47 יחידות נפח", "20 יחידות נפח"],
        correctAnswer: 0,
        hint: "נפח של כל תיבה מחושב על ידי הכפלת שלושת המימדים שלה זה בזה (אורך × רוחב × גובה).",
        solution_steps: [
            { verbal_explanation: "נרשום את הנוסחה לנפח תיבה (Volume).", math_expression: "V = a × b × h" },
            { verbal_explanation: "נציב את שלושת המימדים הנתונים בשאלה.", math_expression: "V = 4 × 3 × 5" },
            { verbal_explanation: "נכפיל לפי הסדר. 4 כפול 3 נותן 12.", math_expression: "V = 12 × 5" },
            { verbal_explanation: "12 כפול 5 נותן 60.", math_expression: "V = 60" }
        ],
        final_answer: "60 יחידות נפח"
    },

    // --- שאלה 47 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "תיבה וקובייה",
        question: "מהו הנפח של קובייה שאורך מקצועה (צלעה) הוא 6 מטרים?",
        options: ["216 מ\"ק", "36 מ\"ק", "18 מ\"ק", "108 מ\"ק"],
        correctAnswer: 0,
        hint: "קובייה היא תיבה שבה כל המימדים זהים. לכן הנפח הוא פשוט הצלע כפול עצמה 3 פעמים (צלע בשלישית).",
        solution_steps: [
            { verbal_explanation: "בקובייה, האורך, הרוחב והגובה שווים כולם.", math_expression: "a = b = h = 6" },
            { verbal_explanation: "לכן נוסחת הנפח היא להעלות את המקצוע בחזקת שלוש.", math_expression: "V = 6³ = 6 × 6 × 6" },
            { verbal_explanation: "6 כפול 6 זה 36.", math_expression: "V = 36 × 6" },
            { verbal_explanation: "נחשב את ההכפלה הסופית.", math_expression: "V = 216" }
        ],
        final_answer: "216 מ\"ק"
    },

    // --- שאלה 48 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "תיבה וקובייה",
        question: "נפחה של תיבה הוא 120 סמ\"ק. בסיס התיבה הוא מלבן שמידותיו 4 ס\"מ ו-5 ס\"מ. מהו גובה התיבה?",
        options: ["6 ס\"מ", "5 ס\"מ", "4 ס\"מ", "3 ס\"מ"],
        correctAnswer: 0,
        hint: "נפח הוא תוצאה של שטח הבסיס כפול הגובה. חשבו קודם את שטח הבסיס (4 כפול 5), ואז חלקו את הנפח הכולל בשטח הבסיס.",
        solution_steps: [
            { verbal_explanation: "נחשב את שטח הבסיס המלבני של התיבה.", math_expression: "S_base = 4 × 5 = 20" },
            { verbal_explanation: "נוסחת הנפח היא שטח הבסיס כפול הגובה (h).", math_expression: "V = S_base × h" },
            { verbal_explanation: "נציב את הנפח הנתון ואת שטח הבסיס למשוואה.", math_expression: "120 = 20 × h" },
            { verbal_explanation: "נחלק ב-20 כדי לבודד את h.", math_expression: "h = 120 / 20 = 6" }
        ],
        final_answer: "6 ס\"מ"
    },

    // --- שאלה 49 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "תיבה וקובייה",
        question: "חשבו את שטח הפנים (סך שטח כל הפאות העוטפות) של קובייה שאורך המקצוע שלה הוא 3 ס\"מ.",
        options: ["54 סמ\"ר", "27 סמ\"ר", "9 סמ\"ר", "36 סמ\"ר"],
        correctAnswer: 0,
        hint: "לקובייה יש בדיוק 6 פאות בצורת ריבוע זהות לחלוטין. חשבו שטח של פאה אחת (3 בריבוע) והכפילו ב-6.",
        solution_steps: [
            { verbal_explanation: "הקובייה מורכבת מ-6 ריבועים זהים המהווים את הפאות שלה.", math_expression: "6 פאות" },
            { verbal_explanation: "נחשב את השטח של פאה אחת בלבד.", math_expression: "S_face = 3 × 3 = 9" },
            { verbal_explanation: "שטח הפנים הכולל הוא 6 פעמים שטח הפאה.", math_expression: "S_total = 6 × 9" },
            { verbal_explanation: "נחשב את התוצאה.", math_expression: "S_total = 54" }
        ],
        final_answer: "54 סמ\"ר"
    },

    // --- שאלה 50 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "תיבה וקובייה",
        question: "בתיבה יש 3 זוגות של פאות מלבניות שוות (חזית/גב, ימין/שמאל, תקרה/רצפה). מהו שטח הפנים של תיבה שמידותיה הן 2, 4 ו-5?",
        options: ["76 סמ\"ר", "40 סמ\"ר", "38 סמ\"ר", "100 סמ\"ר"],
        correctAnswer: 0,
        hint: "חשבו את השטח של שלושת המלבנים השונים שמרכיבים את התיבה: (2×4), (2×5) ו-(4×5). חברו אותם, ולבסוף הכפילו הכל פי 2 כי יש שניים מכל סוג.",
        solution_steps: [
            { verbal_explanation: "נחשב את שטח הפאה הקדמית (והמקבילה לה מאחור).", math_expression: "S1 = 2 × 4 = 8" },
            { verbal_explanation: "נחשב את שטח הפאה הצידית.", math_expression: "S2 = 2 × 5 = 10" },
            { verbal_explanation: "נחשב את שטח הבסיס/התקרה.", math_expression: "S3 = 4 × 5 = 20" },
            { verbal_explanation: "נחבר את שלושת השטחים השונים כדי לקבל חצי ממעטפת התיבה.", math_expression: "סכום = 8 + 10 + 20 = 38" },
            { verbal_explanation: "שטח הפנים המלא מורכב משני עותקים של כל פאה, לכן נכפיל ב-2.", math_expression: "S_total = 2 × 38 = 76" }
        ],
        final_answer: "76 סמ\"ר"
    },

    // --- שאלה 51 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "תיבה וקובייה",
        question: "לתיבה יש 12 מקצועות (צלעות תלת-ממדיות) בסך הכל: 4 לאורך, 4 לרוחב, ו-4 לגובה. <br>אם מידות התיבה הן אורך 10, רוחב 4, וגובה 2, מהו סכום אורכי כל המקצועות?",
        options: ["64", "32", "16", "80"],
        correctAnswer: 0,
        hint: "הכפילו כל מימד ב-4 וחברו, או חברו קודם את שלושת המימדים (10+4+2) והכפילו ב-4.",
        solution_steps: [
            { verbal_explanation: "בתיבה יש ארבעה מקצועות באורך שווה, ארבעה ברוחב שווה, וארבעה בגובה שווה.", math_expression: "P = 4a + 4b + 4c" },
            { verbal_explanation: "נציב את המידות.", math_expression: "P = 4(10) + 4(4) + 4(2)" },
            { verbal_explanation: "נחשב את המכפלות.", math_expression: "P = 40 + 16 + 8" },
            { verbal_explanation: "נחבר לסכום סופי.", math_expression: "P = 64" }
        ],
        final_answer: "64"
    },

    // --- שאלה 52 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "תיבה וקובייה",
        question: "פאה צדדית של תיבה היא מלבן שמידותיו 3 ס\"מ ו-4 ס\"מ. מהו אורך אלכסון הפאה הזו?",
        options: ["5 ס\"מ", "7 ס\"מ", "12 ס\"מ", "6 ס\"מ"],
        correctAnswer: 0,
        hint: "אלכסון של פאה מלבנית מחשבים בדיוק כמו אלכסון מלבן רגיל - בעזרת משפט פיתגורס.",
        solution_steps: [
            { verbal_explanation: "הפאה היא מלבן לכל דבר. האלכסון יוצר שני משולשים ישרי זווית שהניצבים שלהם הם 3 ו-4.", math_expression: "a = 3, b = 4" },
            { verbal_explanation: "נשתמש במשפט פיתגורס.", math_expression: "3² + 4² = c²" },
            { verbal_explanation: "נחשב.", math_expression: "9 + 16 = 25" },
            { verbal_explanation: "נוציא שורש לקבלת אורך האלכסון.", math_expression: "c = √25 = 5" }
        ],
        final_answer: "5 ס\"מ"
    },

    // --- שאלה 53 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "תיבה וקובייה",
        question: "נפחה של קובייה הוא 64 ליטר (דצמ\"ק). מהו אורך כל צלע (מקצוע) של הקובייה?",
        options: ["4 דצמ\"ר", "8 דצמ\"ר", "16 דצמ\"ר", "2 דצמ\"ר"],
        correctAnswer: 0,
        hint: "נפח קובייה הוא צלע בחזקת שלוש. חפשו מספר שאם תכפילו אותו בעצמו 3 פעמים ייתן 64 (כלומר, השורש השלישי של 64).",
        solution_steps: [
            { verbal_explanation: "נוסחת הנפח לקובייה היא מקצוע בשלישית.", math_expression: "a³ = 64" },
            { verbal_explanation: "אנו צריכים למצוא מספר שמוכפל בעצמו 3 פעמים כדי לתת 64.", math_expression: "a × a × a = 64" },
            { verbal_explanation: "נבדוק את המספר 4: 4 כפול 4 זה 16. 16 כפול 4 זה 64. התאמה מושלמת.", math_expression: "a = 4" }
        ],
        final_answer: "4 דצמ\"ר"
    },

    // --- שאלה 54 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "תיבה וקובייה",
        question: "בסיסה של תיבה הוא ריבוע שאורך צלעו 5 ס\"מ. גובה התיבה הוא 10 ס\"מ. מהו נפח התיבה?",
        options: ["250 סמ\"ק", "50 סמ\"ק", "100 סמ\"ק", "200 סמ\"ק"],
        correctAnswer: 0,
        hint: "מכיוון שהבסיס ריבועי, גם האורך וגם הרוחב שווים ל-5. כפלו 5 כפול 5 כפול 10.",
        solution_steps: [
            { verbal_explanation: "כדי למצוא את מידות התיבה, ניזכר שהבסיס הוא ריבוע. משמע, האורך והרוחב זהים.", math_expression: "אורך = 5, רוחב = 5" },
            { verbal_explanation: "גובה התיבה נתון.", math_expression: "גובה = 10" },
            { verbal_explanation: "נחשב את הנפח.", math_expression: "V = 5 × 5 × 10" },
            { verbal_explanation: "נבצע את ההכפלה.", math_expression: "V = 25 × 10 = 250" }
        ],
        final_answer: "250 סמ\"ק"
    },

    // --- שאלה 55 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "תיבה וקובייה",
        question: "קופסת אריזה (תיבה) היא במידות: אורך 12, רוחב 10, גובה 8. <br>כמה קוביות קטנות שאורך מקצוען הוא 2 ניתן להכניס בדיוק לתוך הקופסה?",
        options: ["120 קוביות", "60 קוביות", "240 קוביות", "960 קוביות"],
        correctAnswer: 0,
        hint: "חישבו כמה קוביות נכנסות לאורך (12 חלקי 2 = 6). כמה לרוחב (10 חלקי 2 = 5). וכמה לגובה (8 חלקי 2 = 4). הכפילו את המספרים הללו.",
        solution_steps: [
            { verbal_explanation: "נבדוק כמה קוביות קטנות נכנסות בכל מימד בנפרד.", math_expression: "" },
            { verbal_explanation: "לאורך של 12 נכנסות 6 קוביות (12 לחלק ל-2).", math_expression: "n_length = 6" },
            { verbal_explanation: "לרוחב של 10 נכנסות 5 קוביות (10 לחלק ל-2).", math_expression: "n_width = 5" },
            { verbal_explanation: "לגובה של 8 נכנסות 4 קוביות (8 לחלק ל-2).", math_expression: "n_height = 4" },
            { verbal_explanation: "סך הכל כמות הקוביות היא מכפלת הכמויות.", math_expression: "Total = 6 × 5 × 4 = 30 × 4 = 120" }
        ],
        final_answer: "120 קוביות"
    },

    // --- שאלה 56 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "תיבה וקובייה",
        question: "רוצים לבנות קופסת עץ פתוחה מלמעלה (ללא מכסה). מידות הקופסה הן: אורך 8, רוחב 6, גובה 4. <br>כמה שטח עץ נדרש לבניית הקופסה (שטח הפנים ללא המכסה)?",
        options: ["160 סמ\"ר", "192 סמ\"ר", "144 סמ\"ר", "208 סמ\"ר"],
        correctAnswer: 0,
        hint: "חשבו את השטח של בסיס אחד בלבד (רצפה). לאחר מכן הוסיפו את השטח של 4 קירות הצד (שתי פאות חזית/גב ושתי פאות צדדיות).",
        solution_steps: [
            { verbal_explanation: "נחשב את שטח הרצפה (אורך כפול רוחב). יש רק אחת כזו כי אין מכסה.", math_expression: "S_רצפה = 8 × 6 = 48" },
            { verbal_explanation: "נחשב את שטח החזית והגב (אורך כפול גובה, כפול 2 פאות).", math_expression: "S_חזית = 2 × (8 × 4) = 2 × 32 = 64" },
            { verbal_explanation: "נחשב את השטח של שתי הפאות הצידיות (רוחב כפול גובה, כפול 2 פאות).", math_expression: "S_צד = 2 × (6 × 4) = 2 × 24 = 48" },
            { verbal_explanation: "נחבר את הכל.", math_expression: "סה\"כ = 48 + 64 + 48 = 160" }
        ],
        final_answer: "160 סמ\"ר"
    },

    // --- שאלה 57 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "תיבה וקובייה",
        question: "אם נכפיל את אורך המקצוע של קובייה פי 2, פי כמה יגדל נפח הקובייה?",
        options: ["פי 8", "פי 2", "פי 4", "פי 6"],
        correctAnswer: 0,
        hint: "נפח קובייה הוא מקצוע בחזקת 3. לכן, אם מגדילים את המקצוע פי 2, הנפח יגדל פי 2 בשלישית (2³).",
        solution_steps: [
            { verbal_explanation: "הנפח המקורי הוא מקצוע בשלישית.", math_expression: "V1 = a³" },
            { verbal_explanation: "הנפח החדש מחושב עם מקצוע שאורכו 2a.", math_expression: "V2 = (2a)³" },
            { verbal_explanation: "נעלה את כל תוכן הסוגריים בחזקת שלוש. 2 בשלישית זה 8.", math_expression: "V2 = 8 × a³" },
            { verbal_explanation: "מכאן שהנפח גדל בדיוק פי 8 לעומת המקור.", math_expression: "פי 8" }
        ],
        final_answer: "פי 8"
    },

    // --- שאלה 58 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "תיבה וקובייה",
        question: "אקווריום בצורת תיבה שמידותיו הן אורך 50 ס\"מ, רוחב 20 ס\"מ וגובה 40 ס\"מ. האקווריום מלא במים רק עד חצי מגובהו. מהו נפח המים באקווריום?",
        options: ["20,000 סמ\"ק", "40,000 סמ\"ק", "10,000 סמ\"ק", "80,000 סמ\"ק"],
        correctAnswer: 0,
        hint: "יש לכם שתי דרכים: חשבו את הנפח המלא (50×20×40) וחלקו ב-2, או חשבו את נפח המים בעזרת הגובה החלקי (גובה המים הוא 20 במקום 40).",
        solution_steps: [
            { verbal_explanation: "נחשב את נפח המים על ידי התייחסות לגובה המים בלבד. גובה האקווריום הוא 40, ולכן חצי ממנו הוא 20.", math_expression: "גובה מים = 20" },
            { verbal_explanation: "נציב את מידות גוף המים (אורך, רוחב, גובה מים) בנוסחת הנפח.", math_expression: "V = 50 × 20 × 20" },
            { verbal_explanation: "נבצע את ההכפלה.", math_expression: "V = 1000 × 20 = 20,000" }
        ],
        final_answer: "20,000 סמ\"ק"
    },

    // --- שאלה 59 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "תיבה וקובייה",
        question: "נתונות שתי תיבות בעלות נפח זהה. לתיבה א' מידות: אורך 10, רוחב 6, גובה 2. <br>לתיבה ב' יש רוחב 4 וגובה 3. מהו האורך של תיבה ב'?",
        options: ["10", "12", "8", "6"],
        correctAnswer: 0,
        hint: "חשבו קודם כל את הנפח של תיבה א'. לאחר מכן, השוו את הנפח הזה לנוסחת הנפח של תיבה ב' שבה האורך הוא נעלם (x).",
        solution_steps: [
            { verbal_explanation: "נחשב את הנפח של התיבה הראשונה לפי הנתונים.", math_expression: "V_A = 10 × 6 × 2 = 120" },
            { verbal_explanation: "אנו יודעים שהנפח של התיבה השנייה גם הוא 120. נרשום את משוואת הנפח שלה עם הנעלם x.", math_expression: "120 = x × 4 × 3" },
            { verbal_explanation: "נכפיל את המידות הידועות בתיבה ב'.", math_expression: "120 = 12x" },
            { verbal_explanation: "נחלק ב-12 כדי למצוא את האורך של תיבה ב'.", math_expression: "x = 10" }
        ],
        final_answer: "10"
    },

    // --- שאלה 60 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "תיבה וקובייה",
        question: "בסיסה של תיבה הוא מלבן שהיקפו 20 ס\"מ, ואורך צלע אחת שלו הוא 4 ס\"מ. גובה התיבה הוא 5 ס\"מ. מהו נפח התיבה?",
        options: ["120 סמ\"ק", "100 סמ\"ק", "80 סמ\"ק", "200 סמ\"ק"],
        correctAnswer: 0,
        hint: "היקף הבסיס הוא 20. מאחר שצלע אחת היא 4, הצלע הנגדית לה היא גם 4 (יחד 8). שאר ההיקף (12) מתחלק שווה בשווה בין שתי הצלעות האחרות, לכן הרוחב הוא 6. כעת חשבו נפח רגיל.",
        solution_steps: [
            { verbal_explanation: "נשתמש בנתון ההיקף כדי למצוא את צלע הבסיס החסרה.", math_expression: "2 × (4 + b) = 20" },
            { verbal_explanation: "נחלק ב-2.", math_expression: "4 + b = 10" },
            { verbal_explanation: "נעביר את 4 אגף ונמצא את הרוחב.", math_expression: "b = 6" },
            { verbal_explanation: "כעת יש לנו את כל המידות: אורך=4, רוחב=6, גובה=5. נחשב נפח.", math_expression: "V = 4 × 6 × 5" },
            { verbal_explanation: "נחשב את המכפלה.", math_expression: "V = 24 × 5 = 120" }
        ],
        final_answer: "120 סמ\"ק"
    },// ========================================================================
    // תת נושא: גליל (שאלות 61-75)
    // ========================================================================

    // --- שאלה 61 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "גליל",
        question: `מהו נפח גליל שרדיוס בסיסו הוא 4 ס"מ וגובהו 10 ס"מ?<br>(השאירו את התשובה עם פאי - π).<br><br>
        <svg viewBox="0 0 200 150" style="width:100%; max-width:150px; display:block; margin:10px auto;">
            <ellipse cx="100" cy="30" rx="60" ry="20" fill="#f8fafc" stroke="#3b82f6" stroke-width="2"/>
            <line x1="40" y1="30" x2="40" y2="120" stroke="#3b82f6" stroke-width="2"/>
            <line x1="160" y1="30" x2="160" y2="120" stroke="#3b82f6" stroke-width="2"/>
            <ellipse cx="100" cy="120" rx="60" ry="20" fill="#f8fafc" stroke="#3b82f6" stroke-width="2"/>
            <text x="135" y="25" font-size="14" fill="#dc2626" font-weight="bold">r = 4</text>
            <text x="170" y="75" font-size="14" fill="#0f172a" font-weight="bold">h = 10</text>
        </svg>`,
        options: ["160π סמ\"ק", "40π סמ\"ק", "80π סמ\"ק", "1600π סמ\"ק"],
        correctAnswer: 0,
        hint: "נוסחת נפח גליל היא שטח הבסיס (π × r²) כפול הגובה (h).",
        solution_steps: [
            { verbal_explanation: "נרשום את הנוסחה לנפח גליל.", math_expression: "V = π × r² × h" },
            { verbal_explanation: "נציב את הנתונים: רדיוס (r) הוא 4, גובה (h) הוא 10.", math_expression: "V = π × 4² × 10" },
            { verbal_explanation: "נחשב את הריבוע של 4.", math_expression: "V = π × 16 × 10" },
            { verbal_explanation: "נכפיל ב-10 לקבלת התוצאה הסופית.", math_expression: "V = 160π" }
        ],
        final_answer: "160π סמ\"ק"
    },

    // --- שאלה 62 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "גליל",
        question: "מהו שטח המעטפת (שטח הצד ללא הבסיסים) של גליל שרדיוסו 3 ס\"מ וגובהו 5 ס\"מ?",
        options: ["30π סמ\"ר", "15π סמ\"ר", "60π סמ\"ר", "10π סמ\"ר"],
        correctAnswer: 0,
        hint: "שטח מעטפת גליל שווה להיקף הבסיס (2πr) כפול הגובה (h).",
        solution_steps: [
            { verbal_explanation: "נוסחת שטח מעטפת גליל היא היקף המעגל כפול הגובה.", math_expression: "S_מעטפת = 2 × π × r × h" },
            { verbal_explanation: "נציב את הרדיוס 3 והגובה 5.", math_expression: "S = 2 × π × 3 × 5" },
            { verbal_explanation: "נבצע את הכפלת המספרים (2 כפול 3 כפול 5).", math_expression: "S = 30π" }
        ],
        final_answer: "30π סמ\"ר"
    },

    // --- שאלה 63 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "גליל",
        question: "נפח גליל הוא 100π סמ\"ק וגובהו 4 ס\"מ. מהו רדיוס בסיסו?",
        options: ["5 ס\"מ", "10 ס\"מ", "25 ס\"מ", "4 ס\"מ"],
        correctAnswer: 0,
        hint: "נפח שווה π × r² × h. הציבו את הנתונים, צמצמו את π משני האגפים, ופתרו עבור r.",
        solution_steps: [
            { verbal_explanation: "נציב בנוסחת הנפח.", math_expression: "100π = π × r² × 4" },
            { verbal_explanation: "נצמצם את π משני הצדדים.", math_expression: "100 = r² × 4" },
            { verbal_explanation: "נחלק ב-4.", math_expression: "r² = 25" },
            { verbal_explanation: "נוציא שורש למציאת הרדיוס.", math_expression: "r = 5" }
        ],
        final_answer: "5 ס\"מ"
    },

    // --- שאלה 64 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "גליל",
        question: "גליל שגובהו 10 ס\"מ ורדיוסו 2 ס\"מ. מהו שטח הפנים הכולל של הגליל (כולל שני הבסיסים)?",
        options: ["48π סמ\"ר", "56π סמ\"ר", "20π סמ\"ר", "8π סמ\"ר"],
        correctAnswer: 0,
        hint: "שטח פנים כולל = שטח מעטפת (2πrh) + שטח שני בסיסים (2 × πr²).",
        solution_steps: [
            { verbal_explanation: "שטח מעטפת (לפי נוסחה).", math_expression: "2 × π × 2 × 10 = 40π" },
            { verbal_explanation: "שטח שני בסיסים (כל אחד πr²).", math_expression: "2 × (π × 2²) = 2 × 4π = 8π" },
            { verbal_explanation: "נחבר מעטפת + בסיסים.", math_expression: "40π + 8π = 48π" }
        ],
        final_answer: "48π סמ\"ר"
    },

    // --- שאלה 65 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "גליל",
        question: "נתון גליל שקוטרו 10 ס\"מ וגובהו 10 ס\"מ. מהו נפח הגליל?",
        options: ["250π סמ\"ק", "1000π סמ\"ק", "500π סמ\"ק", "100π סמ\"ק"],
        correctAnswer: 0,
        hint: "קוטר הוא 10, לכן רדיוס הוא 5. השתמשו בנוסחת הנפח.",
        solution_steps: [
            { verbal_explanation: "נמצא רדיוס.", math_expression: "r = 10 / 2 = 5" },
            { verbal_explanation: "נציב בנוסחת נפח גליל.", math_expression: "V = π × 5² × 10" },
            { verbal_explanation: "נחשב.", math_expression: "V = π × 25 × 10 = 250π" }
        ],
        final_answer: "250π סמ\"ק"
    },

    // --- שאלה 66 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "גליל",
        question: "כמה ליטרים של מים נכנסים לגליל שרדיוסו 10 ס\"מ וגובהו 10 ס\"מ? (הניחו π=3.14, ו-1000 סמ\"ק = 1 ליטר).",
        options: ["3.14 ליטר", "31.4 ליטר", "314 ליטר", "1 ליטר"],
        correctAnswer: 0,
        hint: "חשבו נפח בסמ\"ק (π × 10² × 10), ואז חלקו ב-1000 כדי לקבל ליטרים.",
        solution_steps: [
            { verbal_explanation: "נחשב נפח בסמ\"ק.", math_expression: "V = 3.14 × 100 × 10 = 3140" },
            { verbal_explanation: "נמיר לליטרים (נחלק ב-1000).", math_expression: "3140 / 1000 = 3.14" }
        ],
        final_answer: "3.14 ליטר"
    },

    // --- שאלה 67 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "גליל",
        question: "האם נפח גליל שרדיוסו 1 וגובהו 4 שווה לנפח גליל שרדיוסו 2 וגובהו 1?",
        options: ["לא, הראשון 4π והשני 4π (שווים!)", "לא, השני גדול יותר", "כן, הם שונים", "לא ניתן לדעת"],
        correctAnswer: 0,
        hint: "חשבו את הנפח של כל גליל בנפרד והשוו.",
        solution_steps: [
            { verbal_explanation: "נפח גליל ראשון.", math_expression: "π × 1² × 4 = 4π" },
            { verbal_explanation: "נפח גליל שני.", math_expression: "π × 2² × 1 = 4π" },
            { verbal_explanation: "התוצאות זהות.", math_expression: "שווים" }
        ],
        final_answer: "לא, הראשון 4π והשני 4π (שווים!)"
    },

    // --- שאלה 68 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "גליל",
        question: "שטח המעטפת של גליל הוא 100π סמ\"ר והרדיוס הוא 5 ס\"מ. מה גובה הגליל?",
        options: ["10 ס\"מ", "5 ס\"מ", "20 ס\"מ", "2 ס\"מ"],
        correctAnswer: 0,
        hint: "הציבו בנוסחה 100π = 2π × 5 × h.",
        solution_steps: [
            { verbal_explanation: "נוסחת מעטפת.", math_expression: "100π = 2 × π × 5 × h" },
            { verbal_explanation: "נצמצם π ונחשב צד ימין.", math_expression: "100 = 10h" },
            { verbal_explanation: "נחלק ב-10.", math_expression: "h = 10" }
        ],
        final_answer: "10 ס\"מ"
    },

    // --- שאלה 69 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "גליל",
        question: "אם נכפיל את גובה הגליל פי 3 (ללא שינוי ברדיוס), פי כמה יגדל נפחו?",
        options: ["פי 3", "פי 9", "פי 1", "פי 27"],
        correctAnswer: 0,
        hint: "נוסחת הנפח תלויה בגובה (h) בצורה ליניארית.",
        solution_steps: [
            { verbal_explanation: "נוסחת נפח מקורית.", math_expression: "V1 = π × r² × h" },
            { verbal_explanation: "נוסחת נפח חדש עם גובה משולש.", math_expression: "V2 = π × r² × 3h = 3 × V1" },
            { verbal_explanation: "הנפח גדל פי 3.", math_expression: "פי 3" }
        ],
        final_answer: "פי 3"
    },

    // --- שאלה 70 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "גליל",
        question: "איזו צורה מתקבלת אם פורסים את המעטפת של גליל ישר?",
        options: ["מלבן", "עיגול", "טרפז", "משולש"],
        correctAnswer: 0,
        hint: "דמיינו נייר עטיפה שמקיף גליל. אם תפתחו אותו, תקבלו מלבן.",
        solution_steps: [
            { verbal_explanation: "כאשר פותחים את המעטפת, הצלע הארוכה היא היקף המעגל (2πr) והצלע הקצרה היא הגובה.", math_expression: "מלבן" }
        ],
        final_answer: "מלבן"
    },

    // --- שאלה 71 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "גליל",
        question: "מהו רדיוס גליל אם שטח הבסיס שלו הוא 36π?",
        options: ["6 ס\"מ", "3 ס\"מ", "12 ס\"מ", "9 ס\"מ"],
        correctAnswer: 0,
        hint: "שטח בסיס (מעגל) הוא πr². הציבו 36π = πr².",
        solution_steps: [
            { verbal_explanation: "נוסחת שטח בסיס.", math_expression: "π × r² = 36π" },
            { verbal_explanation: "נצמצם π.", math_expression: "r² = 36" },
            { verbal_explanation: "נשרש.", math_expression: "r = 6" }
        ],
        final_answer: "6 ס\"מ"
    },

    // --- שאלה 72 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "גליל",
        question: "גליל בעל רדיוס 2 וגובה 2. מה שטח הפנים הכולל?",
        options: ["16π סמ\"ר", "8π סמ\"ר", "12π סמ\"ר", "24π סמ\"ר"],
        correctAnswer: 0,
        hint: "מעטפת: 2π×2×2 = 8π. שני בסיסים: 2π×2² = 8π. סה\"כ 16π.",
        solution_steps: [
            { verbal_explanation: "שטח מעטפת.", math_expression: "2 × π × 2 × 2 = 8π" },
            { verbal_explanation: "שטח שני בסיסים.", math_expression: "2 × (π × 2²) = 8π" },
            { verbal_explanation: "סה\"כ.", math_expression: "16π" }
        ],
        final_answer: "16π סמ\"ר"
    },

    // --- שאלה 73 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "גליל",
        question: "האם ניתן להכניס גליל בעל רדיוס 3 לתוך תיבה שבסיסה 5x5 ?",
        options: ["לא, קוטר הגליל גדול מרוחב הבסיס", "כן, זה נכנס", "זה תלוי בגובה", "כן, בוודאות"],
        correctAnswer: 0,
        hint: "קוטר הגליל הוא 2 × רדיוס = 6. האם 6 נכנס ב-5?",
        solution_steps: [
            { verbal_explanation: "קוטר הגליל הוא 6.", math_expression: "2 × 3 = 6" },
            { verbal_explanation: "רוחב הבסיס של התיבה הוא 5.", math_expression: "5 < 6" },
            { verbal_explanation: "הקוטר גדול מהבסיס.", math_expression: "לא" }
        ],
        final_answer: "לא, קוטר הגליל גדול מרוחב הבסיס"
    },

    // --- שאלה 74 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "גליל",
        question: "נפח גליל הוא 50π, שטח הבסיס הוא 25π. מה הגובה?",
        options: ["2", "5", "10", "1"],
        correctAnswer: 0,
        hint: "נפח = שטח בסיס × גובה.",
        solution_steps: [
            { verbal_explanation: "נוסחת נפח.", math_expression: "50π = 25π × h" },
            { verbal_explanation: "נצמצם π ו-25.", math_expression: "h = 50 / 25 = 2" }
        ],
        final_answer: "2"
    },

    // --- שאלה 75 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "גליל",
        question: "גליל שגובהו 1 והיקף בסיסו 2π. מה נפחו?",
        options: ["π", "2π", "4π", "0.5π"],
        correctAnswer: 0,
        hint: "היקף בסיס 2πr = 2π, לכן r=1. נפח = π×1²×1.",
        solution_steps: [
            { verbal_explanation: "נמצא רדיוס.", math_expression: "2 × π × r = 2π  => r = 1" },
            { verbal_explanation: "נחשב נפח.", math_expression: "V = π × 1² × 1 = π" }
        ],
        final_answer: "π"
    },

    // ==========================================
    // תת נושא 4: מנסרה משולשת
    // ==========================================

    // --- שאלה 76 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "מנסרה משולשת",
        question: `מהו נפח מנסרה משולשת ישרה, אם שטח הבסיס המשולש הוא 10 סמ"ר וגובה המנסרה הוא 5 ס"מ?<br><br>
        <svg viewBox="0 0 200 150" style="width:100%; max-width:200px; display:block; margin:10px auto;">
            <polygon points="50,120 150,120 100,50" fill="#f8fafc" stroke="#3b82f6" stroke-width="2"/>
            <polygon points="50,120 150,120 170,100 70,100" fill="#e0f2fe" stroke="#3b82f6" stroke-width="2"/>
            <polygon points="150,120 170,100 120,30 100,50" fill="#cbd5e1" stroke="#3b82f6" stroke-width="2"/>
            <text x="100" y="110" font-size="12" font-weight="bold">שטח בסיס=10</text>
            <text x="160" y="70" font-size="12" font-weight="bold">גובה=5</text>
        </svg>`,
        options: ["50 סמ\"ק", "15 סמ\"ק", "25 סמ\"ק", "100 סמ\"ק"],
        correctAnswer: 0,
        hint: "נוסחת נפח מנסרה היא שטח הבסיס כפול גובה המנסרה.",
        solution_steps: [
            { verbal_explanation: "נרשום את נוסחת הנפח.", math_expression: "V = S_base × h" },
            { verbal_explanation: "נציב שטח בסיס 10 וגובה 5.", math_expression: "V = 10 × 5" },
            { verbal_explanation: "נחשב.", math_expression: "50" }
        ],
        final_answer: "50 סמ\"ק"
    },

    // --- שאלה 77 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "מנסרה משולשת",
        question: "בסיס מנסרה הוא משולש ישר זווית עם ניצבים 3 ו-4. גובה המנסרה הוא 10. מה הנפח?",
        options: ["60 סמ\"ק", "30 סמ\"ק", "120 סמ\"ק", "20 סמ\"ק"],
        correctAnswer: 0,
        hint: "חשבו שטח בסיס (3×4)/2 = 6. הכפילו בגובה 10.",
        solution_steps: [
            { verbal_explanation: "שטח בסיס משולש.", math_expression: "S = (3 × 4) / 2 = 6" },
            { verbal_explanation: "נפח.", math_expression: "V = 6 × 10 = 60" }
        ],
        final_answer: "60 סמ\"ק"
    },

    // --- שאלה 78 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "מנסרה משולשת",
        question: "מנסרה משולשת בעלת נפח 30. שטח הבסיס הוא 6. מה גובה המנסרה?",
        options: ["5", "3", "6", "10"],
        correctAnswer: 0,
        hint: "נפח = שטח בסיס × גובה. לכן גובה = נפח / שטח בסיס.",
        solution_steps: [
            { verbal_explanation: "נוסחה.", math_expression: "30 = 6 × h" },
            { verbal_explanation: "נחלק.", math_expression: "h = 30 / 6 = 5" }
        ],
        final_answer: "5"
    },

    // --- שאלה 79 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "מנסרה משולשת",
        question: "מנסרה משולשת שכל צלעות בסיסה (המשולש) הן 3. גובה המנסרה הוא 4. מהו שטח המעטפת (סכום שטחי 3 הפאות המלבניות)?",
        options: ["36", "12", "18", "24"],
        correctAnswer: 0,
        hint: "היקף הבסיס כפול גובה המנסרה נותן את שטח המעטפת.",
        solution_steps: [
            { verbal_explanation: "היקף הבסיס.", math_expression: "3 + 3 + 3 = 9" },
            { verbal_explanation: "שטח מעטפת = היקף × גובה.", math_expression: "9 × 4 = 36" }
        ],
        final_answer: "36"
    },

    // --- שאלה 80 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "מנסרה משולשת",
        question: "מנסרה משולשת: בסיס המשולש 4, גובה המשולש 3. גובה המנסרה 5. מה הנפח?",
        options: ["30", "15", "60", "20"],
        correctAnswer: 0,
        hint: "שטח בסיס = (4×3)/2 = 6. נפח = 6×5.",
        solution_steps: [
            { verbal_explanation: "שטח בסיס.", math_expression: "S = (4 × 3) / 2 = 6" },
            { verbal_explanation: "נפח.", math_expression: "V = 6 × 5 = 30" }
        ],
        final_answer: "30"
    },

    // --- שאלה 81 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "מנסרה משולשת",
        question: "במנסרה משולשת כל פאה צדדית היא מלבן 3 על 5. מהו שטח פאה צדדית אחת?",
        options: ["15", "8", "3", "5"],
        correctAnswer: 0,
        hint: "שטח מלבן = צלע × צלע.",
        solution_steps: [
            { verbal_explanation: "חישוב שטח פאה.", math_expression: "3 × 5 = 15" }
        ],
        final_answer: "15"
    },

    // --- שאלה 82 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "מנסרה משולשת",
        question: "מנסרה משולשת: היקף בסיס 12, גובה 10. שטח מעטפת?",
        options: ["120", "22", "60", "12"],
        correctAnswer: 0,
        hint: "שטח מעטפת = היקף בסיס × גובה.",
        solution_steps: [
            { verbal_explanation: "חישוב.", math_expression: "12 × 10 = 120" }
        ],
        final_answer: "120"
    },

    // --- שאלה 83 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "מנסרה משולשת",
        question: "שטח פנים כולל של מנסרה: שטח 2 בסיסים 10, שטח מעטפת 40. כמה שטח פנים?",
        options: ["50", "30", "40", "20"],
        correctAnswer: 0,
        hint: "שטח פנים = שטח בסיסים + שטח מעטפת.",
        solution_steps: [
            { verbal_explanation: "חיבור.", math_expression: "10 + 40 = 50" }
        ],
        final_answer: "50"
    },

    // --- שאלה 84 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "מנסרה משולשת",
        question: "מנסרה משולשת עם בסיס שווה צלעות צלע 2. גובה 5. שטח פנים מעטפת?",
        options: ["30", "10", "20", "15"],
        correctAnswer: 0,
        hint: "היקף בסיס 2+2+2=6. גובה 5. 6×5=30.",
        solution_steps: [
            { verbal_explanation: "היקף.", math_expression: "6" },
            { verbal_explanation: "שטח מעטפת.", math_expression: "6 × 5 = 30" }
        ],
        final_answer: "30"
    },

    // --- שאלה 85 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "מנסרה משולשת",
        question: "נפח מנסרה משולשת הוא 180. שטח בסיס הוא 30. מה הגובה?",
        options: ["6", "5", "3", "4"],
        correctAnswer: 0,
        hint: "גובה = נפח / שטח בסיס.",
        solution_steps: [
            { verbal_explanation: "חישוב.", math_expression: "180 / 30 = 6" }
        ],
        final_answer: "6"
    },

    // --- שאלה 86 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "מנסרה משולשת",
        question: "מנסרה משולשת: בסיס 5, גובה בסיס 4, גובה מנסרה 6. מה הנפח?",
        options: ["60", "30", "120", "20"],
        correctAnswer: 0,
        hint: "שטח בסיס = (5×4)/2 = 10. נפח = 10×6 = 60.",
        solution_steps: [
            { verbal_explanation: "שטח בסיס.", math_expression: "10" },
            { verbal_explanation: "נפח.", math_expression: "10 × 6 = 60" }
        ],
        final_answer: "60"
    },

    // --- שאלה 87 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "מנסרה משולשת",
        question: "מנסרה משולשת ישרה. היקף בסיס 15. גובה 4. שטח מעטפת?",
        options: ["60", "19", "45", "30"],
        correctAnswer: 0,
        hint: "היקף × גובה.",
        solution_steps: [
            { verbal_explanation: "חישוב.", math_expression: "15 × 4 = 60" }
        ],
        final_answer: "60"
    },

    // --- שאלה 88 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "מנסרה משולשת",
        question: "מנסרה משולשת עם שטח פנים כולל 80. שטח מעטפת 60. מה שטח שני הבסיסים?",
        options: ["20", "140", "70", "40"],
        correctAnswer: 0,
        hint: "שטח פנים = שטח בסיסים + שטח מעטפת.",
        solution_steps: [
            { verbal_explanation: "חיסור.", math_expression: "80 - 60 = 20" }
        ],
        final_answer: "20"
    },

    // --- שאלה 89 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "מנסרה משולשת",
        question: "נפח מנסרה משולשת הוא 40. שטח בסיס הוא 8. מה הגובה?",
        options: ["5", "4", "32", "8"],
        correctAnswer: 0,
        hint: "גובה = נפח / שטח בסיס.",
        solution_steps: [
            { verbal_explanation: "חישוב.", math_expression: "40 / 8 = 5" }
        ],
        final_answer: "5"
    },

    // --- שאלה 90 ---
    {
        subject: "מתמטיקה",
        topic: "הנדסת המישור והמרחב",
        subTopic: "מנסרה משולשת",
        question: "מנסרה משולשת בסיס שווה צלעות צלע 4. גובה מנסרה 10. שטח מעטפת?",
        options: ["120", "40", "80", "160"],
        correctAnswer: 0,
        hint: "היקף 12, גובה 10.",
        solution_steps: [
            { verbal_explanation: "היקף.", math_expression: "4+4+4 = 12" },
            { verbal_explanation: "שטח מעטפת.", math_expression: "12 × 10 = 120" }
        ],
        final_answer: "120"
    }
];