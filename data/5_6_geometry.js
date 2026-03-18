// ========================================================================
// שכבת גיל: ה'-ו' | נושא: גיאומטריה
// תתי נושאים: היקפים ושטחים, הכרת הגופים, חישובי נפחים, מעגל ועיגול (40 שאלות)
// ========================================================================

const questionsDB = [

    // ==========================================
    // תת נושא 1: היקפים ושטחים (10 שאלות)
    // ==========================================
    {
        topic: "geometry",
        subTopic: "היקפים ושטחים",
        question_text: "נתון מלבן שאורכו 12 ס\"מ ורוחבו 5 ס\"מ.<br>מהו שטח המלבן?&rlm;<div style=\"text-align:center; margin:15px 0;\"><svg viewBox=\"0 0 200 100\" width=\"100%\" height=\"100\" style=\"max-width:200px;\"><rect x=\"30\" y=\"20\" width=\"140\" height=\"60\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/><text x=\"100\" y=\"15\" font-family=\"Arial\" font-size=\"14\" fill=\"#0f172a\" text-anchor=\"middle\">12 ס\"מ</text><text x=\"15\" y=\"55\" font-family=\"Arial\" font-size=\"14\" fill=\"#0f172a\" text-anchor=\"middle\">5 ס\"מ</text></svg></div>",
        options: [
            "60 סמ\"ר",
            "34 סמ\"ר",
            "17 סמ\"ר",
            "120 סמ\"ר"
        ],
        correctAnswer: 0,
        hint: "שטח מלבן שווה למכפלת האורך ברוחב (אורך כפול רוחב).&rlm;",
        solution_steps: [
            { verbal_explanation: "הנוסחה לחישוב שטח מלבן היא: שטח = אורך &times; רוחב.&rlm;", math_expression: "S = a * b" },
            { verbal_explanation: "נציב את הנתונים שלנו: אורך 12 ס\"מ, רוחב 5 ס\"מ.&rlm;", math_expression: "12 * 5 = 60" }
        ],
        final_answer: "60 סמ\"ר"
    },
    {
        topic: "geometry",
        subTopic: "היקפים ושטחים",
        question_text: "נתון מלבן שאורכו 12 ס\"מ ורוחבו 5 ס\"מ.<br>מהו היקף המלבן?&rlm;",
        options: [
            "34 ס\"מ",
            "60 ס\"מ",
            "17 ס\"מ",
            "24 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "היקף מלבן שווה לסכום כל ארבע צלעותיו (פעמיים האורך + פעמיים הרוחב).&rlm;",
        solution_steps: [
            { verbal_explanation: "במלבן יש שתי צלעות שוות באורכן ושתי צלעות שוות ברוחבן. ההיקף הוא סכום כולן.&rlm;", math_expression: "12 + 12 + 5 + 5 = 34" },
            { verbal_explanation: "דרך נוספת: לחבר אורך ורוחב ולהכפיל פי 2.&rlm;", math_expression: "(12 + 5) * 2 = 34" }
        ],
        final_answer: "34 ס\"מ"
    },
    {
        topic: "geometry",
        subTopic: "היקפים ושטחים",
        question_text: "היקפו של ריבוע הוא 36 ס\"מ.<br>מהו אורך צלע הריבוע?&rlm;<div style=\"text-align:center; margin:15px 0;\"><svg viewBox=\"0 0 100 100\" width=\"100%\" height=\"100\" style=\"max-width:100px;\"><rect x=\"10\" y=\"10\" width=\"80\" height=\"80\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"3\"/><text x=\"50\" y=\"55\" font-family=\"Arial\" font-size=\"14\" fill=\"#854d0e\" text-anchor=\"middle\">P = 36</text></svg></div>",
        options: [
            "9 ס\"מ",
            "6 ס\"מ",
            "12 ס\"מ",
            "8 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "בריבוע כל ארבע הצלעות שוות באורכן. לכן, ההיקף שווה לאורך צלע אחת כפול 4.&rlm;",
        solution_steps: [
            { verbal_explanation: "היקף ריבוע מורכב מ-4 צלעות שוות. כדי למצוא צלע אחת, נחלק את ההיקף ב-4.&rlm;", math_expression: "36 / 4 = 9" }
        ],
        final_answer: "9 ס\"מ"
    },
    {
        topic: "geometry",
        subTopic: "היקפים ושטחים",
        question_text: "שטחו של ריבוע הוא 64 סמ\"ר.<br>מהו היקף הריבוע?&rlm;",
        options: [
            "32 ס\"מ",
            "16 ס\"מ",
            "24 ס\"מ",
            "64 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "מצאו קודם את אורך הצלע: איזה מספר כפול עצמו שווה ל-64? לאחר מכן, חשבו את ההיקף.&rlm;",
        solution_steps: [
            { verbal_explanation: "שטח ריבוע הוא צלע כפול עצמה. המספר שכפול עצמו שווה 64 הוא 8.&rlm;", math_expression: "8 * 8 = 64" },
            { verbal_explanation: "כעת כשאנו יודעים שצלע הריבוע היא 8 ס\"מ, נחשב את ההיקף (4 צלעות שוות).&rlm;", math_expression: "8 * 4 = 32" }
        ],
        final_answer: "32 ס\"מ"
    },
    {
        topic: "geometry",
        subTopic: "היקפים ושטחים",
        question_text: "שטחו של מלבן הוא 40 סמ\"ר. אורכו של המלבן הוא 8 ס\"מ.<br>מהו רוחבו של המלבן?&rlm;",
        options: [
            "5 ס\"מ",
            "10 ס\"מ",
            "32 ס\"מ",
            "4 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "שטח מלבן מחושב כ- אורך &times; רוחב. כלומר, 8 כפול מספר כלשהו שווה ל-40.&rlm;",
        solution_steps: [
            { verbal_explanation: "כדי למצוא צלע חסרה במלבן כאשר השטח נתון, נחלק את השטח בצלע הידועה.&rlm;", math_expression: "40 / 8 = 5" }
        ],
        final_answer: "5 ס\"מ"
    },
    {
        topic: "geometry",
        subTopic: "היקפים ושטחים",
        question_text: "במשולש ישר זווית, אורכי הניצבים (הצלעות המרכיבות את הזווית הישרה) הם 6 ס\"מ ו-8 ס\"מ.<br>מהו שטח המשולש?&rlm;<div style=\"text-align:center; margin:15px 0;\"><svg viewBox=\"0 0 150 120\" width=\"100%\" height=\"120\" style=\"max-width:150px;\"><polygon points=\"20,100 120,100 20,20\" fill=\"#dcfce3\" stroke=\"#16a34a\" stroke-width=\"2\"/><rect x=\"20\" y=\"90\" width=\"10\" height=\"10\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"1\"/><text x=\"70\" y=\"115\" font-family=\"Arial\" font-size=\"14\" fill=\"#0f172a\" text-anchor=\"middle\">8 ס\"מ</text><text x=\"5\" y=\"60\" font-family=\"Arial\" font-size=\"14\" fill=\"#0f172a\" text-anchor=\"middle\">6</text></svg></div>",
        options: [
            "24 סמ\"ר",
            "48 סמ\"ר",
            "14 סמ\"ר",
            "30 סמ\"ר"
        ],
        correctAnswer: 0,
        hint: "שטח משולש ישר זווית שווה למכפלת שני הניצבים (הצלעות הישרות) לחלק ל-2. זה בדיוק חצי משטח של מלבן!&rlm;",
        solution_steps: [
            { verbal_explanation: "נכפיל את שני הניצבים (בסיס וגובה) זה בזה.&rlm;", math_expression: "6 * 8 = 48" },
            { verbal_explanation: "שטח משולש הוא חצי משטח המלבן שנוצר מאותן צלעות, לכן נחלק ב-2.&rlm;", math_expression: "48 / 2 = 24" }
        ],
        final_answer: "24 סמ\"ר"
    },
    {
        topic: "geometry",
        subTopic: "היקפים ושטחים",
        question_text: "גינה מלבנית היא באורך 15 מטרים וברוחב 10 מטרים. מעוניינים לרצף את הגינה במרצפות.<br>כמה מ\"ר של ריצוף צריך לקנות?&rlm;",
        options: [
            "150 מ\"ר",
            "50 מ\"ר",
            "100 מ\"ר",
            "25 מ\"ר"
        ],
        correctAnswer: 0,
        hint: "כאשר מדברים על ריצוף או כיסוי מלא של צורה, מדובר על מציאת השטח שלה (אורך כפול רוחב).&rlm;",
        solution_steps: [
            { verbal_explanation: "כדי לדעת כמה ריצוף נדרש, עלינו לחשב את השטח הפנימי של הגינה.&rlm;", math_expression: "" },
            { verbal_explanation: "נכפול את האורך ברוחב.&rlm;", math_expression: "15 * 10 = 150" }
        ],
        final_answer: "150 מ\"ר"
    },
    {
        topic: "geometry",
        subTopic: "היקפים ושטחים",
        question_text: "חיברו יחד שני ריבועים זהים שאורך צלעם הוא 4 ס\"מ, כך שנוצר מלבן חדש.<br>מהו שטח המלבן החדש?&rlm;<div style=\"text-align:center; margin:15px 0;\"><svg viewBox=\"0 0 200 100\" width=\"100%\" height=\"100\" style=\"max-width:200px;\"><rect x=\"20\" y=\"20\" width=\"60\" height=\"60\" fill=\"#f3e8ff\" stroke=\"#7c3aed\" stroke-width=\"2\"/><rect x=\"80\" y=\"20\" width=\"60\" height=\"60\" fill=\"#f3e8ff\" stroke=\"#7c3aed\" stroke-width=\"2\"/><text x=\"50\" y=\"55\" font-family=\"Arial\" font-size=\"14\" fill=\"#0f172a\" text-anchor=\"middle\">4</text><text x=\"110\" y=\"55\" font-family=\"Arial\" font-size=\"14\" fill=\"#0f172a\" text-anchor=\"middle\">4</text></svg></div>",
        options: [
            "32 סמ\"ר",
            "16 סמ\"ר",
            "24 סמ\"ר",
            "64 סמ\"ר"
        ],
        correctAnswer: 0,
        hint: "חשבו את שטחו של ריבוע אחד בנפרד, ולאחר מכן הכפילו ב-2 (כי יש שני ריבועים זהים).&rlm;",
        solution_steps: [
            { verbal_explanation: "נחשב תחילה את השטח של ריבוע אחד (צלע כפול עצמה).&rlm;", math_expression: "4 * 4 = 16" },
            { verbal_explanation: "המלבן החדש מורכב משני ריבועים כאלה, לכן השטח כפול.&rlm;", math_expression: "16 * 2 = 32" }
        ],
        final_answer: "32 סמ\"ר"
    },
    {
        topic: "geometry",
        subTopic: "היקפים ושטחים",
        question_text: "חופפים למלבן הקודם (משני ריבועים של 4 ס\"מ), נשאלת השאלה: מהו היקף המלבן החדש שנוצר?&rlm;",
        options: [
            "24 ס\"מ",
            "32 ס\"מ",
            "16 ס\"מ",
            "20 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "ציירו לעצמכם את המלבן: הרוחב נשאר 4 ס\"מ, אבל האורך כעת מורכב משתי צלעות של 4 ס\"מ (כלומר אורך 8 ס\"מ). חשבו את ההיקף כעת.&rlm;",
        solution_steps: [
            { verbal_explanation: "מידות המלבן החדש הן: רוחב 4 ס\"מ, ואורך 8 ס\"מ (4+4).&rlm;", math_expression: "a = 8, b = 4" },
            { verbal_explanation: "היקף מחשבים על ידי חיבור כל 4 הצלעות מסביב.&rlm;", math_expression: "8 + 8 + 4 + 4 = 24" }
        ],
        final_answer: "24 ס\"מ"
    },
    {
        topic: "geometry",
        subTopic: "היקפים ושטחים",
        question_text: "נתונה צורה המורכבת ממלבן גדול שמתוכו 'גזרו' ריבוע קטן. מידות המלבן הגדול היו 10 ס\"מ על 6 ס\"מ. הריבוע שנגזר היה בגודל 2 ס\"מ על 2 ס\"מ.<br>מהו השטח הנותר של הצורה?&rlm;",
        options: [
            "56 סמ\"ר",
            "60 סמ\"ר",
            "58 סמ\"ר",
            "64 סמ\"ר"
        ],
        correctAnswer: 0,
        hint: "חשבו את השטח של המלבן הגדול כאילו הוא שלם, ולאחר מכן החסירו ממנו את השטח של הריבוע שנגזר.&rlm;",
        solution_steps: [
            { verbal_explanation: "נחשב את שטח המלבן המקורי.&rlm;", math_expression: "10 * 6 = 60" },
            { verbal_explanation: "נחשב את שטח הריבוע שנגזר והוצא מהצורה.&rlm;", math_expression: "2 * 2 = 4" },
            { verbal_explanation: "נחסר את השטח שנגזר מהשטח הכולל.&rlm;", math_expression: "60 - 4 = 56" }
        ],
        final_answer: "56 סמ\"ר"
    },

    // ==========================================
    // תת נושא 2: הכרת הגופים (10 שאלות)
    // ==========================================
    {
        topic: "geometry",
        subTopic: "הכרת הגופים",
        question_text: "כמה פאות (צדדים שטוחים) יש לקובייה?&rlm;<div style=\"text-align:center; margin:15px 0;\"><svg viewBox=\"0 0 150 150\" width=\"100%\" height=\"120\" style=\"max-width:150px;\"><polygon points=\"40,60 90,60 90,110 40,110\" fill=\"#bae6fd\" stroke=\"#0284c7\" stroke-width=\"2\"/><polygon points=\"40,60 60,40 110,40 90,60\" fill=\"#e0f2fe\" stroke=\"#0284c7\" stroke-width=\"2\"/><polygon points=\"90,60 110,40 110,90 90,110\" fill=\"#7dd3fc\" stroke=\"#0284c7\" stroke-width=\"2\"/></svg></div>",
        options: [
            "6",
            "8",
            "12",
            "4"
        ],
        correctAnswer: 0,
        hint: "חשבו על קוביית משחק רגילה. המספרים עליה הם מ-1 עד כמה?&rlm;",
        solution_steps: [
            { verbal_explanation: "קובייה היא גוף תלת-ממדי המורכב מריבועים. יש לה בסיס תחתון, בסיס עליון, ו-4 פאות צדדיות (מעטפת).&rlm;", math_expression: "" },
            { verbal_explanation: "בסך הכל: 1 עליון + 1 תחתון + 4 בצדדים = 6 פאות.&rlm;", math_expression: "1 + 1 + 4 = 6" }
        ],
        final_answer: "6"
    },
    {
        topic: "geometry",
        subTopic: "הכרת הגופים",
        question_text: "כמה קודקודים (שפיצים) יש לתיבה?&rlm;",
        options: [
            "8",
            "6",
            "12",
            "10"
        ],
        correctAnswer: 0,
        hint: "ספרו את הפינות בבסיס העליון, ולאחר מכן את הפינות בבסיס התחתון.&rlm;",
        solution_steps: [
            { verbal_explanation: "בתיבה (כמו קופסת נעליים), יש בסיס עליון מלבני שיש לו 4 פינות (קודקודים).&rlm;", math_expression: "" },
            { verbal_explanation: "וגם לבסיס התחתון המלבני יש 4 פינות. יחד יש 8 קודקודים.&rlm;", math_expression: "4 + 4 = 8" }
        ],
        final_answer: "8"
    },
    {
        topic: "geometry",
        subTopic: "הכרת הגופים",
        question_text: "כמה מקצועות (הקווים המחברים בין הקודקודים) יש לקובייה?&rlm;",
        options: [
            "12",
            "8",
            "6",
            "16"
        ],
        correctAnswer: 0,
        hint: "ספרו את הקווים: 4 קווים למעלה, 4 קווים למטה, ועוד 4 קווים עומדים שמחברים ביניהם.&rlm;",
        solution_steps: [
            { verbal_explanation: "לריבוע העליון יש 4 צלעות (מקצועות). לריבוע התחתון יש 4 צלעות.&rlm;", math_expression: "4 + 4 = 8" },
            { verbal_explanation: "וישנם עוד 4 מקצועות צדדיים ('עמודים') שמחברים את הבסיס העליון לתחתון.&rlm;", math_expression: "8 + 4 = 12" }
        ],
        final_answer: "12"
    },
    {
        topic: "geometry",
        subTopic: "הכרת הגופים",
        question_text: "איזה מהגופים הבאים אינו מורכב מפאות ישרות (מצולעים)?&rlm;<div style=\"text-align:center; margin:15px 0;\"><svg viewBox=\"0 0 150 150\" width=\"100%\" height=\"120\" style=\"max-width:150px;\"><ellipse cx=\"75\" cy=\"40\" rx=\"40\" ry=\"15\" fill=\"#fbcfe8\" stroke=\"#ec4899\" stroke-width=\"2\"/><path d=\"M 35,40 L 35,110 A 40,15 0 0,0 115,110 L 115,40\" fill=\"#fce7f3\" stroke=\"#ec4899\" stroke-width=\"2\"/></svg></div>",
        options: [
            "גליל",
            "תיבה",
            "פירמידה",
            "קובייה"
        ],
        correctAnswer: 0,
        hint: "חפשו גוף שיש לו משטח עגול, כלומר הוא יכול 'להתגלגל'. מצולעים הם צורות ישרות זווית.&rlm;",
        solution_steps: [
            { verbal_explanation: "תיבה, קובייה ופירמידה מורכבות ממשטחים ישרים (מלבנים, משולשים). משטחים אלו נקראים פאות.&rlm;", math_expression: "" },
            { verbal_explanation: "גליל מורכב משני בסיסים עגולים ומעטפת עקומה, לכן הוא לא מורכב ממצולעים.&rlm;", math_expression: "" }
        ],
        final_answer: "גליל"
    },
    {
        topic: "geometry",
        subTopic: "הכרת הגופים",
        question_text: "מהי הצורה של הבסיסים בגליל?&rlm;",
        options: [
            "עיגול",
            "מלבן",
            "משולש",
            "ריבוע"
        ],
        correctAnswer: 0,
        hint: "חשבו על צורה של קופסת שימורים או פחית. על איזו צורה היא עומדת?&rlm;",
        solution_steps: [
            { verbal_explanation: "גליל מורכב משני בסיסים זהים ומקבילים המחוברים ביניהם במעטפת עקומה.&rlm;", math_expression: "" },
            { verbal_explanation: "הבסיסים של הגליל הם תמיד בצורת עיגול.&rlm;", math_expression: "" }
        ],
        final_answer: "עיגול"
    },
    {
        topic: "geometry",
        subTopic: "הכרת הגופים",
        question_text: "איזה גוף נוצר כאשר פורסים (פותחים לצורה שטוחה) 6 ריבועים זהים המחוברים זה לזה בצורת צלב?&rlm;",
        options: [
            "קובייה",
            "תיבה",
            "פירמידה מרובעת",
            "חרוט"
        ],
        correctAnswer: 0,
        hint: "לגוף הזה יש בדיוק 6 פאות, וכולן ריבועים זהים.&rlm;",
        solution_steps: [
            { verbal_explanation: "תיבה מורכבת ממלבנים. פירמידה מורכבת ממשולשים.&rlm;", math_expression: "" },
            { verbal_explanation: "הגוף היחיד שכל 6 הפאות שלו הן ריבועים שווים לחלוטין הוא הקובייה.&rlm;", math_expression: "" }
        ],
        final_answer: "קובייה"
    },
    {
        topic: "geometry",
        subTopic: "הכרת הגופים",
        question_text: "כמה בסיסים יש לחרוט (קופה של ליצן)?&rlm;<div style=\"text-align:center; margin:15px 0;\"><svg viewBox=\"0 0 150 150\" width=\"100%\" height=\"120\" style=\"max-width:150px;\"><ellipse cx=\"75\" cy=\"110\" rx=\"40\" ry=\"15\" fill=\"#d8b4fe\" stroke=\"#8b5cf6\" stroke-width=\"2\"/><path d=\"M 35,110 L 75,30 L 115,110\" fill=\"#f3e8ff\" stroke=\"#8b5cf6\" stroke-width=\"2\"/></svg></div>",
        options: [
            "1",
            "2",
            "0",
            "3"
        ],
        correctAnswer: 0,
        hint: "לחרוט יש שפיץ (קודקוד) בצד אחד, ומשטח ישר בצד השני עליו הוא עומד.&rlm;",
        solution_steps: [
            { verbal_explanation: "בניגוד לגליל שיש לו שני בסיסים זהים (למעלה ולמטה), לחרוט יש בסיס עגול אחד בלבד.&rlm;", math_expression: "" },
            { verbal_explanation: "מצידו השני המעטפת שלו נסגרת לנקודה אחת הנקראת קודקוד החרוט.&rlm;", math_expression: "" }
        ],
        final_answer: "1"
    },
    {
        topic: "geometry",
        subTopic: "הכרת הגופים",
        question_text: "פירמידה משולשת היא פירמידה שהבסיס שלה הוא משולש. ממה מורכבות הפאות הצדדיות של הפירמידה?&rlm;",
        options: [
            "משולשים",
            "מלבנים",
            "ריבועים",
            "עיגולים"
        ],
        correctAnswer: 0,
        hint: "בכל הפירמידות בעולם (לא משנה מה הבסיס שלהן), כל הפאות בצדדים עולות למעלה ונפגשות בקודקוד אחד. איזו צורה זו יוצרת?&rlm;",
        solution_steps: [
            { verbal_explanation: "הגדרה של פירמידה: גוף בעל בסיס כלשהו (מצולע), ומעטפת המורכבת ממשולשים.&rlm;", math_expression: "" },
            { verbal_explanation: "המשולשים תמיד נפגשים למעלה בקודקוד משותף. לכן הפאות הצדדיות הן תמיד משולשים.&rlm;", math_expression: "" }
        ],
        final_answer: "משולשים"
    },
    {
        topic: "geometry",
        subTopic: "הכרת הגופים",
        question_text: "במה שונה תיבה מקובייה?&rlm;",
        options: [
            "בתיבה הפאות יכולות להיות מלבנים שאינם ריבועים",
            "לקובייה יש יותר קודקודים",
            "בתיבה יש פחות מ-6 פאות",
            "לתיבה יש בסיס עגול"
        ],
        correctAnswer: 0,
        hint: "מבחינת מבנה (כמות פאות, קודקודים, מקצועות) הם זהים לחלוטין. ההבדל הוא בצורת הפאות עצמן.&rlm;",
        solution_steps: [
            { verbal_explanation: "קובייה היא למעשה סוג מיוחד של תיבה שבה *כל* הפאות הן ריבועים זהים.&rlm;", math_expression: "" },
            { verbal_explanation: "בתיבה רגילה, הפאות הן מלבנים (חלקם יכולים להיות ריבועים, אבל לא כולם חייבים להיות זהים).&rlm;", math_expression: "" }
        ],
        final_answer: "בתיבה הפאות יכולות להיות מלבנים שאינם ריבועים"
    },
    {
        topic: "geometry",
        subTopic: "הכרת הגופים",
        question_text: "איזה גוף ייווצר אם נערים הרבה עיגולים זהים אחד על גבי השני בגובה?&rlm;",
        options: [
            "גליל",
            "כדור",
            "חרוט",
            "תיבה"
        ],
        correctAnswer: 0,
        hint: "אם נשים הרבה מטבעות זהים (עיגולים) אחד על השני בערימה ישרה, איזו צורה תלת-ממדית נקבל?&rlm;",
        solution_steps: [
            { verbal_explanation: "ערימה של עיגולים שווים יוצרת גוף שהבסיסים שלו הם עיגולים והעובי שלו שווה לאורך כל הגובה.&rlm;", math_expression: "" },
            { verbal_explanation: "גוף זה נקרא גליל (כמו עמוד עגול או צינור ישר).&rlm;", math_expression: "" }
        ],
        final_answer: "גליל"
    },

    // ==========================================
    // תת נושא 3: חישובי נפחים (10 שאלות)
    // ==========================================
    {
        topic: "geometry",
        subTopic: "חישובי נפחים",
        question_text: "נתונה תיבה שאורכה 5 ס\"מ, רוחבה 4 ס\"מ וגובהה 3 ס\"מ.<br>מהו נפח התיבה?&rlm;<div style=\"text-align:center; margin:15px 0;\"><svg viewBox=\"0 0 200 150\" width=\"100%\" height=\"120\" style=\"max-width:200px;\"><polygon points=\"40,80 120,80 120,130 40,130\" fill=\"#dcfce3\" stroke=\"#16a34a\" stroke-width=\"2\"/><polygon points=\"40,80 70,50 150,50 120,80\" fill=\"#bbf7d0\" stroke=\"#16a34a\" stroke-width=\"2\"/><polygon points=\"120,80 150,50 150,100 120,130\" fill=\"#86efac\" stroke=\"#16a34a\" stroke-width=\"2\"/><text x=\"80\" y=\"145\" font-family=\"Arial\" font-size=\"14\" fill=\"#0f172a\">אורך=5</text><text x=\"165\" y=\"80\" font-family=\"Arial\" font-size=\"14\" fill=\"#0f172a\">גובה=3</text></svg></div>",
        options: [
            "60 סמ\"ק",
            "12 סמ\"ק",
            "20 סמ\"ק",
            "120 סמ\"ק"
        ],
        correctAnswer: 0,
        hint: "נפח תיבה מחשבים על ידי הכפלת כל שלושת הממדים שלה: אורך &times; רוחב &times; גובה.&rlm;",
        solution_steps: [
            { verbal_explanation: "הנוסחה לחישוב נפח תיבה (V) היא הכפלת אורך, רוחב וגובה.&rlm;", math_expression: "V = a * b * h" },
            { verbal_explanation: "נציב את הנתונים במשוואה ונכפיל.&rlm;", math_expression: "5 * 4 * 3 = 60" }
        ],
        final_answer: "60 סמ\"ק"
    },
    {
        topic: "geometry",
        subTopic: "חישובי נפחים",
        question_text: "קובייה היא תיבה שכל צלעותיה שוות. נתונה קובייה שאורך המקצוע שלה (הצלע) הוא 4 ס\"מ.<br>מהו נפח הקובייה?&rlm;",
        options: [
            "64 סמ\"ק",
            "16 סמ\"ק",
            "12 סמ\"ק",
            "32 סמ\"ק"
        ],
        correctAnswer: 0,
        hint: "בקובייה, האורך, הרוחב והגובה כולם שווים ל-4. הכפילו את המספר 4 בעצמו 3 פעמים.&rlm;",
        solution_steps: [
            { verbal_explanation: "הנפח שווה לאורך &times; רוחב &times; גובה. בקובייה כולם שווים.&rlm;", math_expression: "V = 4 * 4 * 4" },
            { verbal_explanation: "נכפול קודם 4 ב-4, ולאחר מכן את התוצאה שוב ב-4.&rlm;", math_expression: "16 * 4 = 64" }
        ],
        final_answer: "64 סמ\"ק"
    },
    {
        topic: "geometry",
        subTopic: "חישובי נפחים",
        question_text: "נפחה של קובייה הוא 27 סמ\"ק.<br>האם אורך המקצוע (הצלע) שלה הוא 3 ס\"מ?&rlm;",
        options: [
            "כן",
            "לא",
            "אי אפשר לדעת",
            "רק אם היא חלולה"
        ],
        correctAnswer: 0,
        hint: "כדי לבדוק, נסו לחשב את הנפח של קובייה שאורך הצלע שלה הוא 3 ס\"מ. האם יוצא 27?&rlm;",
        solution_steps: [
            { verbal_explanation: "נפח קובייה מחושב כצלע &times; צלע &times; צלע. נבדוק את המספר 3.&rlm;", math_expression: "3 * 3 * 3" },
            { verbal_explanation: "3 כפול 3 הם 9. ו-9 כפול 3 הם אכן 27. לכן התשובה היא כן.&rlm;", math_expression: "9 * 3 = 27" }
        ],
        final_answer: "כן"
    },
    {
        topic: "geometry",
        subTopic: "חישובי נפחים",
        question_text: "שטח הבסיס של תיבה הוא 20 סמ\"ר. גובה התיבה הוא 6 ס\"מ.<br>מהו נפח התיבה?&rlm;",
        options: [
            "120 סמ\"ק",
            "26 סמ\"ק",
            "120 סמ\"ר",
            "200 סמ\"ק"
        ],
        correctAnswer: 0,
        hint: "הנוסחה המקוצרת לנפח היא: שטח הבסיס כפול הגובה.&rlm;",
        solution_steps: [
            { verbal_explanation: "במקום להכפיל אורך ברוחב, כבר נתון לנו 'שטח הבסיס' (שהוא התוצאה של האורך כפול הרוחב).&rlm;", math_expression: "S = 20" },
            { verbal_explanation: "לכן, פשוט נכפיל את שטח הבסיס (20) בגובה התיבה (6).&rlm;", math_expression: "20 * 6 = 120" }
        ],
        final_answer: "120 סמ\"ק"
    },
    {
        topic: "geometry",
        subTopic: "חישובי נפחים",
        question_text: "נפחה של תיבה הוא 100 סמ\"ק. אורכה 5 ס\"מ ורוחבה 5 ס\"מ.<br>מהו גובה התיבה?&rlm;",
        options: [
            "4 ס\"מ",
            "20 ס\"מ",
            "5 ס\"מ",
            "10 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "חשבו קודם את שטח הבסיס (5 כפול 5). מצאו איזה מספר (הגובה) כפול שטח הבסיס ייתן לנו 100.&rlm;",
        solution_steps: [
            { verbal_explanation: "נמצא את שטח הבסיס של התיבה על ידי הכפלת האורך ברוחב.&rlm;", math_expression: "5 * 5 = 25" },
            { verbal_explanation: "כעת עלינו למצוא מספר שכאשר נכפיל אותו ב-25 נקבל 100 (הנפח). נבצע חילוק.&rlm;", math_expression: "100 / 25 = 4" }
        ],
        final_answer: "4 ס\"מ"
    },
    {
        topic: "geometry",
        subTopic: "חישובי נפחים",
        question_text: "ממלאים קופסת פלסטיק מלבנית (תיבה) במים.<br>הקופסה באורך 10 ס\"מ, רוחב 10 ס\"מ וגובה 10 ס\"מ.<br>כמה סמ\"ק של מים ייכנסו בקופסה המלאה?&rlm;",
        options: [
            "1000 סמ\"ק",
            "300 סמ\"ק",
            "100 סמ\"ק",
            "10000 סמ\"ק"
        ],
        correctAnswer: 0,
        hint: "הקופסה היא בעצם קובייה. חשבו את הנפח שלה (10 כפול 10 כפול 10). נפח המים שווה בדיוק לנפח הפנימי של הקופסה.&rlm;",
        solution_steps: [
            { verbal_explanation: "כדי לגלות כמה מים נכנסים לקופסה, עלינו לחשב את הנפח הפנימי שלה.&rlm;", math_expression: "V = 10 * 10 * 10" },
            { verbal_explanation: "10 כפול 10 הם 100. 100 כפול 10 הם 1000.&rlm;", math_expression: "100 * 10 = 1000" }
        ],
        final_answer: "1000 סמ\"ק"
    },
    {
        topic: "geometry",
        subTopic: "חישובי נפחים",
        question_text: "בנו מבנה שמורכב מ-8 קוביות קטנות זהות. נפח של כל קובייה קטנה הוא 2 סמ\"ק.<br>מהו הנפח הכולל של המבנה כולו?&rlm;<div style=\"text-align:center; margin:15px 0;\"><svg viewBox=\"0 0 150 150\" width=\"100%\" height=\"120\" style=\"max-width:150px;\"><rect x=\"40\" y=\"80\" width=\"30\" height=\"30\" fill=\"#fcd34d\" stroke=\"#d97706\"/><rect x=\"70\" y=\"80\" width=\"30\" height=\"30\" fill=\"#fcd34d\" stroke=\"#d97706\"/><rect x=\"55\" y=\"50\" width=\"30\" height=\"30\" fill=\"#fcd34d\" stroke=\"#d97706\"/></svg></div>",
        options: [
            "16 סמ\"ק",
            "10 סמ\"ק",
            "64 סמ\"ק",
            "8 סמ\"ק"
        ],
        correctAnswer: 0,
        hint: "הנפח הכולל של צורה מורכבת שווה לסכום הנפחים של החלקים שלה. הכפילו את נפח הקובייה הקטנה בכמות הקוביות.&rlm;",
        solution_steps: [
            { verbal_explanation: "מאחר שהמבנה מורכב מ-8 קוביות זהות, הנפח שלו הוא פשוט נפח קובייה אחת כפול 8.&rlm;", math_expression: "8 * 2 = 16" }
        ],
        final_answer: "16 סמ\"ק"
    },
    {
        topic: "geometry",
        subTopic: "חישובי נפחים",
        question_text: "תיבה א' היא בעלת נפח של 40 סמ\"ק. תיבה ב' רחבה פי 2, ארוכה פי 2, אבל הגובה שלה זהה לתיבה א'.<br>מה יקרה לנפח של תיבה ב' לעומת תיבה א'?&rlm;",
        options: [
            "יהיה גדול פי 4",
            "יהיה גדול פי 2",
            "יהיה גדול פי 8",
            "יישאר אותו הדבר"
        ],
        correctAnswer: 0,
        hint: "אם מכפילים את האורך פי 2, הנפח מוכפל פי 2. אם בנוסף מכפילים גם את הרוחב פי 2, הנפח מוכפל שוב פי 2 (בסך הכל פי 4).&rlm;",
        solution_steps: [
            { verbal_explanation: "נפח הוא מכפלה של 3 ממדים. הגדלת האורך פי 2 מכפילה את הנפח ב-2.&rlm;", math_expression: "V * 2" },
            { verbal_explanation: "הגדלת הרוחב פי 2, מכפילה את הנפח שוב ב-2. 2 כפול 2 שווה 4, לכן הנפח גדל פי 4.&rlm;", math_expression: "2 * 2 = 4" }
        ],
        final_answer: "יהיה גדול פי 4"
    },
    {
        topic: "geometry",
        subTopic: "חישובי נפחים",
        question_text: "בריכת שחייה בצורת תיבה התמלאה מים רק עד חצי הגובה שלה.<br>אם מידות הבריכה הן: אורך 10 מטרים, רוחב 4 מטרים וגובה 2 מטרים, כמה מים יש בה כעת? (במטר מעוקב - מ\"ק)&rlm;",
        options: [
            "40 מ\"ק",
            "80 מ\"ק",
            "20 מ\"ק",
            "16 מ\"ק"
        ],
        correctAnswer: 0,
        hint: "חשבו את הנפח של הבריכה כשהיא מלאה לחלוטין. לאחר מכן, מכיוון שהיא מלאה רק עד החצי, חלקו את התוצאה ב-2.&rlm;",
        solution_steps: [
            { verbal_explanation: "נחשב את הנפח הכולל של הבריכה כשהיא מלאה לגמרי.&rlm;", math_expression: "10 * 4 * 2 = 80" },
            { verbal_explanation: "הבריכה מלאה רק עד החצי. חצי מ-80 הם 40.&rlm;", math_expression: "80 / 2 = 40" }
        ],
        final_answer: "40 מ\"ק"
    },
    {
        topic: "geometry",
        subTopic: "חישובי נפחים",
        question_text: "אם ניקח קובייה של 2 ס\"מ, ונכפיל את *כל* הממדים שלה פי 2 (צלע של 4 ס\"מ).<br>האם הנפח שלה פשוט יוכפל פי 2?&rlm;",
        options: [
            "לא, הוא יגדל פי 8",
            "כן, הוא יוכפל פי 2",
            "לא, הוא יגדל פי 4",
            "לא, הוא יגדל פי 6"
        ],
        correctAnswer: 0,
        hint: "חשבו את הנפח של קובייה 2x2x2, ואת הנפח של קובייה 4x4x4. בדקו פי כמה הנפח גדל.&rlm;",
        solution_steps: [
            { verbal_explanation: "נפח הקובייה המקורית (צלע 2) הוא 8 סמ\"ק.&rlm;", math_expression: "2 * 2 * 2 = 8" },
            { verbal_explanation: "נפח הקובייה המוגדלת (צלע 4) הוא 64 סמ\"ק.&rlm;", math_expression: "4 * 4 * 4 = 64" },
            { verbal_explanation: "נבדוק פי כמה 64 גדול מ-8 על ידי חילוק. התשובה היא פי 8.&rlm;", math_expression: "64 / 8 = 8" }
        ],
        final_answer: "לא, הוא יגדל פי 8"
    },

    // ==========================================
    // תת נושא 4: מעגל ועיגול (10 שאלות)
    // ==========================================
    {
        topic: "geometry",
        subTopic: "מעגל ועיגול",
        question_text: "קוטר המעגל הוא 10 ס\"מ.<br>מהו אורך הרדיוס (מחוג) של המעגל?&rlm;<div style=\"text-align:center; margin:15px 0;\"><svg viewBox=\"0 0 100 100\" width=\"100%\" height=\"100\" style=\"max-width:100px;\"><circle cx=\"50\" cy=\"50\" r=\"45\" fill=\"#fce7f3\" stroke=\"#db2777\" stroke-width=\"2\"/><line x1=\"5\" y1=\"50\" x2=\"95\" y2=\"50\" stroke=\"#db2777\" stroke-width=\"2\"/><circle cx=\"50\" cy=\"50\" r=\"3\" fill=\"#9d174d\"/></svg></div>",
        options: [
            "5 ס\"מ",
            "20 ס\"מ",
            "10 ס\"מ",
            "31.4 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "הקוטר הוא הקו שחוצה את המעגל מצד לצד ועובר במרכז. הרדיוס הוא המרחק מהמרכז רק עד לקצה (חצי קוטר).&rlm;",
        solution_steps: [
            { verbal_explanation: "רדיוס תמיד שווה למחצית מן הקוטר. לכן נחלק את אורך הקוטר ב-2.&rlm;", math_expression: "10 / 2 = 5" }
        ],
        final_answer: "5 ס\"מ"
    },
    {
        topic: "geometry",
        subTopic: "מעגל ועיגול",
        question_text: "רדיוס המעגל הוא 6 ס\"מ.<br>מהו אורך הקוטר?&rlm;",
        options: [
            "12 ס\"מ",
            "3 ס\"מ",
            "6 ס\"מ",
            "36 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "הקוטר מורכב משני רדיוסים המחוברים יחד ויוצרים קו ישר.&rlm;",
        solution_steps: [
            { verbal_explanation: "קוטר שווה לרדיוס כפול 2.&rlm;", math_expression: "6 * 2 = 12" }
        ],
        final_answer: "12 ס\"מ"
    },
    {
        topic: "geometry",
        subTopic: "מעגל ועיגול",
        question_text: "הנוסחה לחישוב היקף מעגל היא הקוטר כפול פאי (בערך 3.14).<br>אם קוטר המעגל הוא 10 ס\"מ, מהו היקף המעגל (בקירוב)?&rlm;",
        options: [
            "31.4 ס\"מ",
            "3.14 ס\"מ",
            "314 ס\"מ",
            "15.7 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "הכפילו את הקוטר (10) ב-3.14. כפל ב-10 פשוט מזיז את הנקודה העשרונית מקום אחד ימינה.&rlm;",
        solution_steps: [
            { verbal_explanation: "היקף מעגל שווה לקוטר כפול המספר פאי (Pi).&rlm;", math_expression: "P = 10 * 3.14" },
            { verbal_explanation: "כאשר מכפילים ב-10, הנקודה העשרונית זזה צעד אחד ימינה.&rlm;", math_expression: "10 * 3.14 = 31.4" }
        ],
        final_answer: "31.4 ס\"מ"
    },
    {
        topic: "geometry",
        subTopic: "מעגל ועיגול",
        question_text: "רדיוס של מעגל הוא 5 ס\"מ. חשבו את היקף המעגל (השתמשו בפאי = 3.14).&rlm;",
        options: [
            "31.4 ס\"מ",
            "15.7 ס\"מ",
            "78.5 ס\"מ",
            "62.8 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "ראשית, מצאו את הקוטר (פעמיים הרדיוס). לאחר מכן הכפילו ב-3.14.&rlm;",
        solution_steps: [
            { verbal_explanation: "היקף מחשבים בעזרת הקוטר. מכיוון שהרדיוס הוא 5, הקוטר כפול ממנו.&rlm;", math_expression: "5 * 2 = 10" },
            { verbal_explanation: "נכפיל את הקוטר בפאי כדי לקבל את ההיקף.&rlm;", math_expression: "10 * 3.14 = 31.4" }
        ],
        final_answer: "31.4 ס\"מ"
    },
    {
        topic: "geometry",
        subTopic: "מעגל ועיגול",
        question_text: "הנוסחה לחישוב שטח עיגול היא: רדיוס כפול רדיוס כפול פאי.<br>מהו שטח עיגול שרדיוסו 10 ס\"מ? (השתמשו בפאי = 3.14)&rlm;",
        options: [
            "314 סמ\"ר",
            "31.4 סמ\"ר",
            "62.8 סמ\"ר",
            "100 סמ\"ר"
        ],
        correctAnswer: 0,
        hint: "הכפילו את הרדיוס בעצמו (10 כפול 10). את התוצאה הכפילו ב-3.14.&rlm;",
        solution_steps: [
            { verbal_explanation: "תחילה נחשב את הרדיוס כפול עצמו (רדיוס בריבוע).&rlm;", math_expression: "10 * 10 = 100" },
            { verbal_explanation: "כעת נכפיל את התוצאה בפאי. כפל ב-100 מזיז את הנקודה העשרונית שני צעדים ימינה.&rlm;", math_expression: "100 * 3.14 = 314" }
        ],
        final_answer: "314 סמ\"ר"
    },
    {
        topic: "geometry",
        subTopic: "מעגל ועיגול",
        question_text: "אומרים שמסלול של גלגל אופניים בסיבוב אחד שלם, שווה בדיוק להיקף הגלגל.<br>אם היקף הגלגל הוא 2 מטרים, כמה מטרים יעברו האופניים לאחר 5 סיבובים שלמים של הגלגל?&rlm;<div style=\"text-align:center; margin:15px 0;\"><svg viewBox=\"0 0 100 100\" width=\"100%\" height=\"100\" style=\"max-width:100px;\"><circle cx=\"50\" cy=\"50\" r=\"40\" fill=\"none\" stroke=\"#334155\" stroke-width=\"4\" stroke-dasharray=\"10,5\"/><circle cx=\"50\" cy=\"50\" r=\"4\" fill=\"#334155\"/></svg></div>",
        options: [
            "10 מטרים",
            "5 מטרים",
            "2 מטרים",
            "7 מטרים"
        ],
        correctAnswer: 0,
        hint: "סיבוב אחד = 2 מטרים. 5 סיבובים = 5 פעמים 2 מטרים.&rlm;",
        solution_steps: [
            { verbal_explanation: "המרחק שהגלגל עובר בסיבוב אחד הוא ההיקף שלו. נכפיל את ההיקף במספר הסיבובים.&rlm;", math_expression: "2 * 5 = 10" }
        ],
        final_answer: "10 מטרים"
    },
    {
        topic: "geometry",
        subTopic: "מעגל ועיגול",
        question_text: "קוטר מעגל א' הוא 4 ס\"מ. קוטר מעגל ב' הוא 8 ס\"מ (גדול פי 2).<br>האם היקף מעגל ב' יהיה בדיוק כפול מהיקף מעגל א'?&rlm;",
        options: [
            "כן",
            "לא, הוא יהיה גדול פי 4",
            "לא, הם יהיו שווים",
            "אי אפשר לדעת"
        ],
        correctAnswer: 0,
        hint: "היקף תלוי רק בקוטר (קוטר כפול פאי). אם מכפילים את הקוטר פי מספר מסוים, גם ההיקף יוכפל באותו המספר.&rlm;",
        solution_steps: [
            { verbal_explanation: "הנוסחה להיקף היא קוטר כפול פאי. כלומר ההיקף גדל באותו יחס שבו גדל הקוטר.&rlm;", math_expression: "" },
            { verbal_explanation: "לכן, אם הקוטר גדל פי 2, גם ההיקף יגדל בדיוק פי 2. התשובה היא כן.&rlm;", math_expression: "" }
        ],
        final_answer: "כן"
    },
    {
        topic: "geometry",
        subTopic: "מעגל ועיגול",
        question_text: "איזה קו במעגל אינו עובר דרך מרכז המעגל?&rlm;",
        options: [
            "מיתר (שאינו קוטר)",
            "קוטר",
            "רדיוס",
            "כולם עוברים במרכז"
        ],
        correctAnswer: 0,
        hint: "מיתר הוא קו שמחבר שתי נקודות כלשהן על המעגל. רק מיתר אחד מיוחד (הקוטר) חייב לעבור במרכז.&rlm;",
        solution_steps: [
            { verbal_explanation: "רדיוס יוצא מהמרכז. קוטר חייב לעבור במרכז.&rlm;", math_expression: "" },
            { verbal_explanation: "מיתר רגיל יכול לחבר כל שתי נקודות על ההיקף ואינו חייב לעבור דרך המרכז.&rlm;", math_expression: "" }
        ],
        final_answer: "מיתר (שאינו קוטר)"
    },
    {
        topic: "geometry",
        subTopic: "מעגל ועיגול",
        question_text: "חתכו פיצה עגולה בדיוק לשניים דרך המרכז. הקו שחתך את הפיצה הוא הוקטור הארוך ביותר שאפשר לצייר בתוך העיגול.<br>איך נקרא הקו הזה בגיאומטריה?&rlm;",
        options: [
            "קוטר",
            "רדיוס",
            "היקף",
            "קשת"
        ],
        correctAnswer: 0,
        hint: "זהו הקו שמחבר שתי נקודות על המעגל ועובר בדיוק דרך נקודת האמצע (המרכז).&rlm;",
        solution_steps: [
            { verbal_explanation: "קו שמחצה מעגל לשני חצאים שווים ועובר דרך המרכז מוגדר כקוטר.&rlm;", math_expression: "" }
        ],
        final_answer: "קוטר"
    },
    {
        topic: "geometry",
        subTopic: "מעגל ועיגול",
        question_text: "היקף של מעגל שלם הוא 20 ס\"מ. חתכו את המעגל בדיוק לחצי, כך שקיבלנו 'חצי קשת' (ללא הקו הישר של הקוטר).<br>מהו אורך 'חצי הקשת' הזו?&rlm;",
        options: [
            "10 ס\"מ",
            "5 ס\"מ",
            "20 ס\"מ",
            "40 ס\"מ"
        ],
        correctAnswer: 0,
        hint: "אם ההיקף השלם הוא 20 ס\"מ, חצי מההיקף המעוגל יהיה פשוט חצי מהמספר הזה.&rlm;",
        solution_steps: [
            { verbal_explanation: "אורך של קשת המהווה חצי מעגל הוא בדיוק מחצית מההיקף השלם.&rlm;", math_expression: "20 / 2 = 10" }
        ],
        final_answer: "10 ס\"מ"
    }

];