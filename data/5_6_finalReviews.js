// ========================================================================
// שכבת גיל: ה'-ו' | נושא: תרגול ומבחנים מסכמים
// 3 תתי נושאים | 36 שאלות סה"כ
// שמות תתי-הנושאים תואמים בדיוק לתפריט המערכת.
// ========================================================================

const questionsDB = [

    // ==========================================================
    // תת נושא 1: לקראת כיתה ו' (12 שאלות)
    // ==========================================================
    
    // שאלה 1
    {
        topic: "finalReviews",
        subTopic: "לקראת כיתה ו'",
        question_text: "סדר פעולות חשבון: חשבו את התוצאה של התרגיל הבא.&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>24 : (3 + 5) + 1/2 × 4 = ?</div>",
        options: ["5", "8", "6", "10"],
        correctAnswer: 0,
        hint: "זכרו את סדר פעולות החשבון: קודם סוגריים, אחר כך כפל וחילוק, ולבסוף חיבור וחיסור.&rlm;",
        solution_steps: [
            { verbal_explanation: "נתחיל מפתרון התרגיל שבתוך הסוגריים: 3 ועוד 5.&rlm;", math_expression: "3 + 5 = 8" },
            { verbal_explanation: "נבצע את פעולת החילוק: 24 לחלק ל-8.&rlm;", math_expression: "24 : 8 = 3" },
            { verbal_explanation: "נבצע את פעולת הכפל: חצי מתוך 4.&rlm;", math_expression: "1/2 × 4 = 2" },
            { verbal_explanation: "נחבר את התוצאות של החילוק והכפל.&rlm;", math_expression: "3 + 2 = 5" }
        ],
        final_answer: "5"
    },
    // שאלה 2
    {
        topic: "finalReviews",
        subTopic: "לקראת כיתה ו'",
        question_text: "גיאומטריה: לפניכם מלבן ובתוכו משולש צבוע. מהו השטח הצבוע בתכלת (בסמ\"ר)?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 200 120' width='100%' height='120' style='max-width:220px;'><rect x='20' y='20' width='160' height='80' fill='none' stroke='#0f172a' stroke-width='2'/><polygon points='20,100 180,100 100,20' fill='#bae6fd' stroke='#0284c7' stroke-width='2'/><text x='100' y='15' font-family='Heebo, Arial' font-size='12' fill='#0f172a' text-anchor='middle'>10 ס\"מ</text><text x='10' y='65' font-family='Heebo, Arial' font-size='12' fill='#0f172a' text-anchor='middle'>6</text></svg></div>",
        options: ["30", "60", "16", "45"],
        correctAnswer: 0,
        hint: "שטח משולש מחושב על ידי הכפלת הבסיס בגובה אליו, וחלוקה ב-2. שימו לב שבסיס המשולש זהה לאורך המלבן, וגובהו זהה לרוחב המלבן.&rlm;",
        solution_steps: [
            { verbal_explanation: "בסיס המשולש הוא 10 ס\"מ (זהה לאורך המלבן). גובה המשולש הוא 6 ס\"מ (זהה לרוחב המלבן).&rlm;", math_expression: "" },
            { verbal_explanation: "נכפיל את הבסיס בגובה.&rlm;", math_expression: "10 × 6 = 60" },
            { verbal_explanation: "נחלק ב-2 כדי למצוא שטח משולש.&rlm;", math_expression: "60 : 2 = 30" }
        ],
        final_answer: "30"
    },
    // שאלה 3
    {
        topic: "finalReviews",
        subTopic: "לקראת כיתה ו'",
        question_text: "המרה ויחס: בכיתה יש 30 תלמידים. 0.4 מהתלמידים הם בנים. כמה בנות יש בכיתה?&rlm;",
        options: ["18", "12", "20", "15"],
        correctAnswer: 0,
        hint: "אם 0.4 הם בנים, איזה שבר עשרוני מייצג את הבנות? (השלם הוא 1). לאחר מכן מצאו את החלק מהכמות.&rlm;",
        solution_steps: [
            { verbal_explanation: "השלם הוא 1. אם הבנים הם 0.4, הבנות הן 0.6 מהכיתה.&rlm;", math_expression: "1 - 0.4 = 0.6" },
            { verbal_explanation: "נחשב כמה הם 0.6 מתוך 30. (אפשר להפוך ל-6/10 ולכפול).&rlm;", math_expression: "30 × 6/10" },
            { verbal_explanation: "30 לחלק ל-10 זה 3. 3 כפול 6 שווה 18 בנות.&rlm;", math_expression: "3 × 6 = 18" }
        ],
        final_answer: "18"
    },
    // שאלה 4
    {
        topic: "finalReviews",
        subTopic: "לקראת כיתה ו'",
        question_text: "חיבור שברים מעורבים: חשבו את התוצאה.&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>2 1/4 + 1 2/3 = ?</div>",
        options: ["3 11/12", "3 3/7", "4 1/12", "3 5/12"],
        correctAnswer: 0,
        hint: "חברו שלמים בנפרד. מצאו מכנה משותף ל-1/4 ול-2/3 (מכנה 12) וחברו את השברים.&rlm;",
        solution_steps: [
            { verbal_explanation: "חיבור השלמים: 2 ועוד 1 שווה 3.&rlm;", math_expression: "2 + 1 = 3" },
            { verbal_explanation: "נרחיב את השברים למכנה 12. 1/4 יהיה 3/12. 2/3 יהיה 8/12.&rlm;", math_expression: "3/12 + 8/12 = 11/12" },
            { verbal_explanation: "התוצאה הכוללת היא 3 שלמים ו-11/12.&rlm;", math_expression: "3 11/12" }
        ],
        final_answer: "3 11/12"
    },
    // שאלה 5
    {
        topic: "finalReviews",
        subTopic: "לקראת כיתה ו'",
        question_text: "קנה מידה: במפה שקנה המידה שלה הוא 1:50,000, המרחק בין שתי ערים הוא 4 ס\"מ. מהו המרחק האמיתי בקילומטרים?&rlm;",
        options: ["2", "20", "200", "0.2"],
        correctAnswer: 0,
        hint: "הכפילו את המרחק במפה בקנה המידה כדי לקבל סנטימטרים. זכרו שבקילומטר אחד יש 100,000 ס\"מ.&rlm;",
        solution_steps: [
            { verbal_explanation: "נחשב את המרחק האמיתי בסנטימטרים.&rlm;", math_expression: "4 × 50000 = 200000" },
            { verbal_explanation: "כדי להמיר ס\"מ לק\"מ, נחלק ב-100,000 (נוריד 5 אפסים).&rlm;", math_expression: "200000 : 100000 = 2" }
        ],
        final_answer: "2"
    },
    // שאלה 6
    {
        topic: "finalReviews",
        subTopic: "לקראת כיתה ו'",
        question_text: "אחוזים בסיסיים: חולצה שעולה 120 שקלים נמכרת בהנחה של 25%. מה מחיר החולצה לאחר ההנחה?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 100 80' width='80' height='80'><path d='M 20,20 L 40,10 L 60,10 L 80,20 L 70,80 L 30,80 Z' fill='#fef08a' stroke='#eab308' stroke-width='2'/><text x='50' y='50' font-family='Arial' font-size='16' font-weight='bold' fill='#dc2626' text-anchor='middle'>-25%</text></svg></div>",
        options: ["90", "30", "100", "95"],
        correctAnswer: 0,
        hint: "25% שווים בדיוק לרבע (1/4). חשבו כמה זה רבע מ-120, וחסרו זאת מהמחיר המקורי.&rlm;",
        solution_steps: [
            { verbal_explanation: "25% הם 1/4. נחשב את סכום ההנחה בשקלים.&rlm;", math_expression: "120 : 4 = 30" },
            { verbal_explanation: "ההנחה היא 30 שקלים. נחסר אותה מהמחיר המקורי.&rlm;", math_expression: "120 - 30 = 90" }
        ],
        final_answer: "90"
    },
    // שאלה 7
    {
        topic: "finalReviews",
        subTopic: "לקראת כיתה ו'",
        question_text: "תכונות מספרים: איזה מהמספרים הבאים מתחלק ב-3, ב-4 וב-5 ללא שארית?&rlm;",
        options: ["60", "30", "45", "100"],
        correctAnswer: 0,
        hint: "מספר שמתחלק ב-4 וב-5 חייב להתחלק ב-20. איזה מהמספרים מתחלק גם ב-20 וגם ב-3?&rlm;",
        solution_steps: [
            { verbal_explanation: "נבדוק את 60: הוא נגמר ב-0 אז מתחלק ב-5. סכום ספרותיו 6 ולכן מתחלק ב-3. והוא כפולה של 4 (15 פעמים 4).&rlm;", math_expression: "" },
            { verbal_explanation: "שאר המספרים נפסלים: 30 לא מתחלק ב-4, 45 לא זוגי, 100 לא מתחלק ב-3.&rlm;", math_expression: "" }
        ],
        final_answer: "60"
    },
    // שאלה 8
    {
        topic: "finalReviews",
        subTopic: "לקראת כיתה ו'",
        question_text: "ישר המספרים: איזה שבר מסומן בנקודה האדומה?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 240 60' width='100%' height='60' style='max-width:260px;'><line x1='20' y1='40' x2='220' y2='40' stroke='#334155' stroke-width='2'/><line x1='20' y1='30' x2='20' y2='50' stroke='#334155' stroke-width='2'/><line x1='120' y1='30' x2='120' y2='50' stroke='#334155' stroke-width='2'/><line x1='220' y1='30' x2='220' y2='50' stroke='#334155' stroke-width='2'/><text x='20' y='25' font-family='Arial' font-size='12' fill='#334155' text-anchor='middle'>0</text><text x='120' y='25' font-family='Arial' font-size='12' fill='#334155' text-anchor='middle'>1</text><text x='220' y='25' font-family='Arial' font-size='12' fill='#334155' text-anchor='middle'>2</text><circle cx='170' cy='40' r='5' fill='#ef4444'/></svg></div>",
        options: ["1 1/2", "1 1/4", "3/4", "1 3/4"],
        correctAnswer: 0,
        hint: "הנקודה נמצאת בדיוק באמצע הדרך בין 1 ל-2.&rlm;",
        solution_steps: [
            { verbal_explanation: "הנקודה חצתה את השלם 1, לכן המספר גדול מ-1.&rlm;", math_expression: "" },
            { verbal_explanation: "היא ממוקמת בדיוק באמצע המקטע שבין 1 ל-2, כלומר זהו 1 וחצי.&rlm;", math_expression: "1 1/2" }
        ],
        final_answer: "1 1/2"
    },
    // שאלה 9
    {
        topic: "finalReviews",
        subTopic: "לקראת כיתה ו'",
        question_text: "נפח תיבה: אורך תיבה 5 ס\"מ, רוחבה 4 ס\"מ, וגובהה 10 ס\"מ. מהו נפח התיבה (בסמ\"ק)?&rlm;",
        options: ["200", "100", "90", "19"],
        correctAnswer: 0,
        hint: "נפח תיבה שווה למכפלת שלושת ממדיה (אורך × רוחב × גובה).&rlm;",
        solution_steps: [
            { verbal_explanation: "נכפיל תחילה את האורך ברוחב (שטח הבסיס).&rlm;", math_expression: "5 × 4 = 20" },
            { verbal_explanation: "נכפיל את התוצאה בגובה התיבה.&rlm;", math_expression: "20 × 10 = 200" }
        ],
        final_answer: "200"
    },
    // שאלה 10
    {
        topic: "finalReviews",
        subTopic: "לקראת כיתה ו'",
        question_text: "ממוצע: ב-3 מבחנים קיבלה נועה את הציונים 80, 90, 100. מהו הציון הממוצע שלה?&rlm;",
        options: ["90", "85", "95", "270"],
        correctAnswer: 0,
        hint: "כדי לחשב ממוצע, חברו את כל הציונים וחלקו במספר המבחנים (3).&rlm;",
        solution_steps: [
            { verbal_explanation: "נחשב את סכום הציונים הכולל.&rlm;", math_expression: "80 + 90 + 100 = 270" },
            { verbal_explanation: "נחלק את הסכום במספר המבחנים.&rlm;", math_expression: "270 : 3 = 90" }
        ],
        final_answer: "90"
    },
    // שאלה 11
    {
        topic: "finalReviews",
        subTopic: "לקראת כיתה ו'",
        question_text: "חיבור עשרוניים ושברים: פתרו את התרגיל.&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>0.25 + 1/2 = ?</div>",
        options: ["3/4", "0.3", "0.7", "1.25"],
        correctAnswer: 0,
        hint: "אפשר להמיר את חצי (1/2) לעשרוני (0.50), או להמיר את 0.25 לשבר (1/4).&rlm;",
        solution_steps: [
            { verbal_explanation: "נמיר את 0.25 לשבר פשוט: הוא שווה ל-1/4 (רבע).&rlm;", math_expression: "0.25 = 1/4" },
            { verbal_explanation: "נחבר: רבע ועוד חצי. אנו יודעים שחצי שווה לשני רבעים.&rlm;", math_expression: "1/4 + 2/4 = 3/4" }
        ],
        final_answer: "3/4"
    },
    // שאלה 12
    {
        topic: "finalReviews",
        subTopic: "לקראת כיתה ו'",
        question_text: "משוואות פשוטות: איזה מספר חסר במשוואה הבאה?&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>? × 5 = 35 + 10</div>",
        options: ["9", "7", "45", "8"],
        correctAnswer: 0,
        hint: "חשבו קודם את האגף הימני (35+10). לאחר מכן שאלו את עצמכם: איזה מספר כפול 5 ייתן את התוצאה הזו?&rlm;",
        solution_steps: [
            { verbal_explanation: "נפתור קודם את האגף הימני של המשוואה.&rlm;", math_expression: "35 + 10 = 45" },
            { verbal_explanation: "כעת עלינו למצוא מספר שכאשר נכפיל אותו ב-5 נקבל 45. נבצע פעולה הפוכה.&rlm;", math_expression: "45 : 5 = 9" }
        ],
        final_answer: "9"
    },

    // ==========================================================
    // תת נושא 2: מבדק מחצית שנה (12 שאלות)
    // ==========================================================
    
    // שאלה 13
    {
        topic: "finalReviews",
        subTopic: "מבדק מחצית שנה",
        question_text: "חילוק שברים מעורבים: חשבו את התוצאה.&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>2 1/2 : 3/4 = ?</div>",
        options: ["3 1/3", "1 7/8", "15/8", "3"],
        correctAnswer: 0,
        hint: "הפכו את המספר המעורב לשבר מדומה (5/2). לאחר מכן הפכו את החילוק לכפל בהופכי.&rlm;",
        solution_steps: [
            { verbal_explanation: "נמיר את המספר המעורב (שניים וחצי) לשבר מדומה.&rlm;", math_expression: "2 1/2 = 5/2" },
            { verbal_explanation: "נבצע כפל בהופכי של השבר השני.&rlm;", math_expression: "5/2 × 4/3" },
            { verbal_explanation: "נכפול ונקבל 20/6. נצמצם ב-2 ונקבל 10/3.&rlm;", math_expression: "10/3" },
            { verbal_explanation: "10 חלקי 3 שווה ל-3 שלמים ושארית 1.&rlm;", math_expression: "3 1/3" }
        ],
        final_answer: "3 1/3"
    },
    // שאלה 14
    {
        topic: "finalReviews",
        subTopic: "מבדק מחצית שנה",
        question_text: "חיסור שברים עשרוניים: חשבו.&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>15.2 - 3.85 = ?</div>",
        options: ["11.35", "11.45", "12.65", "12.35"],
        correctAnswer: 0,
        hint: "הוסיפו אפס בסוף המספר הראשון (15.20) כדי להשוות את מספר הספרות, ובצעו חיסור (אפשר במאונך).&rlm;",
        solution_steps: [
            { verbal_explanation: "נרשום 15.2 כ-15.20 כדי ליישר את המאיות.&rlm;", math_expression: "15.20 - 3.85" },
            { verbal_explanation: "נפרוט ונחסר מאיות: 10 פחות 5 שווה 5. עשיריות: 11 פחות 8 שווה 3.&rlm;", math_expression: "" },
            { verbal_explanation: "השלמים: 14 פחות 3 שווה 11.&rlm;", math_expression: "11.35" }
        ],
        final_answer: "11.35"
    },
    // שאלה 15
    {
        topic: "finalReviews",
        subTopic: "מבדק מחצית שנה",
        question_text: "גיאומטריה: מהו שטחו של המשולש ישר הזווית באיור (בסמ\"ר)?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 150 150' width='100%' height='150' style='max-width:150px;'><polygon points='20,130 120,130 20,30' fill='#fef08a' stroke='#ca8a04' stroke-width='2'/><polyline points='20,115 35,115 35,130' fill='none' stroke='#ca8a04' stroke-width='1.5'/><text x='70' y='145' font-family='Heebo, Arial' font-size='12' fill='#0f172a' text-anchor='middle'>8 ס\"מ</text><text x='5' y='80' font-family='Heebo, Arial' font-size='12' fill='#0f172a' text-anchor='middle'>5</text></svg></div>",
        options: ["20", "40", "13", "26"],
        correctAnswer: 0,
        hint: "במשולש ישר זווית, שתי הצלעות שיוצרות את הזווית הישרה (הניצבים) משמשות כבסיס וגובה. כפלו אותם וחלקו ב-2.&rlm;",
        solution_steps: [
            { verbal_explanation: "שטח משולש הוא בסיס כפול גובה חלקי 2. כאן הניצבים הם 8 ו-5.&rlm;", math_expression: "" },
            { verbal_explanation: "נכפול 8 ב-5.&rlm;", math_expression: "8 × 5 = 40" },
            { verbal_explanation: "נחלק ב-2.&rlm;", math_expression: "40 : 2 = 20" }
        ],
        final_answer: "20"
    },
    // שאלה 16
    {
        topic: "finalReviews",
        subTopic: "מבדק מחצית שנה",
        question_text: "כפל שברים (מומלץ לצמצם באלכסון לפני הכפל):&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>4/5 × 15/16 = ?</div>",
        options: ["3/4", "19/21", "60/80", "1/4"],
        correctAnswer: 0,
        hint: "צמצמו את 4 (במונה) עם 16 (במכנה), ואת 15 (במונה) עם 5 (במכנה).&rlm;",
        solution_steps: [
            { verbal_explanation: "נצמצם ב-4: ה-4 הופך ל-1, וה-16 הופך ל-4.&rlm;", math_expression: "" },
            { verbal_explanation: "נצמצם ב-5: ה-5 הופך ל-1, וה-15 הופך ל-3.&rlm;", math_expression: "" },
            { verbal_explanation: "נשארנו עם 1 כפול 3/4.&rlm;", math_expression: "1 × 3/4 = 3/4" }
        ],
        final_answer: "3/4"
    },
    // שאלה 17
    {
        topic: "finalReviews",
        subTopic: "מבדק מחצית שנה",
        question_text: "חילוק שברים עשרוניים:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>3.6 : 0.6 = ?</div>",
        options: ["6", "0.6", "60", "2.16"],
        correctAnswer: 0,
        hint: "הכפילו את שני המספרים ב-10 כדי לבטל את הנקודה העשרונית.&rlm;",
        solution_steps: [
            { verbal_explanation: "נרחיב את התרגיל פי 10 כדי לקבל מספרים שלמים.&rlm;", math_expression: "(3.6 × 10) : (0.6 × 10)" },
            { verbal_explanation: "36 לחלק ל-6 שווה 6.&rlm;", math_expression: "36 : 6 = 6" }
        ],
        final_answer: "6"
    },
    // שאלה 18
    {
        topic: "finalReviews",
        subTopic: "מבדק מחצית שנה",
        question_text: "מיכל מכיל 12 ליטר מים. רוצים למלא ממנו בקבוקים שנפח כל אחד מהם הוא 1.5 ליטר. כמה בקבוקים שלמים ימולאו?&rlm;",
        options: ["8", "7", "6", "9"],
        correctAnswer: 0,
        hint: "התרגיל הוא 12 לחלק ל-1.5. תוכלו להכפיל את שניהם פי 2 כדי לקבל תרגיל קל: 24 לחלק ל-3.&rlm;",
        solution_steps: [
            { verbal_explanation: "ניתן לפתור באמצעות הרחבה פי 10 (120 חלקי 15) או הרחבה פי 2 למספרים שלמים וקטנים יותר.&rlm;", math_expression: "12 : 1.5" },
            { verbal_explanation: "נרחיב פי 2 לנוחות: 12 כפול 2 זה 24. ו-1.5 כפול 2 זה 3.&rlm;", math_expression: "24 : 3 = 8" }
        ],
        final_answer: "8"
    },
    // שאלה 19
    {
        topic: "finalReviews",
        subTopic: "מבדק מחצית שנה",
        question_text: "תכונות מצולעים: איזה מהמרובעים הבאים מתאפיין בכך שכל צלעותיו שוות זו לזו, אך זוויותיו *אינן* בהכרח ישרות (90 מעלות)?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 250 80' width='100%' height='80' style='max-width:250px;'><polygon points='40,10 70,40 40,70 10,40' fill='#dcfce7' stroke='#16a34a' stroke-width='2'/><rect x='110' y='20' width='60' height='40' fill='#f1f5f9' stroke='#475569' stroke-width='2'/><polygon points='200,20 240,10 230,60 190,70' fill='#fee2e2' stroke='#dc2626' stroke-width='2'/></svg></div>",
        options: ["מעוין", "מלבן", "מקבילית", "טרפז שווה שוקיים"],
        correctAnswer: 0,
        hint: "מרובע שכל צלעותיו שוות הוא מעוין. אם גם הזוויות היו ישרות, הוא היה נקרא ריבוע.&rlm;",
        solution_steps: [
            { verbal_explanation: "מלבן: זוויותיו ישרות, צלעותיו לא בהכרח שוות. מקבילית: צלעות נגדיות שוות. טרפז: רק שתי שוקיים שוות.&rlm;", math_expression: "" },
            { verbal_explanation: "מעוין הוא המרובע היחיד שבו כל 4 הצלעות שוות, אך הזוויות אינן חייבות להיות ישרות.&rlm;", math_expression: "" }
        ],
        final_answer: "מעוין"
    },
    // שאלה 20
    {
        topic: "finalReviews",
        subTopic: "מבדק מחצית שנה",
        question_text: "שבר כמנת חילוק: הפכו את תרגיל החילוק לשבר מעורב:&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>25 : 7 = ?</div>",
        options: ["3 4/7", "3 2/7", "4 1/7", "3 5/7"],
        correctAnswer: 0,
        hint: "כמה פעמים 7 נכנס בשלמותו בתוך 25? ומהי השארית?&rlm;",
        solution_steps: [
            { verbal_explanation: "נכתוב את תרגיל החילוק כשבר מדומה.&rlm;", math_expression: "25/7" },
            { verbal_explanation: "7 נכנס ב-25 שלוש פעמים (3 כפול 7 זה 21).&rlm;", math_expression: "3" },
            { verbal_explanation: "השארית היא 4 (25 פחות 21). השארית נשארת חלקי המכנה 7.&rlm;", math_expression: "3 4/7" }
        ],
        final_answer: "3 4/7"
    },
    // שאלה 21
    {
        topic: "finalReviews",
        subTopic: "מבדק מחצית שנה",
        question_text: "השוואת שברים לעשרוניים: מה גדול יותר: 3/8 או 0.4?&rlm;",
        options: ["0.4 גדול יותר", "3/8 גדול יותר", "הם שווים", "אי אפשר לדעת"],
        correctAnswer: 0,
        hint: "המירו את 0.4 לשבר פשוט (4/10) או את 3/8 לעשרוני (הכפילו ב-125 וקבלו 0.375).&rlm;",
        solution_steps: [
            { verbal_explanation: "נמיר את 3/8 לשבר עשרוני. נרחיב את המונה והמכנה ב-125.&rlm;", math_expression: "(3 × 125) / (8 × 125) = 375/1000" },
            { verbal_explanation: "375 אלפיות נכתבות כ-0.375.&rlm;", math_expression: "0.375" },
            { verbal_explanation: "0.4 שווה ל-0.400. לכן 0.4 גדול מ-0.375.&rlm;", math_expression: "0.4 > 0.375" }
        ],
        final_answer: "0.4 גדול יותר"
    },
    // שאלה 22
    {
        topic: "finalReviews",
        subTopic: "מבדק מחצית שנה",
        question_text: "היקף מצולעים: מהו היקפו של המצולע הבא (בס\"מ)? כל הזוויות ישרות.&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 160 120' width='100%' height='120' style='max-width:160px;'><polygon points='20,20 100,20 100,60 140,60 140,100 20,100' fill='#f3e8ff' stroke='#a855f7' stroke-width='2'/><text x='60' y='15' font-family='Arial' font-size='10' fill='#0f172a'>8</text><text x='110' y='45' font-family='Arial' font-size='10' fill='#0f172a'>4</text><text x='145' y='85' font-family='Arial' font-size='10' fill='#0f172a'>4</text><text x='80' y='115' font-family='Arial' font-size='10' fill='#0f172a'>12</text><text x='5' y='65' font-family='Arial' font-size='10' fill='#0f172a'>8</text></svg></div>",
        options: ["40", "36", "48", "32"],
        correctAnswer: 0,
        hint: "היקף הוא סכום כל הצלעות. במצולע שזוויותיו ישרות, ניתן 'לדחוף' את הצלעות הפנימיות החוצה כדי להשלים למלבן שלם.&rlm;",
        solution_steps: [
            { verbal_explanation: "שיטה א': חיבור כל הצלעות. הצלע החסרה למעלה היא 4 ס\"מ (12 פחות 8).&rlm;", math_expression: "8+4+4+4+12+8 = 40" },
            { verbal_explanation: "שיטה ב' חכמה: הזזת הצלעות הפנימיות החוצה משלימה למלבן שלם שמידותיו 12 ו-8.&rlm;", math_expression: "2 × (12 + 8) = 40" }
        ],
        final_answer: "40"
    },
    // שאלה 23
    {
        topic: "finalReviews",
        subTopic: "מבדק מחצית שנה",
        question_text: "כפל ב-10, 100 וכו': חשבו את התוצאה.&rlm;<br><div dir='ltr' style='text-align:center; font-size:1.6rem; margin:15px 0;'>0.045 × 100 = ?</div>",
        options: ["4.5", "45", "0.45", "450"],
        correctAnswer: 0,
        hint: "בכפל ב-100 הנקודה העשרונית זזה שני מקומות ימינה (המספר גדל).&rlm;",
        solution_steps: [
            { verbal_explanation: "נזיז את הנקודה צעד ראשון מעבר לאפס: 0.45.&rlm;", math_expression: "" },
            { verbal_explanation: "נזיז צעד שני מעבר לארבע: 4.5.&rlm;", math_expression: "4.5" }
        ],
        final_answer: "4.5"
    },
    // שאלה 24
    {
        topic: "finalReviews",
        subTopic: "מבדק מחצית שנה",
        question_text: "בעיה מילולית: גלית קנתה 3 ק\"ג תפוחים ב-5.5 שקלים לק\"ג, ו-2 ק\"ג בננות ב-4.5 שקלים לק\"ג. כמה שילמה בסך הכל?&rlm;",
        options: ["25.5 שקלים", "20 שקלים", "22.5 שקלים", "26.5 שקלים"],
        correctAnswer: 0,
        hint: "חשבו בנפרד את מחיר התפוחים ואת מחיר הבננות, ואז חברו.&rlm;",
        solution_steps: [
            { verbal_explanation: "מחיר התפוחים: 3 ק\"ג כפול 5.5 שקלים.&rlm;", math_expression: "3 × 5.5 = 16.5" },
            { verbal_explanation: "מחיר הבננות: 2 ק\"ג כפול 4.5 שקלים.&rlm;", math_expression: "2 × 4.5 = 9.0" },
            { verbal_explanation: "נחבר את הסכומים.&rlm;", math_expression: "16.5 + 9 = 25.5" }
        ],
        final_answer: "25.5"
    },

    // ==========================================================
    // תת נושא 3: שאלות אתגר רב-שלביות (12 שאלות)
    // ==========================================================
    
    // שאלה 25
    {
        topic: "finalReviews",
        subTopic: "שאלות אתגר רב-שלביות",
        question_text: "אתגר 1 (קניות ואחוזים): מחיר טלוויזיה הוא 1,200 שקלים. בחג יש עליה הנחה של 20%. דן שילם על הטלוויזיה עם שני שטרות של 500 שקלים. כמה עודף הוא יקבל?&rlm;",
        options: ["40", "240", "160", "חסר לו כסף"],
        correctAnswer: 0,
        hint: "חשבו את ההנחה (20% מ-1,200). חסרו אותה מהמחיר לקבלת המחיר הסופי. לאחר מכן חסרו מ-1,000 שקלים.&rlm;",
        solution_steps: [
            { verbal_explanation: "20% הם 1/5. נחשב את ההנחה: חמישית מ-1200.&rlm;", math_expression: "1200 : 5 = 240" },
            { verbal_explanation: "המחיר לאחר הנחה: 1200 פחות 240.&rlm;", math_expression: "1200 - 240 = 960" },
            { verbal_explanation: "דן שילם 1000 שקלים (שני שטרות של 500). העודף הוא ההפרש.&rlm;", math_expression: "1000 - 960 = 40" }
        ],
        final_answer: "40"
    },
    // שאלה 26
    {
        topic: "finalReviews",
        subTopic: "שאלות אתגר רב-שלביות",
        question_text: "אתגר 2 (הספק עבודה): ברז א' ממלא בריכה לבדו ב-2 שעות. ברז ב' ממלא את אותה בריכה לבדו ב-3 שעות. איזה חלק מהבריכה יתמלא אם נפתח את שניהם יחד במשך שעה אחת?&rlm;",
        options: ["5/6", "1/2", "1/5", "1"],
        correctAnswer: 0,
        hint: "חשבו איזה חלק מהבריכה ממלא כל ברז בשעה אחת, וחברו את החלקים.&rlm;",
        solution_steps: [
            { verbal_explanation: "ברז א' מסיים ב-2 שעות, ולכן בשעה אחת ימלא 1/2 בריכה.&rlm;", math_expression: "" },
            { verbal_explanation: "ברז ב' מסיים ב-3 שעות, ולכן בשעה אחת ימלא 1/3 בריכה.&rlm;", math_expression: "" },
            { verbal_explanation: "יחד בשעה אחת הם ימלאו חצי ועוד שליש. נרחיב לשישיות: 3/6 ועוד 2/6.&rlm;", math_expression: "3/6 + 2/6 = 5/6" }
        ],
        final_answer: "5/6"
    },
    // שאלה 27
    {
        topic: "finalReviews",
        subTopic: "שאלות אתגר רב-שלביות",
        question_text: "אתגר 3 (גיאומטריה רב-שלבית): לפניכם קיר מלבני שמידותיו 10 ס\"מ על 6 ס\"מ. בתוכו גזרו חלון שמידותיו 3 ס\"מ על 2 ס\"מ. מהו שטח הקיר הצבוע (בסמ\"ר)?&rlm;<br><div style='text-align:center; margin:15px 0;'><svg viewBox='0 0 200 120' width='100%' height='120' style='max-width:200px;'><rect x='10' y='10' width='180' height='100' fill='#e0f2fe' stroke='#0284c7' stroke-width='2'/><rect x='50' y='30' width='100' height='60' fill='#ffffff' stroke='#ef4444' stroke-width='2'/><text x='100' y='65' font-family='Arial' font-size='12' fill='#ef4444' text-anchor='middle'>חלון 3×2</text><text x='100' y='25' font-family='Arial' font-size='12' fill='#0284c7' text-anchor='middle'>קיר 10×6</text></svg></div>",
        options: ["54", "60", "6", "48"],
        correctAnswer: 0,
        hint: "חשבו את השטח הכולל של המלבן הגדול, ולאחר מכן חסרו ממנו את שטח החלון הקטן.&rlm;",
        solution_steps: [
            { verbal_explanation: "שטח המלבן הגדול (הקיר): אורך כפול רוחב.&rlm;", math_expression: "10 × 6 = 60" },
            { verbal_explanation: "שטח המלבן הקטן (החלון): אורך כפול רוחב.&rlm;", math_expression: "3 × 2 = 6" },
            { verbal_explanation: "השטח הצבוע הוא השטח הגדול פחות החלון.&rlm;", math_expression: "60 - 6 = 54" }
        ],
        final_answer: "54"
    },
    // שאלה 28
    {
        topic: "finalReviews",
        subTopic: "שאלות אתגר רב-שלביות",
        question_text: "אתגר 4 (חלק מחלק): בגינה יש 40 פרחים. 1/4 מהם הם ורדים. מתוך הוורדים, 2/5 הם ורדים אדומים. כמה ורדים אדומים יש בגינה?&rlm;",
        options: ["4", "10", "16", "8"],
        correctAnswer: 0,
        hint: "חשבו קודם כמה ורדים יש בסך הכל (רבע מ-40). מתוך התוצאה שתקבלו, חשבו כמה הם 2 חמישיות.&rlm;",
        solution_steps: [
            { verbal_explanation: "נמצא את מספר הוורדים בגינה (רבע מ-40).&rlm;", math_expression: "40 : 4 = 10" },
            { verbal_explanation: "יש 10 ורדים. מתוכם 2/5 אדומים. נחלק ב-5 ונקבל 2, נכפול ב-2.&rlm;", math_expression: "10 : 5 = 2" },
            { verbal_explanation: "2 כפול 2 שווה ל-4 ורדים אדומים.&rlm;", math_expression: "2 × 2 = 4" }
        ],
        final_answer: "4"
    },
    // שאלה 29
    {
        topic: "finalReviews",
        subTopic: "שאלות אתגר רב-שלביות",
        question_text: "אתגר 5 (ממוצע חסר): הציון הממוצע של יעל ב-3 מבחנים הוא 80. ידוע שבמבחן הראשון קיבלה 70, ובמבחן השני קיבלה 80. כמה קיבלה במבחן השלישי?&rlm;",
        options: ["90", "100", "80", "85"],
        correctAnswer: 0,
        hint: "אם הממוצע של 3 מבחנים הוא 80, סך כל הנקודות שלה חייב להיות 3 כפול 80. חסרו את שני המבחנים הידועים מסך הנקודות.&rlm;",
        solution_steps: [
            { verbal_explanation: "הסכום הכולל של 3 המבחנים צריך להיות הממוצע כפול 3.&rlm;", math_expression: "80 × 3 = 240" },
            { verbal_explanation: "סכום שני המבחנים שכבר עשתה הוא 150.&rlm;", math_expression: "70 + 80 = 150" },
            { verbal_explanation: "המבחן השלישי חייב להשלים ל-240.&rlm;", math_expression: "240 - 150 = 90" }
        ],
        final_answer: "90"
    },
    // שאלה 30
    {
        topic: "finalReviews",
        subTopic: "שאלות אתגר רב-שלביות",
        question_text: "אתגר 6 (יחס ושינוי כמות): היחס בין בנים לבנות במועדון הוא 2:3 (2 בנים על כל 3 בנות). במועדון יש 15 בנות. למועדון הצטרפו עוד 5 בנים. מהו היחס *החדש* בין הבנים לבנות?&rlm;",
        options: ["1:1", "3:3", "5:3", "3:2"], 
        correctAnswer: 0,
        hint: "מצאו כמה בנים היו בהתחלה (לפי היחס המקורי). הוסיפו להם 5, ואז רשמו את היחס החדש וצמצמו אותו.&rlm;",
        solution_steps: [
            { verbal_explanation: "נמצא כמה בנים היו בהתחלה: חלק הבנות ביחס הוא 3, וכמותן 15. לכן ההרחבה היא פי 5.&rlm;", math_expression: "15 : 3 = 5" },
            { verbal_explanation: "הבנים (חלק 2) הם 10.&rlm;", math_expression: "2 × 5 = 10" },
            { verbal_explanation: "הצטרפו 5 בנים, כעת יש 15 בנים. מספר הבנות נשאר 15.&rlm;", math_expression: "10 + 5 = 15" },
            { verbal_explanation: "היחס החדש הוא 15:15, שמצטמצם ל-1:1.&rlm;", math_expression: "1:1" }
        ],
        final_answer: "1:1"
    },
    // שאלה 31
    {
        topic: "finalReviews",
        subTopic: "שאלות אתגר רב-שלביות",
        question_text: "אתגר 7 (תנועה והיגיון): מכונית נוסעת במהירות 80 קמ\"ש. היא יצאה בשעה 08:00. בשעה 10:30 היא עברה בדיוק חצי מהדרך. מהו המרחק הכולל שיש לה לעבור?&rlm;",
        options: ["400", "200", "250", "160"],
        correctAnswer: 0,
        hint: "חשבו כמה שעות המכונית נסעה עד 10:30 (שעתיים וחצי). הכפילו במהירות כדי למצוא חצי דרך, ואז הכפילו פי 2.&rlm;",
        solution_steps: [
            { verbal_explanation: "זמן הנסיעה מ-08:00 עד 10:30 הוא שעתיים וחצי (2.5 שעות).&rlm;", math_expression: "" },
            { verbal_explanation: "מרחק שווה מהירות כפול זמן. המרחק שעברה הוא 80 כפול 2.5.&rlm;", math_expression: "80 × 2.5 = 200" },
            { verbal_explanation: "200 ק\"מ הם רק חצי מהדרך. נכפיל פי 2 לקבלת הדרך המלאה.&rlm;", math_expression: "200 × 2 = 400" }
        ],
        final_answer: "400"
    },
    // שאלה 32
    {
        topic: "finalReviews",
        subTopic: "שאלות אתגר רב-שלביות",
        question_text: "אתגר 8 (חידת שברים הפוכה): תמר חשבה על שבר. היא כפלה אותו ב-2, הוסיפה לו 1/4, וקיבלה שלם 1. על איזה שבר חשבה תמר?&rlm;",
        options: ["3/8", "1/4", "3/4", "1/8"],
        correctAnswer: 0,
        hint: "עבדו מהסוף להתחלה בפעולות הפוכות: חסרו 1/4 מהשלם, ולאחר מכן חלקו ב-2.&rlm;",
        solution_steps: [
            { verbal_explanation: "נפעיל פעולות הפוכות: השלב האחרון היה חיבור רבע לתוצאה. נחסר רבע מ-1.&rlm;", math_expression: "1 - 1/4 = 3/4" },
            { verbal_explanation: "לפני כן היא כפלה ב-2. הפעולה ההפוכה היא לחלק ב-2.&rlm;", math_expression: "3/4 : 2" },
            { verbal_explanation: "חילוק ב-2 זה כמו לכפול בחצי (1/2). 3 רבעים כפול חצי שווה 3 שמיניות.&rlm;", math_expression: "3/4 × 1/2 = 3/8" }
        ],
        final_answer: "3/8"
    },
    // שאלה 33
    {
        topic: "finalReviews",
        subTopic: "שאלות אתגר רב-שלביות",
        question_text: "אתגר 9 (עשרוניים רב-שלבי): רון קנה 4 בקבוקי מים במחיר 2.25 שקלים לבקבוק. הוא שילם בשטר של 20 שקלים. בכסף שהוחזר לו הוא קנה מסטיקים שעולים 0.5 שקלים כל אחד. כמה מסטיקים קנה רון?&rlm;",
        options: ["22", "11", "15", "20"],
        correctAnswer: 0,
        hint: "חשבו את מחיר המים, חסרו מ-20 כדי למצוא את העודף, וחלקו את העודף בחצי שקל (חילוק בחצי זה כמו כפל פי 2).&rlm;",
        solution_steps: [
            { verbal_explanation: "מחיר המים: 4 כפול 2.25 (4 כפול 2 זה 8, 4 כפול רבע זה 1). יחד 9 שקלים.&rlm;", math_expression: "4 × 2.25 = 9" },
            { verbal_explanation: "העודף שקיבל מ-20 שקלים הוא 11 שקלים.&rlm;", math_expression: "20 - 9 = 11" },
            { verbal_explanation: "נחלק את העודף בחצי שקל. כמה חצאים יש ב-11? נכפול ב-2.&rlm;", math_expression: "11 : 0.5 = 22" }
        ],
        final_answer: "22"
    },
    // שאלה 34
    {
        topic: "finalReviews",
        subTopic: "שאלות אתגר רב-שלביות",
        question_text: "אתגר 10 (התאמת מתכונים): מתכון לעוגה דורש 1 1/2 כוסות קמח ל-4 אנשים. דנה רוצה להכין את העוגה ל-10 אנשים. כמה כוסות קמח היא תצטרך?&rlm;",
        options: ["3 3/4", "4", "2 1/2", "5"],
        correctAnswer: 0,
        hint: "מצאו קודם כמה קמח צריך לאדם אחד (חילוק ב-4). לאחר מכן הכפילו ב-10.&rlm;",
        solution_steps: [
            { verbal_explanation: "נמצא כמה קמח לאדם אחד: 1 וחצי לחלק ל-4. (נמיר ל-3/2).&rlm;", math_expression: "3/2 : 4 = 3/8" },
            { verbal_explanation: "לאדם אחד נדרשות 3/8 כוסות קמח. נכפיל ב-10 אנשים.&rlm;", math_expression: "3/8 × 10 = 30/8" },
            { verbal_explanation: "נמיר 30/8 למספר מעורב: 30 לחלק ל-8 זה 3 שלמים ושארית 6 שמיניות (3/4).&rlm;", math_expression: "3 6/8 = 3 3/4" }
        ],
        final_answer: "3 3/4"
    },
    // שאלה 35
    {
        topic: "finalReviews",
        subTopic: "שאלות אתגר רב-שלביות",
        question_text: "אתגר 11 (סדרת שברים): לפניכם סדרה חוקית של שברים: 1/8, 1/4, 3/8, 1/2... מה יהיה השבר הבא (החמישי) בסדרה?&rlm;",
        options: ["5/8", "3/4", "1", "7/8"],
        correctAnswer: 0,
        hint: "הרחיבו את כל השברים לסוג אחד של מכנה (למשל, הכל לשמיניות) כדי לראות את החוקיות בקלות.&rlm;",
        solution_steps: [
            { verbal_explanation: "נרחיב את חצי ורבע לשמיניות כדי לראות את הסדרה טוב יותר.&rlm;", math_expression: "1/4 = 2/8 , 1/2 = 4/8" },
            { verbal_explanation: "כעת הסדרה נראית כך: 1/8, 2/8, 3/8, 4/8...&rlm;", math_expression: "" },
            { verbal_explanation: "ברור שהאיבר הבא הוא 5/8 (בכל פעם מוסיפים שמינית אחת).&rlm;", math_expression: "4/8 + 1/8 = 5/8" }
        ],
        final_answer: "5/8"
    },
    // שאלה 36
    {
        topic: "finalReviews",
        subTopic: "שאלות אתגר רב-שלביות",
        question_text: "אתגר 12 (הספק): סבא צועד במסלול קבוע בשעה ורבע (1 1/4 שעות). הנכד שלו צועד באותו מסלול פי 2 יותר מהר. כמה דקות ייקח לנכד לסיים את המסלול?&rlm;",
        options: ["37.5", "75", "40", "30"],
        correctAnswer: 0,
        hint: "המירו את זמן ההליכה של הסבא לדקות. אם הנכד מהיר פי 2, הזמן שלו קצר פי 2 (חצי מהזמן).&rlm;",
        solution_steps: [
            { verbal_explanation: "שעה ורבע שווה ל-60 דקות + 15 דקות. סך הכל 75 דקות לסבא.&rlm;", math_expression: "60 + 15 = 75" },
            { verbal_explanation: "הנכד מהיר כפליים, לכן הוא מסיים במחצית מהזמן (75 לחלק ל-2).&rlm;", math_expression: "75 : 2 = 37.5" }
        ],
        final_answer: "37.5"
    }

];