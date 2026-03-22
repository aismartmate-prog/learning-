// ========================================================================
// שכבת גיל: כיתה ח' | נושא: תרגול מבחני מיצ"ב (מדדים / ראמ"ה)
// 2 תתי נושאים | 24 שאלות סה"כ
// השאלות משחזרות שאלות אמיתיות ממבחני מיצ"ב ארציים לאורך השנים.
// פתרונות מפורטים מאוד ('האכלה בכפית').
// כתיבה נקייה: חילוק מיוצג כ- (:), כפל כ- (×). ללא LaTeX!
// ========================================================================

const questionsDB = [

    // ==========================================================
    // תת נושא 1: חזרה על חומר כיתה ז' (12 שאלות מתוך מיצ"בים)
    // ==========================================================
    
    // שאלה 1
    {
        topic: "meitzav_practice",
        subTopic: "חזרה על חומר כיתה ז'",
        question_text: "<b>[לקוח ממבחן מיצ\"ב תשע\"ט - 2019]</b><br>פתרו את התרגיל הבא, תוך הקפדה על סדר פעולות חשבון ומספרים מכוונים:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>20 - 4 × (-5) + (-12) : 3 = ?</div>",
        options: ["44", "36", "16", "-4"],
        correctAnswer: 0,
        hint: "כפל וחילוק קודמים לחיבור וחיסור. שימו לב למינוס כפול מינוס, ולמינוס לחלק לפלוס.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': לפי סדר פעולות חשבון, נבצע קודם את פעולות הכפל והחילוק משמאל לימין.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ב': נחשב את הכפל. 4- כפול 5- נותן תוצאה חיובית.&rlm;", math_expression: "-4 × (-5) = +20" },
            { verbal_explanation: "שלב ג': נחשב את החילוק. 12- לחלק ל-3 נותן תוצאה שלילית.&rlm;", math_expression: "(-12) : 3 = -4" },
            { verbal_explanation: "שלב ד': נחבר את הכל יחד עם ה-20 שבתחילת התרגיל.&rlm;", math_expression: "20 + 20 - 4 = 40 - 4 = 36" }
        ],
        final_answer: "36"
    },
    // שאלה 2
    {
        topic: "meitzav_practice",
        subTopic: "חזרה על חומר כיתה ז'",
        question_text: "<b>[לקוח ממבחן מיצ\"ב תשע\"ז - 2017]</b><br>מהו פתרון המשוואה הבאה?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>3(x - 2) = x + 10</div>",
        options: ["8", "4", "2", "6"],
        correctAnswer: 0,
        hint: "פתחו סוגריים בעזרת חוק הפילוג (3x - 6). לאחר מכן העבירו את x שמאלה ואת 6 ימינה.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נפתח סוגריים באגף שמאל (נכפול את 3 ב-x ואת 3 במינוס 2).&rlm;", math_expression: "3x - 6 = x + 10" },
            { verbal_explanation: "שלב ב': נעביר את x לאגף שמאל (יהפוך למינוס x) ואת 6 לאגף ימין (יהפוך לפלוס 6).&rlm;", math_expression: "3x - x = 10 + 6" },
            { verbal_explanation: "שלב ג': נכנס איברים דומים.&rlm;", math_expression: "2x = 16" },
            { verbal_explanation: "שלב ד': נחלק ב-2.&rlm;", math_expression: "x = 8" }
        ],
        final_answer: "8"
    },
    // שאלה 3
    {
        topic: "meitzav_practice",
        subTopic: "חזרה על חומר כיתה ז'",
        question_text: "<b>[לקוח ממיצ\"ב תש\"פ - 2020]</b><br>גנן רוצה לשתול דשא בגינה שצורתה מלבן שאורכו 12 מטרים ורוחבו 8 מטרים. בתוך הגינה יש ערוגת פרחים מרובעת באורך 4 מטרים ורוחב 3 מטרים, בה לא ישתול דשא. מהו השטח שבו יישתל דשא (במ\"ר)?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 200 120' width='100%' height='120' style='max-width:200px;'><rect x='10' y='10' width='180' height='100' fill='#bbf7d0' stroke='#16a34a' stroke-width='2'/><rect x='40' y='30' width='60' height='40' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/><text x='100' y='10' font-family='Arial' font-size='10' fill='#0f172a'>12m</text><text x='195' y='60' font-family='Arial' font-size='10' fill='#0f172a'>8m</text><text x='70' y='45' font-family='Arial' font-size='10' fill='#ca8a04'>4m</text><text x='55' y='65' font-family='Arial' font-size='10' fill='#ca8a04'>3m</text></svg></div>",
        options: ["84 מ\"ר", "96 מ\"ר", "12 מ\"ר", "108 מ\"ר"],
        correctAnswer: 0,
        hint: "חשבו את השטח הכולל של המלבן הגדול, וחסרו ממנו את השטח של המלבן הקטן (הערוגה).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את השטח הכולל של הגינה (מלבן גדול).&rlm;", math_expression: "12 × 8 = 96" },
            { verbal_explanation: "שלב ב': נחשב את השטח של ערוגת הפרחים (מלבן קטן).&rlm;", math_expression: "4 × 3 = 12" },
            { verbal_explanation: "שלב ג': נחסר את שטח הערוגה מהשטח הכולל כדי למצוא את שטח הדשא.&rlm;", math_expression: "96 - 12 = 84" }
        ],
        final_answer: "84 מ\"ר"
    },
    // שאלה 4
    {
        topic: "meitzav_practice",
        subTopic: "חזרה על חומר כיתה ז'",
        question_text: "<b>[לקוח ממבחן מיצ\"ב תשע\"ח - 2018]</b><br>מחירו של מחשב נייד היה 2,000 שקלים. בסוף השנה מחירו ירד ב-15%. כמה עולה המחשב לאחר ההנחה?&rlm;",
        options: ["1,700 שקלים", "1,850 שקלים", "1,500 שקלים", "1,750 שקלים"],
        correctAnswer: 0,
        hint: "חשבו כמה שווים 15% מתוך 2000 (מצאו קודם 10%, ואז 5%). חסרו את התוצאה מהמחיר המקורי.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את סכום ההנחה. נמצא 10% מ-2,000 שקלים על ידי חלוקה ב-10.&rlm;", math_expression: "2000 : 10 = 200" },
            { verbal_explanation: "שלב ב': נמצא 5% שהם חצי מ-10%.&rlm;", math_expression: "200 : 2 = 100" },
            { verbal_explanation: "שלב ג': ההנחה הכוללת (15%) היא החיבור שלהם.&rlm;", math_expression: "200 + 100 = 300" },
            { verbal_explanation: "שלב ד': נחסר את ההנחה מהמחיר המקורי.&rlm;", math_expression: "2000 - 300 = 1700" }
        ],
        final_answer: "1,700 שקלים"
    },
    // שאלה 5
    {
        topic: "meitzav_practice",
        subTopic: "חזרה על חומר כיתה ז'",
        question_text: "<b>[לקוח ממיצ\"ב תשע\"ה - 2015]</b><br>שלוש קרניים יוצאות מנקודה אחת על קו ישר, ויוצרות 3 זוויות צמודות. זווית אחת היא 50°, הזווית השנייה היא 2x, והזווית השלישית היא 3x. מהו ערכו של x?&rlm;",
        options: ["26", "130", "50", "20"],
        correctAnswer: 0,
        hint: "זוויות על קו ישר משלימות יחד ל-180°. 50 + 2x + 3x = 180.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': סכום זוויות הצמודות על קו ישר אחד שווה ל-180 מעלות.&rlm;", math_expression: "50 + 2x + 3x = 180" },
            { verbal_explanation: "שלב ב': נכנס איברים דומים (2x ועוד 3x שווה 5x).&rlm;", math_expression: "50 + 5x = 180" },
            { verbal_explanation: "שלב ג': נחסר 50 משני האגפים.&rlm;", math_expression: "5x = 130" },
            { verbal_explanation: "שלב ד': נחלק ב-5 כדי למצוא את x.&rlm;", math_expression: "x = 130 : 5 = 26" }
        ],
        final_answer: "26"
    },
    // שאלה 6
    {
        topic: "meitzav_practice",
        subTopic: "חזרה על חומר כיתה ז'",
        question_text: "<b>[לקוח ממבחן מיצ\"ב תשע\"ט - 2019]</b><br>נתון הביטוי האלגברי: 2a² - 3b. מה יהיה ערך הביטוי אם נציב a = -3 ו- b = -4 ?&rlm;",
        options: ["30", "6", "-6", "24"],
        correctAnswer: 0,
        hint: "שימו לב: (-3) בריבוע זה פלוס 9. ובנוסף, מינוס 3 כפול מינוס 4 זה פלוס 12.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נציב את המספרים במקום האותיות. חובה לשים מספר שלילי בתוך סוגריים לפני העלאה בחזקה!&rlm;", math_expression: "2 × (-3)² - 3 × (-4)" },
            { verbal_explanation: "שלב ב': נפתור את החזקה. מינוס 3 כפול מינוס 3 שווה לפלוס 9.&rlm;", math_expression: "2 × 9 - 3 × (-4)" },
            { verbal_explanation: "שלב ג': נבצע את פעולות הכפל. 2 כפול 9 זה 18. מינוס 3 כפול מינוס 4 זה פלוס 12.&rlm;", math_expression: "18 + 12" },
            { verbal_explanation: "שלב ד': נחבר.&rlm;", math_expression: "30" }
        ],
        final_answer: "30"
    },
    // שאלה 7
    {
        topic: "meitzav_practice",
        subTopic: "חזרה על חומר כיתה ז'",
        question_text: "<b>[לקוח ממבחן מדדים תשפ\"ב - 2022]</b><br>דני חסך כסף. שליש מהכסף הוציא על מתנה, ורבע מהכסף הוציא על סרט. נשארו לו 50 שקלים. כמה כסף חסך דני בהתחלה?&rlm;",
        options: ["120 שקלים", "100 שקלים", "60 שקלים", "150 שקלים"],
        correctAnswer: 0,
        hint: "חברו את השברים: שליש ועוד רבע (מכנה משותף 12). השארית היא החלק היחסי של ה-50 שקלים מתוך השלם.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחבר את השברים שדני בזבז. מכנה משותף ל-3 ו-4 הוא 12. שליש הם 4/12, רבע הם 3/12.&rlm;", math_expression: "1/3 + 1/4 = 4/12 + 3/12 = 7/12" },
            { verbal_explanation: "שלב ב': נמצא את החלק היחסי שנשאר לו. השלם הוא 12/12.&rlm;", math_expression: "12/12 - 7/12 = 5/12" },
            { verbal_explanation: "שלב ג': ידוע ש-5 החלקי 12 האלו שווים במציאות ל-50 שקלים.&rlm;", math_expression: "(5/12) × x = 50" },
            { verbal_explanation: "שלב ד': אם 5 חלקים שווים 50, אז חלק אחד שווה 10. השלם (12 חלקים) שווה ל-120.&rlm;", math_expression: "x = 50 : 5 × 12 = 120" }
        ],
        final_answer: "120 שקלים"
    },
    // שאלה 8
    {
        topic: "meitzav_practice",
        subTopic: "חזרה על חומר כיתה ז'",
        question_text: "<b>[לקוח ממיצ\"ב תשע\"ח - 2018]</b><br>במערכת צירים נתונות שלוש נקודות: A(2, 4), B(2, -2), C(6, -2). איזה סוג משולש נוצר אם מחברים את שלוש הנקודות?&rlm;",
        options: ["משולש ישר זווית", "משולש שווה שוקיים", "משולש שווה צלעות", "משולש קהה זווית"],
        correctAnswer: 0,
        hint: "ציירו בדמיון: הצלע AB אנכית (ה-x זהה). הצלע BC אופקית (ה-y זהה). מה הזווית בין קו אנכי לקו אופקי?&rlm;",
        solution_steps: [
            { verbal_explanation: "הנקודות A ו-B בעלות קואורדינטת x זהה (2). לכן הקו ביניהן מקביל לציר ה-y (קו אנכי עומד).&rlm;", math_expression: "" },
            { verbal_explanation: "הנקודות B ו-C בעלות קואורדינטת y זהה (-2). לכן הקו ביניהן מקביל לציר ה-x (קו אופקי שוכב).&rlm;", math_expression: "" },
            { verbal_explanation: "הזווית הנוצרת במפגש של קו אנכי וקו אופקי (בנקודה B) היא זווית ישרה (90°). לכן המשולש הוא ישר זווית.&rlm;", math_expression: "∠B = 90°" }
        ],
        final_answer: "משולש ישר זווית"
    },
    // שאלה 9
    {
        topic: "meitzav_practice",
        subTopic: "חזרה על חומר כיתה ז'",
        question_text: "<b>[לקוח ממבחן מיצ\"ב תשע\"ו - 2016]</b><br>לתיבה יש נפח של 120 סמ\"ק. אורך בסיס התיבה הוא 6 ס\"מ, ורוחב הבסיס הוא 4 ס\"מ. מהו גובה התיבה?&rlm;",
        options: ["5 ס\"מ", "10 ס\"מ", "24 ס\"מ", "6 ס\"מ"],
        correctAnswer: 0,
        hint: "נפח תיבה מחושב על ידי הכפלת אורך × רוחב × גובה. 6 כפול 4 שווה 24. מה כפול 24 ייתן 120?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרשום את משוואת הנפח של התיבה.&rlm;", math_expression: "V = Length × Width × Height" },
            { verbal_explanation: "שלב ב': נציב את הנתונים במשוואה.&rlm;", math_expression: "120 = 6 × 4 × h" },
            { verbal_explanation: "שלב ג': נחשב את שטח הבסיס.&rlm;", math_expression: "120 = 24 × h" },
            { verbal_explanation: "שלב ד': נחלק את הנפח ב-24 למציאת הגובה.&rlm;", math_expression: "h = 120 : 24 = 5" }
        ],
        final_answer: "5 ס\"מ"
    },
    // שאלה 10
    {
        topic: "meitzav_practice",
        subTopic: "חזרה על חומר כיתה ז'",
        question_text: "<b>[לקוח ממבחן מיצ\"ב תשע\"ז - 2017]</b><br>היחס בין מספר הבנים למספר הבנות בשכבה ז' הוא 4:5. ידוע שיש בשכבה 60 בנים. כמה תלמידים (בנים ובנות יחד) יש בכל השכבה?&rlm;",
        options: ["135", "100", "75", "120"],
        correctAnswer: 0,
        hint: "היחס של הבנים הוא 4, וזה שווה ל-60 במציאות. פי כמה הורחב היחס? (60:4 = 15). כפלו את סך כל החלקים (9) ב-15.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נבדוק מהו הערך של 'יחידת יחס' אחת. 4 חלקים של בנים שווים ל-60 בנים.&rlm;", math_expression: "60 : 4 = 15" },
            { verbal_explanation: "שלב ב': סך כל החלקים ביחס (בנים + בנות) הוא 9.&rlm;", math_expression: "4 + 5 = 9" },
            { verbal_explanation: "שלב ג': נכפיל את סך החלקים בערך של יחידה אחת (15) כדי למצוא את מספר התלמידים הכולל.&rlm;", math_expression: "9 × 15 = 135" }
        ],
        final_answer: "135"
    },
    // שאלה 11
    {
        topic: "meitzav_practice",
        subTopic: "חזרה על חומר כיתה ז'",
        question_text: "<b>[לקוח ממבחן מיצ\"ב תשפ\"א - 2021]</b><br>בכד יש כדורים בשלושה צבעים: 3 אדומים, 5 ירוקים ו-2 שחורים. מוציאים באקראי כדור אחד. מהי ההסתברות שהכדור שהוצא **אינו** ירוק?&rlm;",
        options: ["1 : 2", "1 : 5", "5 : 10", "3 : 10"],
        correctAnswer: 0,
        hint: "חישבו כמה כדורים בסך הכל יש בכד (10). כמה מהם אינם ירוקים? (האדומים והשחורים יחד הם 5).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את סך כל הכדורים (מרחב המדגם).&rlm;", math_expression: "3 + 5 + 2 = 10" },
            { verbal_explanation: "שלב ב': נמצא את הכדורים שאינם ירוקים (כלומר, אדומים ושחורים יחד).&rlm;", math_expression: "3 + 2 = 5" },
            { verbal_explanation: "שלב ג': ההסתברות היא 5 מתוך 10. נצמצם את השבר ויצא בדיוק חצי.&rlm;", math_expression: "5 : 10 = 1 : 2" }
        ],
        final_answer: "1 : 2"
    },
    // שאלה 12
    {
        topic: "meitzav_practice",
        subTopic: "חזרה על חומר כיתה ז'",
        question_text: "<b>[לקוח ממבחן מיצ\"ב תשע\"ט - 2019]</b><br>בסדרה הנדסית של צורות, באיבר ה-n (במקום ה-n) יש 3n + 1 ריבועים. כמה ריבועים יהיו באיבר שנמצא במקום ה-15?&rlm;",
        options: ["46", "45", "18", "315"],
        correctAnswer: 0,
        hint: "פשוט מאוד: הציבו את המספר 15 במקום האות n בביטוי האלגברי הנתון.&rlm;",
        solution_steps: [
            { verbal_explanation: "הביטוי 3n + 1 נותן לנו חוקיות קבועה לכל מקום בסדרה.&rlm;", math_expression: "" },
            { verbal_explanation: "כדי למצוא את כמות הריבועים במקום ה-15, נציב n = 15.&rlm;", math_expression: "3 × 15 + 1" },
            { verbal_explanation: "נחשב: 3 כפול 15 שווה 45. ועוד 1 שווה 46.&rlm;", math_expression: "45 + 1 = 46" }
        ],
        final_answer: "46"
    },

    // ==========================================================
    // תת נושא 2: פתרון מבחנים משנים קודמות (12 שאלות רמת כיתה ח')
    // ==========================================================
    
    // שאלה 13
    {
        topic: "meitzav_practice",
        subTopic: "פתרון מבחנים משנים קודמות",
        question_text: "<b>[מתוך מבחן מדדים תשפ\"ב - 2022]</b><br>נתון גרף של פונקציה קווית. מהי משוואת הישר המתארת גרף זה?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 200 150' width='100%' height='150' style='max-width:200px;'><line x1='10' y1='100' x2='190' y2='100' stroke='#334155' stroke-width='2'/><line x1='50' y1='10' x2='50' y2='140' stroke='#334155' stroke-width='2'/><line x1='10' y1='140' x2='150' y2='0' stroke='#3b82f6' stroke-width='2'/><circle cx='50' cy='100' r='4' fill='#ef4444'/><circle cx='100' cy='50' r='4' fill='#ef4444'/><line x1='100' y1='50' x2='100' y2='100' stroke='#94a3b8' stroke-dasharray='4,4'/><line x1='100' y1='50' x2='50' y2='50' stroke='#94a3b8' stroke-dasharray='4,4'/><text x='35' y='115' font-family='Arial' font-size='10' fill='#0f172a'>(0,0)</text><text x='115' y='45' font-family='Arial' font-size='10' fill='#0f172a'>(2,2)</text></svg></div>",
        options: ["y = x", "y = 2x", "y = 0.5x", "y = x + 2"],
        correctAnswer: 0,
        hint: "הישר עובר בראשית הצירים (0,0) ובנקודה (2,2). חשבו את השיפוע: הפרש y חלקי הפרש x.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נמצא שתי נקודות על הגרף. הגרף עובר ב-(0,0) וב-(2,2).&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ב': נחשב את השיפוע (m). העלייה ב-y מ-0 ל-2 היא 2. ההתקדמות ב-x מ-0 ל-2 היא 2.&rlm;", math_expression: "m = (2 - 0) : (2 - 0) = 2 : 2 = 1" },
            { verbal_explanation: "שלב ג': מכיוון שהגרף עובר בראשית הצירים, חיתוך ציר y הוא 0 (b=0).&rlm;", math_expression: "b = 0" },
            { verbal_explanation: "שלב ד': נרכיב את המשוואה y = 1x + 0, שהיא פשוט y = x.&rlm;", math_expression: "y = x" }
        ],
        final_answer: "y = x"
    },
    // שאלה 14
    {
        topic: "meitzav_practice",
        subTopic: "פתרון מבחנים משנים קודמות",
        question_text: "<b>[לקוח ממבחן מיצ\"ב תשע\"ט - 2019]</b><br>מצאו את משוואת הישר העובר דרך הנקודות (-1, 5) ו- (3, -3).&rlm;",
        options: ["y = -2x + 3", "y = 2x + 7", "y = -2x - 3", "y = -x + 4"],
        correctAnswer: 0,
        hint: "חשבו את השיפוע (m): מינוס 3 פחות 5 במונה, 3 פחות מינוס 1 במכנה. לאחר מכן הציבו נקודה למציאת b.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': חישוב השיפוע. מונה: -3 פחות 5 שווה -8. מכנה: 3 פחות (-1) שווה 4.&rlm;", math_expression: "m = (-3 - 5) : (3 - (-1)) = -8 : 4 = -2" },
            { verbal_explanation: "שלב ב': נציב את m=-2 ואת הנקודה (-1, 5) במשוואת הישר y=mx+b.&rlm;", math_expression: "5 = (-2) × (-1) + b" },
            { verbal_explanation: "שלב ג': נחשב ונבודד את b. מינוס 2 כפול מינוס 1 שווה 2 חיובי.&rlm;", math_expression: "5 = 2 + b  =>  b = 3" },
            { verbal_explanation: "שלב ד': המשוואה היא y = -2x + 3.&rlm;", math_expression: "y = -2x + 3" }
        ],
        final_answer: "y = -2x + 3"
    },
    // שאלה 15
    {
        topic: "meitzav_practice",
        subTopic: "פתרון מבחנים משנים קודמות",
        question_text: "<b>[לקוח ממבחן מיצ\"ב תשע\"ח - 2018]</b><br>בעיה במערכת משוואות: משפחה קנתה 4 כרטיסי מבוגר ו-2 כרטיסי ילד לפארק שעשועים ושילמה 220 שקלים. משפחה אחרת קנתה 2 כרטיסי מבוגר ו-2 כרטיסי ילד ושילמה 140 שקלים. כמה עולה כרטיס למבוגר?&rlm;",
        options: ["40 שקלים", "30 שקלים", "50 שקלים", "60 שקלים"],
        correctAnswer: 0,
        hint: "סמנו מבוגר כ-x וילד כ-y. חסרו את המשוואה השנייה (2x+2y=140) מהראשונה (4x+2y=220). איברי ה-y יתבטלו!&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרכיב שתי משוואות.&rlm;", math_expression: "1) 4x + 2y = 220 , 2) 2x + 2y = 140" },
            { verbal_explanation: "שלב ב': נחסר את משוואה 2 ממשוואה 1 בשיטת השוואת מקדמים (ה-2y יתבטל).&rlm;", math_expression: "(4x - 2x) = 220 - 140" },
            { verbal_explanation: "שלב ג': נפתור עבור x (מחיר מבוגר).&rlm;", math_expression: "2x = 80  =>  x = 40" }
        ],
        final_answer: "40 שקלים"
    },
    // שאלה 16
    {
        topic: "meitzav_practice",
        subTopic: "פתרון מבחנים משנים קודמות",
        question_text: "<b>[לקוח ממיצ\"ב תש\"פ - 2020]</b><br>בשרטוט נתונים שני ישרים הנחתכים בנקודה O, ויוצרים שני משולשים. נתון כי AO = BO וכן CO = DO. על סמך איזה משפט נוכל להוכיח שהמשולש AOC חופף למשולש BOD?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 200 100' width='100%' height='100' style='max-width:200px;'><line x1='30' y1='20' x2='170' y2='80' stroke='#334155' stroke-width='2'/><line x1='30' y1='80' x2='170' y2='20' stroke='#334155' stroke-width='2'/><polygon points='30,20 170,20 100,50' fill='none' stroke='none'/><line x1='30' y1='20' x2='30' y2='80' stroke='#3b82f6' stroke-width='2'/><line x1='170' y1='20' x2='170' y2='80' stroke='#3b82f6' stroke-width='2'/><text x='95' y='45' font-family='Arial' font-size='12'>O</text><text x='15' y='20' font-family='Arial' font-size='12'>A</text><text x='15' y='85' font-family='Arial' font-size='12'>C</text><text x='175' y='20' font-family='Arial' font-size='12'>B</text><text x='175' y='85' font-family='Arial' font-size='12'>D</text></svg></div>",
        options: ["צ.ז.צ (צלע-זווית-צלע, בזכות הזוויות הקודקודיות ב-O)", "ז.צ.ז (זווית-צלע-זווית)", "צ.צ.צ (שלוש צלעות)", "לא ניתן להוכיח"],
        correctAnswer: 0,
        hint: "יש לכם שתי צלעות שוות שנתונות. הזווית שביניהן בנקודה O היא 'זווית קודקודית'. זוויות קודקודיות תמיד שוות!&rlm;",
        solution_steps: [
            { verbal_explanation: "טענה 1: נתון ש- AO = BO.", math_expression: "" },
            { verbal_explanation: "טענה 2: הזוויות בנקודה O (זווית AOC וזווית BOD) הן זוויות קודקודיות, ולכן הן שוות.", math_expression: "∠AOC = ∠BOD" },
            { verbal_explanation: "טענה 3: נתון ש- CO = DO.", math_expression: "" },
            { verbal_explanation: "מסקנה: המשולשים חופפים לפי משפט צ.ז.צ (שתי צלעות והזווית הכלואה ביניהן).", math_expression: "" }
        ],
        final_answer: "צ.ז.צ (צלע-זווית-צלע, בזכות הזוויות הקודקודיות ב-O)"
    },
    // שאלה 17
    {
        topic: "meitzav_practice",
        subTopic: "פתרון מבחנים משנים קודמות",
        question_text: "<b>[לקוח ממבחן מיצ\"ב תשע\"ז - 2017]</b><br>נתונים שני ישרים מקבילים הנחתכים על ידי ישר שלישי. שתי זוויות **מתחלפות** מיוצגות על ידי הביטויים: 3x - 20 ו- x + 40. מצאו את ערכו של x.&rlm;",
        options: ["30", "40", "20", "50"],
        correctAnswer: 0,
        hint: "זוויות מתחלפות בין ישרים מקבילים הן שוות זו לזו. השוו את שני הביטויים: 3x - 20 = x + 40.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נבנה משוואה המבוססת על השוויון בין זוויות מתחלפות.&rlm;", math_expression: "3x - 20 = x + 40" },
            { verbal_explanation: "שלב ב': נעביר את x לאגף שמאל (במינוס) ואת 20- לאגף ימין (בפלוס).&rlm;", math_expression: "3x - x = 40 + 20" },
            { verbal_explanation: "שלב ג': נכנס איברים.&rlm;", math_expression: "2x = 60" },
            { verbal_explanation: "שלב ד': נחלק ב-2 למציאת x.&rlm;", math_expression: "x = 30" }
        ],
        final_answer: "30"
    },
    // שאלה 18
    {
        topic: "meitzav_practice",
        subTopic: "פתרון מבחנים משנים קודמות",
        question_text: "<b>[לקוח ממבחן מיצ\"ב תשע\"ט - 2019]</b><br>במלבן ABCD אורך צלע אחת הוא 9 ס\"מ, ואורך הצלע הסמוכה לה הוא 12 ס\"מ. מהו אורך אלכסון המלבן (AC)?&rlm;",
        options: ["15 ס\"מ", "21 ס\"מ", "108 ס\"מ", "14 ס\"מ"],
        correctAnswer: 0,
        hint: "האלכסון יוצר משולש ישר זווית שבו הניצבים הם 9 ו-12. השתמשו במשפט פיתגורס: a² + b² = c².&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': אלכסון המלבן מהווה יתר במשולש ישר זווית. נשתמש במשפט פיתגורס.&rlm;", math_expression: "9² + 12² = c²" },
            { verbal_explanation: "שלב ב': נחשב את הריבועים. 9 כפול 9 זה 81. 12 כפול 12 זה 144.&rlm;", math_expression: "81 + 144 = c²" },
            { verbal_explanation: "שלב ג': נחבר את התוצאות.&rlm;", math_expression: "225 = c²" },
            { verbal_explanation: "שלב ד': נוציא שורש ריבועי מ-225 כדי למצוא את אורך היתר c.&rlm;", math_expression: "c = √225 = 15" }
        ],
        final_answer: "15 ס\"מ"
    },
    // שאלה 19
    {
        topic: "meitzav_practice",
        subTopic: "פתרון מבחנים משנים קודמות",
        question_text: "<b>[לקוח ממבחן מדדים תשפ\"ב - 2022]</b><br>בטבלת שכיחויות נתונים הציונים הבאים של קבוצת תלמידים: ציון 6 (2 תלמידים), ציון 7 (4 תלמידים), ציון 8 (3 תלמידים), ציון 10 (תלמיד 1). מהו ממוצע הציונים בקבוצה?&rlm;",
        options: ["7.4", "7.5", "7.0", "8.0"],
        correctAnswer: 0,
        hint: "כפלו כל ציון במספר התלמידים שקיבלו אותו. חברו את כל המכפלות (סך כל הנקודות) וחלקו בסך כל התלמידים (10).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את סך הנקודות הכולל של כל התלמידים יחד.&rlm;", math_expression: "(6 × 2) + (7 × 4) + (8 × 3) + (10 × 1)" },
            { verbal_explanation: "נחשב את הכפל: 12 + 28 + 24 + 10 = 74.&rlm;", math_expression: "Sum = 74" },
            { verbal_explanation: "שלב ב': נחשב את מספר התלמידים הכולל בקבוצה.&rlm;", math_expression: "2 + 4 + 3 + 1 = 10" },
            { verbal_explanation: "שלב ג': נחלק את סך הנקודות (74) במספר התלמידים (10) כדי לקבל את הממוצע.&rlm;", math_expression: "74 : 10 = 7.4" }
        ],
        final_answer: "7.4"
    },
    // שאלה 20
    {
        topic: "meitzav_practice",
        subTopic: "פתרון מבחנים משנים קודמות",
        question_text: "<b>[לקוח ממבחן מיצ\"ב תשע\"ח - 2018]</b><br>מחירו של אופניים היה 1,000 שקלים. תחילה עלה המחיר ב-10%. לאחר מספר חודשים ירד המחיר החדש ב-10%. מהו מחיר האופניים כעת?&rlm;",
        options: ["990 שקלים", "1,000 שקלים", "900 שקלים", "1,010 שקלים"],
        correctAnswer: 0,
        hint: "עלייה של 10% הופכת את המחיר ל-1,100 ש\"ח. הירידה של 10% מחושבת מתוך ה-1,100, ולא מתוך ה-1,000 המקורי!&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': חישוב המחיר לאחר ההתייקרות. 10% מ-1000 הם 100 שקלים. המחיר הפך ל-1100.&rlm;", math_expression: "1000 + 100 = 1100" },
            { verbal_explanation: "שלב ב': כעת יש הוזלה של 10% מתוך המחיר החדש. 10% מ-1100 הם 110 שקלים.&rlm;", math_expression: "1100 : 10 = 110" },
            { verbal_explanation: "שלב ג': נחסר את ההוזלה מהמחיר הקודם. נקבל 990 שקלים.&rlm;", math_expression: "1100 - 110 = 990" }
        ],
        final_answer: "990 שקלים"
    },
    // שאלה 21
    {
        topic: "meitzav_practice",
        subTopic: "פתרון מבחנים משנים קודמות",
        question_text: "<b>[לקוח ממבחן מיצ\"ב תשע\"ט - 2019]</b><br>פשטו את הביטוי האלגברי הבא (שימו לב לפעולות הכפל והחיסור):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>(x + 4)(x - 4) - x² = ?</div>",
        options: ["-16", "0", "16", "2x² - 16"],
        correctAnswer: 0,
        hint: "הביטוי בסוגריים הוא 'הפרש ריבועים'. הוא נפתח ל- x² - 16. מה קורה כשמחסרים מזה x² ?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נפתח את הסוגריים. אלו סוגריים של (a+b)(a-b) שנותנים a²-b².&rlm;", math_expression: "(x + 4)(x - 4) = x² - 16" },
            { verbal_explanation: "שלב ב': נציב את התוצאה חזרה לתרגיל המלא.&rlm;", math_expression: "x² - 16 - x²" },
            { verbal_explanation: "שלב ג': ה-x² החיובי וה-x² השלילי מבטלים זה את זה, ונשארנו עם המספר מינוס 16.&rlm;", math_expression: "-16" }
        ],
        final_answer: "-16"
    },
    // שאלה 22
    {
        topic: "meitzav_practice",
        subTopic: "פתרון מבחנים משנים קודמות",
        question_text: "<b>[לקוח ממיצ\"ב תש\"פ - 2020]</b><br>פתרו את אי השוויון הבא:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>5x - 2 < 3x + 10</div>",
        options: ["x < 6", "x > 6", "x < 4", "x > 4"],
        correctAnswer: 0,
        hint: "פעלו בדיוק כמו במשוואה: העבירו 3x שמאלה במינוס, ואת ה- 2- ימינה בפלוס.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נרכז את המשתנים (x) בצד שמאל. נעביר את 3x במינוס.&rlm;", math_expression: "5x - 3x - 2 < 10" },
            { verbal_explanation: "שלב ב': נרכז את המספרים בצד ימין. נעביר את 2- בסימן פלוס.&rlm;", math_expression: "2x < 10 + 2" },
            { verbal_explanation: "שלב ג': נחבר.&rlm;", math_expression: "2x < 12" },
            { verbal_explanation: "שלב ד': נחלק ב-2. מכיוון שמחלקים במספר חיובי, כיוון הסימן לא משתנה.&rlm;", math_expression: "x < 6" }
        ],
        final_answer: "x < 6"
    },
    // שאלה 23
    {
        topic: "meitzav_practice",
        subTopic: "פתרון מבחנים משנים קודמות",
        question_text: "<b>[לקוח ממבחן מיצ\"ב תשע\"ז - 2017]</b><br>שתי מכוניות יצאו בו זמנית זו לקראת זו משתי ערים שהמרחק ביניהן 300 ק\"מ. מהירותה של מכונית אחת גדולה ב-10 קמ\"ש ממהירותה של השנייה. הן נפגשו לאחר שעתיים (2 שעות). מהי מהירותה של המכונית האיטית?&rlm;",
        options: ["70 קמ\"ש", "80 קמ\"ש", "60 קמ\"ש", "75 קמ\"ש"],
        correctAnswer: 0,
        hint: "מהירות ההתקרבות המשותפת שלהן היא הדרך הכוללת חלקי הזמן (300 חלקי 2 = 150 קמ\"ש). המהירויות הן x ו- x+10. סכומן 150.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נמצא את המהירות המשותפת (המרחק ששתי המכוניות סוגרות יחד בשעה אחת).&rlm;", math_expression: "300 : 2 = 150" },
            { verbal_explanation: "שלב ב': נרכיב משוואה. מהירות איטית (x) + מהירות מהירה (x+10) = 150.&rlm;", math_expression: "x + (x + 10) = 150" },
            { verbal_explanation: "שלב ג': נכנס איברים ונעביר את ה-10 אגף.&rlm;", math_expression: "2x = 140" },
            { verbal_explanation: "שלב ד': נחלק ב-2 למציאת המהירות האיטית.&rlm;", math_expression: "x = 70" }
        ],
        final_answer: "70 קמ\"ש"
    },
    // שאלה 24
    {
        topic: "meitzav_practice",
        subTopic: "פתרון מבחנים משנים קודמות",
        question_text: "<b>[לקוח ממבחן מיצ\"ב תשפ\"א - 2021]</b><br>במערכת צירים משורטט משולש שקודקודיו הם הנקודות A(0,4) , B(-3,0) , C(3,0). מהו שטח המשולש?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 200 150' width='100%' height='150' style='max-width:200px;'><line x1='10' y1='120' x2='190' y2='120' stroke='#334155' stroke-width='2'/><line x1='100' y1='10' x2='100' y2='140' stroke='#334155' stroke-width='2'/><polygon points='100,40 40,120 160,120' fill='#bae6fd' stroke='#0284c7' stroke-width='2'/><circle cx='100' cy='40' r='4' fill='#ef4444'/><text x='110' y='35' font-family='Arial' font-size='10' fill='#0f172a'>A(0,4)</text><text x='10' y='110' font-family='Arial' font-size='10' fill='#0f172a'>B(-3,0)</text><text x='150' y='110' font-family='Arial' font-size='10' fill='#0f172a'>C(3,0)</text></svg></div>",
        options: ["12", "24", "6", "10"],
        correctAnswer: 0,
        hint: "הבסיס מונח על ציר ה-x, והאורך שלו הוא המרחק ממינוס 3 עד פלוס 3 (6 יחידות). הגובה הוא על ציר ה-y מהרצפה עד 4 (4 יחידות).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': חישוב אורך הבסיס של המשולש (BC). המרחק מנקודה 3- ועד לנקודה 3 על ציר x הוא 6 יחידות.&rlm;", math_expression: "Base = 3 - (-3) = 6" },
            { verbal_explanation: "שלב ב': הגובה (h) מהקודקוד A אל הבסיס (ציר x) הוא פשוט קואורדינטת ה-y של הקודקוד.&rlm;", math_expression: "Height = 4" },
            { verbal_explanation: "שלב ג': נחשב את השטח לפי נוסחת שטח משולש (בסיס כפול גובה לחלק ל-2).&rlm;", math_expression: "Area = (6 × 4) : 2 = 24 : 2 = 12" }
        ],
        final_answer: "12"
    }

];