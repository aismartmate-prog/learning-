const questionsDB = [
    // ==========================================
    // תת נושא 1: סדרה חשבונית (10 שאלות)
    // ==========================================

    // שאלה מספר 1
    {
        topic: "sequences_372",
        subTopic: "סדרה חשבונית",
        question_text: "בסדרה חשבונית האיבר הראשון הוא 5 והפרש הסדרה הוא 3. מהו האיבר העשירי בסדרה?&rlm;",
        options: ["32", "35", "30", "27"],
        correctAnswer: 0,
        hint: "השתמשו בנוסחת האיבר הכללי של סדרה חשבונית: האיבר הראשון ועוד (n פחות 1) כפול ההפרש.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חילוץ הנתונים מהשאלה להצבה בנוסחה.", math_expression: "a_{1} = 5 \\quad , \\quad d = 3 \\quad , \\quad n = 10" },
            { verbal_explanation: "שלב 2: כתיבת נוסחת האיבר הכללי.", math_expression: "a_{n} = a_{1} + (n - 1) \\times d" },
            { verbal_explanation: "שלב 3: הצבת הנתונים בנוסחה למציאת האיבר העשירי.", math_expression: "a_{10} = 5 + (10 - 1) \\times 3" },
            { verbal_explanation: "שלב 4: ביצוע החיסור בתוך הסוגריים.", math_expression: "a_{10} = 5 + 9 \\times 3" },
            { verbal_explanation: "שלב 5: פעולת כפל לפני חיבור.", math_expression: "a_{10} = 5 + 27" },
            { verbal_explanation: "שלב 6: סכימה וקבלת התוצאה הסופית.", math_expression: "a_{10} = 32" }
        ],
        final_answer: "32"
    },

    // שאלה מספר 2
    {
        topic: "sequences_372",
        subTopic: "סדרה חשבונית",
        question_text: "בסדרה חשבונית, האיבר הרביעי הוא 12 והאיבר השישי הוא 20. מהו הפרש הסדרה?&rlm;",
        options: ["4", "2", "8", "6"],
        correctAnswer: 0,
        hint: "ההפרש בין האיבר השישי לרביעי מורכב מפעמיים הפרש הסדרה (2d). בנו משוואה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצגת הקשר בין שני האיברים הנתונים באמצעות הפרש הסדרה.", math_expression: "a_{6} = a_{4} + 2d" },
            { verbal_explanation: "שלב 2: הצבת הערכים המספריים לתוך המשוואה.", math_expression: "20 = 12 + 2d" },
            { verbal_explanation: "שלב 3: העברת אגף בחיסור לבידוד הנעלם.", math_expression: "2d = 20 - 12" },
            { verbal_explanation: "שלב 4: ביצוע החיסור.", math_expression: "2d = 8" },
            { verbal_explanation: "שלב 5: חלוקה בשתיים לקבלת ההפרש.", math_expression: "d = 4" }
        ],
        final_answer: "4"
    },

    // שאלה מספר 3
    {
        topic: "sequences_372",
        subTopic: "סדרה חשבונית",
        question_text: "האיבר הראשון בסדרה חשבונית הוא 10, וההפרש הוא -2 (מינוס שתיים). איזה מקום בסדרה תופס האיבר שערכו -14?&rlm;",
        options: ["13", "12", "14", "11"],
        correctAnswer: 0,
        hint: "הפעם הנעלם הוא המיקום (n). הציבו את כל שאר הנתונים בנוסחת האיבר הכללי ופתרו משוואה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: איסוף הנתונים להצבה.", math_expression: "a_{1} = 10 \\quad , \\quad d = -2 \\quad , \\quad a_{n} = -14" },
            { verbal_explanation: "שלב 2: הצבה בנוסחת האיבר הכללי.", math_expression: "-14 = 10 + (n - 1) \\times (-2)" },
            { verbal_explanation: "שלב 3: העברת האיבר הראשון לאגף השני בחיסור.", math_expression: "-24 = (n - 1) \\times (-2)" },
            { verbal_explanation: "שלב 4: חלוקת שני האגפים במינוס שתיים.", math_expression: "12 = n - 1" },
            { verbal_explanation: "שלב 5: העברת המינוס אחת בפלוס לבידוד המיקום.", math_expression: "n = 13" }
        ],
        final_answer: "13"
    },

    // שאלה מספר 4
    {
        topic: "sequences_372",
        subTopic: "סדרה חשבונית",
        question_text: "בסדרה חשבונית שהפרשה 3, האיבר ה-15 הוא 50. מהו האיבר הראשון בסדרה?&rlm;",
        options: ["8", "5", "11", "2"],
        correctAnswer: 0,
        hint: "הציבו את האיבר ה-15 ואת ההפרש בנוסחת האיבר הכללי, כאשר האיבר הראשון הוא הנעלם.",
        solution_steps: [
            { verbal_explanation: "שלב 1: רישום הנתונים למשוואה.", math_expression: "a_{15} = 50 \\quad , \\quad d = 3 \\quad , \\quad n = 15" },
            { verbal_explanation: "שלב 2: בניית המשוואה כאשר האיבר הראשון הוא המשתנה.", math_expression: "50 = a_{1} + (15 - 1) \\times 3" },
            { verbal_explanation: "שלב 3: חיסור בתוך הסוגריים.", math_expression: "50 = a_{1} + 14 \\times 3" },
            { verbal_explanation: "שלב 4: ביצוע פעולת הכפל.", math_expression: "50 = a_{1} + 42" },
            { verbal_explanation: "שלב 5: בידוד האיבר הראשון על ידי חיסור.", math_expression: "a_{1} = 50 - 42 = 8" }
        ],
        final_answer: "8"
    },

    // שאלה מספר 5
    {
        topic: "sequences_372",
        subTopic: "סדרה חשבונית",
        question_text: "שלושת האיברים הראשונים בסדרה חשבונית הם: \\( x \\) , \\( x+4 \\) , \\( 3x \\). מצאו את הערך של x.&rlm;",
        options: ["4", "2", "6", "8"],
        correctAnswer: 0,
        hint: "בסדרה חשבונית, האיבר האמצעי מבין שלושה הוא הממוצע החשבוני של שני האיברים שלצידיו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת תכונת הממוצע החשבוני בין שלושה איברים עוקבים.", math_expression: "x + 4 = \\dfrac{x + 3x}{2}" },
            { verbal_explanation: "שלב 2: כינוס איברים במונה של השבר.", math_expression: "x + 4 = \\dfrac{4x}{2}" },
            { verbal_explanation: "שלב 3: חלוקת המונה במכנה.", math_expression: "x + 4 = 2x" },
            { verbal_explanation: "שלב 4: העברת איקס ימינה לבידוד הנעלם.", math_expression: "x = 4" },
            { verbal_explanation: "שלב 5: התוצאה המדויקת למשתנה.", math_expression: "4" }
        ],
        final_answer: "4"
    },

    // שאלה מספר 6
    {
        topic: "sequences_372",
        subTopic: "סדרה חשבונית",
        question_text: "בסדרה חשבונית נתון: \\( a_{3} = 10 \\) ו- \\( a_{8} = 30 \\). מצאו את האיבר הראשון של הסדרה.&rlm;",
        options: ["2", "4", "0", "6"],
        correctAnswer: 0,
        hint: "ההפרש בין האיבר השמיני לשלישי הוא 5 פעמים הפרש הסדרה (d). מצאו את d, ואז חזרו אחורה למצוא את האיבר הראשון.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת הקשר בין שני האיברים הנתונים למציאת ההפרש.", math_expression: "a_{8} - a_{3} = 5d" },
            { verbal_explanation: "שלב 2: הצבת הערכים ופתרון עבור ההפרש.", math_expression: "30 - 10 = 5d \\Rightarrow 20 = 5d \\Rightarrow d = 4" },
            { verbal_explanation: "שלב 3: כתיבת משוואת האיבר השלישי כדי לחלץ את האיבר הראשון.", math_expression: "a_{3} = a_{1} + 2d" },
            { verbal_explanation: "שלב 4: הצבת הערכים שכבר מצאנו.", math_expression: "10 = a_{1} + 2 \\times 4" },
            { verbal_explanation: "שלב 5: ביצוע הכפל והעברת אגף לחילוץ האיבר הראשון.", math_expression: "10 = a_{1} + 8 \\Rightarrow a_{1} = 2" }
        ],
        final_answer: "2"
    },

    // שאלה מספר 7
    {
        topic: "sequences_372",
        subTopic: "סדרה חשבונית",
        question_text: "האיבר הכללי של סדרה נתון על ידי הנוסחה \\( a_{n} = 3n - 1 \\). מהו ערכו של האיבר החמישי בסדרה זו?&rlm;",
        options: ["14", "15", "12", "17"],
        correctAnswer: 0,
        hint: "הנוסחה כבר מסודרת עבור כל מקום. פשוט הציבו 5 במקום n.",
        solution_steps: [
            { verbal_explanation: "שלב 1: העתקת הנוסחה הנתונה למציאת איבר כלשהו בסדרה.", math_expression: "a_{n} = 3n - 1" },
            { verbal_explanation: "שלב 2: הצבת המיקום הנדרש (חמש) במקום המשתנה.", math_expression: "a_{5} = 3 \\times 5 - 1" },
            { verbal_explanation: "שלב 3: ביצוע פעולת הכפל.", math_expression: "a_{5} = 15 - 1" },
            { verbal_explanation: "שלב 4: פעולת החיסור מניבה את ערך האיבר.", math_expression: "a_{5} = 14" },
            { verbal_explanation: "שלב 5: התשובה הישירה במערכת.", math_expression: "14" }
        ],
        final_answer: "14"
    },

    // שאלה מספר 8
    {
        topic: "sequences_372",
        subTopic: "סדרה חשבונית",
        question_text: "משכורתו ההתחלתית של פועל בחודש הראשון הייתה 6000 שקלים. בכל חודש נוסף משכורתו גדלה ב-150 שקלים. מה תהיה משכורתו בחודש ה-12 לעבודתו?&rlm;",
        options: ["7650", "7800", "7500", "8000"],
        correctAnswer: 0,
        hint: "זוהי סדרה חשבונית שבה האיבר הראשון הוא 6000 וההפרש הוא 150. חשבו את האיבר ה-12.",
        solution_steps: [
            { verbal_explanation: "שלב 1: המרת הבעיה המילולית לנתונים של סדרה חשבונית.", math_expression: "a_{1} = 6000 \\quad , \\quad d = 150 \\quad , \\quad n = 12" },
            { verbal_explanation: "שלב 2: הצבה בנוסחת האיבר הכללי.", math_expression: "a_{12} = 6000 + (12 - 1) \\times 150" },
            { verbal_explanation: "שלב 3: חישוב הפער במיקומים.", math_expression: "a_{12} = 6000 + 11 \\times 150" },
            { verbal_explanation: "שלב 4: ביצוע פעולת הכפל המייצגת את תוספת השכר הכוללת.", math_expression: "a_{12} = 6000 + 1650" },
            { verbal_explanation: "שלב 5: חיבור לבסיס להשגת השכר בחודש השנים עשר.", math_expression: "a_{12} = 7650" }
        ],
        final_answer: "7650"
    },

    // שאלה מספר 9
    {
        topic: "sequences_372",
        subTopic: "סדרה חשבונית",
        question_text: "נתונה הסדרה החשבונית: 2, 6, 10, ... האם המספר 30 נמצא בסדרה זו? אם כן, באיזה מקום?&rlm;",
        options: ["כן, במקום ה-8", "כן, במקום ה-7", "כן, במקום ה-9", "המספר אינו בסדרה"],
        correctAnswer: 0,
        hint: "מצאו את ההפרש. הציבו את 30 כאיבר כללי n ופתרו את המשוואה עבור n. אם n יוצא מספר שלם, הוא בסדרה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי האיבר הראשון וההפרש מתוך תחילת הסדרה.", math_expression: "a_{1} = 2 \\quad , \\quad d = 4" },
            { verbal_explanation: "שלב 2: בניית משוואה שבה שלושים הוא האיבר הנבדק והמיקום הוא נעלם.", math_expression: "30 = 2 + (n - 1) \\times 4" },
            { verbal_explanation: "שלב 3: העברת שתיים באגפים.", math_expression: "28 = 4n - 4" },
            { verbal_explanation: "שלב 4: הוספת ארבע באגפים.", math_expression: "32 = 4n" },
            { verbal_explanation: "שלב 5: חלוקה בארבע למציאת המיקום. מכיוון שהתוצאה שלמה, האיבר קיים.", math_expression: "n = 8" }
        ],
        final_answer: "כן, במקום ה-8"
    },

    // שאלה מספר 10
    {
        topic: "sequences_372",
        subTopic: "סדרה חשבונית",
        question_text: "בסדרה חשבונית יורדת נתון: \\( a_{1} = 20 \\) ו- \\( d = -3 \\). מהו האיבר השלילי הראשון בסדרה?&rlm;",
        options: ["-1", "-2", "-4", "-3"],
        correctAnswer: 0,
        hint: "בנו אי שוויון: נוסחת האיבר הכללי קטנה מאפס. מצאו את ה-n השלם הראשון שמקיים זאת, ואז חשבו את ערך האיבר באותו מקום.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית אי השוויון לאיבר שערכו קטן מאפס.", math_expression: "20 + (n - 1) \\times (-3) < 0" },
            { verbal_explanation: "שלב 2: פתיחת סוגריים עם המינוס.", math_expression: "20 - 3n + 3 < 0" },
            { verbal_explanation: "שלב 3: כינוס איברים והעברת המיקום ימינה.", math_expression: "23 < 3n" },
            { verbal_explanation: "שלב 4: חלוקה בשלוש חושפת את המיקום ההתחלתי. המספר השלם הראשון הגדול מכך הוא שמונה.", math_expression: "n > 7.66 \\Rightarrow n = 8" },
            { verbal_explanation: "שלב 5: חישוב ערך האיבר במקום השמיני שהוא השלילי הראשון.", math_expression: "a_{8} = 20 + 7 \\times (-3) = 20 - 21 = -1" }
        ],
        final_answer: "-1"
    },

    // ==========================================
    // תת נושא 2: סכום סדרה חשבונית (10 שאלות)
    // ==========================================

    // שאלה מספר 11
    {
        topic: "sequences_372",
        subTopic: "סכום סדרה חשבונית",
        question_text: "בסדרה חשבונית ידוע כי \\( a_{1} = 4 \\) ו- \\( d = 5 \\). מהו סכום עשרת האיברים הראשונים בסדרה?&rlm;",
        options: ["265", "250", "285", "300"],
        correctAnswer: 0,
        hint: "השתמשו בנוסחת הסכום הראשונה: n חלקי 2, כפול (פעמיים a1 ועוד n-1 כפול d).",
        solution_steps: [
            { verbal_explanation: "שלב 1: העלאת נוסחת הסכום הרלוונטית כשיש בידינו את ההפרש אך לא את האיבר האחרון.", math_expression: "S_{n} = \\dfrac{n \\times (2a_{1} + (n - 1)d)}{2}" },
            { verbal_explanation: "שלב 2: הצבת הנתונים מהשאלה.", math_expression: "S_{10} = \\dfrac{10 \\times (2 \\times 4 + 9 \\times 5)}{2}" },
            { verbal_explanation: "שלב 3: חישוב המכפלות בתוך הסוגריים הפנימיים.", math_expression: "S_{10} = \\dfrac{10 \\times (8 + 45)}{2}" },
            { verbal_explanation: "שלב 4: חיבור האיברים וחלוקת המקדם החיצוני בשתיים.", math_expression: "S_{10} = 5 \\times 53" },
            { verbal_explanation: "שלב 5: הכפלה לקבלת הסכום הסופי.", math_expression: "S_{10} = 265" }
        ],
        final_answer: "265"
    },

    // שאלה מספר 12
    {
        topic: "sequences_372",
        subTopic: "סכום סדרה חשבונית",
        question_text: "בסדרה חשבונית בעלת 20 איברים, האיבר הראשון הוא 10 והאיבר האחרון (ה-20) הוא 86. מהו סכום כל איברי הסדרה?&rlm;",
        options: ["960", "860", "1000", "920"],
        correctAnswer: 0,
        hint: "השתמשו בנוסחת הסכום השנייה והמהירה יותר: n חלקי 2, כפול (האיבר הראשון ועוד האיבר האחרון).",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצגת נוסחת הסכום כאשר האיבר האחרון נתון.", math_expression: "S_{n} = \\dfrac{n \\times (a_{1} + a_{n})}{2}" },
            { verbal_explanation: "שלב 2: הצבת הנתונים המדויקים לנוסחה.", math_expression: "S_{20} = \\dfrac{20 \\times (10 + 86)}{2}" },
            { verbal_explanation: "שלב 3: חלוקת מספר האיברים בשתיים וביצוע החיבור בסוגריים.", math_expression: "S_{20} = 10 \\times 96" },
            { verbal_explanation: "שלב 4: תוצאת המכפלה היא סכום הסדרה כולה.", math_expression: "S_{20} = 960" },
            { verbal_explanation: "שלב 5: התשובה הישירה במערכת.", math_expression: "960" }
        ],
        final_answer: "960"
    },

    // שאלה מספר 13
    {
        topic: "sequences_372",
        subTopic: "סכום סדרה חשבונית",
        question_text: "בסדרה חשבונית נתון: \\( a_{1} = 5 \\) ו- \\( d = 2 \\). סכום מספר איברים ראשונים הוא 140. כמה איברים חוברו? (מצאו את n).&rlm;",
        options: ["10", "12", "8", "14"],
        correctAnswer: 0,
        hint: "הציבו את כל הנתונים בנוסחת הסכום. תקבלו משוואה ריבועית עבור n, פתרו אותה וקחו את התוצאה החיובית השלמה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים בנוסחת הסכום כאשר המיקום הוא נעלם.", math_expression: "140 = \\dfrac{n \\times (2 \\times 5 + (n - 1) \\times 2)}{2}" },
            { verbal_explanation: "שלב 2: הכפלת המשוואה בשתיים כדי לבטל את המכנה.", math_expression: "280 = n \\times (10 + 2n - 2)" },
            { verbal_explanation: "שלב 3: כינוס איברים בתוך הסוגריים.", math_expression: "280 = n \\times (8 + 2n)" },
            { verbal_explanation: "שלב 4: פתיחת סוגריים וסידור משוואה ריבועית.", math_expression: "2n^{2} + 8n - 280 = 0" },
            { verbal_explanation: "שלב 5: חלוקה בשתיים ופתרון המשוואה הריבועית באמצעות טרינום מניב את הפתרון החיובי.", math_expression: "n^{2} + 4n - 140 = 0 \\Rightarrow n = 10" }
        ],
        final_answer: "10"
    },

    // שאלה מספר 14
    {
        topic: "sequences_372",
        subTopic: "סכום סדרה חשבונית",
        question_text: "חשבו את סכום 50 המספרים הזוגיים החיוביים הראשונים (2, 4, 6...).&rlm;",
        options: ["2550", "2500", "2600", "1275"],
        correctAnswer: 0,
        hint: "זוהי סדרה חשבונית שבה האיבר הראשון הוא 2 וההפרש הוא 2. ישנם 50 איברים. הציבו בנוסחה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: ניסוח הבעיה במונחים של סדרה חשבונית.", math_expression: "a_{1} = 2 \\quad , \\quad d = 2 \\quad , \\quad n = 50" },
            { verbal_explanation: "שלב 2: מציאת האיבר האחרון (המספר הזוגי החמישים) מקלה על חישוב הסכום.", math_expression: "a_{50} = 2 + 49 \\times 2 = 100" },
            { verbal_explanation: "שלב 3: שימוש בנוסחת הסכום עם איבר אחרון ידוע.", math_expression: "S_{50} = \\dfrac{50 \\times (2 + 100)}{2}" },
            { verbal_explanation: "שלב 4: חלוקת מספר האיברים בשתיים וחיבור הסוגריים.", math_expression: "S_{50} = 25 \\times 102" },
            { verbal_explanation: "שלב 5: ביצוע הכפל לקבלת התשובה הסופית.", math_expression: "S_{50} = 2550" }
        ],
        final_answer: "2550"
    },

    // שאלה מספר 15
    {
        topic: "sequences_372",
        subTopic: "סכום סדרה חשבונית",
        question_text: "סכום עשרת האיברים הראשונים בסדרה הוא 200. האיבר הראשון הוא 2. מהו הפרש הסדרה (d)?&rlm;",
        options: ["4", "5", "3", "6"],
        correctAnswer: 0,
        hint: "הציבו הכל בנוסחת הסכום הראשונה, כאשר d הוא הנעלם היחיד, ופתרו משוואה פשוטה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים בנוסחת הסכום.", math_expression: "200 = \\dfrac{10 \\times (2 \\times 2 + 9d)}{2}" },
            { verbal_explanation: "שלב 2: חלוקת המקדם החיצוני במכנה שתיים.", math_expression: "200 = 5 \\times (4 + 9d)" },
            { verbal_explanation: "שלב 3: פתיחת סוגריים (או חלוקת המשוואה בחמש). חלוקה קלה יותר.", math_expression: "40 = 4 + 9d" },
            { verbal_explanation: "שלב 4: בידוד איבר ההפרש.", math_expression: "36 = 9d" },
            { verbal_explanation: "שלב 5: חלוקה בתשע למציאת ההפרש המדויק.", math_expression: "d = 4" }
        ],
        final_answer: "4"
    },

    // שאלה מספר 16
    {
        topic: "sequences_372",
        subTopic: "סכום סדרה חשבונית",
        question_text: "אדם חוסך כסף בקופה לפי הכלל הבא: ביום הראשון הוא שם 10 שקלים, וכל יום לאחר מכן הוא שם 2 שקלים יותר מביום הקודם. כמה כסף סך הכל יצטבר בקופה לאחר 15 ימים?&rlm;",
        options: ["360", "350", "400", "300"],
        correctAnswer: 0,
        hint: "זוהי בעיית סכום של סדרה חשבונית, שבה צריך למצוא את s15.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת משתני הסדרה מהסיפור המילולי.", math_expression: "a_{1} = 10 \\quad , \\quad d = 2 \\quad , \\quad n = 15" },
            { verbal_explanation: "שלב 2: הצבה בנוסחת הסכום לשבועיים בתוספת יום.", math_expression: "S_{15} = \\dfrac{15 \\times (2 \\times 10 + 14 \\times 2)}{2}" },
            { verbal_explanation: "שלב 3: כפל פנימי בסוגריים.", math_expression: "S_{15} = \\dfrac{15 \\times (20 + 28)}{2}" },
            { verbal_explanation: "שלב 4: חיבור וחציון הערך.", math_expression: "S_{15} = 15 \\times 24" },
            { verbal_explanation: "שלב 5: כפל לקבלת סך כל החיסכון.", math_expression: "S_{15} = 360" }
        ],
        final_answer: "360"
    },

    // שאלה מספר 17
    {
        topic: "sequences_372",
        subTopic: "סכום סדרה חשבונית",
        question_text: "חשבו את סכום 12 האיברים הראשונים בסדרה שבה \\( a_{1} = 50 \\) וההפרש הוא יורד: \\( d = -4 \\).&rlm;",
        options: ["336", "350", "400", "312"],
        correctAnswer: 0,
        hint: "הציבו בנוסחת הסכום בדיוק כפי שהיא. שימו לב להכפלה במינוס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: שימוש בנוסחת הסכום עם מקדם ירידה שלילי.", math_expression: "S_{12} = \\dfrac{12 \\times (2 \\times 50 + 11 \\times (-4))}{2}" },
            { verbal_explanation: "שלב 2: חלוקת המקדם בשתיים וכפל בתוך הסוגריים.", math_expression: "S_{12} = 6 \\times (100 - 44)" },
            { verbal_explanation: "שלב 3: ביצוע החיסור בסוגריים המייצג סכום איברים מקוזז.", math_expression: "S_{12} = 6 \\times 56" },
            { verbal_explanation: "שלב 4: מכפלה לקבלת הסכום הכולל.", math_expression: "S_{12} = 336" },
            { verbal_explanation: "שלב 5: התשובה הישירה.", math_expression: "336" }
        ],
        final_answer: "336"
    },

    // שאלה מספר 18
    {
        topic: "sequences_372",
        subTopic: "סכום סדרה חשבונית",
        question_text: "נתונה הסדרה: 7, 11, 15... סכום מספר איברים ראשונים בסדרה זו הוא 247. מצאו כמה איברים חוברו (הנעלם n).&rlm;",
        options: ["10", "12", "11", "9"],
        correctAnswer: 0,
        hint: "האיבר הראשון הוא 7, ההפרש הוא 4. הציבו בנוסחת הסכום ופתרו משוואה ריבועית עבור n.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים בנוסחת הסכום עם מספר איברים נעלם.", math_expression: "247 = \\dfrac{n \\times (2 \\times 7 + (n - 1) \\times 4)}{2}" },
            { verbal_explanation: "שלב 2: הכפלת המשוואה בשתיים לפתיחת המכנה.", math_expression: "494 = n \\times (14 + 4n - 4)" },
            { verbal_explanation: "שלב 3: כינוס בסוגריים.", math_expression: "494 = n \\times (10 + 4n)" },
            { verbal_explanation: "שלב 4: יצירת משוואה ריבועית רגילה.", math_expression: "4n^{2} + 10n - 494 = 0" },
            { verbal_explanation: "שלב 5: פתרון המשוואה חושף את כמות האיברים החיובית והשלמה.", math_expression: "n = 10" }
        ],
        final_answer: "10"
    },

    // שאלה מספר 19
    {
        topic: "sequences_372",
        subTopic: "סכום סדרה חשבונית",
        question_text: "נתון כי בסדרה חשבונית, האיבר העשירי שווה ל-50. חשבו, בעזרת תכונות הסדרה החשבונית, את סכום 19 האיברים הראשונים שלה. (רמז: איבר אמצעי כפול מספר איברים).&rlm;",
        options: ["950", "1000", "900", "1050"],
        correctAnswer: 0,
        hint: "בסדרה אי זוגית של איברים (19), האיבר האמצעי הוא במקום ה-10. סכום הסדרה שווה למספר האיברים כפול האיבר האמצעי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הבנת הקשר בין סכום הקצוות לאיבר האמצעי לפי נוסחת הסכום השנייה.", math_expression: "S_{19} = \\dfrac{19 \\times (a_{1} + a_{19})}{2}" },
            { verbal_explanation: "שלב 2: סכום איברים מרוחקים באותה מידה שווה לפעמיים האיבר המרכזי.", math_expression: "a_{1} + a_{19} = 2 \\times a_{10}" },
            { verbal_explanation: "שלב 3: הצבה חוזרת של הקשר הזה לתוך נוסחת הסכום.", math_expression: "S_{19} = \\dfrac{19 \\times (2 \\times a_{10})}{2}" },
            { verbal_explanation: "שלב 4: צמצום השתיים במכנה ובמונה מעניק לנו את הכלל הקצר.", math_expression: "S_{19} = 19 \\times a_{10}" },
            { verbal_explanation: "שלב 5: הכפלת מספר האיברים בערך האיבר האמצעי הנתון.", math_expression: "S_{19} = 19 \\times 50 = 950" }
        ],
        final_answer: "950"
    },

    // שאלה מספר 20
    {
        topic: "sequences_372",
        subTopic: "סכום סדרה חשבונית",
        question_text: "נוסחת הסכום של סדרה חשבונית נתונה על ידי הביטוי \\( S_{n} = 3n^{2} + 2n \\). מצאו את האיבר הראשון בסדרה זו.&rlm;",
        options: ["5", "3", "2", "8"],
        correctAnswer: 0,
        hint: "זכרו שסכום של איבר אחד בלבד (n=1) שווה בדיוק לאיבר הראשון עצמו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הבנה אלגברית שסכום איבר בודד זהה לערך האיבר.", math_expression: "S_{1} = a_{1}" },
            { verbal_explanation: "שלב 2: הצבת המיקום אחד בנוסחת הסכום הנתונה.", math_expression: "S_{1} = 3 \\times 1^{2} + 2 \\times 1" },
            { verbal_explanation: "שלב 3: ביצוע חזקה ומכפלה פשוטות.", math_expression: "S_{1} = 3 + 2" },
            { verbal_explanation: "שלב 4: סיום הפעולה חושף את האיבר הפותח.", math_expression: "S_{1} = 5" },
            { verbal_explanation: "שלב 5: התשובה הישירה במערכת.", math_expression: "5" }
        ],
        final_answer: "5"
    },

    // ==========================================
    // תת נושא 3: בעיות גידול ודעיכה פשוטות (10 שאלות)
    // ==========================================

    // שאלה מספר 21
    {
        topic: "sequences_372",
        subTopic: "בעיות גידול ודעיכה פשוטות",
        question_text: "אוכלוסיית חיידקים התחלתית היא 1000. קצב הריבוי (גדילה) הוא 20% בכל שעה. כמה חיידקים יהיו לאחר שעתיים?&rlm;",
        options: ["1440", "1200", "1400", "1500"],
        correctAnswer: 0,
        hint: "חשבו את מקדם הגדילה q (אחד פלוס 20/100). ואז הציבו: כמות התחלתית כפול q בחזקת הזמן.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב מקדם הגדילה.", math_expression: "q = 1 + \\dfrac{20}{100} = 1.2" },
            { verbal_explanation: "שלב 2: הצבת הנתונים בפונקציה המעריכית.", math_expression: "M_{2} = 1000 \\times 1.2^{2}" },
            { verbal_explanation: "שלב 3: העלאת המקדם בריבוע.", math_expression: "M_{2} = 1000 \\times 1.44" },
            { verbal_explanation: "שלב 4: מכפלה לקבלת הכמות הסופית של האוכלוסייה.", math_expression: "M_{2} = 1440" },
            { verbal_explanation: "שלב 5: בחירת התשובה הנכונה מבין החלופות.", math_expression: "1440" }
        ],
        final_answer: "1440"
    },

    // שאלה מספר 22
    {
        topic: "sequences_372",
        subTopic: "בעיות גידול ודעיכה פשוטות",
        question_text: "ערכו ההתחלתי של מוצר חשמלי הוא 500 שקלים. ערכו יורד ב-10% בכל שנה. מה יהיה ערכו לאחר שנתיים?&rlm;",
        options: ["405", "450", "400", "410"],
        correctAnswer: 0,
        hint: "ירידה של 10% משמעותה שמקדם הדעיכה הוא 0.9. הציבו בנוסחה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב מקדם הפחת השנתי.", math_expression: "q = 1 - \\dfrac{10}{100} = 0.9" },
            { verbal_explanation: "שלב 2: בניית המודל למציאת המחיר לאחר הזמן הנתון.", math_expression: "M_{2} = 500 \\times 0.9^{2}" },
            { verbal_explanation: "שלב 3: חישוב החזקה של המקדם העשרוני.", math_expression: "0.9^{2} = 0.81" },
            { verbal_explanation: "שלב 4: הכפלת המחיר במקדם המצטבר.", math_expression: "M_{2} = 500 \\times 0.81" },
            { verbal_explanation: "שלב 5: התוצאה הסופית.", math_expression: "M_{2} = 405" }
        ],
        final_answer: "405"
    },

    // שאלה מספר 23
    {
        topic: "sequences_372",
        subTopic: "בעיות גידול ודעיכה פשוטות",
        question_text: "סכום כסף הופקד בתוכנית חיסכון הנושאת ריבית קבועה של 10% בשנה. לאחר שנתיים, הסכום בחשבון היה 1210 שקלים. מהו הסכום שהופקד במקור (בהתחלה)?&rlm;",
        options: ["1000", "1100", "1200", "900"],
        correctAnswer: 0,
        hint: "הכמות ההתחלתית היא הנעלם. בנו משוואה: סכום התחלתי כפול 1.1 בריבוע שווה ל-1210.",
        solution_steps: [
            { verbal_explanation: "שלב 1: קביעת מקדם הריבית.", math_expression: "q = 1.1" },
            { verbal_explanation: "שלב 2: בניית משוואה כשהקרן המקורית היא נעלם.", math_expression: "1210 = M_{0} \\times 1.1^{2}" },
            { verbal_explanation: "שלב 3: ביצוע החזקה למקדם.", math_expression: "1210 = M_{0} \\times 1.21" },
            { verbal_explanation: "שלב 4: בידוד הקרן על ידי חלוקת המשוואה בשבר העשרוני.", math_expression: "M_{0} = 1210 : 1.21" },
            { verbal_explanation: "שלב 5: התוצאה המדויקת לסכום ההתחלתי.", math_expression: "M_{0} = 1000" }
        ],
        final_answer: "1000"
    },

    // שאלה מספר 24
    {
        topic: "sequences_372",
        subTopic: "בעיות גידול ודעיכה פשוטות",
        question_text: "מספר עובדים בחברה היה 200, ולאחר שנתיים גדל באופן מעריכי ל-288 עובדים. מהו מקדם הגידול השנתי (q) של החברה?&rlm;",
        options: ["1.2", "1.44", "1.1", "1.25"],
        correctAnswer: 0,
        hint: "בנו משוואה שהנעלם שלה הוא q בריבוע. חלקו את 288 ב-200 והוציאו שורש ריבועי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים בפונקציה כשבסיס החזקה נעלם.", math_expression: "288 = 200 \\times q^{2}" },
            { verbal_explanation: "שלב 2: חלוקת הכמות הסופית בכמות ההתחלתית.", math_expression: "q^{2} = 288 : 200" },
            { verbal_explanation: "שלב 3: התוצאה לחלוקה.", math_expression: "q^{2} = 1.44" },
            { verbal_explanation: "שלב 4: הוצאת שורש ריבועי למציאת המקדם המדויק לשנה אחת.", math_expression: "q = \\sqrt{1.44} = 1.2" },
            { verbal_explanation: "שלב 5: בחירת התשובה במערכת.", math_expression: "1.2" }
        ],
        final_answer: "1.2"
    },

    // שאלה מספר 25
    {
        topic: "sequences_372",
        subTopic: "בעיות גידול ודעיכה פשוטות",
        question_text: "משקל חומר דועך לאורך זמן. משקלו ההתחלתי היה 800 גרם ולאחר שנתיים נותרו ממנו 450 גרם. מהו מקדם הדעיכה השנתי (q)?&rlm;",
        options: ["0.75", "0.5625", "0.5", "0.8"],
        correctAnswer: 0,
        hint: "כמו בשאלה הקודמת, חלקו 450 ב-800 והוציאו שורש ריבועי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית פונקציית דעיכה לבידוד המקדם.", math_expression: "450 = 800 \\times q^{2}" },
            { verbal_explanation: "שלב 2: חלוקה במסה המקורית.", math_expression: "q^{2} = 450 : 800" },
            { verbal_explanation: "שלב 3: הפקת ערך המנה העשרוני.", math_expression: "q^{2} = 0.5625" },
            { verbal_explanation: "שלב 4: הפעלת שורש לקבלת הבסיס.", math_expression: "q = \\sqrt{0.5625} = 0.75" },
            { verbal_explanation: "שלב 5: התשובה הישירה.", math_expression: "0.75" }
        ],
        final_answer: "0.75"
    },

    // שאלה מספר 26
    {
        topic: "sequences_372",
        subTopic: "בעיות גידול ודעיכה פשוטות",
        question_text: "חומר רדיואקטיבי מאבד מחצית ממשקלו בכל שעה (מקדם 0.5). משקלו ההתחלתי הוא 100 גרם. כמה חומר יישאר לאחר 3 שעות?&rlm;",
        options: ["12.5", "25", "50", "15"],
        correctAnswer: 0,
        hint: "העלו את החצי בחזקת 3 (שזה 0.125), והכפילו במשקל ההתחלתי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת נתוני מחצית חיים בנוסחה.", math_expression: "M_{3} = 100 \\times 0.5^{3}" },
            { verbal_explanation: "שלב 2: ביצוע חזקת שלוש על השבר העשרוני.", math_expression: "M_{3} = 100 \\times 0.125" },
            { verbal_explanation: "שלב 3: הכפלת המסה בתוצאת המקדם.", math_expression: "M_{3} = 12.5" },
            { verbal_explanation: "שלב 4: הרישום לבדיקה.", math_expression: "12.5" }
        ],
        final_answer: "12.5"
    },

    // שאלה מספר 27
    {
        topic: "sequences_372",
        subTopic: "בעיות גידול ודעיכה פשוטות",
        question_text: "כמות תאים ביולוגיים מכפילה את עצמה בכל יום (מקדם 2). הכמות ההתחלתית הייתה 10 תאים. כמה תאים יהיו לאחר 4 ימים?&rlm;",
        options: ["160", "80", "40", "320"],
        correctAnswer: 0,
        hint: "העלו 2 בחזקת 4 (16), והכפילו בכמות ההתחלתית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית מודל הכפלה יומית.", math_expression: "M_{4} = 10 \\times 2^{4}" },
            { verbal_explanation: "שלב 2: חישוב החזקה של שתיים בבסיס ארבע.", math_expression: "M_{4} = 10 \\times 16" },
            { verbal_explanation: "שלב 3: כפל לקבלת מספר התאים הכולל.", math_expression: "M_{4} = 160" },
            { verbal_explanation: "שלב 4: קביעת הפתרון.", math_expression: "160" }
        ],
        final_answer: "160"
    },

    // שאלה מספר 28
    {
        topic: "sequences_372",
        subTopic: "בעיות גידול ודעיכה פשוטות",
        question_text: "כמות חומר יורדת ב-20% בשנה אחת, ושוב יורדת ב-20% בשנה שלאחריה. מהו אחוז הירידה הכולל מתחילת התקופה? (רמז: הכפילו את המקדמים).&rlm;",
        options: ["36%", "40%", "64%", "20%"],
        correctAnswer: 0,
        hint: "המקדם ל-20% ירידה הוא 0.8. מקדם כולל לשנתיים הוא 0.8 כפול 0.8. האחוז שחסר להשלים ל-1 הוא התשובה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת מקדם הדעיכה השנתי.", math_expression: "q = 0.8" },
            { verbal_explanation: "שלב 2: יצירת מקדם משוקלל לשנתיים ברצף.", math_expression: "q_{total} = 0.8 \\times 0.8 = 0.64" },
            { verbal_explanation: "שלב 3: שימוש בנוסחה הממירה מקדם דעיכה בחזרה לאחוז פחת.", math_expression: "p = (1 - 0.64) \\times 100" },
            { verbal_explanation: "שלב 4: פתרון והמרה למספר שלם.", math_expression: "p = 0.36 \\times 100 = 36" },
            { verbal_explanation: "שלב 5: התשובה הנבחרת.", math_expression: "36" }
        ],
        final_answer: "36%"
    },

    // שאלה מספר 29
    {
        topic: "sequences_372",
        subTopic: "בעיות גידול ודעיכה פשוטות",
        question_text: "ערך של נכס היה 400 שקלים וגדל ב-5% בכל שנה. מה יהיה ערכו לאחר שנתיים?&rlm;",
        options: ["441", "440", "420", "405"],
        correctAnswer: 0,
        hint: "מקדם גדילה של 5% הוא 1.05. הציבו בפונקציה: 400 כפול 1.05 בריבוע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב המקדם עבור חמישה אחוזים.", math_expression: "q = 1.05" },
            { verbal_explanation: "שלב 2: בניית המודל לשנתיים.", math_expression: "M_{2} = 400 \\times 1.05^{2}" },
            { verbal_explanation: "שלב 3: פעולת העלאה בריבוע.", math_expression: "M_{2} = 400 \\times 1.1025" },
            { verbal_explanation: "שלב 4: כפל לקבלת הערך החדש של הנכס.", math_expression: "M_{2} = 441" },
            { verbal_explanation: "שלב 5: אישור התשובה.", math_expression: "441" }
        ],
        final_answer: "441"
    },

    // שאלה מספר 30
    {
        topic: "sequences_372",
        subTopic: "בעיות גידול ודעיכה פשוטות",
        question_text: "מניית בורסה ששוויה 100 שקלים, עלתה ביום ראשון ב-10%, וביום שני ירדה ב-10%. מהו שוויה בסוף יום שני?&rlm;",
        options: ["99", "100", "101", "90"],
        correctAnswer: 0,
        hint: "עליות וירידות באחוזים אינן מבטלות זו את זו, אלא מוכפלות. חשבו 100 כפול 1.1 כפול 0.9.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת מקדם העלייה הראשוני.", math_expression: "q_{1} = 1.1" },
            { verbal_explanation: "שלב 2: הגדרת מקדם הירידה המשני.", math_expression: "q_{2} = 0.9" },
            { verbal_explanation: "שלב 3: כתיבת משוואה משולבת של התהליך כולו.", math_expression: "M_{2} = 100 \\times 1.1 \\times 0.9" },
            { verbal_explanation: "שלב 4: כפל משמאל לימין.", math_expression: "M_{2} = 110 \\times 0.9" },
            { verbal_explanation: "שלב 5: תוצאה המראה שהערך קטן במעט ולא חזר לעצמו.", math_expression: "M_{2} = 99" },
            { verbal_explanation: "שלב 6: הרישום לבחירה.", math_expression: "99" }
        ],
        final_answer: "99"
    }
];