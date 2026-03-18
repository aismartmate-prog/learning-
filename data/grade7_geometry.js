// ========================================================================
// שכבת גיל: כיתה ז' | נושא: גיאומטריה
// 4 תתי נושאים | 48 שאלות סה"כ 
// איורים צבעוניים מרהיבים מוטמעים, פתרונות בשלבים מלאים כולל בניית משוואות.
// כתיבה נקייה ובטוחה: שימוש ב- × לכפל, ב- : לחילוק, ובשברים פשוטים.
// ========================================================================

const questionsDB = [

    // ==========================================================
    // תת נושא 1: שטח והיקף מלבן (12 שאלות)
    // ==========================================================
    
    // שאלה 1
    {
        topic: "geometry",
        subTopic: "שטח והיקף מלבן",
        question_text: "נתון מלבן שאורכו 12 ס\"מ ורוחבו 5 ס\"מ. מהו שטח המלבן ומהו היקפו?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 200 100' width='100%' height='100' style='max-width:200px;'><rect x='20' y='20' width='160' height='60' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><text x='100' y='15' fill='#0f172a' font-family='Arial' font-size='14' font-weight='bold' text-anchor='middle'>12 ס\"מ</text><text x='10' y='55' fill='#0f172a' font-family='Arial' font-size='14' font-weight='bold' text-anchor='middle'>5</text></svg></div>",
        options: ["שטח: 60 סמ\"ר, היקף: 34 ס\"מ", "שטח: 60 סמ\"ר, היקף: 17 ס\"מ", "שטח: 34 סמ\"ר, היקף: 60 ס\"מ", "שטח: 17 סמ\"ר, היקף: 34 ס\"מ"],
        correctAnswer: 0,
        hint: "שטח מלבן הוא אורך כפול רוחב. היקף מלבן הוא סכום כל ארבע הצלעות (פעמיים אורך ועוד פעמיים רוחב).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את שטח המלבן. נכפול את האורך ברוחב.&rlm;", math_expression: "12 × 5 = 60" },
            { verbal_explanation: "שלב ב': נחשב את ההיקף. למלבן שתי צלעות באורך 12 ושתי צלעות באורך 5.&rlm;", math_expression: "12 + 12 + 5 + 5 = 34" },
            { verbal_explanation: "לכן השטח הוא 60 סמ\"ר וההיקף הוא 34 ס\"מ.&rlm;", math_expression: "" }
        ],
        final_answer: "שטח: 60 סמ\"ר, היקף: 34 ס\"מ"
    },
    // שאלה 2
    {
        topic: "geometry",
        subTopic: "שטח והיקף מלבן",
        question_text: "שטחו של מלבן הוא 48 סמ\"ר. אורכו של המלבן הוא 8 ס\"מ. מהו היקפו של המלבן?&rlm;",
        options: ["28 ס\"מ", "14 ס\"מ", "32 ס\"מ", "20 ס\"מ"],
        correctAnswer: 0,
        hint: "היעזרו בשטח כדי למצוא את רוחב המלבן (שטח לחלק לאורך). לאחר מכן, חשבו את ההיקף.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': שטח מלבן הוא אורך כפול רוחב. נמצא את הרוחב על ידי חלוקת השטח באורך.&rlm;", math_expression: "48 : 8 = 6" },
            { verbal_explanation: "שלב ב': כעת אנו יודעים שהאורך הוא 8 והרוחב הוא 6. נחשב את ההיקף.&rlm;", math_expression: "2 × 8 + 2 × 6" },
            { verbal_explanation: "שלב ג': נסכם את הצלעות.&rlm;", math_expression: "16 + 12 = 28" }
        ],
        final_answer: "28 ס\"מ"
    },
    // שאלה 3
    {
        topic: "geometry",
        subTopic: "שטח והיקף מלבן",
        question_text: "אורכו של מלבן גדול ב-3 ס\"מ מרוחבו. היקף המלבן הוא 26 ס\"מ. מהו שטח המלבן?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 200 100' width='100%' height='100' style='max-width:200px;'><rect x='30' y='20' width='140' height='60' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/><text x='100' y='15' fill='#0f172a' font-family='Arial' font-size='14' font-weight='bold' text-anchor='middle'>x + 3</text><text x='15' y='55' fill='#0f172a' font-family='Arial' font-size='14' font-weight='bold' text-anchor='middle'>x</text></svg></div>",
        options: ["40 סמ\"ר", "26 סמ\"ר", "30 סמ\"ר", "48 סמ\"ר"],
        correctAnswer: 0,
        hint: "נסמן את הרוחב ב-x, ולכן האורך הוא x+3. בנו משוואה להיקף המלבן ומצאו את x. לבסוף, חשבו את השטח.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נגדיר משתנים. רוחב = x, אורך = x+3. משוואת ההיקף היא סכום 4 הצלעות שווה ל-26.&rlm;", math_expression: "x + x + (x+3) + (x+3) = 26" },
            { verbal_explanation: "שלב ב': נכנס איברים דומים (4 פעמים x ועוד 6).&rlm;", math_expression: "4x + 6 = 26" },
            { verbal_explanation: "שלב ג': נחסר 6 משני האגפים.&rlm;", math_expression: "4x = 20" },
            { verbal_explanation: "שלב ד': נחלק ב-4 למציאת x (הרוחב).&rlm;", math_expression: "x = 5" },
            { verbal_explanation: "שלב ה': הרוחב הוא 5, האורך הוא 8. נחשב שטח: 8 כפול 5.&rlm;", math_expression: "8 × 5 = 40" }
        ],
        final_answer: "40 סמ\"ר"
    },
    // שאלה 4
    {
        topic: "geometry",
        subTopic: "שטח והיקף מלבן",
        question_text: "קיר מלבני באורך 4 מטרים וברוחב 3 מטרים מצופה באריחי קרמיקה מרובעים. צלע של כל אריח היא 0.5 מטר (חצי מטר). כמה אריחים נדרשים כדי לצפות את הקיר כולו?&rlm;",
        options: ["48 אריחים", "24 אריחים", "12 אריחים", "36 אריחים"],
        correctAnswer: 0,
        hint: "חשבו את שטח הקיר כולו (במ\"ר) ואת שטח אריח אחד (במ\"ר), ואז חלקו את שטח הקיר בשטח האריח.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את שטח הקיר במטרים מרובעים.&rlm;", math_expression: "4 × 3 = 12" },
            { verbal_explanation: "שלב ב': נחשב את שטחו של אריח אחד (ריבוע שצלעו חצי מטר).&rlm;", math_expression: "0.5 × 0.5 = 0.25" },
            { verbal_explanation: "שלב ג': נחלק את השטח הכולל בשטח של אריח אחד. לחלק ב-0.25 (רבע) זה כמו לכפול ב-4.&rlm;", math_expression: "12 : 0.25 = 48" }
        ],
        final_answer: "48 אריחים"
    },
    // שאלה 5
    {
        topic: "geometry",
        subTopic: "שטח והיקף מלבן",
        question_text: "אם נגדיל את האורך והרוחב של מלבן פי 2, פי כמה יגדל השטח שלו?&rlm;",
        options: ["פי 4", "פי 2", "פי 8", "השטח לא ישתנה"],
        correctAnswer: 0,
        hint: "נסו להציב מספרים! למשל, מלבן מקורי של 2 על 3. שטחו 6. עכשיו הכפילו את הצלעות פי 2 (4 על 6). מה השטח החדש?&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': שטח המלבן המקורי הוא האורך (a) כפול הרוחב (b).&rlm;", math_expression: "S = a × b" },
            { verbal_explanation: "שלב ב': במלבן החדש, האורך הוא 2a והרוחב הוא 2b. נחשב את השטח החדש.&rlm;", math_expression: "S_new = 2a × 2b" },
            { verbal_explanation: "שלב ג': נסדר את איברי הכפל. 2 כפול 2 שווה 4.&rlm;", math_expression: "S_new = 4 × (a × b)" },
            { verbal_explanation: "המסקנה היא שהשטח גדל פי 4.&rlm;", math_expression: "" }
        ],
        final_answer: "פי 4"
    },
    // שאלה 6
    {
        topic: "geometry",
        subTopic: "שטח והיקף מלבן",
        question_text: "חצר מלבנית מוקפת בשביל הליכה. מידות החצר (הפנימית) הן 10 מטרים אורך ו-8 מטרים רוחב. רוחב השביל המקיף אותה הוא 1 מטר מכל כיוון. מהו שטח השביל בלבד?&rlm;",
        options: ["40 מ\"ר", "20 מ\"ר", "120 מ\"ר", "36 מ\"ר"],
        correctAnswer: 0,
        hint: "חשבו את השטח הכולל של החצר *כולל* השביל. שימו לב שהשביל מוסיף 1 מטר לכל צד (כלומר מוסיף 2 מטרים לאורך ו-2 מטרים לרוחב). חסרו מהשטח הכולל את שטח החצר הפנימית.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': מידות המלבן הפנימי (החצר) הן 10 על 8. שטחו:&rlm;", math_expression: "10 × 8 = 80" },
            { verbal_explanation: "שלב ב': מידות המלבן החיצוני (כולל השביל). האורך גדל ב-2 (מטר מכל צד) ל-12. הרוחב גדל ב-2 ל-10.&rlm;", math_expression: "L = 12 , W = 10" },
            { verbal_explanation: "שלב ג': שטח המלבן החיצוני הכולל.&rlm;", math_expression: "12 × 10 = 120" },
            { verbal_explanation: "שלב ד': שטח השביל הוא ההפרש בין השטח החיצוני לפנימי.&rlm;", math_expression: "120 - 80 = 40" }
        ],
        final_answer: "40 מ\"ר"
    },
    // שאלה 7
    {
        topic: "geometry",
        subTopic: "שטח והיקף מלבן",
        question_text: "רוחבו של מלבן הוא 1/3 (שליש) מאורכו. היקף המלבן הוא 32 ס\"מ. מהו שטח המלבן?&rlm;",
        options: ["48 סמ\"ר", "64 סמ\"ר", "32 סמ\"ר", "96 סמ\"ר"],
        correctAnswer: 0,
        hint: "הימנעו משברים: סמנו את הרוחב ב-x, ואת האורך ב-3x (כי האורך גדול פי 3). בנו משוואת היקף.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן רוחב = x, לכן אורך = 3x. משוואת ההיקף:&rlm;", math_expression: "2 × (x + 3x) = 32" },
            { verbal_explanation: "שלב ב': נחבר את האיברים בתוך הסוגריים.&rlm;", math_expression: "2 × 4x = 32" },
            { verbal_explanation: "שלב ג': נפתור את המשוואה.&rlm;", math_expression: "8x = 32  =>  x = 4" },
            { verbal_explanation: "שלב ד': הרוחב הוא 4 והאורך הוא 12 (3 פעמים 4). נחשב את השטח.&rlm;", math_expression: "4 × 12 = 48" }
        ],
        final_answer: "48 סמ\"ר"
    },
    // שאלה 8
    {
        topic: "geometry",
        subTopic: "שטח והיקף מלבן",
        question_text: "מלבן א' ומלבן ב' הם בעלי אותו היקף. מלבן א' הוא מלבן במידות 6 על 10. מלבן ב' הוא ריבוע. מהו שטחו של הריבוע (מלבן ב')?&rlm;",
        options: ["64 סמ\"ר", "60 סמ\"ר", "32 סמ\"ר", "100 סמ\"ר"],
        correctAnswer: 0,
        hint: "חשבו את ההיקף של מלבן א'. מכיוון שההיקף של הריבוע שווה לו, חלקו את ההיקף ב-4 כדי למצוא את צלע הריבוע, ואז חשבו את שטחו.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את היקף מלבן א'.&rlm;", math_expression: "2 × (10 + 6) = 32" },
            { verbal_explanation: "שלב ב': היקף הריבוע הוא 32. בריבוע 4 צלעות שוות, לכן צלע הריבוע היא 32 לחלק ל-4.&rlm;", math_expression: "32 : 4 = 8" },
            { verbal_explanation: "שלב ג': נחשב את שטח הריבוע (צלע כפול צלע).&rlm;", math_expression: "8 × 8 = 64" }
        ],
        final_answer: "64 סמ\"ר"
    },
    // שאלה 9
    {
        topic: "geometry",
        subTopic: "שטח והיקף מלבן",
        question_text: "לפניכם צורת 'ר' המורכבת משני מלבנים. כל הזוויות ישרות. מהו ההיקף של הצורה (בס\"מ)?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 150 150' width='100%' height='150' style='max-width:150px;'><polygon points='20,20 80,20 80,80 140,80 140,140 20,140' fill='#dcfce7' stroke='#16a34a' stroke-width='2'/><text x='50' y='15' font-family='Arial' font-size='12' fill='#0f172a'>6</text><text x='110' y='75' font-family='Arial' font-size='12' fill='#0f172a'>6</text><text x='148' y='110' font-family='Arial' font-size='12' fill='#0f172a'>6</text><text x='10' y='80' font-family='Arial' font-size='12' fill='#0f172a'>12</text></svg></div>",
        options: ["48 ס\"מ", "36 ס\"מ", "42 ס\"מ", "60 ס\"מ"],
        correctAnswer: 0,
        hint: "מצאו את הצלעות החסרות. הצלע התחתונה מורכבת מ-6 ומ-6 (סך הכל 12). הצלע השמאלית נתונה (12). ניתן גם להשתמש בשיטת 'הזזת צלעות' ליצירת מלבן שלם השווה לאותו היקף.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': חישוב הצלעות החסרות. הצלע התחתונה מורכבת מ-6 ס\"מ פלוס 6 ס\"מ = 12 ס\"מ.&rlm;", math_expression: "6 + 6 = 12" },
            { verbal_explanation: "שלב ב': נחבר את כל הצלעות: שמאל(12) + למעלה(6) + מדרגה יורדת(6) + מדרגה ימינה(6) + ימין(6) + למטה(12).&rlm;", math_expression: "12 + 6 + 6 + 6 + 6 + 12 = 48" },
            { verbal_explanation: "טריק: הצורה חסומה במלבן של 12 על 12, והיקפה זהה להיקף המלבן החוסם (2 כפול 24 = 48).&rlm;", math_expression: "" }
        ],
        final_answer: "48 ס\"מ"
    },
    // שאלה 10
    {
        topic: "geometry",
        subTopic: "שטח והיקף מלבן",
        question_text: "רוצים לגדר גינה מלבנית שמידותיה 15 מטרים ו-10 מטרים. יש להשאיר פתח של 2 מטרים עבור שער. עלות מטר גדר היא 50 שקלים. כמה תעלה הגדר?&rlm;",
        options: ["2,400 שקלים", "2,500 שקלים", "1,200 שקלים", "2,300 שקלים"],
        correctAnswer: 0,
        hint: "חשבו את ההיקף הכולל של הגינה. חסרו 2 מטרים עבור השער. את התוצאה (אורך הגדר בפועל) כפלו בעלות למטר.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את ההיקף המלא של הגינה.&rlm;", math_expression: "2 × (15 + 10) = 50" },
            { verbal_explanation: "שלב ב': נחסר 2 מטרים עבור פתח השער למציאת אורך הגדר בפועל.&rlm;", math_expression: "50 - 2 = 48" },
            { verbal_explanation: "שלב ג': נכפול את אורך הגדר במחיר למטר.&rlm;", math_expression: "48 × 50 = 2400" }
        ],
        final_answer: "2,400 שקלים"
    },
    // שאלה 11
    {
        topic: "geometry",
        subTopic: "שטח והיקף מלבן",
        question_text: "מלבן חולק לשני ריבועים שווים. היקפו של כל ריבוע הוא 24 ס\"מ. מהו שטח המלבן השלם?&rlm;",
        options: ["72 סמ\"ר", "36 סמ\"ר", "144 סמ\"ר", "48 סמ\"ר"],
        correctAnswer: 0,
        hint: "היקף ריבוע הוא 24. מכאן שכל צלע בריבוע היא 6. המלבן נוצר מחיבור שני הריבועים, לכן אורכו יהיה כפול מצלע הריבוע (12).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נמצא את צלע הריבוע על ידי חלוקת היקפו ב-4.&rlm;", math_expression: "24 : 4 = 6" },
            { verbal_explanation: "שלב ב': שטח של ריבוע אחד הוא צלע כפול צלע.&rlm;", math_expression: "6 × 6 = 36" },
            { verbal_explanation: "שלב ג': המלבן מורכב משני ריבועים כאלו, ולכן שטחו כפול.&rlm;", math_expression: "36 × 2 = 72" }
        ],
        final_answer: "72 סמ\"ר"
    },
    // שאלה 12
    {
        topic: "geometry",
        subTopic: "שטח והיקף מלבן",
        question_text: "שטחו של מלבן הוא 36 סמ\"ר ואורך צלעותיו הם מספרים שלמים (ס\"מ). איזה מהבאים *אינו* יכול להיות היקף המלבן?&rlm;",
        options: ["24 ס\"מ", "30 ס\"מ", "40 ס\"מ", "74 ס\"מ"],
        correctAnswer: 0,
        hint: "רשמו את כל זוגות המספרים השלמים שמכפלתם היא 36 (למשל 1 ו-36, 2 ו-18...). חשבו לכל זוג את ההיקף ובדקו מי מהתשובות לא מופיעה.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נמצא את כל הזוגות של מספרים שלמים שמכפלתם 36: (1,36), (2,18), (3,12), (4,9), (6,6).&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ב': נחשב את ההיקף עבור כל זוג. עבור (1,36) ההיקף הוא 74. עבור (2,18) ההיקף 40. עבור (3,12) ההיקף 30. עבור (4,9) ההיקף 26. עבור (6,6) ההיקף 24.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ג': לפי התשובות, 74, 40 ו-30 קיימים. נראה שהתשובה 24 נמצאת באופציות, אבל חסרה 26. רגע, בואו נבדוק שוב: 24 הוא היקף אפשרי (6,6). אבל השאלה היא מה *אינו* יכול להיות! לכן שמתי טעות קטנה באופציה, נתקן: האופציה היא 28 למשל. בואו נתקן את האופציות בראשנו: 28 לא אפשרי.&rlm;", math_expression: "" }
        ],
        // מתקן את האופציות ואת ה-correctAnswer כדי שיהיה מדויק. 28 לא יכול להיות.
        options: ["28 ס\"מ", "30 ס\"מ", "40 ס\"מ", "24 ס\"מ"],
        correctAnswer: 0,
        final_answer: "28 ס\"מ"
    },


    // ==========================================================
    // תת נושא 2: שטח והיקף משולש (12 שאלות)
    // ==========================================================
    
    // שאלה 13
    {
        topic: "geometry",
        subTopic: "שטח והיקף משולש",
        question_text: "מהו שטחו של המשולש הבא?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 200 120' width='100%' height='120' style='max-width:200px;'><polygon points='20,100 180,100 100,20' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/><line x1='100' y1='20' x2='100' y2='100' stroke='#ca8a04' stroke-width='2' stroke-dasharray='5,5'/><text x='100' y='115' font-family='Arial' font-size='14' font-weight='bold' fill='#0f172a' text-anchor='middle'>10 ס\"מ</text><text x='115' y='65' font-family='Arial' font-size='14' font-weight='bold' fill='#0f172a' text-anchor='middle'>h=6</text></svg></div>",
        options: ["30 סמ\"ר", "60 סמ\"ר", "16 סמ\"ר", "45 סמ\"ר"],
        correctAnswer: 0,
        hint: "שטח משולש שווה לאורך הבסיס כפול הגובה אליו, לחלק ל-2.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נזהה את הנתונים. הבסיס הוא 10 ס\"מ והגובה אליו הוא 6 ס\"מ.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ב': נכפול את הבסיס בגובה.&rlm;", math_expression: "10 × 6 = 60" },
            { verbal_explanation: "שלב ג': נחלק ב-2 כי זהו משולש (חצי מלבן).&rlm;", math_expression: "60 : 2 = 30" }
        ],
        final_answer: "30 סמ\"ר"
    },
    // שאלה 14
    {
        topic: "geometry",
        subTopic: "שטח והיקף משולש",
        question_text: "במשולש ישר זווית, אורכי הניצבים (הצלעות שיוצרות את הזווית הישרה) הם 5 ס\"מ ו-12 ס\"מ. אורך היתר (הצלע הארוכה) הוא 13 ס\"מ. מהו שטח המשולש?&rlm;",
        options: ["30 סמ\"ר", "60 סמ\"ר", "65 סמ\"ר", "30 ס\"מ"],
        correctAnswer: 0,
        hint: "במשולש ישר זווית, הניצבים משמשים כבסיס וכגובה זה לזה. לכן נכפול אותם ונחלק ב-2. אל תתבלבלו עם היתר!&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': הניצבים מאונכים זה לזה, ולכן אחד הוא הבסיס והשני הוא הגובה. המידות הן 5 ו-12.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ב': נכפול את הבסיס בגובה.&rlm;", math_expression: "5 × 12 = 60" },
            { verbal_explanation: "שלב ג': נחלק ב-2 לקבלת השטח.&rlm;", math_expression: "60 : 2 = 30" }
        ],
        final_answer: "30 סמ\"ר"
    },
    // שאלה 15
    {
        topic: "geometry",
        subTopic: "שטח והיקף משולש",
        question_text: "במשולש קהה זווית, אורך הבסיס הוא 8 ס\"מ והגובה החיצוני היורד אליו הוא 5 ס\"מ. מהו שטח המשולש?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 200 100' width='100%' height='100' style='max-width:200px;'><polygon points='100,80 180,80 20,20' fill='#bae6fd' stroke='#0284c7' stroke-width='2'/><line x1='20' y1='80' x2='100' y2='80' stroke='#0284c7' stroke-width='2' stroke-dasharray='5,5'/><line x1='20' y1='20' x2='20' y2='80' stroke='#ef4444' stroke-width='2' stroke-dasharray='5,5'/><text x='140' y='95' font-family='Arial' font-size='12' fill='#0f172a'>8</text><text x='10' y='55' font-family='Arial' font-size='12' fill='#ef4444'>h=5</text></svg></div>",
        options: ["20 סמ\"ר", "40 סמ\"ר", "13 סמ\"ר", "10 סמ\"ר"],
        correctAnswer: 0,
        hint: "במשולש קהה זווית, הגובה נופל מחוץ למשולש על המשך הבסיס. נוסחת השטח זהה: בסיס כפול גובה חלקי 2.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': הבסיס הרלוונטי הוא הצלע הפיזית של המשולש (8). הגובה הוא 5.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ב': נכפול את הבסיס בגובה.&rlm;", math_expression: "8 × 5 = 40" },
            { verbal_explanation: "שלב ג': נחלק ב-2.&rlm;", math_expression: "40 : 2 = 20" }
        ],
        final_answer: "20 סמ\"ר"
    },
    // שאלה 16
    {
        topic: "geometry",
        subTopic: "שטח והיקף משולש",
        question_text: "שטחו של משולש הוא 42 סמ\"ר. גובה המשולש הוא 6 ס\"מ. מהו אורך הבסיס שאליו יורד הגובה?&rlm;",
        options: ["14 ס\"מ", "7 ס\"מ", "21 ס\"מ", "12 ס\"מ"],
        correctAnswer: 0,
        hint: "השטח הוא (בסיס × גובה) : 2. לכן, מכפלת הבסיס בגובה שווה לפעמיים השטח. הכפילו את השטח ב-2 וחלקו בגובה.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': ידוע ש-(בסיס כפול גובה) חלקי 2 שווה 42.&rlm;", math_expression: "(b × 6) : 2 = 42" },
            { verbal_explanation: "שלב ב': נכפול את השטח פי 2 כדי לקבל את מכפלת הבסיס בגובה.&rlm;", math_expression: "42 × 2 = 84" },
            { verbal_explanation: "שלב ג': נחלק בגובה (6) כדי למצוא את הבסיס.&rlm;", math_expression: "84 : 6 = 14" }
        ],
        final_answer: "14 ס\"מ"
    },
    // שאלה 17
    {
        topic: "geometry",
        subTopic: "שטח והיקף משולש",
        question_text: "במשולש שווה שוקיים, היקף המשולש הוא 30 ס\"מ. אורך הבסיס הוא 12 ס\"מ. מהו אורך כל אחת מהשוקיים (הצלעות השוות)?&rlm;",
        options: ["9 ס\"מ", "18 ס\"מ", "6 ס\"מ", "10 ס\"מ"],
        correctAnswer: 0,
        hint: "היקף הוא סכום 3 הצלעות. חסרו את הבסיס מההיקף, ואת השארית חלקו שווה בשווה ל-2 שוקיים.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחסר מההיקף (30) את הבסיס הידוע (12). מה שיישאר הוא סכום שתי השוקיים.&rlm;", math_expression: "30 - 12 = 18" },
            { verbal_explanation: "שלב ב': במשולש שווה שוקיים שתי השוקיים שוות באורכן. נחלק את הסכום ב-2.&rlm;", math_expression: "18 : 2 = 9" }
        ],
        final_answer: "9 ס\"מ"
    },
    // שאלה 18
    {
        topic: "geometry",
        subTopic: "שטח והיקף משולש",
        question_text: "משולש שווה צלעות הוא משולש שכל צלעותיו שוות. אם שטחו של משולש כזה הוא 15 סמ\"ר, והגובה לאחת הצלעות הוא 5 ס\"מ, מהו היקף המשולש?&rlm;",
        options: ["18 ס\"מ", "6 ס\"מ", "15 ס\"מ", "30 ס\"מ"],
        correctAnswer: 0,
        hint: "השתמשו בשטח ובגובה כדי למצוא צלע אחת (בסיס). מאחר שהמשולש שווה צלעות, כל הצלעות שוות. כפלו ב-3.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': מכפלת הבסיס בגובה היא פעמיים השטח.&rlm;", math_expression: "15 × 2 = 30" },
            { verbal_explanation: "שלב ב': נמצא את הבסיס על ידי חלוקת התוצאה בגובה (5).&rlm;", math_expression: "30 : 5 = 6" },
            { verbal_explanation: "שלב ג': אורך כל צלע הוא 6 ס\"מ. מכיוון שהמשולש שווה צלעות, נכפיל את הצלע ב-3 למציאת ההיקף.&rlm;", math_expression: "6 × 3 = 18" }
        ],
        final_answer: "18 ס\"מ"
    },
    // שאלה 19
    {
        topic: "geometry",
        subTopic: "שטח והיקף משולש",
        question_text: "בתוך מלבן שמידותיו 10 ס\"מ על 6 ס\"מ חסום משולש. בסיס המשולש מונח על הצלע הארוכה של המלבן ושווה לה (10 ס\"מ), והקודקוד העליון שלו נוגע בצלע הנגדית. מהו שטח המשולש?&rlm;",
        options: ["30 סמ\"ר", "60 סמ\"ר", "15 סמ\"ר", "40 סמ\"ר"],
        correctAnswer: 0,
        hint: "גובה המשולש זהה לרוחב המלבן (6 ס\"מ). שטח המשולש שנוצר כך יהיה תמיד בדיוק חצי משטח המלבן.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': בסיס המשולש הוא 10. הגובה שלו שווה לרוחב המלבן, שהוא 6.&rlm;", math_expression: "b = 10 , h = 6" },
            { verbal_explanation: "שלב ב': נחשב שטח: בסיס כפול גובה חלקי 2.&rlm;", math_expression: "(10 × 6) : 2 = 30" }
        ],
        final_answer: "30 סמ\"ר"
    },
    // שאלה 20
    {
        topic: "geometry",
        subTopic: "שטח והיקף משולש",
        question_text: "היקפו של משולש הוא 24 ס\"מ. הצלעות מתייחסות זו לזו ביחס של 3:4:5. מה אורך הצלע הקצרה ביותר?&rlm;",
        options: ["6 ס\"מ", "8 ס\"מ", "10 ס\"מ", "3 ס\"מ"],
        correctAnswer: 0,
        hint: "חברו את כל חלקי היחס (3+4+5) כדי לדעת כמה 'חלקים' יש בהיקף. חלקו את ההיקף במספר החלקים, וכפלו ביחס של הצלע הקצרה.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': סך כל החלקים ביחס הוא 12.&rlm;", math_expression: "3 + 4 + 5 = 12" },
            { verbal_explanation: "שלב ב': נחלק את ההיקף במספר החלקים כדי למצוא ערך של חלק אחד.&rlm;", math_expression: "24 : 12 = 2" },
            { verbal_explanation: "שלב ג': הצלע הקצרה מיוצגת על ידי 3 חלקים. נכפיל 3 ב-2.&rlm;", math_expression: "3 × 2 = 6" }
        ],
        final_answer: "6 ס\"מ"
    },
    // שאלה 21
    {
        topic: "geometry",
        subTopic: "שטח והיקף משולש",
        question_text: "נתון משולש ישר זווית. שטח המשולש הוא 24 סמ\"ר. אחד הניצבים ארוך מהניצב השני ב-2 ס\"מ. מהם אורכי הניצבים?&rlm;",
        options: ["6 ס\"מ ו-8 ס\"מ", "4 ס\"מ ו-6 ס\"מ", "8 ס\"מ ו-10 ס\"מ", "3 ס\"מ ו-16 ס\"מ"],
        correctAnswer: 0,
        hint: "מכפלת הניצבים (שזה בסיס כפול גובה) שווה לפעמיים השטח (48). מצאו שני מספרים שההפרש ביניהם 2 ומכפלתם 48. אפשר גם לבדוק את התשובות.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': מכפלת שני הניצבים שווה לפעמיים השטח.&rlm;", math_expression: "24 × 2 = 48" },
            { verbal_explanation: "שלב ב': נחפש שני מספרים שכפלם 48 וההפרש ביניהם 2.&rlm;", math_expression: "6 × 8 = 48" },
            { verbal_explanation: "8 פחות 6 שווה 2. לכן הניצבים הם 6 ו-8.&rlm;", math_expression: "" }
        ],
        final_answer: "6 ס\"מ ו-8 ס\"מ"
    },
    // שאלה 22
    {
        topic: "geometry",
        subTopic: "שטח והיקף משולש",
        question_text: "לפניכם צורה המורכבת מריבוע ומשולש שווה שוקיים המונח על צלעו העליונה. אורך צלע הריבוע הוא 6 ס\"מ. גובה המשולש היורד לריבוע הוא 4 ס\"מ. מהו השטח הכולל של הצורה?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 100 150' width='100' height='150'><rect x='20' y='70' width='60' height='60' fill='#e2e8f0' stroke='#475569' stroke-width='2'/><polygon points='20,70 80,70 50,20' fill='#cbd5e1' stroke='#475569' stroke-width='2'/><text x='50' y='110' font-family='Arial' font-size='12' text-anchor='middle'>6</text></svg></div>",
        options: ["48 סמ\"ר", "60 סמ\"ר", "36 סמ\"ר", "42 סמ\"ר"],
        correctAnswer: 0,
        hint: "חשבו את שטח הריבוע ואת שטח המשולש בנפרד וחברו אותם. בסיס המשולש הוא צלע הריבוע (6 ס\"מ).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': שטח הריבוע (צלע כפול צלע).&rlm;", math_expression: "6 × 6 = 36" },
            { verbal_explanation: "שלב ב': בסיס המשולש הוא 6 והגובה 4. נחשב שטח משולש.&rlm;", math_expression: "(6 × 4) : 2 = 12" },
            { verbal_explanation: "שלב ג': נחבר את שני השטחים.&rlm;", math_expression: "36 + 12 = 48" }
        ],
        final_answer: "48 סמ\"ר"
    },
    // שאלה 23
    {
        topic: "geometry",
        subTopic: "שטח והיקף משולש",
        question_text: "למשולש א' יש בסיס שאורכו 10 וגובה 4. למשולש ב' יש בסיס שאורכו 5. איזה גובה צריך להיות למשולש ב' כדי שיהיה לו בדיוק את אותו שטח כמו למשולש א'?&rlm;",
        options: ["8", "4", "2", "10"],
        correctAnswer: 0,
        hint: "חשבו את השטח של משולש א'. לאחר מכן, הציבו את השטח בנוסחה עבור משולש ב' כדי למצוא את הגובה החסר.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את שטח משולש א'.&rlm;", math_expression: "(10 × 4) : 2 = 20" },
            { verbal_explanation: "שלב ב': השטח של משולש ב' גם הוא 20. מכפלת הבסיס בגובה שלו חייבת להיות כפולה (40).&rlm;", math_expression: "20 × 2 = 40" },
            { verbal_explanation: "שלב ג': נחלק 40 בבסיס (5) כדי למצוא את הגובה.&rlm;", math_expression: "40 : 5 = 8" }
        ],
        final_answer: "8"
    },
    // שאלה 24
    {
        topic: "geometry",
        subTopic: "שטח והיקף משולש",
        question_text: "במשולש נתון, הגובה ארוך פי 2 מהבסיס שאליו הוא יורד. שטח המשולש הוא 16 סמ\"ר. מהו אורך הבסיס?&rlm;",
        options: ["4 ס\"מ", "8 ס\"מ", "2 ס\"מ", "6 ס\"מ"],
        correctAnswer: 0,
        hint: "מכפלת הבסיס בגובה היא פעמיים השטח (32). נסמן בסיס ב-x וגובה ב-2x. המשוואה: x כפול 2x שווה 32. איזה מספר כפול עצמו כפול 2 נותן 32? (אפשר לנסות את התשובות).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן בסיס ב-x. הגובה הוא 2x.&rlm;", math_expression: "b = x , h = 2x" },
            { verbal_explanation: "שלב ב': שטח המשולש הוא x כפול 2x חלקי 2, וזה שווה ל-16. כלומר, x כפול x שווה 16.&rlm;", math_expression: "(x × 2x) : 2 = 16  =>  x × x = 16" },
            { verbal_explanation: "שלב ג': המספר החיובי שכאשר כופלים אותו בעצמו מקבלים 16 הוא 4.&rlm;", math_expression: "4 × 4 = 16" },
            { verbal_explanation: "אורך הבסיס (x) הוא 4. הגובה הוא 8.&rlm;", math_expression: "x = 4" }
        ],
        final_answer: "4 ס\"מ"
    },

    // ==========================================================
    // תת נושא 3: היקף ושטח מקבילית (12 שאלות)
    // ==========================================================
    
    // שאלה 25
    {
        topic: "geometry",
        subTopic: "היקף ושטח מקבילית",
        question_text: "במקבילית, אורך בסיס אחד הוא 10 ס\"מ והגובה היורד לאותו בסיס הוא 6 ס\"מ. מהו שטח המקבילית?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 200 100' width='100%' height='100' style='max-width:200px;'><polygon points='40,80 180,80 160,20 20,20' fill='#dcfce7' stroke='#16a34a' stroke-width='2'/><line x1='40' y1='80' x2='40' y2='20' stroke='#16a34a' stroke-width='2' stroke-dasharray='5,5'/><text x='110' y='95' font-family='Arial' font-size='14' font-weight='bold' fill='#0f172a' text-anchor='middle'>10 ס\"מ</text><text x='25' y='55' font-family='Arial' font-size='14' font-weight='bold' fill='#16a34a' text-anchor='middle'>6</text></svg></div>",
        options: ["60 סמ\"ר", "30 סמ\"ר", "32 סמ\"ר", "120 סמ\"ר"],
        correctAnswer: 0,
        hint: "שטח מקבילית מחושב על ידי הכפלת צלע בגובה היורד אליה (ללא חלוקה ב-2, בניגוד למשולש!).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נוסחת השטח היא בסיס כפול גובה.&rlm;", math_expression: "S = a × h" },
            { verbal_explanation: "שלב ב': נציב את הנתונים - בסיס 10 וגובה 6.&rlm;", math_expression: "10 × 6 = 60" }
        ],
        final_answer: "60 סמ\"ר"
    },
    // שאלה 26
    {
        topic: "geometry",
        subTopic: "היקף ושטח מקבילית",
        question_text: "במקבילית, אורך צלע אחת הוא 8 ס\"מ ואורך הצלע הסמוכה לה הוא 5 ס\"מ. מהו היקף המקבילית?&rlm;",
        options: ["26 ס\"מ", "13 ס\"מ", "40 ס\"מ", "20 ס\"מ"],
        correctAnswer: 0,
        hint: "במקבילית, כל שתי צלעות נגדיות שוות באורכן. חשבו כמו היקף מלבן.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': ישנן שתי צלעות באורך 8 ושתי צלעות באורך 5.&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ב': נחבר את כל הצלעות.&rlm;", math_expression: "8 + 8 + 5 + 5 = 26" }
        ],
        final_answer: "26 ס\"מ"
    },
    // שאלה 27
    {
        topic: "geometry",
        subTopic: "היקף ושטח מקבילית",
        question_text: "שטחה של מקבילית הוא 45 סמ\"ר. גובה המקבילית הוא 5 ס\"מ. מהו אורך הצלע שאליה יורד הגובה?&rlm;",
        options: ["9 ס\"מ", "40 ס\"מ", "225 ס\"מ", "15 ס\"מ"],
        correctAnswer: 0,
        hint: "מאחר שהשטח הוא בסיס כפול גובה, כדי למצוא את הבסיס חלקו את השטח בגובה.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נכתוב את המשוואה: בסיס כפול 5 שווה 45.&rlm;", math_expression: "b × 5 = 45" },
            { verbal_explanation: "שלב ב': נחלק 45 ב-5 כדי למצוא את הבסיס.&rlm;", math_expression: "45 : 5 = 9" }
        ],
        final_answer: "9 ס\"מ"
    },
    // שאלה 28
    {
        topic: "geometry",
        subTopic: "היקף ושטח מקבילית",
        question_text: "במקבילית ABCD אורך הצלע התחתונה הוא 12 ס\"מ. הגובה אליה הוא 4 ס\"מ. אורך הצלע הצדדית (הסמוכה) הוא 6 ס\"מ. מהו הגובה היורד לצלע הצדדית?&rlm;",
        options: ["8 ס\"מ", "2 ס\"מ", "4 ס\"מ", "12 ס\"מ"],
        correctAnswer: 0,
        hint: "זהו תרגיל קלאסי: השטח של המקבילית הוא קבוע, לא משנה מאיזה כיוון מחשבים אותו. חשבו את השטח בעזרת הצלע (12) והגובה (4). לאחר מכן, חלקו את השטח בצלע השנייה (6) כדי למצוא את הגובה אליה.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את השטח לפי הצלע (12) והגובה שלה (4).&rlm;", math_expression: "12 × 4 = 48" },
            { verbal_explanation: "שלב ב': השטח הוא 48. כעת נשתמש בצלע השנייה (6) ובגובה שלה (שנסמן ב-h).&rlm;", math_expression: "6 × h = 48" },
            { verbal_explanation: "שלב ג': נחלק את השטח בצלע השנייה למציאת הגובה.&rlm;", math_expression: "48 : 6 = 8" }
        ],
        final_answer: "8 ס\"מ"
    },
    // שאלה 29
    {
        topic: "geometry",
        subTopic: "היקף ושטח מקבילית",
        question_text: "מעוין הוא סוג מיוחד של מקבילית שבו כל הצלעות שוות. אם היקף מעוין הוא 40 ס\"מ והגובה שלו הוא 8 ס\"מ, מה שטח המעוין?&rlm;",
        options: ["80 סמ\"ר", "320 סמ\"ר", "40 סמ\"ר", "160 סמ\"ר"],
        correctAnswer: 0,
        hint: "מצאו תחילה את אורך צלע המעוין (חילוק ההיקף ב-4). לאחר מכן, השתמשו בנוסחת שטח מקבילית (צלע כפול גובה).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': במעוין 4 צלעות שוות. נחלק היקף ב-4 למציאת צלע (שהיא גם הבסיס).&rlm;", math_expression: "40 : 4 = 10" },
            { verbal_explanation: "שלב ב': שטח מעוין מחושב כמו מקבילית: בסיס כפול גובה.&rlm;", math_expression: "10 × 8 = 80" }
        ],
        final_answer: "80 סמ\"ר"
    },
    // שאלה 30
    {
        topic: "geometry",
        subTopic: "היקף ושטח מקבילית",
        question_text: "אילו מהטענות הבאות נכונה לגבי כל מקבילית?&rlm;",
        options: ["האלכסונים חוצים זה את זה.", "האלכסונים שווים זה לזה באורכם.", "כל הזוויות שוות ל-90 מעלות.", "האלכסונים מאונכים זה לזה."],
        correctAnswer: 0,
        hint: "במקבילית רגילה (שאינה מלבן או מעוין), האלכסונים אינם שווים ואינם מאונכים. התכונה היחידה היא שהם נפגשים באמצע.&rlm;",
        solution_steps: [
            { verbal_explanation: "במלבן האלכסונים שווים. במעוין הם מאונכים.&rlm;", math_expression: "" },
            { verbal_explanation: "בכל מקבילית (כולל מלבן, מעוין וריבוע), האלכסונים תמיד חוצים זה את זה לשני חצאים שווים.&rlm;", math_expression: "" }
        ],
        final_answer: "האלכסונים חוצים זה את זה."
    },
    // שאלה 31
    {
        topic: "geometry",
        subTopic: "היקף ושטח מקבילית",
        question_text: "במקבילית, זווית אחת היא בת 50 מעלות. מה גודל הזווית הסמוכה לה?&rlm;",
        options: ["130 מעלות", "50 מעלות", "40 מעלות", "90 מעלות"],
        correctAnswer: 0,
        hint: "במקבילית, סכום כל שתי זוויות סמוכות הוא תמיד 180 מעלות (בגלל שהצלעות הנגדיות מקבילות).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': זוויות נגדיות במקבילית שוות (שתיהן 50). זוויות סמוכות משלימות ל-180 (זוויות חד צדדיות בין מקבילים).&rlm;", math_expression: "" },
            { verbal_explanation: "שלב ב': נחסר 50 מ-180.&rlm;", math_expression: "180 - 50 = 130" }
        ],
        final_answer: "130 מעלות"
    },
    // שאלה 32
    {
        topic: "geometry",
        subTopic: "היקף ושטח מקבילית",
        question_text: "שטח מקבילית הוא 50 סמ\"ר. אם נגדיל את הגובה שלה פי 2 (ונשאיר את הבסיס כפי שהוא), מה יהיה השטח החדש?&rlm;",
        options: ["100 סמ\"ר", "25 סמ\"ר", "50 סמ\"ר", "200 סמ\"ר"],
        correctAnswer: 0,
        hint: "השטח עומד ביחס ישר לגובה. אם הגובה מוכפל, כך גם השטח.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': שטח = בסיס × גובה.&rlm;", math_expression: "S_1 = a × h = 50" },
            { verbal_explanation: "שלב ב': השטח החדש הוא בסיס × (2 × גובה). כלומר, פעמיים השטח הישן.&rlm;", math_expression: "S_2 = a × 2h = 2 × (a × h)" },
            { verbal_explanation: "שלב ג': נכפול את השטח הנתון ב-2.&rlm;", math_expression: "50 × 2 = 100" }
        ],
        final_answer: "100 סמ\"ר"
    },
    // שאלה 33
    {
        topic: "geometry",
        subTopic: "היקף ושטח מקבילית",
        question_text: "נתונה מקבילית שהיקפה 30 ס\"מ. צלע אחת ארוכה ב-5 ס\"מ מהצלע הסמוכה לה. מהו אורך הצלע הקצרה?&rlm;",
        options: ["5 ס\"מ", "10 ס\"מ", "7.5 ס\"מ", "15 ס\"מ"],
        correctAnswer: 0,
        hint: "נסמן צלע קצרה ב-x, ארוכה ב-x+5. משוואת ההיקף: 2x + 2(x+5) = 30.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': משוואת היקף. יש פעמיים x ופעמיים x+5.&rlm;", math_expression: "2x + 2(x + 5) = 30" },
            { verbal_explanation: "שלב ב': נפתח סוגריים.&rlm;", math_expression: "2x + 2x + 10 = 30" },
            { verbal_explanation: "שלב ג': נכנס איברים (4x) ונחסר 10.&rlm;", math_expression: "4x = 20" },
            { verbal_explanation: "שלב ד': נחלק ב-4.&rlm;", math_expression: "x = 5" }
        ],
        final_answer: "5 ס\"מ"
    },
    // שאלה 34
    {
        topic: "geometry",
        subTopic: "היקף ושטח מקבילית",
        question_text: "שטח מקבילית הוא 64 סמ\"ר. גובה המקבילית שווה באורכו לבסיס שאליו הוא יורד. מה אורך הבסיס?&rlm;",
        options: ["8 ס\"מ", "32 ס\"מ", "4 ס\"מ", "16 ס\"מ"],
        correctAnswer: 0,
        hint: "אם הגובה והבסיס שווים, שטח המקבילית הוא מספר כפול עצמו (x * x = 64).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נסמן את הבסיס ב-x. הגובה שווה לו, כלומר גם הוא x.&rlm;", math_expression: "b = x , h = x" },
            { verbal_explanation: "שלב ב': השטח הוא x כפול x.&rlm;", math_expression: "x × x = 64" },
            { verbal_explanation: "שלב ג': המספר שכפול עצמו נותן 64 הוא 8.&rlm;", math_expression: "x = 8" }
        ],
        final_answer: "8 ס\"מ"
    },
    // שאלה 35
    {
        topic: "geometry",
        subTopic: "היקף ושטח מקבילית",
        question_text: "חצר בצורת מקבילית מרוצפת באבנים. אורך בסיס החצר 20 מטרים והגובה אליו 15 מטרים. עלות ריצוף למ\"ר היא 100 שקלים. כמה יעלה לרצף את כל החצר?&rlm;",
        options: ["30,000 שקלים", "3,000 שקלים", "7,000 שקלים", "15,000 שקלים"],
        correctAnswer: 0,
        hint: "חשבו את השטח של החצר (20 כפול 15), והכפילו אותו במחיר למטר רבוע (100).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את שטח המקבילית במ\"ר.&rlm;", math_expression: "20 × 15 = 300" },
            { verbal_explanation: "שלב ב': נכפיל את השטח בעלות למ\"ר.&rlm;", math_expression: "300 × 100 = 30000" }
        ],
        final_answer: "30,000 שקלים"
    },
    // שאלה 36
    {
        topic: "geometry",
        subTopic: "היקף ושטח מקבילית",
        question_text: "במקבילית חסום משולש כך שבסיס המשולש זהה לבסיס המקבילית והקודקוד שמולו מונח על הצלע הנגדית של המקבילית. שטח המקבילית הוא 40 סמ\"ר. מהו שטח המשולש?&rlm;",
        options: ["20 סמ\"ר", "40 סמ\"ר", "10 סמ\"ר", "30 סמ\"ר"],
        correctAnswer: 0,
        hint: "המשולש והמקבילית חולקים את אותו בסיס ואותו גובה. שטח משולש הוא חצי משטח מקבילית עם אותם נתונים.&rlm;",
        solution_steps: [
            { verbal_explanation: "שטח המקבילית הוא (בסיס כפול גובה).&rlm;", math_expression: "S_{par} = b × h = 40" },
            { verbal_explanation: "שטח המשולש הוא (בסיס כפול גובה) חלקי 2.&rlm;", math_expression: "S_{tri} = (b × h) : 2" },
            { verbal_explanation: "לכן השטח של המשולש הוא בדיוק חצי משטח המקבילית.&rlm;", math_expression: "40 : 2 = 20" }
        ],
        final_answer: "20 סמ\"ר"
    },

    // ==========================================================
    // תת נושא 4: נפח תיבה (12 שאלות)
    // ==========================================================
    
    // שאלה 37
    {
        topic: "geometry",
        subTopic: "נפח תיבה",
        question_text: "מהו נפחה של תיבה שאורכה 5 ס\"מ, רוחבה 4 ס\"מ וגובהה 10 ס\"מ?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 200 150' width='100%' height='150' style='max-width:200px;'><polygon points='30,60 130,60 160,30 60,30' fill='#f1f5f9' stroke='#475569' stroke-width='2'/><polygon points='30,60 130,60 130,130 30,130' fill='#e2e8f0' stroke='#475569' stroke-width='2'/><polygon points='130,60 160,30 160,100 130,130' fill='#cbd5e1' stroke='#475569' stroke-width='2'/><text x='80' y='145' font-family='Arial' font-size='12' font-weight='bold' text-anchor='middle'>5 ס\"מ</text><text x='155' y='125' font-family='Arial' font-size='12' font-weight='bold' text-anchor='middle'>4</text><text x='15' y='100' font-family='Arial' font-size='12' font-weight='bold' text-anchor='middle'>10</text></svg></div>",
        options: ["200 סמ\"ק", "100 סמ\"ק", "19 סמ\"ק", "40 סמ\"ק"],
        correctAnswer: 0,
        hint: "נפח תיבה מחשבים על ידי מכפלת שלושת הממדים: אורך, רוחב וגובה.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נוסחת הנפח היא אורך × רוחב × גובה.&rlm;", math_expression: "V = a × b × c" },
            { verbal_explanation: "שלב ב': נציב את הנתונים ונכפול.&rlm;", math_expression: "5 × 4 × 10 = 200" }
        ],
        final_answer: "200 סמ\"ק"
    },
    // שאלה 38
    {
        topic: "geometry",
        subTopic: "נפח תיבה",
        question_text: "קובייה היא תיבה שבה כל הממדים (אורך, רוחב, גובה) שווים. מהו נפחה של קובייה שאורך מקצועה (צלעה) הוא 3 ס\"מ?&rlm;",
        options: ["27 סמ\"ק", "9 סמ\"ק", "12 סמ\"ק", "18 סמ\"ק"],
        correctAnswer: 0,
        hint: "הכפילו את אורך המקצוע בעצמו 3 פעמים (3 × 3 × 3).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': בקובייה כל הצלעות שוות. לכן האורך, הרוחב והגובה הם כולם 3.&rlm;", math_expression: "3 × 3 × 3" },
            { verbal_explanation: "שלב ב': נחשב: 3 כפול 3 זה 9. 9 כפול 3 זה 27.&rlm;", math_expression: "9 × 3 = 27" }
        ],
        final_answer: "27 סמ\"ק"
    },
    // שאלה 39
    {
        topic: "geometry",
        subTopic: "נפח תיבה",
        question_text: "נפח של תיבה הוא 300 סמ\"ק. שטח הבסיס של התיבה (אורך כפול רוחב) הוא 30 סמ\"ר. מהו גובה התיבה?&rlm;",
        options: ["10 ס\"מ", "15 ס\"מ", "100 ס\"מ", "270 ס\"מ"],
        correctAnswer: 0,
        hint: "נפח התיבה שווה לשטח הבסיס כפול הגובה. חלקו את הנפח בשטח הבסיס כדי למצוא את הגובה.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': משוואת הנפח היא: שטח הבסיס כפול הגובה.&rlm;", math_expression: "30 × h = 300" },
            { verbal_explanation: "שלב ב': נחלק את הנפח הכולל בשטח הבסיס.&rlm;", math_expression: "300 : 30 = 10" }
        ],
        final_answer: "10 ס\"מ"
    },
    // שאלה 40
    {
        topic: "geometry",
        subTopic: "נפח תיבה",
        question_text: "תיבה שאורכה 10 ס\"מ, רוחבה 10 ס\"מ וגובהה 10 ס\"מ מלאה במים. כמה ליטרים של מים יש בתיבה? (ידוע ש-1 ליטר = 1000 סמ\"ק).&rlm;",
        options: ["1 ליטר", "10 ליטרים", "100 ליטרים", "0.1 ליטרים"],
        correctAnswer: 0,
        hint: "חשבו את הנפח בסמ\"ק (10*10*10), ולאחר מכן חלקו ב-1000 כדי להמיר לליטרים.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את נפח התיבה (הקובייה) בסמ\"ק.&rlm;", math_expression: "10 × 10 × 10 = 1000" },
            { verbal_explanation: "שלב ב': נפח התיבה הוא 1000 סמ\"ק. היות ו-1000 סמ\"ק שווים ל-1 ליטר, התוצאה היא ליטר 1.&rlm;", math_expression: "1000 : 1000 = 1" }
        ],
        final_answer: "1 ליטר"
    },
    // שאלה 41
    {
        topic: "geometry",
        subTopic: "נפח תיבה",
        question_text: "אקווריום בצורת תיבה ממולא במים. אורך האקווריום 40 ס\"מ ורוחבו 20 ס\"מ. לאחר שמזגו לאקווריום מים, גובה המים הגיע ל-15 ס\"מ. מהו נפח המים באקווריום (בסמ\"ק)?&rlm;",
        options: ["12,000 סמ\"ק", "1,200 סמ\"ק", "8,000 סמ\"ק", "6,000 סמ\"ק"],
        correctAnswer: 0,
        hint: "נפח המים מקבל את צורת התיבה שבה הם נמצאים. הבסיס נשאר 40 על 20. הגובה במקרה זה הוא גובה המים (15).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את שטח הבסיס של האקווריום.&rlm;", math_expression: "40 × 20 = 800" },
            { verbal_explanation: "שלב ב': נכפיל את שטח הבסיס בגובה המים.&rlm;", math_expression: "800 × 15 = 12000" }
        ],
        final_answer: "12,000 סמ\"ק"
    },
    // שאלה 42
    {
        topic: "geometry",
        subTopic: "נפח תיבה",
        question_text: "קוביית מתכת שנפחה 64 סמ\"ק הותכה (הומסה), ומהמתכת יצרו תיבה חדשה שרוחבה 4 ס\"מ ואורכה 4 ס\"מ. מהו גובה התיבה החדשה?&rlm;",
        options: ["4 ס\"מ", "8 ס\"מ", "2 ס\"מ", "16 ס\"מ"],
        correctAnswer: 0,
        hint: "הנפח נשאר זהה גם לאחר ההתכה (64 סמ\"ק). חשבו את שטח הבסיס של התיבה החדשה וחלקו את הנפח בשטח זה.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נפח המתכת לא השתנה, לכן נפח התיבה החדשה הוא 64.&rlm;", math_expression: "V = 64" },
            { verbal_explanation: "שלב ב': נחשב את שטח הבסיס של התיבה החדשה.&rlm;", math_expression: "4 × 4 = 16" },
            { verbal_explanation: "שלב ג': נחלק את הנפח בשטח הבסיס כדי למצוא את הגובה.&rlm;", math_expression: "64 : 16 = 4" }
        ],
        final_answer: "4 ס\"מ"
    },
    // שאלה 43
    {
        topic: "geometry",
        subTopic: "נפח תיבה",
        question_text: "אם מכפילים פי 2 את אורך התיבה, ואת רוחב התיבה לא משנים, ואת גובה התיבה לא משנים - פי כמה יגדל נפח התיבה?&rlm;",
        options: ["פי 2", "פי 4", "פי 8", "הנפח לא ישתנה"],
        correctAnswer: 0,
        hint: "נסו להציב מספרים או הביטו בנוסחה V = a*b*c. אם מכפילים רק את a ב-2, התוצאה כולה מוכפלת ב-2.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נוסחת הנפח היא מכפלת שלושה גורמים.&rlm;", math_expression: "V = a × b × c" },
            { verbal_explanation: "שלב ב': רק גורם אחד הוכפל פי 2.&rlm;", math_expression: "V_{new} = (2a) × b × c" },
            { verbal_explanation: "מכאן שהנפח כולו גדל בדיוק פי 2.&rlm;", math_expression: "V_{new} = 2 × (a × b × c)" }
        ],
        final_answer: "פי 2"
    },
    // שאלה 44
    {
        topic: "geometry",
        subTopic: "נפח תיבה",
        question_text: "רוצים לארוז קוביות עץ קטנות שנפח כל אחת מהן הוא 8 סמ\"ק, בתוך ארגז (תיבה) שנפחו 800 סמ\"ק. כמה קוביות קטנות ייכנסו בארגז במלואו? (נניח שהן נכנסות בצורה מושלמת ללא רווחים).&rlm;",
        options: ["100 קוביות", "80 קוביות", "64 קוביות", "200 קוביות"],
        correctAnswer: 0,
        hint: "כדי לדעת כמה עצמים קטנים נכנסים לנפח גדול, חלקו את הנפח הגדול בנפח הקטן.&rlm;",
        solution_steps: [
            { verbal_explanation: "השאלה בודקת כמה פעמים הנפח הקטן נכנס בנפח הגדול.&rlm;", math_expression: "" },
            { verbal_explanation: "נבצע פעולת חילוק פשוטה.&rlm;", math_expression: "800 : 8 = 100" }
        ],
        final_answer: "100 קוביות"
    },
    // שאלה 45
    {
        topic: "geometry",
        subTopic: "נפח תיבה",
        question_text: "תיבה א' היא קובייה שצלעה 4 ס\"מ. תיבה ב' מידותיה הן: אורך 8 ס\"מ, רוחב 2 ס\"מ, גובה 4 ס\"מ. לאיזו תיבה יש נפח גדול יותר?&rlm;",
        options: ["הנפחים שווים בדיוק", "לתיבה א' (הקובייה)", "לתיבה ב'", "אי אפשר לדעת"],
        correctAnswer: 0,
        hint: "חשבו את הנפח של כל אחת מהתיבות.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את נפח הקובייה (תיבה א').&rlm;", math_expression: "4 × 4 × 4 = 64" },
            { verbal_explanation: "שלב ב': נחשב את נפח תיבה ב'.&rlm;", math_expression: "8 × 2 × 4 = 16 × 4 = 64" },
            { verbal_explanation: "שני הנפחים שווים ל-64 סמ\"ק.&rlm;", math_expression: "64 = 64" }
        ],
        final_answer: "הנפחים שווים בדיוק"
    },
    // שאלה 46
    {
        topic: "geometry",
        subTopic: "נפח תיבה",
        question_text: "חפרפרו קופסה קטנה בתוך תיבת עץ. הממדים החיצוניים של התיבה הם 10, 10 ו-10 (1,000 סמ\"ק). דפנות העץ הן בעובי של 1 ס\"מ מכל צד (למעלה, למטה, קדימה, אחורה, ימין ושמאל). מהו הנפח הפנימי לאחסון בתוך הקופסה?&rlm;",
        options: ["512 סמ\"ק", "729 סמ\"ק", "1,000 סמ\"ק", "800 סמ\"ק"],
        correctAnswer: 0,
        hint: "עובי העץ מוריד 2 ס\"מ מכל מימד (1 ס\"מ מכל קצה). לכן, המידות הפנימיות יהיו קטנות ב-2 מכל כיוון.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את הממדים הפנימיים. האורך החיצוני 10, פחות 2 (ס\"מ מכל צד) נותן 8. כך גם הרוחב והגובה.&rlm;", math_expression: "10 - 2 = 8" },
            { verbal_explanation: "שלב ב': המרחב הפנימי הוא בעצם קובייה שצלעה 8. נחשב את נפחה.&rlm;", math_expression: "8 × 8 × 8" },
            { verbal_explanation: "8 כפול 8 זה 64. 64 כפול 8 שווה 512.&rlm;", math_expression: "64 × 8 = 512" }
        ],
        final_answer: "512 סמ\"ק"
    },
    // שאלה 47
    {
        topic: "geometry",
        subTopic: "נפח תיבה",
        question_text: "באקווריום שמידות בסיסו הן 50 ס\"מ אורך ו-20 ס\"מ רוחב, הכניסו אבן גדולה ששקעה במלואה. כתוצאה מכך, גובה המים עלה ב-2 ס\"מ. מהו נפח האבן?&rlm;",
        options: ["2,000 סמ\"ק", "1,000 סמ\"ק", "100 סמ\"ק", "4,000 סמ\"ק"],
        correctAnswer: 0,
        hint: "לפי חוק ארכימדס, הנפח שהמים התרוממו שווה לנפח העצם שהוכנס אליהם. חשבו את נפח ה'תוספת' של המים: שטח הבסיס כפול גובה ההתרוממות.&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': שטח הבסיס של האקווריום נשאר קבוע.&rlm;", math_expression: "50 × 20 = 1000" },
            { verbal_explanation: "שלב ב': כמות המים שעלתה יוצרת תיבה קטנה שגובהה 2 ס\"מ. נפח תיבה זו הוא נפח האבן.&rlm;", math_expression: "1000 × 2 = 2000" }
        ],
        final_answer: "2,000 סמ\"ק"
    },
    // שאלה 48
    {
        topic: "geometry",
        subTopic: "נפח תיבה",
        question_text: "קבלן יוצק עמוד בטון בצורת תיבה. גובה העמוד הוא 3 מטרים (300 ס\"מ). שטח הבסיס הוא 400 סמ\"ר. עלות כל 100 סמ\"ק של בטון היא 5 שקלים. כמה יעלה הבטון עבור העמוד?&rlm;",
        options: ["6,000 שקלים", "1,200 שקלים", "12,000 שקלים", "60,000 שקלים"],
        correctAnswer: 0,
        hint: "חשבו את הנפח הכולל של העמוד בסמ\"ק. חלקו אותו ב-100 (כדי לדעת כמה 'מנות' בטון צריך), ואת התוצאה כפלו במחיר (5).&rlm;",
        solution_steps: [
            { verbal_explanation: "שלב א': נחשב את נפח העמוד בסמ\"ק. שטח בסיס כפול גובה.&rlm;", math_expression: "400 × 300 = 120000" },
            { verbal_explanation: "שלב ב': נמצא כמה פעמים 100 סמ\"ק נכנסים בנפח (כמה מנות תשלום).&rlm;", math_expression: "120000 : 100 = 1200" },
            { verbal_explanation: "שלב ג': נכפול את מספר המנות במחיר למנה.&rlm;", math_expression: "1200 × 5 = 6000" }
        ],
        final_answer: "6,000 שקלים"
    }

];