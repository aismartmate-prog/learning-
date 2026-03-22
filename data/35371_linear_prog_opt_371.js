const questionsDB = [
    // ==========================================
    // תת נושא 1: ניסוח אי-שוויונים וגרירת תחום הפתרונות (10 שאלות)
    // ==========================================

    // שאלה מספר 1
    {
        topic: "linear_prog_opt_371",
        subTopic: "ניסוח אי-שוויונים וגרירת תחום הפתרונות",
        question_text: "מפעל מייצר שני סוגי מוצרים: כסאות ושולחנות. נסמן ב-x את מספר הכסאות וב-y את מספר השולחנות. המפעל יכול לייצר לכל היותר 50 מוצרים ביום בסך הכל. איזה אי-שוויון מתאר הגבלה זו?&rlm;",
        options: ["x + y \\leq 50", "x + y \\geq 50", "x \\times y \\leq 50", "x + y = 50"],
        correctAnswer: 0,
        hint: "המילה 'לכל היותר' משמעותה שסכום המוצרים קטן או שווה למספר הנתון.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי המשתנה המייצג את הכסאות.", math_expression: "x" },
            { verbal_explanation: "שלב 2: זיהוי המשתנה המייצג את השולחנות.", math_expression: "y" },
            { verbal_explanation: "שלב 3: כתיבת הביטוי לסך כל המוצרים המיוצרים יחד.", math_expression: "x + y" },
            { verbal_explanation: "שלב 4: תרגום הביטוי 'לכל היותר' לסימן מתמטי (קטן או שווה).", math_expression: "\\leq" },
            { verbal_explanation: "שלב 5: שילוב הנתונים לאי-שוויון מתמטי שלם.", math_expression: "x + y \\leq 50" },
            { verbal_explanation: "שלב 6: בחירת התשובה הנכונה מבין החלופות.", math_expression: "x + y \\leq 50" }
        ],
        final_answer: "x + y \\leq 50"
    },

    // שאלה מספר 2
    {
        topic: "linear_prog_opt_371",
        subTopic: "ניסוח אי-שוויונים וגרירת תחום הפתרונות",
        question_text: "ייצור של כסא (x) דורש 2 קילוגרם עץ. ייצור של שולחן (y) דורש 5 קילוגרם עץ. במחסן יש כמות מקסימלית של 100 קילוגרם עץ. מהו אי-השוויון המתאר את מגבלת העץ?&rlm;",
        options: ["2x + 5y \\leq 100", "5x + 2y \\leq 100", "2x + 5y \\geq 100", "x + y \\leq 100"],
        correctAnswer: 0,
        hint: "הכפילו את כמות העץ למוצר אחד במספר המוצרים מאותו סוג, וחברו את שתי הכמויות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת ביטוי לכמות העץ הכוללת הנדרשת עבור הכסאות.", math_expression: "2 \\times x" },
            { verbal_explanation: "שלב 2: כתיבת ביטוי לכמות העץ הכוללת הנדרשת עבור השולחנות.", math_expression: "5 \\times y" },
            { verbal_explanation: "שלב 3: סכימת כמויות העץ יחד לביטוי אחד.", math_expression: "2x + 5y" },
            { verbal_explanation: "שלב 4: הגדרת המגבלה (כמות מקסימלית פירושה שאי אפשר לחרוג ממנה).", math_expression: "\\leq 100" },
            { verbal_explanation: "שלב 5: הרכבת אי-השוויון הסופי המייצג את המגבלה.", math_expression: "2x + 5y \\leq 100" }
        ],
        final_answer: "2x + 5y \\leq 100"
    },

    // שאלה מספר 3
    {
        topic: "linear_prog_opt_371",
        subTopic: "ניסוח אי-שוויונים וגרירת תחום הפתרונות",
        question_text: "מכונה במפעל יכולה לעבוד לכל היותר 40 שעות בשבוע. ייצור מוצר x אורך 4 שעות, וייצור מוצר y אורך 8 שעות. איזה אי-שוויון מתאר את מגבלת זמן המכונה?&rlm;",
        options: ["4x + 8y \\leq 40", "8x + 4y \\leq 40", "4x + 8y \\geq 40", "x + y \\leq 40"],
        correctAnswer: 0,
        hint: "חברו את הזמן הדרוש לכל מוצר x עם הזמן הדרוש לכל מוצר y. הסכום חייב להיות קטן או שווה ל-40.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת הזמן המושקע בייצור כלל מוצרי האיקס.", math_expression: "4 \\times x" },
            { verbal_explanation: "שלב 2: הגדרת הזמן המושקע בייצור כלל מוצרי הוואי.", math_expression: "8 \\times y" },
            { verbal_explanation: "שלב 3: חיבור זמני הייצור של שניהם.", math_expression: "4x + 8y" },
            { verbal_explanation: "שלב 4: יישום המגבלה (עד ארבעים שעות).", math_expression: "\\leq 40" },
            { verbal_explanation: "שלב 5: הרישום של האי-שוויון השלם.", math_expression: "4x + 8y \\leq 40" }
        ],
        final_answer: "4x + 8y \\leq 40"
    },

    // שאלה מספר 4
    {
        topic: "linear_prog_opt_371",
        subTopic: "ניסוח אי-שוויונים וגרירת תחום הפתרונות",
        question_text: "על פי חוזה מול לקוח, המפעל מתחייב לייצר לפחות 10 שולחנות (y) בכל שבוע. כיצד ננסח אילוץ זה?&rlm;",
        options: ["y \\geq 10", "y \\leq 10", "x \\geq 10", "y > 10"],
        correctAnswer: 0,
        hint: "המילה 'לפחות' מצביעה על כך שהכמות צריכה להיות שווה למספר או גדולה ממנו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי המשתנה הרלוונטי לאילוץ הנתון (שולחנות).", math_expression: "y" },
            { verbal_explanation: "שלב 2: תרגום המונח 'לפחות' לסימון של גדול או שווה.", math_expression: "\\geq" },
            { verbal_explanation: "שלב 3: הצבת הערך המספרי שנקבע בחוזה.", math_expression: "10" },
            { verbal_explanation: "שלב 4: הרכבת האילוץ הסופי.", math_expression: "y \\geq 10" },
            { verbal_explanation: "שלב 5: בחירת האפשרות התואמת מהרשימה.", math_expression: "y \\geq 10" }
        ],
        final_answer: "y \\geq 10"
    },

    // שאלה מספר 5
    {
        topic: "linear_prog_opt_371",
        subTopic: "ניסוח אי-שוויונים וגרירת תחום הפתרונות",
        question_text: "מנהל הייצור קובע: מספר הכסאות (x) המיוצרים חייב להיות לפחות כפול ממספר השולחנות (y). איזה אי-שוויון מתאר נכון דרישה זו?&rlm;",
        options: ["x \\geq 2y", "y \\geq 2x", "x \\leq 2y", "2x \\geq y"],
        correctAnswer: 0,
        hint: "קחו את כמות השולחנות, הכפילו אותה ב-2. כמות הכסאות צריכה להיות גדולה או שווה לתוצאה זו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: ביטוי מתמטי לפעמיים מספר השולחנות.", math_expression: "2 \\times y" },
            { verbal_explanation: "שלב 2: הצבת המשתנה המייצג את מספר הכסאות.", math_expression: "x" },
            { verbal_explanation: "שלב 3: סידור המשוואה כך שאיקס גדול או שווה לביטוי השני.", math_expression: "x \\geq 2y" },
            { verbal_explanation: "שלב 4: בחירת האפשרות המסודרת כפי שהיא.", math_expression: "x \\geq 2y" }
        ],
        final_answer: "x \\geq 2y"
    },

    // שאלה מספר 6
    {
        topic: "linear_prog_opt_371",
        subTopic: "ניסוח אי-שוויונים וגרירת תחום הפתרונות",
        question_text: "בכל בעיית תכנון ליניארי של ייצור, קיימים אילוצי אי-שליליות. כיצד ננסח אותם במתמטיקה עבור המוצרים x ו-y?&rlm;",
        options: ["x \\geq 0 , y \\geq 0", "x > 0 , y > 0", "x \\leq 0 , y \\leq 0", "x = 0 , y = 0"],
        correctAnswer: 0,
        hint: "לא ניתן לייצר כמות שלילית של מוצרים. לכן, הכמות מתחילה מאפס (כולל אפס) ועולה כלפי מעלה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הבנה שכמות פיזית של מוצר אינה יכולה להיות קטנה מאפס.", math_expression: "x \\geq 0" },
            { verbal_explanation: "שלב 2: קביעת אילוץ אי-השליליות למשתנה הראשון.", math_expression: "x \\geq 0" },
            { verbal_explanation: "שלב 3: קביעת אילוץ אי-השליליות למשתנה השני.", math_expression: "y \\geq 0" },
            { verbal_explanation: "שלב 4: איחוד האילוצים יחד להצגה הפורמלית בבעיה.", math_expression: "x \\geq 0 \\quad , \\quad y \\geq 0" }
        ],
        final_answer: "x \\geq 0 , y \\geq 0"
    },

    // שאלה מספר 7
    {
        topic: "linear_prog_opt_371",
        subTopic: "ניסוח אי-שוויונים וגרירת תחום הפתרונות",
        question_text: "נתון גרף המציג את הישר \\( x + y = 10 \\). תחום הפתרונות הצבוע (התחום האפשרי) נמצא מתחת לישר זה (כולל הישר עצמו). איזה אי-שוויון מתאר את התחום?&rlm;",
        options: ["x + y \\leq 10", "x + y \\geq 10", "x + y < 10", "x + y > 10"],
        correctAnswer: 0,
        hint: "תחום הנמצא 'מתחת' לישר מתואר לרוב על ידי סימן 'קטן או שווה'. בדקו זאת על ידי הצבת נקודת ראשית הצירים (0,0).",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי משוואת הישר היוצרת את הגבול.", math_expression: "x + y = 10" },
            { verbal_explanation: "שלב 2: הבנה שהשטח הצבוע מתחת לישר מייצג ערכים קטנים יותר מהגבול.", math_expression: "\\leq" },
            { verbal_explanation: "שלב 3: אימות על ידי הצבת הנקודה אפס פסיק אפס (שנמצאת מתחת לישר) באי-שוויון.", math_expression: "0 + 0 \\leq 10" },
            { verbal_explanation: "שלב 4: הפסוק הוא אמת, לכן זהו האי-שוויון הנכון.", math_expression: "x + y \\leq 10" }
        ],
        final_answer: "x + y \\leq 10"
    },

    // שאלה מספר 8
    {
        topic: "linear_prog_opt_371",
        subTopic: "ניסוח אי-שוויונים וגרירת תחום הפתרונות",
        question_text: "בגרף נתון, תחום הפתרונות חסום מצד ימין על ידי קו אנכי העובר בנקודה \\( x = 5 \\). התחום האפשרי נמצא משמאל לקו זה (כולל אותו). כיצד נרשום אילוץ זה?&rlm;",
        options: ["x \\leq 5", "x \\geq 5", "y \\leq 5", "y \\geq 5"],
        correctAnswer: 0,
        hint: "קו אנכי מיוצג על ידי המשתנה x. כל מה שנמצא משמאל לקו על ציר ה-x הוא קטן יותר מערכו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי שקו אנכי מתייחס תמיד למשתנה איקס בלבד.", math_expression: "x" },
            { verbal_explanation: "שלב 2: השטח שמשמאל לקו מציין ערכים שקטנים ממיקום הקו.", math_expression: "\\leq" },
            { verbal_explanation: "שלב 3: צירוף הערך המספרי שדרכו עובר הקו.", math_expression: "5" },
            { verbal_explanation: "שלב 4: כתיבת האילוץ הסופי.", math_expression: "x \\leq 5" }
        ],
        final_answer: "x \\leq 5"
    },

    // שאלה מספר 9
    {
        topic: "linear_prog_opt_371",
        subTopic: "ניסוח אי-שוויונים וגרירת תחום הפתרונות",
        question_text: "התקציב היומי לרכישת חומרי גלם הוא 500 שקלים. עלות חומר הגלם למוצר x היא 20 שקלים. עלות חומר הגלם למוצר y היא 50 שקלים. מהו אי-השוויון למגבלת התקציב?&rlm;",
        options: ["20x + 50y \\leq 500", "50x + 20y \\leq 500", "20x + 50y \\geq 500", "x + y \\leq 500"],
        correctAnswer: 0,
        hint: "חברו את העלות הכוללת של מוצרי x עם העלות הכוללת של מוצרי y, והגבילו אותה לתקציב.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב הוצאה על מוצרי איקס בלבד.", math_expression: "20 \\times x" },
            { verbal_explanation: "שלב 2: חישוב הוצאה על מוצרי וואי בלבד.", math_expression: "50 \\times y" },
            { verbal_explanation: "שלב 3: חיבור שתי ההוצאות יחדיו לסך ההוצאה הכוללת.", math_expression: "20x + 50y" },
            { verbal_explanation: "שלב 4: השמת מגבלת התקציב (אסור לחרוג, מותר להוציא פחות).", math_expression: "\\leq 500" },
            { verbal_explanation: "שלב 5: הרכבת אי-השוויון המלא.", math_expression: "20x + 50y \\leq 500" }
        ],
        final_answer: "20x + 50y \\leq 500"
    },

    // שאלה מספר 10
    {
        topic: "linear_prog_opt_371",
        subTopic: "ניסוח אי-שוויונים וגרירת תחום הפתרונות",
        question_text: "חברת משלוחים דורשת מהמפעל לשלוח לפחות 100 מוצרים בסך הכל (משני הסוגים יחד) כדי שהמשאית תצא. איזה אי-שוויון יתווסף לבעיה?&rlm;",
        options: ["x + y \\geq 100", "x + y \\leq 100", "100x + 100y \\geq 0", "x \\geq 100 , y \\geq 100"],
        correctAnswer: 0,
        hint: "סך כל המוצרים הוא חיבור פשוט של שתי הכמויות יחד. המילה 'לפחות' מכוונת לכיוון הסימן.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת ביטוי לסך כל המוצרים במשאית ללא קשר לסוגם.", math_expression: "x + y" },
            { verbal_explanation: "שלב 2: תרגום מילולי של 'לפחות' לסימן אלגברי.", math_expression: "\\geq" },
            { verbal_explanation: "שלב 3: הצבת כמות המינימום הנדרשת.", math_expression: "100" },
            { verbal_explanation: "שלב 4: הרכבת האילוץ כפי שהוא מופיע בתשובות.", math_expression: "x + y \\geq 100" }
        ],
        final_answer: "x + y \\geq 100"
    },

    // ==========================================
    // תת נושא 2: הגדרת פונקציית מטרה (10 שאלות)
    // ==========================================

    // שאלה מספר 11
    {
        topic: "linear_prog_opt_371",
        subTopic: "הגדרת פונקציית מטרה",
        question_text: "המפעל מרוויח 30 שקלים על כל כסא (x) ו-40 שקלים על כל שולחן (y). המטרה היא למקסם את הרווח. מהי פונקציית המטרה?&rlm;",
        options: ["f(x,y) = 30x + 40y", "f(x,y) = 40x + 30y", "f(x,y) = 30x + 40", "f(x,y) = x + y"],
        correctAnswer: 0,
        hint: "פונקציית מטרה של רווח מחושבת על ידי סכימת הרווח מכל מוצר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב הרווח המתקבל ממכירת כל מוצרי האיקס.", math_expression: "30 \\times x" },
            { verbal_explanation: "שלב 2: חישוב הרווח המתקבל ממכירת כל מוצרי הוואי.", math_expression: "40 \\times y" },
            { verbal_explanation: "שלב 3: סכימת הרווחים למציאת הרווח הכולל של המפעל.", math_expression: "30x + 40y" },
            { verbal_explanation: "שלב 4: הגדרת הפונקציה המייצגת את המטרה.", math_expression: "f(x,y) = 30x + 40y" },
            { verbal_explanation: "שלב 5: מציאת החלופה המתאימה.", math_expression: "f(x,y) = 30x + 40y" }
        ],
        final_answer: "f(x,y) = 30x + 40y"
    },

    // שאלה מספר 12
    {
        topic: "linear_prog_opt_371",
        subTopic: "הגדרת פונקציית מטרה",
        question_text: "חברה רוצה למזער את עלויות הייצור. ייצור יחידה ממוצר x עולה 15 שקלים, וייצור יחידה ממוצר y עולה 25 שקלים. כיצד תוגדר פונקציית המטרה למינימום עלות?&rlm;",
        options: ["f(x,y) = 15x + 25y", "f(x,y) = 25x + 15y", "f(x,y) = 15 + 25y", "f(x,y) = 15x + y"],
        correctAnswer: 0,
        hint: "הפונקציה בנויה באותה דרך כמו פונקציית רווח. ההבדל הוא רק בכך שמחפשים את הערך המינימלי שלה בתחום במקום המקסימלי.",
        solution_steps: [
            { verbal_explanation: "שלב 1: תרגום העלות של המוצר הראשון למשתנה.", math_expression: "15 \\times x" },
            { verbal_explanation: "שלב 2: תרגום העלות של המוצר השני.", math_expression: "25 \\times y" },
            { verbal_explanation: "שלב 3: חיבור שתי העלויות לקבלת העלות הכוללת.", math_expression: "15x + 25y" },
            { verbal_explanation: "שלב 4: רישום כפונקציה אובייקטיבית למיזעור.", math_expression: "f(x,y) = 15x + 25y" }
        ],
        final_answer: "f(x,y) = 15x + 25y"
    },

    // שאלה מספר 13
    {
        topic: "linear_prog_opt_371",
        subTopic: "הגדרת פונקציית מטרה",
        question_text: "חנות מוכרת חולצות (x) ב-100 שקלים ומכנסיים (y) ב-150 שקלים. היא מעוניינת להגיע לפדיון מקסימלי (הכנסות). כיצד נרשום את הפונקציה?&rlm;",
        options: ["f(x,y) = 100x + 150y", "f(x,y) = 150x + 100y", "f(x,y) = 100x + y", "f(x,y) = x + 150y"],
        correctAnswer: 0,
        hint: "הכפילו את כמות החולצות במחיר חולצה, ואת כמות המכנסיים במחיר מכנסיים, וחברו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הכנסה מכל החולצות יחד.", math_expression: "100 \\times x" },
            { verbal_explanation: "שלב 2: הכנסה מכל המכנסיים יחד.", math_expression: "150 \\times y" },
            { verbal_explanation: "שלב 3: חיבור לשם קבלת הפדיון הכללי של החנות.", math_expression: "100x + 150y" },
            { verbal_explanation: "שלב 4: הגדרת הפונקציה.", math_expression: "f(x,y) = 100x + 150y" }
        ],
        final_answer: "f(x,y) = 100x + 150y"
    },

    // שאלה מספר 14
    {
        topic: "linear_prog_opt_371",
        subTopic: "הגדרת פונקציית מטרה",
        question_text: "תלמיד רוצה לסיים את שיעורי הבית בזמן הקצר ביותר. כל תרגיל מסוג x לוקח 5 דקות, וכל תרגיל מסוג y לוקח 12 דקות. מהי פונקציית הזמן שיש למזער?&rlm;",
        options: ["f(x,y) = 5x + 12y", "f(x,y) = 12x + 5y", "f(x,y) = 17x + 17y", "f(x,y) = x : 5 + y : 12"],
        correctAnswer: 0,
        hint: "הזמן הכולל שווה לסכום זמני הפתרון של כל התרגילים מכל סוג.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זמן כולל לתרגילים מהסוג הראשון.", math_expression: "5 \\times x" },
            { verbal_explanation: "שלב 2: זמן כולל לתרגילים מהסוג השני.", math_expression: "12 \\times y" },
            { verbal_explanation: "שלב 3: סכום הזמנים הכולל.", math_expression: "5x + 12y" },
            { verbal_explanation: "שלב 4: הגדרת הפונקציה למזעור.", math_expression: "f(x,y) = 5x + 12y" }
        ],
        final_answer: "f(x,y) = 5x + 12y"
    },

    // שאלה מספר 15
    {
        topic: "linear_prog_opt_371",
        subTopic: "הגדרת פונקציית מטרה",
        question_text: "במפעל, ייצור מוצר x גורם לפחת (בזבוז) של 2 קילוגרם חומר. ייצור מוצר y גורם לפחת של 1 קילוגרם. המפעל רוצה למזער את הבזבוז. מהי פונקציית הבזבוז?&rlm;",
        options: ["f(x,y) = 2x + y", "f(x,y) = x + 2y", "f(x,y) = 2x + 2y", "f(x,y) = x + y"],
        correctAnswer: 0,
        hint: "הכפילו כל סוג מוצר בכמות הפחת שלו וחברו את השניים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: ביטוי לפחת שמקורו במוצר הראשון.", math_expression: "2 \\times x" },
            { verbal_explanation: "שלב 2: ביטוי לפחת שמקורו במוצר השני.", math_expression: "1 \\times y" },
            { verbal_explanation: "שלב 3: כתיבת סכום הבזבוז הכולל.", math_expression: "2x + y" },
            { verbal_explanation: "שלב 4: רישום הפונקציה לבחירה.", math_expression: "f(x,y) = 2x + y" }
        ],
        final_answer: "f(x,y) = 2x + y"
    },

    // שאלה מספר 16
    {
        topic: "linear_prog_opt_371",
        subTopic: "הגדרת פונקציית מטרה",
        question_text: "דיאטנית מרכיבה תפריט. מנה x מכילה 200 קלוריות. מנה y מכילה 300 קלוריות. המטרה היא להרכיב תפריט עם מינימום קלוריות תחת אילוצי הויטמינים. מהי פונקציית המטרה?&rlm;",
        options: ["f(x,y) = 200x + 300y", "f(x,y) = 300x + 200y", "f(x,y) = 200 + 300y", "f(x,y) = x + y"],
        correctAnswer: 0,
        hint: "סכמו את הקלוריות מכל המנות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: קלוריות ממנה איקס.", math_expression: "200 \\times x" },
            { verbal_explanation: "שלב 2: קלוריות ממנה וואי.", math_expression: "300 \\times y" },
            { verbal_explanation: "שלב 3: חיבור לכלל הקלוריות בארוחה.", math_expression: "200x + 300y" },
            { verbal_explanation: "שלב 4: הגדרת הפונקציה שאותה מבקשים למזער.", math_expression: "f(x,y) = 200x + 300y" }
        ],
        final_answer: "f(x,y) = 200x + 300y"
    },

    // שאלה מספר 17
    {
        topic: "linear_prog_opt_371",
        subTopic: "הגדרת פונקציית מטרה",
        question_text: "במשחק וידאו, איסוף מטבע רגיל (x) מזכה ב-10 נקודות. איסוף מטבע זהב (y) מזכה ב-50 נקודות. השחקן רוצה למקסם את הניקוד. מהי פונקציית הניקוד?&rlm;",
        options: ["f(x,y) = 10x + 50y", "f(x,y) = 50x + 10y", "f(x,y) = 10x + y", "f(x,y) = x + 50y"],
        correctAnswer: 0,
        hint: "הניקוד הכללי הוא סכום המכפלות של כל סוג מטבע בניקוד שלו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: נקודות ממטבעות רגילים.", math_expression: "10 \\times x" },
            { verbal_explanation: "שלב 2: נקודות ממטבעות זהב.", math_expression: "50 \\times y" },
            { verbal_explanation: "שלב 3: סך הכל ניקוד.", math_expression: "10x + 50y" },
            { verbal_explanation: "שלב 4: הפונקציה למקסימום.", math_expression: "f(x,y) = 10x + 50y" }
        ],
        final_answer: "f(x,y) = 10x + 50y"
    },

    // שאלה מספר 18
    {
        topic: "linear_prog_opt_371",
        subTopic: "הגדרת פונקציית מטרה",
        question_text: "בעיית לוגיסטיקה: קופסה מסוג x תופסת נפח של 3 מטרים מעוקבים במחסן. קופסה מסוג y תופסת נפח של 4 מטרים מעוקבים. מנהל המחסן מעוניין לאחסן כמות מסוימת במינימום שטח אחסון. מהי פונקציית הנפח?&rlm;",
        options: ["f(x,y) = 3x + 4y", "f(x,y) = 4x + 3y", "f(x,y) = x + y", "f(x,y) = 3x + y"],
        correctAnswer: 0,
        hint: "הנפח הכולל הוא חיבור של נפחי שתי הקופסאות בנפרד בהתאם לכמותן.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הנפח של קופסאות איקס.", math_expression: "3 \\times x" },
            { verbal_explanation: "שלב 2: הנפח של קופסאות וואי.", math_expression: "4 \\times y" },
            { verbal_explanation: "שלב 3: סכום הנפחים להרכבת המטרה למיזעור.", math_expression: "3x + 4y" },
            { verbal_explanation: "שלב 4: הגדרת הפונקציה.", math_expression: "f(x,y) = 3x + 4y" }
        ],
        final_answer: "f(x,y) = 3x + 4y"
    },

    // שאלה מספר 19
    {
        topic: "linear_prog_opt_371",
        subTopic: "הגדרת פונקציית מטרה",
        question_text: "חברת הובלות בונה מסלול. כל עצירה בעיר x מוסיפה 5 קילומטר למסלול. כל עצירה בעיר y מוסיפה 8 קילומטר. החברה מנסה למזער את המרחק. מהי הפונקציה?&rlm;",
        options: ["f(x,y) = 5x + 8y", "f(x,y) = 8x + 5y", "f(x,y) = 13x + 13y", "f(x,y) = x : 5 + y : 8"],
        correctAnswer: 0,
        hint: "חיבור פשוט של הקילומטרים לכל עצירה בהתאם למספר העצירות מכל סוג.",
        solution_steps: [
            { verbal_explanation: "שלב 1: מרחק מצטבר מערי איקס.", math_expression: "5 \\times x" },
            { verbal_explanation: "שלב 2: מרחק מצטבר מערי וואי.", math_expression: "8 \\times y" },
            { verbal_explanation: "שלב 3: בניית פונקציית המרחק הכולל למזעור.", math_expression: "f(x,y) = 5x + 8y" },
            { verbal_explanation: "שלב 4: אימות החלופה המוצעת.", math_expression: "f(x,y) = 5x + 8y" }
        ],
        final_answer: "f(x,y) = 5x + 8y"
    },

    // שאלה מספר 20
    {
        topic: "linear_prog_opt_371",
        subTopic: "הגדרת פונקציית מטרה",
        question_text: "עובד עצמאי מקבל 50 שקלים על כל שעת עבודה בפרויקט x, ו-70 שקלים על כל שעת עבודה בפרויקט y. הוא רוצה למקסם את שכרו. מהי פונקציית השכר שלו?&rlm;",
        options: ["f(x,y) = 50x + 70y", "f(x,y) = 70x + 50y", "f(x,y) = x + 70y", "f(x,y) = 50x + y"],
        correctAnswer: 0,
        hint: "השכר הכולל נבנה ממכפלת התעריף השעתי במספר השעות לכל פרויקט, וחיבור התוצאות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: שכר מפרויקט ראשון.", math_expression: "50 \\times x" },
            { verbal_explanation: "שלב 2: שכר מפרויקט שני.", math_expression: "70 \\times y" },
            { verbal_explanation: "שלב 3: כתיבת פונקציית השכר למקסימום.", math_expression: "f(x,y) = 50x + 70y" },
            { verbal_explanation: "שלב 4: בחירת התשובה הנכונה מהרשימה.", math_expression: "f(x,y) = 50x + 70y" }
        ],
        final_answer: "f(x,y) = 50x + 70y"
    },

    // ==========================================
    // תת נושא 3: מציאת פתרונות אופטימליים בגרף תחום אפשרי (10 שאלות)
    // ==========================================

    // שאלה מספר 21
    {
        topic: "linear_prog_opt_371",
        subTopic: "מציאת פתרונות אופטימליים בגרף תחום אפשרי",
        question_text: "נתונה פונקציית מטרה לרווח: \\( f(x,y) = 2x + 3y \\). קודקודי מצולע תחום הפתרונות האפשריים הם: (0,0), (10,0), (0,10), ו-(5,5). מהו הרווח המקסימלי שניתן להפיק?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='20,180 120,180 70,130 20,80' fill='#3b82f6' opacity='0.3' stroke='#3b82f6' stroke-width='2'/><circle cx='20' cy='180' r='4' fill='#ef4444'/><circle cx='120' cy='180' r='4' fill='#ef4444'/><circle cx='70' cy='130' r='4' fill='#ef4444'/><circle cx='20' cy='80' r='4' fill='#ef4444'/></svg></div>",
        options: ["30", "20", "25", "0"],
        correctAnswer: 0,
        hint: "הציבו את כל ארבעת הקודקודים בתוך פונקציית המטרה כדי לבדוק מי מהם מניב את התוצאה הגבוהה ביותר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בדיקת הקודקוד הראשון.", math_expression: "f(0,0) = 2 \\times 0 + 3 \\times 0 = 0" },
            { verbal_explanation: "שלב 2: בדיקת הקודקוד השני.", math_expression: "f(10,0) = 2 \\times 10 + 3 \\times 0 = 20" },
            { verbal_explanation: "שלב 3: בדיקת הקודקוד השלישי.", math_expression: "f(0,10) = 2 \\times 0 + 3 \\times 10 = 30" },
            { verbal_explanation: "שלב 4: בדיקת הקודקוד הרביעי.", math_expression: "f(5,5) = 2 \\times 5 + 3 \\times 5 = 10 + 15 = 25" },
            { verbal_explanation: "שלב 5: השוואת התוצאות לאיתור המקסימום.", math_expression: "30 > 25 > 20 > 0" },
            { verbal_explanation: "שלב 6: המסקנה היא שהרווח המקסימלי הוא שלושים.", math_expression: "30" }
        ],
        final_answer: "30"
    },

    // שאלה מספר 22
    {
        topic: "linear_prog_opt_371",
        subTopic: "מציאת פתרונות אופטימליים בגרף תחום אפשרי",
        question_text: "נתונה פונקציית עלות שעלינו למזער: \\( f(x,y) = 2x + 3y \\). קודקודי התחום האפשרי המוגדר על ידי אילוצי מינימום הם: (2,1), (5,1), ו-(2,6). מהי העלות המינימלית?&rlm;",
        options: ["7", "13", "22", "8"],
        correctAnswer: 0,
        hint: "הציבו את שלושת הקודקודים בפונקציה וחפשו את התוצאה הנמוכה ביותר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנקודה הראשונה למציאת ערך הפונקציה.", math_expression: "f(2,1) = 2 \\times 2 + 3 \\times 1 = 4 + 3 = 7" },
            { verbal_explanation: "שלב 2: הצבת הנקודה השנייה.", math_expression: "f(5,1) = 2 \\times 5 + 3 \\times 1 = 10 + 3 = 13" },
            { verbal_explanation: "שלב 3: הצבת הנקודה השלישית.", math_expression: "f(2,6) = 2 \\times 2 + 3 \\times 6 = 4 + 18 = 22" },
            { verbal_explanation: "שלב 4: בחירת הערך הקטן ביותר מבין השלושה.", math_expression: "7 < 13 < 22" },
            { verbal_explanation: "שלב 5: התשובה הישירה היא שבע.", math_expression: "7" }
        ],
        final_answer: "7"
    },

    // שאלה מספר 23
    {
        topic: "linear_prog_opt_371",
        subTopic: "מציאת פתרונות אופטימליים בגרף תחום אפשרי",
        question_text: "פונקציית מטרה היא \\( f(x,y) = 10x + 15y \\). קודקודי מצולע הפתרונות הם: (0,20), (10,10), (15,0). מהו הערך המקסימלי של הפונקציה בתחום זה?&rlm;",
        options: ["300", "250", "150", "350"],
        correctAnswer: 0,
        hint: "בדקו את שלוש הנקודות בזו אחר זו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בדיקת הקודקוד הראשון.", math_expression: "f(0,20) = 10 \\times 0 + 15 \\times 20 = 300" },
            { verbal_explanation: "שלב 2: בדיקת הקודקוד האמצעי.", math_expression: "f(10,10) = 10 \\times 10 + 15 \\times 10 = 100 + 150 = 250" },
            { verbal_explanation: "שלב 3: בדיקת הקודקוד השלישי.", math_expression: "f(15,0) = 10 \\times 15 + 15 \\times 0 = 150" },
            { verbal_explanation: "שלב 4: השוואת הערכים למציאת נקודת המקסימום.", math_expression: "300 > 250 > 150" },
            { verbal_explanation: "שלב 5: בחירת התשובה שמניבה שלוש מאות.", math_expression: "300" }
        ],
        final_answer: "300"
    },

    // שאלה מספר 24
    {
        topic: "linear_prog_opt_371",
        subTopic: "מציאת פתרונות אופטימליים בגרף תחום אפשרי",
        question_text: "פונקציית מטרה למקסימום: \\( f(x,y) = 5x + y \\). קודקודים: (0,5), (2,4), (4,0). מהו ערך המקסימום?&rlm;",
        options: ["20", "14", "5", "25"],
        correctAnswer: 0,
        hint: "בפונקציה זו, המקדם של x גדול בהרבה. לכן, נקודה עם ערך x גבוה עשויה להניב תוצאה גבוהה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנקודה הראשונה.", math_expression: "f(0,5) = 5 \\times 0 + 1 \\times 5 = 5" },
            { verbal_explanation: "שלב 2: הצבת הנקודה במרכז התחום.", math_expression: "f(2,4) = 5 \\times 2 + 1 \\times 4 = 10 + 4 = 14" },
            { verbal_explanation: "שלב 3: הצבת הנקודה על ציר האיקס.", math_expression: "f(4,0) = 5 \\times 4 + 1 \\times 0 = 20" },
            { verbal_explanation: "שלב 4: איתור התוצאה המרבית.", math_expression: "20 > 14 > 5" },
            { verbal_explanation: "שלב 5: התשובה הנבחרת.", math_expression: "20" }
        ],
        final_answer: "20"
    },

    // שאלה מספר 25
    {
        topic: "linear_prog_opt_371",
        subTopic: "מציאת פתרונות אופטימליים בגרף תחום אפשרי",
        question_text: "פונקציית מטרה למינימום עלות: \\( f(x,y) = x + y \\). קודקודים: (1,1), (1,5), (4,2). מהו ערך המינימום?&rlm;",
        options: ["2", "6", "8", "1"],
        correctAnswer: 0,
        hint: "הפונקציה היא פשוט סכום של שתי הקואורדינטות. מצאו את הנקודה בעלת הסכום הנמוך ביותר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב הערך עבור הקודקוד הראשון.", math_expression: "f(1,1) = 1 + 1 = 2" },
            { verbal_explanation: "שלב 2: חישוב הערך עבור הקודקוד השני.", math_expression: "f(1,5) = 1 + 5 = 6" },
            { verbal_explanation: "שלב 3: חישוב הערך עבור הקודקוד השלישי.", math_expression: "f(4,2) = 4 + 2 = 6" },
            { verbal_explanation: "שלב 4: בחירת הערך המינימלי למשימת המזעור.", math_expression: "2 < 6" },
            { verbal_explanation: "שלב 5: התוצאה למערכת.", math_expression: "2" }
        ],
        final_answer: "2"
    },

    // שאלה מספר 26
    {
        topic: "linear_prog_opt_371",
        subTopic: "מציאת פתרונות אופטימליים בגרף תחום אפשרי",
        question_text: "פונקציית רווח היא \\( f(x,y) = 4x + 6y \\). קודקודי התחום המותר הם (0,0), (5,0), (3,4), ו-(0,6). מהו המקסימום האפשרי לפונקציה?&rlm;",
        options: ["36", "20", "24", "0"],
        correctAnswer: 0,
        hint: "ייתכן מצב שבו שני קודקודים נותנים את אותו ערך מקסימלי (אז כל הצלע ביניהם היא אופטימלית). בידקו היטב את הנקודות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הנקודה באפס מאפסת את הפונקציה ולכן אינה רלוונטית למקסימום.", math_expression: "f(0,0) = 0" },
            { verbal_explanation: "שלב 2: בדיקת הקודקוד על ציר איקס.", math_expression: "f(5,0) = 4 \\times 5 + 6 \\times 0 = 20" },
            { verbal_explanation: "שלב 3: בדיקת הקודקוד הפנימי של התחום.", math_expression: "f(3,4) = 4 \\times 3 + 6 \\times 4 = 12 + 24 = 36" },
            { verbal_explanation: "שלב 4: בדיקת הקודקוד על ציר וואי.", math_expression: "f(0,6) = 4 \\times 0 + 6 \\times 6 = 36" },
            { verbal_explanation: "שלב 5: התוצאה המקסימלית מתקבלת בשתי נקודות והיא זהה.", math_expression: "36" },
            { verbal_explanation: "שלב 6: הרישום לבדיקה.", math_expression: "36" }
        ],
        final_answer: "36"
    },

    // שאלה מספר 27
    {
        topic: "linear_prog_opt_371",
        subTopic: "מציאת פתרונות אופטימליים בגרף תחום אפשרי",
        question_text: "פונקציית מטרה: \\( f(x,y) = 20x + 10y \\). קודקודים: (0,10), (5,8), (8,0). מהו ערך המקסימום?&rlm;",
        options: ["180", "100", "160", "150"],
        correctAnswer: 0,
        hint: "נקודה 'אמצעית' בתחום עשויה להניב תוצאה טובה יותר מהנקודות שעל הצירים. חשבו כל נקודה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: ערך הפונקציה בקצה הראשון.", math_expression: "f(0,10) = 20 \\times 0 + 10 \\times 10 = 100" },
            { verbal_explanation: "שלב 2: ערך הפונקציה בנקודה האמצעית של המצולע.", math_expression: "f(5,8) = 20 \\times 5 + 10 \\times 8 = 100 + 80 = 180" },
            { verbal_explanation: "שלב 3: ערך הפונקציה בקצה השני.", math_expression: "f(8,0) = 20 \\times 8 + 10 \\times 0 = 160" },
            { verbal_explanation: "שלב 4: מציאת הגדול מבין השלושה.", math_expression: "180 > 160 > 100" },
            { verbal_explanation: "שלב 5: התשובה הישירה בחלופות.", math_expression: "180" }
        ],
        final_answer: "180"
    },

    // שאלה מספר 28
    {
        topic: "linear_prog_opt_371",
        subTopic: "מציאת פתרונות אופטימליים בגרף תחום אפשרי",
        question_text: "משפט מרכזי בתכנון ליניארי קובע: פתרון אופטימלי (מקסימום או מינימום) לפונקציית מטרה בתחום אפשרי חסום, יימצא תמיד ב...&rlm;",
        options: ["אחד מקודקודי המצולע", "מרכז המצולע", "נקודת חיתוך הצירים", "נקודה כלשהי בשטח"],
        correctAnswer: 0,
        hint: "בשל העובדה שהפונקציות ליניאריות, הערך גדל או קטן עד שהוא פוגש באחת הפינות של תחום האילוצים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הבנה מתמטית של אופי הפונקציה הליניארית כקו ישר.", math_expression: "f(x,y) = A \\times x + B \\times y" },
            { verbal_explanation: "שלב 2: הקו ישיג את ערכו הקיצוני כאשר הוא יפגוש את קצה התחום המותר.", math_expression: "(x_1, y_1)" },
            { verbal_explanation: "שלב 3: הקצוות החדים של תחום מותר הם הקודקודים.", math_expression: "(x,y)" },
            { verbal_explanation: "שלב 4: זוהי אקסיומה של משפט תכנון ליניארי קלאסי.", math_expression: "(x,y)" },
            { verbal_explanation: "שלב 5: בחירת התשובה התיאורטית המתאימה.", math_expression: "1" }
        ],
        final_answer: "אחד מקודקודי המצולע"
    },

    // שאלה מספר 29
    {
        topic: "linear_prog_opt_371",
        subTopic: "מציאת פתרונות אופטימליים בגרף תחום אפשרי",
        question_text: "פונקציית מטרה: \\( f(x,y) = 100x + 50y \\). הקודקודים הם: (0,5), (2,3), (4,0). באיזו נקודה מתקבל הערך המקסימלי?&rlm;",
        options: ["(4,0)", "(2,3)", "(0,5)", "בכולן הערך שווה"],
        correctAnswer: 0,
        hint: "שימו לב: השאלה שואלת *באיזו נקודה* מתקבל המקסימום, ולא מהו הערך. חשבו והשוו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב הערך בנקודה הראשונה.", math_expression: "f(0,5) = 100 \\times 0 + 50 \\times 5 = 250" },
            { verbal_explanation: "שלב 2: חישוב הערך בנקודה השנייה.", math_expression: "f(2,3) = 100 \\times 2 + 50 \\times 3 = 200 + 150 = 350" },
            { verbal_explanation: "שלב 3: חישוב הערך בנקודה השלישית.", math_expression: "f(4,0) = 100 \\times 4 + 50 \\times 0 = 400" },
            { verbal_explanation: "שלב 4: זיהוי הערך הגדול ביותר.", math_expression: "400 > 350 > 250" },
            { verbal_explanation: "שלב 5: זיהוי הנקודה שהניבה את הערך הזה.", math_expression: "(4,0)" },
            { verbal_explanation: "שלב 6: אישור הבחירה.", math_expression: "(4,0)" }
        ],
        final_answer: "(4,0)"
    },

    // שאלה מספר 30
    {
        topic: "linear_prog_opt_371",
        subTopic: "מציאת פתרונות אופטימליים בגרף תחום אפשרי",
        question_text: "פונקציית מטרה (למזעור פחת): \\( f(x,y) = 3x + 4y \\). התחום האפשרי חסום מלמטה על ידי הקודקודים: (2,2), (2,6), (5,3). מהו ערך המינימום האפשרי לפחת?&rlm;",
        options: ["14", "27", "30", "8"],
        correctAnswer: 0,
        hint: "הציבו את הנקודות בפונקציה. זכרו שעליכם למצוא את המספר הקטן ביותר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנקודה הראשונה לחישוב פחת מינימלי.", math_expression: "f(2,2) = 3 \\times 2 + 4 \\times 2 = 6 + 8 = 14" },
            { verbal_explanation: "שלב 2: הצבת הנקודה השנייה.", math_expression: "f(2,6) = 3 \\times 2 + 4 \\times 6 = 6 + 24 = 30" },
            { verbal_explanation: "שלב 3: הצבת הנקודה השלישית.", math_expression: "f(5,3) = 3 \\times 5 + 4 \\times 3 = 15 + 12 = 27" },
            { verbal_explanation: "שלב 4: חיפוש הערך הנמוך ביותר מבין השלושה.", math_expression: "14 < 27 < 30" },
            { verbal_explanation: "שלב 5: התוצאה הנבחרת למיזעור.", math_expression: "14" }
        ],
        final_answer: "14"
    }
];