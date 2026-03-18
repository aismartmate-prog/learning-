// ========================================================================
// שכבת גיל: ה'-ו' | נושא: חקר נתונים וסיכויים
// תתי נושאים: חקר נתונים, ניתוח סיכויים (24 שאלות סה"כ)
// ========================================================================

const questionsDB = [

    // ==========================================
    // תת נושא 1: חקר נתונים (12 שאלות)
    // ==========================================
    
    {
        topic: "dataAnalysis",
        subTopic: "חקר נתונים",
        question_text: "ציוניו של דני בשלושה מבחנים בחשבון הם: 80, 90, 100.<br>מהו הציון הממוצע של דני?&rlm;",
        options: [
            "90",
            "85",
            "95",
            "80"
        ],
        correctAnswer: 0,
        hint: "כדי לחשב ממוצע, יש לחבר את כל הציונים יחד, ולאחר מכן לחלק את הסכום במספר המבחנים (3).&rlm;",
        solution_steps: [
            { verbal_explanation: "תחילה, נחשב את סכום כל הציונים של דני.&rlm;", math_expression: "80 + 90 + 100 = 270" },
            { verbal_explanation: "כעת, נחלק את הסכום שהתקבל במספר המבחנים (3) כדי למצוא את הממוצע.&rlm;", math_expression: "270 / 3 = 90" }
        ],
        final_answer: "90"
    },
    {
        topic: "dataAnalysis",
        subTopic: "חקר נתונים",
        question_text: "התרשים שלפניכם מציג את מספר הספרים שקראו ילדים בחופש הגדול.<br>איזו עמודה מייצגת את הכמות הגדולה ביותר (השכיח)?&rlm;<div style=\"text-align:center; margin:20px 0;\"><svg viewBox=\"0 0 200 120\" width=\"100%\" height=\"120\" style=\"max-width:200px;\"><line x1=\"20\" y1=\"100\" x2=\"180\" y2=\"100\" stroke=\"#94a3b8\" stroke-width=\"2\"/><line x1=\"20\" y1=\"10\" x2=\"20\" y2=\"100\" stroke=\"#94a3b8\" stroke-width=\"2\"/><rect x=\"40\" y=\"50\" width=\"20\" height=\"50\" fill=\"#3b82f6\"/><rect x=\"80\" y=\"20\" width=\"20\" height=\"80\" fill=\"#10b981\"/><rect x=\"120\" y=\"60\" width=\"20\" height=\"40\" fill=\"#f59e0b\"/><text x=\"50\" y=\"115\" font-family=\"Arial\" font-size=\"10\" fill=\"#64748b\" text-anchor=\"middle\">א'</text><text x=\"90\" y=\"115\" font-family=\"Arial\" font-size=\"10\" fill=\"#64748b\" text-anchor=\"middle\">ב'</text><text x=\"130\" y=\"115\" font-family=\"Arial\" font-size=\"10\" fill=\"#64748b\" text-anchor=\"middle\">ג'</text></svg></div>",
        options: [
            "עמודה ב'",
            "עמודה א'",
            "עמודה ג'",
            "כולן שוות"
        ],
        correctAnswer: 0,
        hint: "השכיח הוא הנתון שמופיע הכי הרבה פעמים, ולכן העמודה שלו בתרשים תהיה הגבוהה ביותר.&rlm;",
        solution_steps: [
            { verbal_explanation: "נתבונן בתרשים: גובה העמודה מייצג את הכמות. ככל שהעמודה גבוהה יותר, הכמות גדולה יותר.&rlm;", math_expression: "" },
            { verbal_explanation: "עמודה ב' (הירוקה) היא הגבוהה ביותר, ולכן היא מייצגת את הערך השכיח.&rlm;", math_expression: "" }
        ],
        final_answer: "עמודה ב'"
    },
    {
        topic: "dataAnalysis",
        subTopic: "חקר נתונים",
        question_text: "בקבוצת כדורסל נמדד גובהם של חמישה שחקנים (בס\"מ): 180, 185, 190, 195, 200.<br>מהו חציון הגבהים בקבוצה?&rlm;",
        options: [
            "190 ס\"מ",
            "185 ס\"מ",
            "195 ס\"מ",
            "192 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "החציון הוא המספר שנמצא בדיוק באמצע הרשימה לאחר שמסדרים את הנתונים מהקטן לגדול.&rlm;",
        solution_steps: [
            { verbal_explanation: "הנתונים כבר מסודרים בסדר עולה: 180, 185, 190, 195, 200.&rlm;", math_expression: "" },
            { verbal_explanation: "מכיוון שישנם 5 נתונים (מספר אי-זוגי), החציון הוא הנתון השלישי, שנמצא בדיוק באמצע.&rlm;", math_expression: "" },
            { verbal_explanation: "המספר האמצעי הוא 190.&rlm;", math_expression: "" }
        ],
        final_answer: "190 ס\"מ"
    },
    {
        topic: "dataAnalysis",
        subTopic: "חקר נתונים",
        question_text: "טמפרטורות המקסימום שנמדדו במהלך שבוע אחד בירושלים היו: 24, 26, 22, 28, 25, 24, 30.<br>מהו 'טווח הנתונים' של הטמפרטורות?&rlm;",
        options: [
            "8 מעלות",
            "30 מעלות",
            "22 מעלות",
            "6 מעלות"
        ],
        correctAnswer: 0,
        hint: "טווח הנתונים הוא ההפרש שבין הנתון הגדול ביותר לנתון הקטן ביותר בסדרה. מצאו אותם והחסירו.&rlm;",
        solution_steps: [
            { verbal_explanation: "נמצא את הנתון הגדול ביותר (הטמפרטורה הגבוהה ביותר): 30.&rlm;", math_expression: "" },
            { verbal_explanation: "נמצא את הנתון הקטן ביותר (הטמפרטורה הנמוכה ביותר): 22.&rlm;", math_expression: "" },
            { verbal_explanation: "נחשב את ההפרש ביניהם כדי למצוא את הטווח.&rlm;", math_expression: "30 - 22 = 8" }
        ],
        final_answer: "8 מעלות"
    },
    {
        topic: "dataAnalysis",
        subTopic: "חקר נתונים",
        question_text: "דיאגרמת העוגה מציגה את התפלגות החוגים של תלמידי הכיתה. חצי (1/2) מהתלמידים בחוג כדורגל, ורבע (1/4) בחוג שחייה.<br>איזה חלק מייצג את התלמידים שנמצאים בחוג ציור (החלק הנותר)?&rlm;<div style=\"text-align:center; margin:20px 0;\"><svg viewBox=\"0 0 100 100\" width=\"100\" height=\"100\"><circle cx=\"50\" cy=\"50\" r=\"45\" fill=\"#e2e8f0\"/><path d=\"M 50,50 L 50,5 A 45,45 0 0,1 95,50 Z\" fill=\"#3b82f6\"/><path d=\"M 50,50 L 95,50 A 45,45 0 0,1 50,95 Z\" fill=\"#ef4444\"/><path d=\"M 50,50 L 50,95 A 45,45 0 0,1 5,50 Z\" fill=\"#ef4444\"/><line x1=\"50\" y1=\"5\" x2=\"50\" y2=\"95\" stroke=\"#ffffff\" stroke-width=\"2\"/><line x1=\"50\" y1=\"50\" x2=\"95\" y2=\"50\" stroke=\"#ffffff\" stroke-width=\"2\"/></svg></div>",
        options: [
            "1/4",
            "1/2",
            "1/3",
            "1/8"
        ],
        correctAnswer: 0,
        hint: "העוגה השלמה מייצגת 1 (שלם). חברו את חצי ורבע, ובדקו כמה חסר כדי להגיע לשלם אחד.&rlm;",
        solution_steps: [
            { verbal_explanation: "נחבר את החלקים הידועים: כדורגל (חצי) ושחייה (רבע).&rlm;", math_expression: "1/2 + 1/4 = 3/4" },
            { verbal_explanation: "סך הכל הם תופסים שלושה רבעים מהעוגה. החוג לציור הוא השארית שמשלימה לשלם.&rlm;", math_expression: "1 - 3/4 = 1/4" }
        ],
        final_answer: "1/4"
    },
    {
        topic: "dataAnalysis",
        subTopic: "חקר נתונים",
        question_text: "רמי רוצה שהממוצע שלו בשני מבחנים יהיה בדיוק 90.<br>במבחן הראשון הוא קיבל 85. כמה עליו לקבל במבחן השני?&rlm;",
        options: [
            "95",
            "90",
            "100",
            "85"
        ],
        correctAnswer: 0,
        hint: "אם הממוצע של שני מבחנים הוא 90, הסכום הכולל שלהם חייב להיות 180 (90 כפול 2). איזה מספר נוסיף ל-85 כדי לקבל 180?&rlm;",
        solution_steps: [
            { verbal_explanation: "ממוצע של 90 ב-2 מבחנים אומר שסכום הציונים הכולל צריך להיות 180.&rlm;", math_expression: "90 * 2 = 180" },
            { verbal_explanation: "נחסר מהסכום הכולל את הציון שכבר קיבל במבחן הראשון.&rlm;", math_expression: "180 - 85 = 95" },
            { verbal_explanation: "לכן עליו לקבל 95 במבחן השני.&rlm;", math_expression: "" }
        ],
        final_answer: "95"
    },
    {
        topic: "dataAnalysis",
        subTopic: "חקר נתונים",
        question_text: "לפניכם רשימה של מספר ילדים במשפחות שונות בבניין: 2, 3, 1, 2, 4, 2, 5.<br>מהו השכיח (המספר שמופיע הכי הרבה) של מספר הילדים?&rlm;",
        options: [
            "2",
            "3",
            "1",
            "4"
        ],
        correctAnswer: 0,
        hint: "השכיח הוא הנתון בעל התדירות הגבוהה ביותר (זה שחוזר על עצמו הכי הרבה פעמים ברשימה). ספרו כל מספר.&rlm;",
        solution_steps: [
            { verbal_explanation: "נספור כמה פעמים מופיע כל מספר ברשימה: 1 מופיע פעם אחת. 2 מופיע 3 פעמים. 3, 4, 5 מופיעים כל אחד פעם אחת.&rlm;", math_expression: "" },
            { verbal_explanation: "המספר 2 מופיע הכי הרבה פעמים, לכן הוא השכיח.&rlm;", math_expression: "" }
        ],
        final_answer: "2"
    },
    {
        topic: "dataAnalysis",
        subTopic: "חקר נתונים",
        question_text: "משקלי ארבעה אבטיחים הם: 3 ק\"ג, 4 ק\"ג, 6 ק\"ג ו-7 ק\"ג.<br>מהו המשקל הממוצע של אבטיח אחד?&rlm;",
        options: [
            "5 ק\"ג",
            "4.5 ק\"ג",
            "6 ק\"ג",
            "4 ק\"ג"
        ],
        correctAnswer: 0,
        hint: "חשבו את סכום כל המשקלים יחד, ואת התוצאה חלקו במספר האבטיחים (4).&rlm;",
        solution_steps: [
            { verbal_explanation: "תחילה נחשב את המשקל הכולל של כל ארבעת האבטיחים.&rlm;", math_expression: "3 + 4 + 6 + 7 = 20" },
            { verbal_explanation: "כעת, נחלק את הסכום הכולל במספר האבטיחים (4) כדי לקבל את הממוצע.&rlm;", math_expression: "20 / 4 = 5" }
        ],
        final_answer: "5 ק\"ג"
    },
    {
        topic: "dataAnalysis",
        subTopic: "חקר נתונים",
        question_text: "קבוצה של 4 חברים נבחנו באנגלית. הציונים שלהם הם: 70, 80, 90, 100.<br>מהו חציון הציונים של הקבוצה?&rlm;",
        options: [
            "85",
            "80",
            "90",
            "85.5"
        ],
        correctAnswer: 0,
        hint: "כאשר יש מספר זוגי של נתונים (4), אין מספר אחד באמצע. לכן, לוקחים את שני המספרים האמצעיים ומחשבים את הממוצע שלהם.&rlm;",
        solution_steps: [
            { verbal_explanation: "הציונים מסודרים בסדר עולה: 70, 80, 90, 100. יש 4 נתונים.&rlm;", math_expression: "" },
            { verbal_explanation: "שני המספרים האמצעיים הם 80 ו-90. כדי למצוא את החציון נחשב את הממוצע שלהם.&rlm;", math_expression: "(80 + 90) / 2 = 170 / 2" },
            { verbal_explanation: "170 לחלק ל-2 שווה 85.&rlm;", math_expression: "170 / 2 = 85" }
        ],
        final_answer: "85"
    },
    {
        topic: "dataAnalysis",
        subTopic: "חקר נתונים",
        question_text: "בטבלת שכיחויות נרשמו מספר התפוחים שאכלו ילדים בשבוע: <br>2 ילדים אכלו תפוח אחד, 3 ילדים אכלו 2 תפוחים, וילד אחד אכל 3 תפוחים.<br>כמה ילדים השתתפו בסקר בסך הכל?&rlm;",
        options: [
            "6 ילדים",
            "3 ילדים",
            "10 ילדים",
            "5 ילדים"
        ],
        correctAnswer: 0,
        hint: "שימו לב: השאלה שואלת כמה ילדים היו בסך הכל, ולא כמה תפוחים נאכלו. חברו את מספר הילדים מכל קבוצה.&rlm;",
        solution_steps: [
            { verbal_explanation: "כדי למצוא את מספר המשתתפים הכולל (גודל המדגם), נחבר את השכיחויות (את כמות הילדים בכל קבוצה).&rlm;", math_expression: "" },
            { verbal_explanation: "קבוצה ראשונה: 2 ילדים. קבוצה שנייה: 3 ילדים. קבוצה שלישית: ילד 1.&rlm;", math_expression: "2 + 3 + 1 = 6" }
        ],
        final_answer: "6 ילדים"
    },
    {
        topic: "dataAnalysis",
        subTopic: "חקר נתונים",
        question_text: "הגובה הממוצע של 4 עצים בגינה הוא 150 ס\"מ.<br>שתלו עץ נוסף (חמישי) שגובהו גם הוא 150 ס\"מ.<br>מה יקרה לממוצע הגבהים בגינה כעת?&rlm;",
        options: [
            "הוא יישאר בדיוק 150 ס\"מ",
            "הוא יגדל",
            "הוא יקטן",
            "אי אפשר לדעת"
        ],
        correctAnswer: 0,
        hint: "כאשר מוסיפים לקבוצה נתון ששווה בדיוק לממוצע הנוכחי של הקבוצה, הוא אינו 'מושך' את הממוצע למעלה או למטה.&rlm;",
        solution_steps: [
            { verbal_explanation: "הממוצע הוא נקודת שיווי המשקל. כאשר מוסיפים איבר שגודלו בדיוק כגודל הממוצע הקיים, הוא אינו משפיע עליו.&rlm;", math_expression: "" },
            { verbal_explanation: "לכן, הממוצע יישאר בדיוק כפי שהיה - 150 ס\"מ.&rlm;", math_expression: "" }
        ],
        final_answer: "הוא יישאר בדיוק 150 ס\"מ"
    },
    {
        topic: "dataAnalysis",
        subTopic: "חקר נתונים",
        question_text: "שלושה אחים חסכו כסף. רון חסך 20 ₪, גיל חסך 40 ₪, ואיתי לא חסך כלום (0 ₪).<br>מהו החיסכון הממוצע לאח?&rlm;",
        options: [
            "20 ₪",
            "30 ₪",
            "60 ₪",
            "0 ₪"
        ],
        correctAnswer: 0,
        hint: "גם אם איתי לא חסך כלום (0), הוא עדיין נספר כחלק ממספר האחים שמחלקים בהם את הסכום הכולל (כלומר, מחלקים ב-3 ולא ב-2).&rlm;",
        solution_steps: [
            { verbal_explanation: "נחשב את הסכום הכולל של החסכונות של כל האחים, כולל ה-0 של איתי.&rlm;", math_expression: "20 + 40 + 0 = 60" },
            { verbal_explanation: "ישנם 3 אחים, לכן נחלק את הסכום הכולל ב-3 כדי למצוא את הממוצע לכל אחד.&rlm;", math_expression: "60 / 3 = 20" }
        ],
        final_answer: "20 ₪"
    },

    // ==========================================
    // תת נושא 2: ניתוח סיכויים (12 שאלות)
    // ==========================================

    {
        topic: "dataAnalysis",
        subTopic: "ניתוח סיכויים",
        question_text: "זורקים קוביית משחק הוגנת (שעליה המספרים 1 עד 6).<br>מהו הסיכוי (ההסתברות) לקבל מספר זוגי?&rlm;<div style=\"text-align:center; margin:20px 0;\"><svg viewBox=\"0 0 100 100\" width=\"80\" height=\"80\"><rect x=\"20\" y=\"20\" width=\"60\" height=\"60\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"4\" rx=\"8\"/><circle cx=\"40\" cy=\"40\" r=\"5\" fill=\"#854d0e\"/><circle cx=\"60\" cy=\"60\" r=\"5\" fill=\"#854d0e\"/></svg></div>",
        options: [
            "1/2",
            "1/6",
            "1/3",
            "4/6"
        ],
        correctAnswer: 0,
        hint: "בדקו כמה מספרים זוגיים יש בקובייה מתוך סך כל האפשרויות. המספרים הזוגיים הם 2, 4, 6.&rlm;",
        solution_steps: [
            { verbal_explanation: "לקובייה יש 6 פאות, כלומר 6 תוצאות אפשריות סך הכל.&rlm;", math_expression: "" },
            { verbal_explanation: "התוצאות הרצויות (מספרים זוגיים) הן: 2, 4, ו-6. כלומר 3 תוצאות אפשריות.&rlm;", math_expression: "" },
            { verbal_explanation: "לכן ההסתברות היא 3 מתוך 6, שאפשר לצמצם לשבר חצי.&rlm;", math_expression: "3 / 6 = 1 / 2" }
        ],
        final_answer: "1/2"
    },
    {
        topic: "dataAnalysis",
        subTopic: "ניתוח סיכויים",
        question_text: "בשק אטום ישנם 4 כדורים אדומים ו-6 כדורים כחולים.<br>מוציאים כדור אחד באקראי מבלי להסתכל. מהו הסיכוי להוציא כדור אדום?&rlm;<div style=\"text-align:center; margin:20px 0;\"><svg viewBox=\"0 0 100 120\" width=\"80\" height=\"100\"><path d=\"M 20,30 Q 10,100 50,110 Q 90,100 80,30 Q 50,40 20,30\" fill=\"#f1f5f9\" stroke=\"#94a3b8\" stroke-width=\"3\"/><circle cx=\"40\" cy=\"80\" r=\"8\" fill=\"#ef4444\"/><circle cx=\"60\" cy=\"90\" r=\"8\" fill=\"#3b82f6\"/><circle cx=\"45\" cy=\"95\" r=\"8\" fill=\"#3b82f6\"/><circle cx=\"65\" cy=\"75\" r=\"8\" fill=\"#ef4444\"/><circle cx=\"50\" cy=\"65\" r=\"8\" fill=\"#ef4444\"/></svg></div>",
        options: [
            "4/10",
            "6/10",
            "4/6",
            "1/4"
        ],
        correctAnswer: 0,
        hint: "הסיכוי שווה למספר הכדורים הרצויים (אדומים) לחלק למספר הכדורים הכולל שבתוך השק.&rlm;",
        solution_steps: [
            { verbal_explanation: "נחשב תחילה את המספר הכולל של הכדורים בשק.&rlm;", math_expression: "4 + 6 = 10" },
            { verbal_explanation: "מתוכם, יש 4 כדורים אדומים. לכן הסיכוי לבחור כדור אדום הוא 4 מתוך 10.&rlm;", math_expression: "4 / 10" }
        ],
        final_answer: "4/10"
    },
    {
        topic: "dataAnalysis",
        subTopic: "ניתוח סיכויים",
        question_text: "מסובבים רולטה המחולקת ל-4 חלקים שווים בגודלם: אדום, כחול, ירוק וצהוב.<br>מהו הסיכוי שהחץ יעצור על הצבע הירוק?&rlm;<div style=\"text-align:center; margin:20px 0;\"><svg viewBox=\"0 0 100 100\" width=\"80\" height=\"80\"><circle cx=\"50\" cy=\"50\" r=\"45\" fill=\"#e2e8f0\" stroke=\"#64748b\" stroke-width=\"2\"/><path d=\"M 50,50 L 50,5 A 45,45 0 0,1 95,50 Z\" fill=\"#ef4444\"/><path d=\"M 50,50 L 95,50 A 45,45 0 0,1 50,95 Z\" fill=\"#3b82f6\"/><path d=\"M 50,50 L 50,95 A 45,45 0 0,1 5,50 Z\" fill=\"#10b981\"/><path d=\"M 50,50 L 5,50 A 45,45 0 0,1 50,5 Z\" fill=\"#facc15\"/><circle cx=\"50\" cy=\"50\" r=\"4\" fill=\"#1e293b\"/><polygon points=\"50,50 55,20 45,20\" fill=\"#1e293b\"/></svg></div>",
        options: [
            "1/4",
            "1/2",
            "1/3",
            "4/4"
        ],
        correctAnswer: 0,
        hint: "ברולטה יש 4 חלקים שווים, והירוק הוא רק אחד מהם.&rlm;",
        solution_steps: [
            { verbal_explanation: "סך הכל יש ברולטה 4 אפשרויות שוות (אדום, כחול, ירוק, צהוב).&rlm;", math_expression: "" },
            { verbal_explanation: "הצבע הירוק מופיע בדיוק פעם אחת. לכן הסיכוי הוא 1 מתוך 4.&rlm;", math_expression: "1 / 4" }
        ],
        final_answer: "1/4"
    },
    {
        topic: "dataAnalysis",
        subTopic: "ניתוח סיכויים",
        question_text: "זורקים קוביית משחק הוגנת (1 עד 6).<br>מהו הסיכוי לקבל את המספר 7?&rlm;",
        options: [
            "0",
            "1/6",
            "1/7",
            "6/6"
        ],
        correctAnswer: 0,
        hint: "האם יש מספר 7 על קוביית משחק רגילה? אם לא, אי אפשר לקבל אותו לעולם.&rlm;",
        solution_steps: [
            { verbal_explanation: "המספרים המופיעים על קוביית משחק רגילה הם 1, 2, 3, 4, 5, 6 בלבד.&rlm;", math_expression: "" },
            { verbal_explanation: "מכיוון שהמספר 7 כלל אינו קיים על הקובייה, זהו אירוע שלא יכול לקרות לעולם. הסתברות של אירוע בלתי אפשרי היא תמיד 0.&rlm;", math_expression: "0 / 6 = 0" }
        ],
        final_answer: "0"
    },
    {
        topic: "dataAnalysis",
        subTopic: "ניתוח סיכויים",
        question_text: "בשק ישנם 10 כדורים כחולים בלבד, ואין כדורים בצבעים אחרים.<br>מוציאים כדור אחד מבלי להסתכל. מהו הסיכוי שהכדור יהיה כחול?&rlm;",
        options: [
            "1",
            "1/10",
            "10/100",
            "0"
        ],
        correctAnswer: 0,
        hint: "אם כל הכדורים בשק הם כחולים, ברור לחלוטין שכל כדור שתוציאו יהיה כחול.&rlm;",
        solution_steps: [
            { verbal_explanation: "מספר התוצאות הרצויות (כדורים כחולים) הוא 10. גם מספר התוצאות הכולל הוא 10.&rlm;", math_expression: "" },
            { verbal_explanation: "זהו אירוע ודאי שבטוח יקרה במאה אחוז. ההסתברות לאירוע ודאי היא תמיד 1 שלם.&rlm;", math_expression: "10 / 10 = 1" }
        ],
        final_answer: "1"
    },
    {
        topic: "dataAnalysis",
        subTopic: "ניתוח סיכויים",
        question_text: "מסובבים רולטה שמחולקת ל-8 חלקים שווים. 2 מהחלקים צבועים בצהוב, ו-6 צבועים באדום.<br>האם הסיכוי לעצור על אדום שווה לסיכוי לעצור על צהוב?&rlm;",
        options: [
            "לא, לאדום סיכוי גדול יותר",
            "כן, הם שווים",
            "לא, לצהוב סיכוי גדול יותר",
            "אי אפשר לדעת מבלי לסובב"
        ],
        correctAnswer: 0,
        hint: "בדקו איזה צבע תופס יותר מקום ברולטה (מיוצג על ידי יותר חלקים). ככל שיש יותר חלקים, הסיכוי גדול יותר.&rlm;",
        solution_steps: [
            { verbal_explanation: "הסיכוי לעצור על צבע מסוים תלוי בכמות החלקים שלו מתוך הסך הכל.&rlm;", math_expression: "" },
            { verbal_explanation: "מכיוון שיש 6 חלקים אדומים ורק 2 חלקים צהובים, השטח האדום גדול משמעותית. לכן, הרבה יותר סביר שהחץ יעצור על אדום.&rlm;", math_expression: "6/8 > 2/8" }
        ],
        final_answer: "לא, לאדום סיכוי גדול יותר"
    },
    {
        topic: "dataAnalysis",
        subTopic: "ניתוח סיכויים",
        question_text: "מטילים מטבע הוגן. על צד אחד יש ציור של עץ, ועל הצד השני פלי.<br>מהו הסיכוי שהמטבע ייפול על עץ?&rlm;",
        options: [
            "1/2",
            "1/1",
            "0",
            "1/3"
        ],
        correctAnswer: 0,
        hint: "למטבע יש בדיוק 2 צדדים, ו'עץ' הוא צד אחד מהם. לכן הסיכוי הוא 1 מתוך 2.&rlm;",
        solution_steps: [
            { verbal_explanation: "למטבע יש שני צדדים אפשריים: עץ או פלי.&rlm;", math_expression: "" },
            { verbal_explanation: "התוצאה הרצויה (עץ) היא צד אחד בלבד. לכן ההסתברות היא אחת מתוך שתיים.&rlm;", math_expression: "1 / 2" }
        ],
        final_answer: "1/2"
    },
    {
        topic: "dataAnalysis",
        subTopic: "ניתוח סיכויים",
        question_text: "יש לנו חפיסת כרטיסים ועליהם המספרים מ-1 עד 10. שולפים כרטיס אחד באקראי.<br>מהו הסיכוי לשלוף כרטיס שעליו מספר שגדול מ-7?&rlm;",
        options: [
            "3/10",
            "2/10",
            "7/10",
            "4/10"
        ],
        correctAnswer: 0,
        hint: "תחילה מנו את המספרים שגדולים מ-7: הם 8, 9, ו-10. כמה מספרים אלו בסך הכל?&rlm;",
        solution_steps: [
            { verbal_explanation: "סך כל הכרטיסים האפשריים בחפיסה הוא 10.&rlm;", math_expression: "" },
            { verbal_explanation: "המספרים שגדולים ממש מ-7 הם: 8, 9, ו-10. ישנם בדיוק 3 כרטיסים כאלו.&rlm;", math_expression: "" },
            { verbal_explanation: "לכן, הסיכוי לשלוף אחד מהם הוא 3 מתוך 10.&rlm;", math_expression: "3 / 10" }
        ],
        final_answer: "3/10"
    },
    {
        topic: "dataAnalysis",
        subTopic: "ניתוח סיכויים",
        question_text: "בקערה יש 5 סוכריות בטעם תות ו-3 סוכריות בטעם לימון.<br>ילד מוציא סוכרייה אחת מבלי להסתכל. מהו הסיכוי שהסוכרייה לא תהיה בטעם לימון?&rlm;",
        options: [
            "5/8",
            "3/8",
            "5/5",
            "3/5"
        ],
        correctAnswer: 0,
        hint: "אם הסוכרייה היא לא לימון, משמעות הדבר שהיא חייבת להיות תות. מהו הסיכוי להוציא תות מתוך סך הכל הסוכריות?&rlm;",
        solution_steps: [
            { verbal_explanation: "נמצא את המספר הכולל של הסוכריות בקערה.&rlm;", math_expression: "5 + 3 = 8" },
            { verbal_explanation: "הסיכוי לא להוציא לימון, שווה לסיכוי להוציא את הטעם השני - תות. ישנן 5 סוכריות תות. לכן הסיכוי הוא 5 מתוך 8.&rlm;", math_expression: "5 / 8" }
        ],
        final_answer: "5/8"
    },
    {
        topic: "dataAnalysis",
        subTopic: "ניתוח סיכויים",
        question_text: "זורקים קוביית משחק הוגנת (1 עד 6).<br>מהו הסיכוי לקבל מספר שהוא כפולה של 3 (מספר שמתחלק ב-3 ללא שארית)?&rlm;",
        options: [
            "2/6",
            "3/6",
            "1/6",
            "6/6"
        ],
        correctAnswer: 0,
        hint: "המספרים על הקובייה הם 1,2,3,4,5,6. אלו מהם מתחלקים ב-3 ללא שארית? (רמז: זה 3 ו-6).&rlm;",
        solution_steps: [
            { verbal_explanation: "על הקובייה יש 6 תוצאות אפשריות.&rlm;", math_expression: "" },
            { verbal_explanation: "המספרים על הקובייה שמהווים כפולה של 3 הם 3 ו-6 בלבד. כלומר, 2 תוצאות רצויות.&rlm;", math_expression: "" },
            { verbal_explanation: "לכן ההסתברות היא 2 מתוך 6.&rlm;", math_expression: "2 / 6" }
        ],
        final_answer: "2/6"
    },
    {
        topic: "dataAnalysis",
        subTopic: "ניתוח סיכויים",
        question_text: "בקופסה ישנם 5 כדורים צהובים, 5 כדורים ירוקים ו-5 כדורים שחורים.<br>מוציאים כדור אחד. מהו הסיכוי שהכדור שנוציא יהיה צהוב?&rlm;",
        options: [
            "1/3",
            "1/2",
            "1/5",
            "5/10"
        ],
        correctAnswer: 0,
        hint: "חשבו את הכמות הכוללת של הכדורים בקופסה (15), ולאחר מכן בדקו מהו החלק היחסי של הצהובים וצמצמו את השבר.&rlm;",
        solution_steps: [
            { verbal_explanation: "נחשב את סך כל הכדורים בקופסה.&rlm;", math_expression: "5 + 5 + 5 = 15" },
            { verbal_explanation: "מתוכם, יש 5 כדורים צהובים. הסיכוי הוא 5 מתוך 15.&rlm;", math_expression: "5 / 15" },
            { verbal_explanation: "אפשר לצמצם שבר זה (לחלק מונה ומכנה ב-5) ולקבל שליש.&rlm;", math_expression: "5 / 15 = 1 / 3" }
        ],
        final_answer: "1/3"
    },
    {
        topic: "dataAnalysis",
        subTopic: "ניתוח סיכויים",
        question_text: "קבוצת תלמידים החליטה להגריל פרס. בכובע שמו 2 פתקים עם השם יעל, ו-3 פתקים עם השם נדב.<br>הם מוציאים פתק אחד בעיניים עצומות.<br>למי יש סיכוי גדול יותר לזכות בפרס?&rlm;",
        options: [
            "לנדב",
            "ליעל",
            "הסיכויים שווים",
            "אי אפשר לדעת עד שמגרילים"
        ],
        correctAnswer: 0,
        hint: "ככל שיש יותר פתקים עם שם מסוים בתוך הכובע, כך עולה הסיכוי שהיד תוציא את הפתק הזה במקרה.&rlm;",
        solution_steps: [
            { verbal_explanation: "הסתברות תלויה במספר האפשרויות הרצויות מתוך הסך הכל. לנדב יש 3 פתקים וליעל יש רק 2 פתקים.&rlm;", math_expression: "" },
            { verbal_explanation: "מכיוון שיש יותר פתקים עם השם נדב בכובע (3 לעומת 2), הסיכוי שלו להיבחר גדול יותר.&rlm;", math_expression: "" }
        ],
        final_answer: "לנדב"
    }

];