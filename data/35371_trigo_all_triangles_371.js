const questionsDB = [
    // ==========================================
    // תת נושא 1: חוק הסינוסים (12 שאלות)
    // ==========================================

    // שאלה מספר 1
    {
        topic: "trig_general_triangles_35371",
        subTopic: "חוק הסינוסים",
        question_text: "במשולש נתון אורך צלע 10 והזווית שמולה היא 45 מעלות. מצאו את אורך הצלע הנמצאת מול זווית של 30 מעלות.&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 300 200' style='max-width:350px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='40,160 260,160 180,40' fill='none' stroke='#3b82f6' stroke-width='3'/><text x='55' y='145' font-size='14' fill='#ef4444'>45°</text><text x='215' y='145' font-size='14' fill='#ef4444'>30°</text><text x='230' y='95' font-size='14' fill='#334155'>10</text><text x='90' y='95' font-size='14' fill='#3b82f6'>x</text></svg></div>",
        options: ["7.07", "8.48", "5.00", "14.14"],
        correctAnswer: 0,
        hint: "לפי חוק הסינוסים, היחס בין כל צלע לסינוס הזווית שמולה הוא קבוע. הציבו את הנתונים במשוואה ובודדו את הנעלם.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת משוואת חוק הסינוסים עם הנתונים והנעלם.", math_expression: "\\dfrac{x}{\\sin(30^{\\circ})} = \\dfrac{10}{\\sin(45^{\\circ})}" },
            { verbal_explanation: "שלב 2: בידוד הנעלם על ידי הכפלת שני האגפים בסינוס של שלושים מעלות.", math_expression: "x = \\dfrac{10 \\times \\sin(30^{\\circ})}{\\sin(45^{\\circ})}" },
            { verbal_explanation: "שלב 3: מציאת הערכים של פונקציות הסינוס במחשבון.", math_expression: "x = \\dfrac{10 \\times 0.5}{0.707}" },
            { verbal_explanation: "שלב 4: ביצוע פעולת הכפל במונה.", math_expression: "x = \\dfrac{5}{0.707}" },
            { verbal_explanation: "שלב 5: ביצוע פעולת החלוקה לקבלת הערך העשרוני.", math_expression: "x \\approx 7.07" },
            { verbal_explanation: "שלב 6: הרישום הסופי הדרוש.", math_expression: "7.07" }
        ],
        final_answer: "7.07"
    },

    // שאלה מספר 2
    {
        topic: "trig_general_triangles_35371",
        subTopic: "חוק הסינוסים",
        question_text: "במשולש נתון אורך צלע 15 והזווית שמולה היא הנעלם. ידועה צלע נוספת שאורכה 20, והזווית שמולה היא 70 מעלות. מצאו את הזווית הנעלמת (עגלו לשתי ספרות עשרוניות).&rlm;",
        options: ["44.82", "55.18", "30.00", "60.00"],
        correctAnswer: 0,
        hint: "הציבו בחוק הסינוסים כך שהסינוס הנעלם נמצא במונה לנוחות החישוב. לאחר מציאת הערך, השתמשו בשיפט סינוס (הפונקציה ההפוכה).",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים בנוסחה, הפעם נציב את הסינוסים במונה.", math_expression: "\\dfrac{\\sin(x)}{15} = \\dfrac{\\sin(70^{\\circ})}{20}" },
            { verbal_explanation: "שלב 2: בידוד סינוס הנעלם על ידי כפל בחמש עשרה.", math_expression: "\\sin(x) = \\dfrac{15 \\times \\sin(70^{\\circ})}{20}" },
            { verbal_explanation: "שלב 3: חישוב הערך של סינוס שבעים במחשבון.", math_expression: "\\sin(x) = \\dfrac{15 \\times 0.939}{20}" },
            { verbal_explanation: "שלב 4: ביצוע הכפל והחילוק במלואם.", math_expression: "\\sin(x) = 0.704" },
            { verbal_explanation: "שלב 5: הפעלת הפונקציה ההפוכה לחילוץ הזווית במעלות.", math_expression: "x = \\sin^{-1}(0.704)" },
            { verbal_explanation: "שלב 6: התוצאה הסופית המעוגלת.", math_expression: "x \\approx 44.82" }
        ],
        final_answer: "44.82"
    },

    // שאלה מספר 3
    {
        topic: "trig_general_triangles_35371",
        subTopic: "חוק הסינוסים",
        question_text: "במשולש החסום במעגל, נתונה צלע שאורכה 12 והזווית שמולה היא 60 מעלות. מצאו את רדיוס המעגל החוסם.&rlm;",
        options: ["6.93", "13.86", "12.00", "10.39"],
        correctAnswer: 0,
        hint: "חוק הסינוסים המורחב קובע שהיחס בין צלע לסינוס הזווית שמולה שווה לפעמיים רדיוס המעגל החוסם.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת משוואת חוק הסינוסים המורחב.", math_expression: "2 \\times R = \\dfrac{12}{\\sin(60^{\\circ})}" },
            { verbal_explanation: "שלב 2: מציאת ערכו של סינוס שישים.", math_expression: "2 \\times R = \\dfrac{12}{0.866}" },
            { verbal_explanation: "שלב 3: ביצוע פעולת החלוקה.", math_expression: "2 \\times R = 13.856" },
            { verbal_explanation: "שלב 4: חלוקת המשוואה בשתיים למציאת הרדיוס עצמו.", math_expression: "R = 13.856 : 2" },
            { verbal_explanation: "שלב 5: התוצאה הסופית המעוגלת של הרדיוס.", math_expression: "R \\approx 6.93" },
            { verbal_explanation: "שלב 6: הרישום לבחירה בתשובות.", math_expression: "6.93" }
        ],
        final_answer: "6.93"
    },

    // שאלה מספר 4
    {
        topic: "trig_general_triangles_35371",
        subTopic: "חוק הסינוסים",
        question_text: "במשולש נתונות שתי זוויות: 50 מעלות ו-70 מעלות. הצלע הנמצאת מול הזווית השלישית אורכה 10. מצאו את אורך הצלע הנמצאת מול הזווית של 50 מעלות.&rlm;",
        options: ["8.84", "7.66", "10.85", "6.42"],
        correctAnswer: 0,
        hint: "מצאו קודם את הזווית השלישית על ידי השלמה למאה ושמונים, ורק אז הפעילו את חוק הסינוסים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב הזווית השלישית במשולש.", math_expression: "y = 180^{\\circ} - (50^{\\circ} + 70^{\\circ})" },
            { verbal_explanation: "שלב 2: סכימה וחיסור למציאת הזווית.", math_expression: "y = 60^{\\circ}" },
            { verbal_explanation: "שלב 3: כעת נבנה את משוואת חוק הסינוסים למציאת הצלע הנעלמת.", math_expression: "\\dfrac{x}{\\sin(50^{\\circ})} = \\dfrac{10}{\\sin(60^{\\circ})}" },
            { verbal_explanation: "שלב 4: בידוד הצלע הנעלמת.", math_expression: "x = \\dfrac{10 \\times \\sin(50^{\\circ})}{\\sin(60^{\\circ})}" },
            { verbal_explanation: "שלב 5: הצבת הערכים העשרוניים של הפונקציות.", math_expression: "x = \\dfrac{10 \\times 0.766}{0.866}" },
            { verbal_explanation: "שלב 6: פתרון הכפל והחילוק.", math_expression: "x = 7.66 : 0.866 \\approx 8.84" },
            { verbal_explanation: "שלב 7: הרישום הרלוונטי.", math_expression: "8.84" }
        ],
        final_answer: "8.84"
    },

    // שאלה מספר 5
    {
        topic: "trig_general_triangles_35371",
        subTopic: "חוק הסינוסים",
        question_text: "רדיוס המעגל החוסם משולש הוא 8. הזווית מול אחת הצלעות היא 120 מעלות. מהו אורך צלע זו?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><circle cx='100' cy='100' r='80' fill='none' stroke='#3b82f6' stroke-width='2'/><polygon points='20,100 180,100 100,160' fill='none' stroke='#ef4444' stroke-width='3'/><text x='90' y='145' font-size='12' fill='#ef4444'>120°</text><text x='100' y='90' font-size='14' fill='#334155'>x</text></svg></div>",
        options: ["13.86", "6.93", "16.00", "8.00"],
        correctAnswer: 0,
        hint: "הציבו את הרדיוס בחוק הסינוסים המורחב (פעמיים רדיוס שווה לצלע חלקי סינוס הזווית ממול) ובודדו את הצלע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: רישום המשוואה הרלוונטית הכוללת את הרדיוס.", math_expression: "2 \\times 8 = \\dfrac{x}{\\sin(120^{\\circ})}" },
            { verbal_explanation: "שלב 2: ביצוע פעולת הכפל באגף שמאל.", math_expression: "16 = \\dfrac{x}{\\sin(120^{\\circ})}" },
            { verbal_explanation: "שלב 3: בידוד הצלע הנעלמת באמצעות כפל בסינוס.", math_expression: "x = 16 \\times \\sin(120^{\\circ})" },
            { verbal_explanation: "שלב 4: מציאת ערך הסינוס לזווית קהה זו.", math_expression: "x = 16 \\times 0.866" },
            { verbal_explanation: "שלב 5: חישוב התוצאה הסופית של המכפלה.", math_expression: "x \\approx 13.856" },
            { verbal_explanation: "שלב 6: עיגול לשתי ספרות עשרוניות כנהוג.", math_expression: "13.86" }
        ],
        final_answer: "13.86"
    },

    // שאלה מספר 6
    {
        topic: "trig_general_triangles_35371",
        subTopic: "חוק הסינוסים",
        question_text: "במשולש ישר זווית, אורך היתר הוא 20. הזווית מול אחת הצלעות היא 30 מעלות. השתמשו בחוק הסינוסים כדי למצוא את אורך הצלע (רמז: הזווית מול היתר היא 90 מעלות).&rlm;",
        options: ["10", "17.32", "5", "20"],
        correctAnswer: 0,
        hint: "חוק הסינוסים עובד כמובן גם במשולש ישר זווית. סינוס של תשעים מעלות שווה לאחת.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת הפרופורציה המלאה על סמך חוק הסינוסים.", math_expression: "\\dfrac{x}{\\sin(30^{\\circ})} = \\dfrac{20}{\\sin(90^{\\circ})}" },
            { verbal_explanation: "שלב 2: הצבת הערך הידוע של סינוס תשעים שהוא תמיד אחת.", math_expression: "\\dfrac{x}{\\sin(30^{\\circ})} = \\dfrac{20}{1}" },
            { verbal_explanation: "שלב 3: בידוד הנעלם.", math_expression: "x = 20 \\times \\sin(30^{\\circ})" },
            { verbal_explanation: "שלב 4: מציאת סינוס שלושים.", math_expression: "x = 20 \\times 0.5" },
            { verbal_explanation: "שלב 5: קבלת התוצאה (התואמת לכלל שהצלע מול שלושים מעלות שווה לחצי היתר).", math_expression: "x = 10" },
            { verbal_explanation: "שלב 6: הרישום.", math_expression: "10" }
        ],
        final_answer: "10"
    },

    // שאלה מספר 7
    {
        topic: "trig_general_triangles_35371",
        subTopic: "חוק הסינוסים",
        question_text: "רדיוס המעגל החוסם משולש הוא 6. אורך צלע אחת הוא 9. חשבו את הזווית הנמצאת מול צלע זו (בהנחה שהיא זווית חדה).&rlm;",
        options: ["48.59", "41.41", "30.00", "60.00"],
        correctAnswer: 0,
        hint: "הציבו שוב בנוסחת חוק הסינוסים המורחב, אך הפעם הנעלם הוא הזווית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית המשוואה כאשר הנעלם בתוך פונקציית הסינוס.", math_expression: "2 \\times 6 = \\dfrac{9}{\\sin(x)}" },
            { verbal_explanation: "שלב 2: ביצוע הכפל באגף שמאל.", math_expression: "12 = \\dfrac{9}{\\sin(x)}" },
            { verbal_explanation: "שלב 3: חילוף אלגברי בין הסינוס למספר השלם לשם בידוד.", math_expression: "\\sin(x) = \\dfrac{9}{12}" },
            { verbal_explanation: "שלב 4: צמצום השבר לערך עשרוני.", math_expression: "\\sin(x) = 0.75" },
            { verbal_explanation: "שלב 5: שימוש בפעולה ההפוכה במחשבון.", math_expression: "x = \\sin^{-1}(0.75)" },
            { verbal_explanation: "שלב 6: קבלת ערך הזווית המעוגל.", math_expression: "x \\approx 48.59" },
            { verbal_explanation: "שלב 7: התשובה הדרושה.", math_expression: "48.59" }
        ],
        final_answer: "48.59"
    },

    // שאלה מספר 8
    {
        topic: "trig_general_triangles_35371",
        subTopic: "חוק הסינוסים",
        question_text: "במשולש שווה שוקיים, אורך הבסיס הוא 10 וזווית הבסיס היא 40 מעלות. מצאו את אורך השוק של המשולש בעזרת חוק הסינוסים.&rlm;",
        options: ["6.53", "7.66", "13.05", "5.00"],
        correctAnswer: 0,
        hint: "מצאו תחילה את זווית הראש (מול הבסיס) על ידי השלמה למאה ושמונים, ואז הפעילו את החוק.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב זווית הראש במשולש שווה שוקיים.", math_expression: "y = 180^{\\circ} - (40^{\\circ} + 40^{\\circ})" },
            { verbal_explanation: "שלב 2: השלמת החישוב.", math_expression: "y = 100^{\\circ}" },
            { verbal_explanation: "שלב 3: בניית פרופורציית חוק הסינוסים.", math_expression: "\\dfrac{x}{\\sin(40^{\\circ})} = \\dfrac{10}{\\sin(100^{\\circ})}" },
            { verbal_explanation: "שלב 4: בידוד אורך השוק הנעלם.", math_expression: "x = \\dfrac{10 \\times \\sin(40^{\\circ})}{\\sin(100^{\\circ})}" },
            { verbal_explanation: "שלב 5: הוצאת הערכים מהמחשבון.", math_expression: "x = \\dfrac{10 \\times 0.642}{0.984}" },
            { verbal_explanation: "שלב 6: ביצוע החישוב במלואו.", math_expression: "x = 6.42 : 0.984 \\approx 6.524" },
            { verbal_explanation: "שלב 7: העיגול המסכם לאפשרויות.", math_expression: "6.53" }
        ],
        final_answer: "6.53"
    },

    // שאלה מספר 9
    {
        topic: "trig_general_triangles_35371",
        subTopic: "חוק הסינוסים",
        question_text: "במשולש שתי זוויות הן 45 מעלות ו-60 מעלות. אורך הצלע שמול זווית ה-45 מעלות הוא 5. חשבו את אורך הצלע שמול זווית ה-60 מעלות.&rlm;",
        options: ["6.12", "4.33", "8.66", "5.00"],
        correctAnswer: 0,
        hint: "זוהי הצבה פשוטה וישירה בחוק הסינוסים. בודדו את הצלע והשתמשו בערכים מקורבים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: רישום המשוואה על בסיס חוק הסינוסים.", math_expression: "\\dfrac{x}{\\sin(60^{\\circ})} = \\dfrac{5}{\\sin(45^{\\circ})}" },
            { verbal_explanation: "שלב 2: העברת המכנה באגף שמאל ימינה בפעולת כפל.", math_expression: "x = \\dfrac{5 \\times \\sin(60^{\\circ})}{\\sin(45^{\\circ})}" },
            { verbal_explanation: "שלב 3: המרת פונקציות טריגונומטריות למספרים עשרוניים.", math_expression: "x = \\dfrac{5 \\times 0.866}{0.707}" },
            { verbal_explanation: "שלב 4: כפל במונה.", math_expression: "x = \\dfrac{4.33}{0.707}" },
            { verbal_explanation: "שלב 5: חלוקה לקבלת הערך המספרי של הצלע.", math_expression: "x \\approx 6.124" },
            { verbal_explanation: "שלב 6: הרישום לבחירה.", math_expression: "6.12" }
        ],
        final_answer: "6.12"
    },

    // שאלה מספר 10
    {
        topic: "trig_general_triangles_35371",
        subTopic: "חוק הסינוסים",
        question_text: "במשולש, צלע אחת באורך 7, צלע שנייה באורך 9, והזווית מול הצלע באורך 7 היא 30 מעלות. מצאו את הזווית החדה הנמצאת מול הצלע באורך 9.&rlm;",
        options: ["40.00", "50.00", "22.88", "60.00"],
        correctAnswer: 0,
        hint: "הציבו בחוק הסינוסים את שתי הצלעות ושתי הזוויות שמולן, וחילצו את הזווית הנעלמת באמצעות שיפט סינוס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים בפרופורציה.", math_expression: "\\dfrac{\\sin(x)}{9} = \\dfrac{\\sin(30^{\\circ})}{7}" },
            { verbal_explanation: "שלב 2: בידוד פונקציית הסינוס של הנעלם.", math_expression: "\\sin(x) = \\dfrac{9 \\times \\sin(30^{\\circ})}{7}" },
            { verbal_explanation: "שלב 3: הצבת הערך הידוע של סינוס שלושים (חצי).", math_expression: "\\sin(x) = \\dfrac{9 \\times 0.5}{7}" },
            { verbal_explanation: "שלב 4: ביצוע פעולות החשבון.", math_expression: "\\sin(x) = \\dfrac{4.5}{7} \\approx 0.6428" },
            { verbal_explanation: "שלב 5: הפעלת פונקציה הפוכה למציאת המעלות.", math_expression: "x = \\sin^{-1}(0.6428)" },
            { verbal_explanation: "שלב 6: התשובה המעוגלת במעלות.", math_expression: "x \\approx 40.00" },
            { verbal_explanation: "שלב 7: הרישום הסופי.", math_expression: "40.00" }
        ],
        final_answer: "40.00"
    },

    // שאלה מספר 11
    {
        topic: "trig_general_triangles_35371",
        subTopic: "חוק הסינוסים",
        question_text: "משולש שווה צלעות חסום במעגל שרדיוסו 4. מהו אורך צלע המשולש?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><circle cx='100' cy='100' r='80' fill='none' stroke='#3b82f6' stroke-width='2'/><polygon points='100,20 169,140 31,140' fill='none' stroke='#10b981' stroke-width='3'/><line x1='100' y1='100' x2='169' y2='140' stroke='#64748b' stroke-dasharray='4,4' stroke-width='2'/><text x='130' y='110' font-size='12' fill='#334155'>4</text><text x='100' y='155' font-size='14' fill='#10b981'>x</text></svg></div>",
        options: ["6.93", "8.00", "4.00", "3.46"],
        correctAnswer: 0,
        hint: "במשולש שווה צלעות, כל הזוויות הן 60 מעלות. השתמשו בחוק הסינוסים המורחב עם הרדיוס הנתון.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי הזווית הפנימית הרלוונטית במשולש שווה צלעות.", math_expression: "y = 60^{\\circ}" },
            { verbal_explanation: "שלב 2: בניית המשוואה המקשרת בין הצלע, הזווית והרדיוס החוסם.", math_expression: "\\dfrac{x}{\\sin(60^{\\circ})} = 2 \\times 4" },
            { verbal_explanation: "שלב 3: פישוט אגף ימין.", math_expression: "\\dfrac{x}{\\sin(60^{\\circ})} = 8" },
            { verbal_explanation: "שלב 4: בידוד הצלע על ידי הכפלה בסינוס.", math_expression: "x = 8 \\times \\sin(60^{\\circ})" },
            { verbal_explanation: "שלב 5: המרת הסינוס לעשרוני.", math_expression: "x = 8 \\times 0.866" },
            { verbal_explanation: "שלב 6: המכפלה הסופית.", math_expression: "x = 6.928" },
            { verbal_explanation: "שלב 7: העיגול לקבלת התשובה הנכונה.", math_expression: "6.93" }
        ],
        final_answer: "6.93"
    },

    // שאלה מספר 12
    {
        topic: "trig_general_triangles_35371",
        subTopic: "חוק הסינוסים",
        question_text: "במשולש, אורך צלע אחת הוא 12 והזווית שמולה היא 45 מעלות. הזווית מול צלע שנייה היא 90 מעלות. חשבו את אורך הצלע השנייה.&rlm;",
        options: ["16.97", "12.00", "8.48", "24.00"],
        correctAnswer: 0,
        hint: "זהו למעשה משולש ישר זווית, והצלע השנייה היא היתר. הפעילו את חוק הסינוסים וזכרו שסינוס של תשעים הוא אחת.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית פרופורציית חוק הסינוסים.", math_expression: "\\dfrac{x}{\\sin(90^{\\circ})} = \\dfrac{12}{\\sin(45^{\\circ})}" },
            { verbal_explanation: "שלב 2: הצבת הערך הידוע של סינוס תשעים.", math_expression: "\\dfrac{x}{1} = \\dfrac{12}{\\sin(45^{\\circ})}" },
            { verbal_explanation: "שלב 3: הוצאת סינוס ארבעים וחמש במחשבון.", math_expression: "x = \\dfrac{12}{0.707}" },
            { verbal_explanation: "שלב 4: ביצוע פעולת החלוקה.", math_expression: "x \\approx 16.97" },
            { verbal_explanation: "שלב 5: התוצאה המוכנה להזנה.", math_expression: "16.97" }
        ],
        final_answer: "16.97"
    },

    // ==========================================
    // תת נושא 2: חוק הקוסינוסים (12 שאלות)
    // ==========================================

    // שאלה מספר 13
    {
        topic: "trig_general_triangles_35371",
        subTopic: "חוק הקוסינוסים",
        question_text: "במשולש, אורך צלע אחת הוא 5, אורך שנייה הוא 8, והזווית הכלואה ביניהן היא 60 מעלות. חשבו את אורך הצלע השלישית.&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='20,160 160,160 80,40' fill='none' stroke='#f59e0b' stroke-width='3'/><path d='M 40 160 A 20 20 0 0 0 35 130' fill='none' stroke='#ef4444' stroke-width='2'/><text x='50' y='145' font-size='12' fill='#ef4444'>60°</text><text x='90' y='180' font-size='14' fill='#334155'>8</text><text x='35' y='95' font-size='14' fill='#334155'>5</text><text x='130' y='95' font-size='14' fill='#f59e0b'>x</text></svg></div>",
        options: ["7", "8.94", "49", "9"],
        correctAnswer: 0,
        hint: "הפעילו את חוק הקוסינוסים. סכום ריבועי שתי הצלעות פחות פעמיים מכפלתן בקוסינוס הזווית הכלואה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים בנוסחת חוק הקוסינוסים.", math_expression: "x^{2} = 5^{2} + 8^{2} - 2 \\times 5 \\times 8 \\times \\cos(60^{\\circ})" },
            { verbal_explanation: "שלב 2: העלאת המספרים בריבוע.", math_expression: "x^{2} = 25 + 64 - 80 \\times \\cos(60^{\\circ})" },
            { verbal_explanation: "שלב 3: מציאת ערך הקוסינוס.", math_expression: "\\cos(60^{\\circ}) = 0.5" },
            { verbal_explanation: "שלב 4: ביצוע פעולות הכפל והחיבור.", math_expression: "x^{2} = 89 - 80 \\times 0.5" },
            { verbal_explanation: "שלב 5: המשך הפעולות (חיסור ארבעים).", math_expression: "x^{2} = 89 - 40 = 49" },
            { verbal_explanation: "שלב 6: הוצאת שורש ריבועי למציאת אורך הצלע המבוקשת.", math_expression: "x = \\sqrt{49} = 7" },
            { verbal_explanation: "שלב 7: הרישום לבדיקה.", math_expression: "7" }
        ],
        final_answer: "7"
    },

    // שאלה מספר 14
    {
        topic: "trig_general_triangles_35371",
        subTopic: "חוק הקוסינוסים",
        question_text: "במשולש, צלעות באורך 4 ו-6 יוצרות ביניהן זווית קהה של 120 מעלות. מהו אורך הצלע שמול זווית זו?&rlm;",
        options: ["8.71", "76", "5.29", "10"],
        correctAnswer: 0,
        hint: "קוסינוס של זווית קהה (מעל 90) הוא שלילי. לכן, הביטוי המחוסר בסוף הנוסחה יהפוך לחיבור.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית המשוואה המלאה לחוק הקוסינוסים.", math_expression: "x^{2} = 4^{2} + 6^{2} - 2 \\times 4 \\times 6 \\times \\cos(120^{\\circ})" },
            { verbal_explanation: "שלב 2: חישוב הריבועים.", math_expression: "x^{2} = 16 + 36 - 48 \\times \\cos(120^{\\circ})" },
            { verbal_explanation: "שלב 3: מציאת ערך הקוסינוס (הוא שלילי כי הזווית קהה).", math_expression: "\\cos(120^{\\circ}) = -0.5" },
            { verbal_explanation: "שלב 4: הצבה והיפוך הסימן מחיסור לחיבור בגלל כפל בשלילי.", math_expression: "x^{2} = 52 - 48 \\times (-0.5)" },
            { verbal_explanation: "שלב 5: חישוב הסכום.", math_expression: "x^{2} = 52 + 24 = 76" },
            { verbal_explanation: "שלב 6: הוצאת שורש לקבלת הצלע.", math_expression: "x = \\sqrt{76} \\approx 8.717" },
            { verbal_explanation: "שלב 7: העיגול המסכם.", math_expression: "8.71" }
        ],
        final_answer: "8.71"
    },

    // שאלה מספר 15
    {
        topic: "trig_general_triangles_35371",
        subTopic: "חוק הקוסינוסים",
        question_text: "במשולש, אורכי הצלעות הם 7, 8 ו-9. מצאו את הזווית הנמצאת מול הצלע שאורכה 9.&rlm;",
        options: ["73.40", "48.19", "58.41", "80.00"],
        correctAnswer: 0,
        hint: "הציבו את 9 בצד אחד של המשוואה לבדו. העבירו אגפים כדי לבודד את הקוסינוס ואז הפעילו שיפט קוסינוס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבה בחוק הקוסינוסים כאשר הזווית היא הנעלם.", math_expression: "9^{2} = 7^{2} + 8^{2} - 2 \\times 7 \\times 8 \\times \\cos(y)" },
            { verbal_explanation: "שלב 2: חישוב הערכים המספריים (חזקות ומכפלות).", math_expression: "81 = 49 + 64 - 112 \\times \\cos(y)" },
            { verbal_explanation: "שלב 3: כינוס שני המספרים באגף ימין.", math_expression: "81 = 113 - 112 \\times \\cos(y)" },
            { verbal_explanation: "שלב 4: העברת המאה ושלוש עשרה בחיסור אגף.", math_expression: "-32 = -112 \\times \\cos(y)" },
            { verbal_explanation: "שלב 5: בידוד הקוסינוס על ידי חלוקה.", math_expression: "\\cos(y) = -32 : -112 \\approx 0.2857" },
            { verbal_explanation: "שלב 6: חילוץ הזווית במחשבון בעזרת פעולה הפוכה.", math_expression: "y = \\cos^{-1}(0.2857) \\approx 73.398" },
            { verbal_explanation: "שלב 7: עיגול הערך כנדרש בבחינה.", math_expression: "73.40" }
        ],
        final_answer: "73.40"
    },

    // שאלה מספר 16
    {
        topic: "trig_general_triangles_35371",
        subTopic: "חוק הקוסינוסים",
        question_text: "אורכי צלעות משולש הם 3, 5 ו-7. מהי הזווית הנמצאת מול הצלע הארוכה ביותר (7)?&rlm;",
        options: ["120", "60", "150", "90"],
        correctAnswer: 0,
        hint: "כמו בשאלה הקודמת, בודדו את קוסינוס הזווית. אם התוצאה שלילית, מדובר בזווית קהה (מעל 90).",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת חוק הקוסינוסים עם הצלע שבע כמבודדת.", math_expression: "7^{2} = 3^{2} + 5^{2} - 2 \\times 3 \\times 5 \\times \\cos(y)" },
            { verbal_explanation: "שלב 2: ביצוע חזקות וכפל מוקדם.", math_expression: "49 = 9 + 25 - 30 \\times \\cos(y)" },
            { verbal_explanation: "שלב 3: חיבור המספרים הפשוטים באגף ימין.", math_expression: "49 = 34 - 30 \\times \\cos(y)" },
            { verbal_explanation: "שלב 4: העברת אגפים לקראת חלוקה.", math_expression: "15 = -30 \\times \\cos(y)" },
            { verbal_explanation: "שלב 5: חלוקת חמש עשרה במינוס שלושים.", math_expression: "\\cos(y) = 15 : -30 = -0.5" },
            { verbal_explanation: "שלב 6: הפעלת פונקציה הפוכה לקוסינוס שלילי.", math_expression: "y = \\cos^{-1}(-0.5) = 120^{\\circ}" },
            { verbal_explanation: "שלב 7: זו אכן זווית קהה כמצופה.", math_expression: "120" }
        ],
        final_answer: "120"
    },

    // שאלה מספר 17
    {
        topic: "trig_general_triangles_35371",
        subTopic: "חוק הקוסינוסים",
        question_text: "במקבילית, שתי צלעות סמוכות הן באורך 6 ו-10. הזווית החדה ביניהן היא 60 מעלות. חשבו את אורך האלכסון הקצר של המקבילית.&rlm;",
        options: ["8.71", "76", "14", "11.66"],
        correctAnswer: 0,
        hint: "האלכסון הקצר נמצא ממול לזווית החדה. השתמשו בחוק הקוסינוסים במשולש שנוצר.",
        solution_steps: [
            { verbal_explanation: "שלב 1: האלכסון מחלק את המקבילית למשולש שבו שתי צלעות ידועות וזווית כלואה ידועה.", math_expression: "x^{2} = 6^{2} + 10^{2} - 2 \\times 6 \\times 10 \\times \\cos(60^{\\circ})" },
            { verbal_explanation: "שלב 2: העלאה בריבוע של הערכים.", math_expression: "x^{2} = 36 + 100 - 120 \\times 0.5" },
            { verbal_explanation: "שלב 3: ביצוע כפל (מאה ועשרים כפול חצי).", math_expression: "x^{2} = 136 - 60" },
            { verbal_explanation: "שלב 4: פעולת החיסור.", math_expression: "x^{2} = 76" },
            { verbal_explanation: "שלב 5: הוצאת שורש למציאת אורך האלכסון.", math_expression: "x = \\sqrt{76} \\approx 8.717" },
            { verbal_explanation: "שלב 6: העיגול המסכם לאפשרות הרצויה.", math_expression: "8.71" }
        ],
        final_answer: "8.71"
    },

    // שאלה מספר 18
    {
        topic: "trig_general_triangles_35371",
        subTopic: "חוק הקוסינוסים",
        question_text: "באותה מקבילית (צלעות 6 ו-10), חשבו את אורך האלכסון הארוך.&rlm;",
        options: ["14", "196", "8.71", "16"],
        correctAnswer: 0,
        hint: "האלכסון הארוך מונח מול הזווית הקהה. במקבילית זוויות סמוכות משלימות ל-180, לכן הזווית הקהה היא 120 מעלות.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב הזווית הקהה של המקבילית.", math_expression: "\\alpha = 180^{\\circ} - 60^{\\circ} = 120^{\\circ}" },
            { verbal_explanation: "שלב 2: בניית המשוואה לפי חוק הקוסינוסים עם הזווית החדשה.", math_expression: "x^{2} = 6^{2} + 10^{2} - 2 \\times 6 \\times 10 \\times \\cos(120^{\\circ})" },
            { verbal_explanation: "שלב 3: מציאת ערך הקוסינוס שהוא שלילי עתה.", math_expression: "\\cos(120^{\\circ}) = -0.5" },
            { verbal_explanation: "שלב 4: פישוט המשוואה תוך היפוך סימן המינוס הכפול לפלוס.", math_expression: "x^{2} = 36 + 100 - 120 \\times (-0.5) = 136 + 60" },
            { verbal_explanation: "שלב 5: סכום התוצאה באגף הימני.", math_expression: "x^{2} = 196" },
            { verbal_explanation: "שלב 6: הוצאת שורש ריבועי לקבלת אורך האלכסון הארוך.", math_expression: "x = \\sqrt{196} = 14" },
            { verbal_explanation: "שלב 7: הרישום לבדיקה.", math_expression: "14" }
        ],
        final_answer: "14"
    },

    // שאלה מספר 19
    {
        topic: "trig_general_triangles_35371",
        subTopic: "חוק הקוסינוסים",
        question_text: "במשולש שווה שוקיים, אורך כל שוק הוא 10 וזווית הראש היא 30 מעלות. מצאו את אורך הבסיס בעזרת חוק הקוסינוסים.&rlm;",
        options: ["5.17", "26.8", "10", "8.66"],
        correctAnswer: 0,
        hint: "הציבו במשפט הקוסינוס את שתי השוקיים (10 ו-10) והזווית הכלואה (30).",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים בתבנית הנוסחה.", math_expression: "x^{2} = 10^{2} + 10^{2} - 2 \\times 10 \\times 10 \\times \\cos(30^{\\circ})" },
            { verbal_explanation: "שלב 2: העלאה בריבוע והכפלות.", math_expression: "x^{2} = 100 + 100 - 200 \\times \\cos(30^{\\circ})" },
            { verbal_explanation: "שלב 3: הוצאת קוסינוס במחשבון.", math_expression: "\\cos(30^{\\circ}) \\approx 0.866" },
            { verbal_explanation: "שלב 4: ביצוע פעולת הכפל.", math_expression: "x^{2} = 200 - 200 \\times 0.866 = 200 - 173.2" },
            { verbal_explanation: "שלב 5: פעולת החיסור.", math_expression: "x^{2} = 26.8" },
            { verbal_explanation: "שלב 6: הוצאת שורש לקבלת הבסיס.", math_expression: "x = \\sqrt{26.8} \\approx 5.17" },
            { verbal_explanation: "שלב 7: השלמה לבחירה הנכונה.", math_expression: "5.17" }
        ],
        final_answer: "5.17"
    },

    // שאלה מספר 20
    {
        topic: "trig_general_triangles_35371",
        subTopic: "חוק הקוסינוסים",
        question_text: "במשולש, צלע אחת גדולה פי 2 מהצלע השנייה. הזווית הכלואה ביניהן היא 60 מעלות. אורך הצלע השלישית הוא שורש של 21. מצאו את אורך הצלע הקצרה ביותר במשולש.&rlm;",
        options: ["2.64", "7", "5.29", "14"],
        correctAnswer: 0,
        hint: "סמנו צלע אחת באיקס ואת השנייה בשני איקס. בנו משוואת קוסינוס, כנסו איברים ופתרו משוואה ריבועית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הגדרת הצלעות עם נעלמים.", math_expression: "a = x \\quad , \\quad b = 2x" },
            { verbal_explanation: "שלב 2: הצבה בחוק הקוסינוסים, כשהצלע השלישית בריבוע בודדת באגף.", math_expression: "(\\sqrt{21})^{2} = x^{2} + (2x)^{2} - 2 \\times x \\times 2x \\times \\cos(60^{\\circ})" },
            { verbal_explanation: "שלב 3: פישוט חזקות. שורש מעלה בריבוע מבטל את עצמו.", math_expression: "21 = x^{2} + 4x^{2} - 4x^{2} \\times 0.5" },
            { verbal_explanation: "שלב 4: ביצוע פעולת הכפל באגף ימין.", math_expression: "21 = 5x^{2} - 2x^{2}" },
            { verbal_explanation: "שלב 5: כינוס של האיקסים.", math_expression: "21 = 3x^{2}" },
            { verbal_explanation: "שלב 6: חלוקת המשוואה בשלוש.", math_expression: "x^{2} = 7" },
            { verbal_explanation: "שלב 7: הוצאת שורש למציאת הצלע הקצרה (שהיא איקס אחד).", math_expression: "x = \\sqrt{7} \\approx 2.645" }
        ],
        final_answer: "2.64"
    },

    // שאלה מספר 21
    {
        topic: "trig_general_triangles_35371",
        subTopic: "חוק הקוסינוסים",
        question_text: "במעוין, אורך צלע הוא 8 והזווית החדה היא 40 מעלות. מהו אורך האלכסון הקצר של המעוין?&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='100,20 160,100 100,180 40,100' fill='none' stroke='#10b981' stroke-width='3'/><line x1='40' y1='100' x2='160' y2='100' stroke='#f59e0b' stroke-dasharray='4,4' stroke-width='2'/><path d='M 100 150 A 30 30 0 0 0 85 160' fill='none' stroke='#ef4444' stroke-width='2'/><text x='75' y='145' font-size='10' fill='#ef4444'>40°</text><text x='140' y='155' font-size='14' fill='#334155'>8</text><text x='100' y='90' font-size='14' fill='#f59e0b'>x</text></svg></div>",
        options: ["5.47", "29.95", "8", "6.22"],
        correctAnswer: 0,
        hint: "האלכסון הקצר סוגר משולש שווה שוקיים (שתיהן 8) שזווית הראש שלו היא 40. חוק הקוסינוסים יפתור זאת מיד.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבה ישירה למשוואת משפט הקוסינוסים.", math_expression: "x^{2} = 8^{2} + 8^{2} - 2 \\times 8 \\times 8 \\times \\cos(40^{\\circ})" },
            { verbal_explanation: "שלב 2: העלאה בריבוע והכפלה של שני האגפים הראשונים.", math_expression: "x^{2} = 64 + 64 - 128 \\times \\cos(40^{\\circ})" },
            { verbal_explanation: "שלב 3: מציאת הקוסינוס של ארבעים מעלות.", math_expression: "\\cos(40^{\\circ}) \\approx 0.766" },
            { verbal_explanation: "שלב 4: ביצוע פעולות הכפל והחיבור.", math_expression: "x^{2} = 128 - 128 \\times 0.766 = 128 - 98.048" },
            { verbal_explanation: "שלב 5: תוצאת החיסור.", math_expression: "x^{2} = 29.952" },
            { verbal_explanation: "שלב 6: הוצאת שורש ריבועי למציאת אורך האלכסון.", math_expression: "x = \\sqrt{29.952} \\approx 5.47" },
            { verbal_explanation: "שלב 7: הבחירה הנכונה.", math_expression: "5.47" }
        ],
        final_answer: "5.47"
    },

    // שאלה מספר 22
    {
        topic: "trig_general_triangles_35371",
        subTopic: "חוק הקוסינוסים",
        question_text: "במשולש שווה שוקיים, אורך השוקיים הוא 5 ואורך הבסיס הוא 8. מצאו את זווית הבסיס (זווית שבין שוק לבסיס).&rlm;",
        options: ["36.87", "53.13", "106.26", "45.00"],
        correctAnswer: 0,
        hint: "הציבו את השוק (5) מבודדת בצד אחד של המשוואה. הצלעות האחרות (השוק השנייה 5 והבסיס 8) יחד עם זווית הבסיס הלא ידועה ירכיבו את צד ימין.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבה של הנתונים כך שהצלע ממול לזווית (שוק 5) מבודדת.", math_expression: "5^{2} = 5^{2} + 8^{2} - 2 \\times 5 \\times 8 \\times \\cos(y)" },
            { verbal_explanation: "שלב 2: העלאה בריבוע של כל האיברים.", math_expression: "25 = 25 + 64 - 80 \\times \\cos(y)" },
            { verbal_explanation: "שלב 3: העברת העשרים וחמש שמאלה וכינוס איברים.", math_expression: "0 = 64 - 80 \\times \\cos(y)" },
            { verbal_explanation: "שלב 4: העברת השמונים קוסינוס אגף לבידודו.", math_expression: "80 \\times \\cos(y) = 64" },
            { verbal_explanation: "שלב 5: חלוקה בשמונים למציאת הערך העשרוני של הקוסינוס.", math_expression: "\\cos(y) = 64 : 80 = 0.8" },
            { verbal_explanation: "שלב 6: חילוץ הזווית בעזרת שיפט קוסינוס.", math_expression: "y = \\cos^{-1}(0.8) \\approx 36.869" },
            { verbal_explanation: "שלב 7: הרישום של התוצאה המעוגלת.", math_expression: "36.87" }
        ],
        final_answer: "36.87"
    },

    // שאלה מספר 23
    {
        topic: "trig_general_triangles_35371",
        subTopic: "חוק הקוסינוסים",
        question_text: "במעוין, האלכסונים הם 10 ו-24, וצלע המעוין היא 13 (ניתן לחשב בפיתגורס). השתמשו בחוק הקוסינוסים כדי למצוא את הזווית החדה של המעוין שמול האלכסון הקצר.&rlm;",
        options: ["45.24", "22.62", "67.38", "90.48"],
        correctAnswer: 0,
        hint: "משולש המורכב משתי צלעות המעוין והאלכסון הקצר: הצלעות הן 13 ו-13, והיתר (במשוואה) הוא 10.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבה בחוק הקוסינוסים במשולש הנבחר במעוין.", math_expression: "10^{2} = 13^{2} + 13^{2} - 2 \\times 13 \\times 13 \\times \\cos(y)" },
            { verbal_explanation: "שלב 2: העלאה בריבוע.", math_expression: "100 = 169 + 169 - 338 \\times \\cos(y)" },
            { verbal_explanation: "שלב 3: חיבור המספרים הפשוטים יחד.", math_expression: "100 = 338 - 338 \\times \\cos(y)" },
            { verbal_explanation: "שלב 4: העברת אגפים לבידוד פונקציית הקוסינוס.", math_expression: "338 \\times \\cos(y) = 338 - 100 = 238" },
            { verbal_explanation: "שלב 5: חלוקה בשלוש מאות שלושים ושמונה.", math_expression: "\\cos(y) = 238 : 338 \\approx 0.7041" },
            { verbal_explanation: "שלב 6: מציאת הזווית במעלות בעזרת המחשבון.", math_expression: "y = \\cos^{-1}(0.7041) \\approx 45.24" },
            { verbal_explanation: "שלב 7: התוצאה המוזנת.", math_expression: "45.24" }
        ],
        final_answer: "45.24"
    },

    // שאלה מספר 24
    {
        topic: "trig_general_triangles_35371",
        subTopic: "חוק הקוסינוסים",
        question_text: "במשולש ישר זווית שני ניצבים באורכים 12 ו-16, והזווית הכלואה ביניהם היא 90. הוכיחו כי חוק הקוסינוסים מניב את אותה תוצאה של היתר כמו משפט פיתגורס.&rlm;",
        options: ["20", "400", "28", "14"],
        correctAnswer: 0,
        hint: "הציבו את כל הנתונים, כולל קוסינוס 90 (שהוא אפס), ותראו שזה מתלכד לפיתגורס.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים בנוסחה המורחבת של פיתגורס (משפט הקוסינוסים).", math_expression: "x^{2} = 12^{2} + 16^{2} - 2 \\times 12 \\times 16 \\times \\cos(90^{\\circ})" },
            { verbal_explanation: "שלב 2: קוסינוס תשעים מעלות שווה תמיד לאפס ולכן מאפס את כל הביטוי.", math_expression: "\\cos(90^{\\circ}) = 0" },
            { verbal_explanation: "שלב 3: פישוט המשוואה שנשארה (שזהה למשפט פיתגורס).", math_expression: "x^{2} = 144 + 256 - 0" },
            { verbal_explanation: "שלב 4: סכימה.", math_expression: "x^{2} = 400" },
            { verbal_explanation: "שלב 5: הוצאת שורש למציאת היתר.", math_expression: "x = \\sqrt{400} = 20" },
            { verbal_explanation: "שלב 6: הרישום לבחירה.", math_expression: "20" }
        ],
        final_answer: "20"
    },

    // ==========================================
    // תת נושא 3: מציאת שטח משולש באמצעות טריגונומטריה (12 שאלות)
    // ==========================================

    // שאלה מספר 25
    {
        topic: "trig_general_triangles_35371",
        subTopic: "מציאת שטח משולש באמצעות טריגונומטריה",
        question_text: "במשולש, אורך צלע אחת הוא 8, אורך הצלע השנייה הוא 10, והזווית הכלואה ביניהן היא 30 מעלות. חשבו את שטח המשולש.&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='20,160 160,160 120,40' fill='none' stroke='#3b82f6' stroke-width='3'/><path d='M 50 160 A 30 30 0 0 0 45 140' fill='none' stroke='#ef4444' stroke-width='2'/><text x='55' y='150' font-size='12' fill='#ef4444'>30°</text><text x='90' y='180' font-size='14' fill='#334155'>10</text><text x='50' y='95' font-size='14' fill='#334155'>8</text></svg></div>",
        options: ["20", "40", "69.28", "34.64"],
        correctAnswer: 0,
        hint: "הנוסחה הטריגונומטרית לשטח משולש היא: מכפלת שתי צלעות, כפול סינוס הזווית הכלואה ביניהן, הכל חלקי שתיים.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים הישירים בנוסחת השטח הטריגונומטרית.", math_expression: "S = \\dfrac{8 \\times 10 \\times \\sin(30^{\\circ})}{2}" },
            { verbal_explanation: "שלב 2: החלפת פונקציית הסינוס בערך המספרי שלה.", math_expression: "\\sin(30^{\\circ}) = 0.5" },
            { verbal_explanation: "שלב 3: ביצוע פעולות הכפל שבמונה השבר.", math_expression: "S = \\dfrac{80 \\times 0.5}{2}" },
            { verbal_explanation: "שלב 4: השלמת הכפל במונה (שמונים כפול חצי).", math_expression: "S = \\dfrac{40}{2}" },
            { verbal_explanation: "שלב 5: ביצוע פעולת החלוקה האחרונה.", math_expression: "S = 20" },
            { verbal_explanation: "שלב 6: הרישום לבדיקה במערכת.", math_expression: "20" }
        ],
        final_answer: "20"
    },

    // שאלה מספר 26
    {
        topic: "trig_general_triangles_35371",
        subTopic: "מציאת שטח משולש באמצעות טריגונומטריה",
        question_text: "אורכי צלעות של משולש קהה זווית הם 12 ו-15. הזווית הקהה שביניהן היא 150 מעלות. מהו שטח המשולש?&rlm;",
        options: ["45", "90", "77.94", "38.97"],
        correctAnswer: 0,
        hint: "הנוסחה תקפה לכל משולש, כולל כהה זווית. סינוס של זווית משלימה ל-180 (כלומר 30) זהה לסינוס הזווית הקהה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים לנוסחת השטח.", math_expression: "S = \\dfrac{12 \\times 15 \\times \\sin(150^{\\circ})}{2}" },
            { verbal_explanation: "שלב 2: חישוב ערך הסינוס לזווית קהה זו במחשבון.", math_expression: "\\sin(150^{\\circ}) = 0.5" },
            { verbal_explanation: "שלב 3: הכפלת המספרים השלמים שבמונה.", math_expression: "12 \\times 15 = 180" },
            { verbal_explanation: "שלב 4: הכפלת התוצאה בסינוס וחלוקה בשתיים.", math_expression: "S = \\dfrac{180 \\times 0.5}{2}" },
            { verbal_explanation: "שלב 5: חישוב סופי.", math_expression: "S = \\dfrac{90}{2} = 45" },
            { verbal_explanation: "שלב 6: הרישום של השטח המסכם.", math_expression: "45" }
        ],
        final_answer: "45"
    },

    // שאלה מספר 27
    {
        topic: "trig_general_triangles_35371",
        subTopic: "מציאת שטח משולש באמצעות טריגונומטריה",
        question_text: "מהו שטחו של משולש שווה צלעות שאורך צלעו הוא 6?&rlm;",
        options: ["15.58", "31.17", "18.00", "9.00"],
        correctAnswer: 0,
        hint: "במשולש שווה צלעות כל הצלעות שוות ל-6, וכל הזוויות שוות ל-60 מעלות. הפעילו את הנוסחה הטריגונומטרית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי צלעות וזווית במשולש המיוחד.", math_expression: "a = 6 \\quad , \\quad b = 6 \\quad , \\quad \\alpha = 60^{\\circ}" },
            { verbal_explanation: "שלב 2: הצבה בנוסחת השטח עם הנתונים הללו.", math_expression: "S = \\dfrac{6 \\times 6 \\times \\sin(60^{\\circ})}{2}" },
            { verbal_explanation: "שלב 3: חילוץ ערך סינוס שישים.", math_expression: "\\sin(60^{\\circ}) \\approx 0.866" },
            { verbal_explanation: "שלב 4: כפל וביצוע החלוקה להקלה (שלושים ושש חלקי שתיים שווה שמונה עשרה).", math_expression: "S = 18 \\times 0.866" },
            { verbal_explanation: "שלב 5: ביצוע הכפל העשרוני.", math_expression: "S \\approx 15.588" },
            { verbal_explanation: "שלב 6: עיגול לשתי ספרות נדרש.", math_expression: "15.58" }
        ],
        final_answer: "15.58"
    },

    // שאלה מספר 28
    {
        topic: "trig_general_triangles_35371",
        subTopic: "מציאת שטח משולש באמצעות טריגונומטריה",
        question_text: "שטח משולש הוא 30. אורך צלע אחת הוא 10 ואורך הצלע השנייה הוא 12. מהי הזווית החדה הכלואה ביניהן?&rlm;",
        options: ["30", "60", "45", "15"],
        correctAnswer: 0,
        hint: "הציבו את כל הנתונים, כולל השטח, לתוך הנוסחה המוכרת. בודדו את סינוס הזווית (הנעלם) ואז הפעילו פונקציה הפוכה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבה של הנתונים בנוסחת השטח כשהזווית היא נעלם.", math_expression: "30 = \\dfrac{10 \\times 12 \\times \\sin(x)}{2}" },
            { verbal_explanation: "שלב 2: פישוט המונה וחלוקתו בשתיים (מאה ועשרים חלקי שתיים).", math_expression: "30 = 60 \\times \\sin(x)" },
            { verbal_explanation: "שלב 3: חלוקת המשוואה בשישים לבידוד פונקציית הסינוס.", math_expression: "\\sin(x) = 30 : 60 = 0.5" },
            { verbal_explanation: "שלב 4: שימוש בשיפט סינוס במחשבון.", math_expression: "x = \\sin^{-1}(0.5)" },
            { verbal_explanation: "שלב 5: קבלת ערך הזווית המדויק.", math_expression: "x = 30^{\\circ}" },
            { verbal_explanation: "שלב 6: הרישום.", math_expression: "30" }
        ],
        final_answer: "30"
    },

    // שאלה מספר 29
    {
        topic: "trig_general_triangles_35371",
        subTopic: "מציאת שטח משולש באמצעות טריגונומטריה",
        question_text: "שטח של משולש הוא 40. צלע אחת שווה ל-8, והזווית שבינה לצלע נוספת היא 45 מעלות. מהו אורך הצלע הנוספת (הלא ידועה)?&rlm;",
        options: ["14.14", "10", "20", "7.07"],
        correctAnswer: 0,
        hint: "נוסחת השטח פועלת גם כשצלע חסרה. הציבו את מה שיש וחשבו כדי לבודד את הצלע הנעלמת.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית המשוואה המלאה על סמך נתוני השטח.", math_expression: "40 = \\dfrac{8 \\times y \\times \\sin(45^{\\circ})}{2}" },
            { verbal_explanation: "שלב 2: חלוקת השמונה בשתיים לפישוט.", math_expression: "40 = 4 \\times y \\times \\sin(45^{\\circ})" },
            { verbal_explanation: "שלב 3: מציאת ערך הסינוס.", math_expression: "\\sin(45^{\\circ}) \\approx 0.707" },
            { verbal_explanation: "שלב 4: הכפלה במקדם ארבע.", math_expression: "40 = 2.828 \\times y" },
            { verbal_explanation: "שלב 5: חלוקה לבידוד הצלע.", math_expression: "y = 40 : 2.828" },
            { verbal_explanation: "שלב 6: קבלת אורך הצלע המעוגל.", math_expression: "y \\approx 14.14" },
            { verbal_explanation: "שלב 7: הרישום לבדיקה.", math_expression: "14.14" }
        ],
        final_answer: "14.14"
    },

    // שאלה מספר 30
    {
        topic: "trig_general_triangles_35371",
        subTopic: "מציאת שטח משולש באמצעות טריגונומטריה",
        question_text: "במקבילית, אורכי הצלעות הם 6 ו-14. הזווית החדה של המקבילית היא 60 מעלות. מהו שטח המקבילית כולה?&rlm;",
        options: ["72.74", "84", "42", "36.37"],
        correctAnswer: 0,
        hint: "מקבילית מורכבת משני משולשים חופפים (אם נעביר אלכסון). חשבו את שטח המשולש בעזרת נוסחת הסינוס והכפילו ב-2 (או פשוט אל תחלקו ב-2).",
        solution_steps: [
            { verbal_explanation: "שלב 1: הצבת הנתונים בנוסחת שטח משולש יחיד המרכיב את המקבילית.", math_expression: "S_{1} = \\dfrac{6 \\times 14 \\times \\sin(60^{\\circ})}{2}" },
            { verbal_explanation: "שלב 2: שטח מקבילית הוא פעמיים שטח המשולש, לכן המכנה (2) מתבטל.", math_expression: "S_{total} = 6 \\times 14 \\times \\sin(60^{\\circ})" },
            { verbal_explanation: "שלב 3: ביצוע כפל הצלעות תחילה.", math_expression: "S_{total} = 84 \\times \\sin(60^{\\circ})" },
            { verbal_explanation: "שלב 4: מציאת ערך הסינוס.", math_expression: "\\sin(60^{\\circ}) \\approx 0.866" },
            { verbal_explanation: "שלב 5: כפל לקבלת השטח המלא.", math_expression: "S_{total} = 84 \\times 0.866" },
            { verbal_explanation: "שלב 6: התוצאה.", math_expression: "S_{total} \\approx 72.744" },
            { verbal_explanation: "שלב 7: העיגול המסכם.", math_expression: "72.74" }
        ],
        final_answer: "72.74"
    },

    // שאלה מספר 31
    {
        topic: "trig_general_triangles_35371",
        subTopic: "מציאת שטח משולש באמצעות טריגונומטריה",
        question_text: "במעוין, אורך צלע הוא 10. הזווית החדה של המעוין היא 40 מעלות. חשבו את שטח המעוין (רמז: הוא מורכב משני משולשים שווי שוקיים).&rlm;",
        options: ["64.28", "32.14", "100", "76.60"],
        correctAnswer: 0,
        hint: "כמו במקבילית, שטח מעוין הוא פשוט מכפלת שתי צלעות סמוכות כפול סינוס הזווית הכלואה.",
        solution_steps: [
            { verbal_explanation: "שלב 1: זיהוי שהמעוין מורכב משני משולשים ונוסחת השטח פשוטה יותר.", math_expression: "S = a \\times a \\times \\sin(x)" },
            { verbal_explanation: "שלב 2: הצבת צלעות המעוין ששוות זו לזו.", math_expression: "S = 10 \\times 10 \\times \\sin(40^{\\circ})" },
            { verbal_explanation: "שלב 3: ביצוע הכפל.", math_expression: "S = 100 \\times \\sin(40^{\\circ})" },
            { verbal_explanation: "שלב 4: מציאת הערך הטריגונומטרי.", math_expression: "\\sin(40^{\\circ}) \\approx 0.6427" },
            { verbal_explanation: "שלב 5: הכפלת המאה בערך העשרוני (הזזת הנקודה).", math_expression: "S \\approx 64.278" },
            { verbal_explanation: "שלב 6: תוצאה סופית מעוגלת.", math_expression: "64.28" }
        ],
        final_answer: "64.28"
    },

    // שאלה מספר 32
    {
        topic: "trig_general_triangles_35371",
        subTopic: "מציאת שטח משולש באמצעות טריגונומטריה",
        question_text: "משוש משוכלל (מצולע בעל 6 צלעות) בעל אורך צלע 4. הוא מורכב מ-6 משולשים שווי צלעות בפנים. חשבו את שטח המשוש כולו.&rlm;\n<div dir='ltr' style='display:flex; justify-content:center; margin:20px 0;'><svg viewBox='0 0 200 200' style='max-width:250px; width:100%; border-radius:12px; background:#f8fafc; border:1px solid #e2e8f0;'><polygon points='100,20 169,60 169,140 100,180 31,140 31,60' fill='none' stroke='#3b82f6' stroke-width='3'/><line x1='31' y1='60' x2='169' y2='140' stroke='#94a3b8' stroke-dasharray='4,4' stroke-width='1'/><line x1='31' y1='140' x2='169' y2='60' stroke='#94a3b8' stroke-dasharray='4,4' stroke-width='1'/><line x1='100' y1='20' x2='100' y2='180' stroke='#94a3b8' stroke-dasharray='4,4' stroke-width='1'/><text x='110' y='40' font-size='12' fill='#334155'>4</text></svg></div>",
        options: ["41.57", "20.78", "24", "83.14"],
        correctAnswer: 0,
        hint: "חשבו שטח של משולש שווה צלעות אחד בעזרת הנוסחה הטריגונומטרית. זכרו שהזווית היא 60, והצלעות הן 4. אחר כך הכפילו ב-6.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית נוסחת השטח למשולש אחד מתוך המשוש (כל הזוויות 60).", math_expression: "S_{1} = \\dfrac{4 \\times 4 \\times \\sin(60^{\\circ})}{2}" },
            { verbal_explanation: "שלב 2: פישוט המשוואה עבור המשולש היחיד.", math_expression: "S_{1} = 8 \\times \\sin(60^{\\circ})" },
            { verbal_explanation: "שלב 3: מציאת ערך סינוס שישים.", math_expression: "\\sin(60^{\\circ}) \\approx 0.866" },
            { verbal_explanation: "שלב 4: חישוב השטח למשולש בודד.", math_expression: "S_{1} = 8 \\times 0.866 \\approx 6.928" },
            { verbal_explanation: "שלב 5: הכפלת השטח בשש, כיוון שיש שישה משולשים חופפים במשוש.", math_expression: "S = 6 \\times 6.928" },
            { verbal_explanation: "שלב 6: ביצוע הכפל האחרון לקבלת השטח הכולל.", math_expression: "S \\approx 41.568" },
            { verbal_explanation: "שלב 7: בחירת התשובה הנכונה ביותר.", math_expression: "41.57" }
        ],
        final_answer: "41.57"
    },

    // שאלה מספר 33
    {
        topic: "trig_general_triangles_35371",
        subTopic: "מציאת שטח משולש באמצעות טריגונומטריה",
        question_text: "במשולש שווה שוקיים, אורך כל שוק הוא 7, וזווית הבסיס היא 50 מעלות. חשבו את השטח של המשולש.&rlm;",
        options: ["24.12", "18.77", "12.06", "48.24"],
        correctAnswer: 0,
        hint: "אם יש לכם שתי צלעות, אתם צריכים את הזווית שביניהן (זווית הראש) כדי להשתמש בנוסחת השטח הטריגונומטרית.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב סכום זוויות הבסיס הידועות.", math_expression: "50^{\\circ} + 50^{\\circ} = 100^{\\circ}" },
            { verbal_explanation: "שלב 2: מציאת זווית הראש הנמצאת בין שתי השוקיים.", math_expression: "y = 180^{\\circ} - 100^{\\circ} = 80^{\\circ}" },
            { verbal_explanation: "שלב 3: כעת מציבים בנוסחת השטח את שתי השוקיים והזווית שביניהן.", math_expression: "S = \\dfrac{7 \\times 7 \\times \\sin(80^{\\circ})}{2}" },
            { verbal_explanation: "שלב 4: ביצוע הכפל במונה.", math_expression: "S = \\dfrac{49 \\times \\sin(80^{\\circ})}{2}" },
            { verbal_explanation: "שלב 5: מציאת ערך הסינוס.", math_expression: "\\sin(80^{\\circ}) \\approx 0.9848" },
            { verbal_explanation: "שלב 6: השלמת החישוב (ארבעים ותשע כפול ערך זה חלקי שתיים).", math_expression: "S \\approx \\dfrac{48.255}{2}" },
            { verbal_explanation: "שלב 7: התוצאה המסכמת לשטח.", math_expression: "24.12" } // Approximate value depending on rounding is 24.12
        ],
        final_answer: "24.12"
    },

    // שאלה מספר 34
    {
        topic: "trig_general_triangles_35371",
        subTopic: "מציאת שטח משולש באמצעות טריגונומטריה",
        question_text: "משולש ישר זווית חסום במעגל כך שהיתר שלו מונח על הקוטר. רדיוס המעגל הוא 5. אחד הניצבים הוא באורך 6. חשבו את שטח המשולש (רמז: השתמשו בפיתגורס למציאת הניצב השני).&rlm;",
        options: ["24", "30", "15", "48"],
        correctAnswer: 0,
        hint: "היתר הוא הקוטר כולו (פעמיים הרדיוס). מצאו את הניצב השני עם פיתגורס, וחשבו את השטח ללא צורך בזוויות כלל.",
        solution_steps: [
            { verbal_explanation: "שלב 1: חישוב אורך היתר (קוטר המעגל החוסם הוא כפול מהרדיוס).", math_expression: "c = 2 \\times 5 = 10" },
            { verbal_explanation: "שלב 2: שימוש במשפט פיתגורס למציאת הניצב השני.", math_expression: "y^{2} + 6^{2} = 10^{2}" },
            { verbal_explanation: "שלב 3: העלאה בריבוע.", math_expression: "y^{2} + 36 = 100" },
            { verbal_explanation: "שלב 4: העברת אגפים וחיסור.", math_expression: "y^{2} = 64" },
            { verbal_explanation: "שלב 5: הוצאת שורש למציאת הניצב.", math_expression: "y = 8" },
            { verbal_explanation: "שלב 6: במשולש ישר זווית, השטח הוא מכפלת הניצבים לחלק לשתיים.", math_expression: "S = \\dfrac{6 \\times 8}{2}" },
            { verbal_explanation: "שלב 7: התוצאה לאחר חילוק.", math_expression: "24" }
        ],
        final_answer: "24"
    },

    // שאלה מספר 35
    {
        topic: "trig_general_triangles_35371",
        subTopic: "מציאת שטח משולש באמצעות טריגונומטריה",
        question_text: "שטחו של מעוין הוא 50. זווית אחת במעוין היא 30 מעלות. מהו אורך צלע המעוין?&rlm;",
        options: ["10", "100", "5", "7.07"],
        correctAnswer: 0,
        hint: "שטח מעוין שווה למכפלת שתי צלעות סמוכות כפול סינוס הזווית שביניהן. צלעות המעוין שוות זו לזו.",
        solution_steps: [
            { verbal_explanation: "שלב 1: כתיבת הנוסחה לשטח מעוין באמצעות צלעותיו.", math_expression: "50 = x \\times x \\times \\sin(30^{\\circ})" },
            { verbal_explanation: "שלב 2: כינוס הצלעות לחזקה שנייה.", math_expression: "50 = x^{2} \\times \\sin(30^{\\circ})" },
            { verbal_explanation: "שלב 3: חילוץ ערכו של הסינוס מהמחשבון.", math_expression: "50 = x^{2} \\times 0.5" },
            { verbal_explanation: "שלב 4: חלוקת המשוואה בחצי (שקול להכפלה בשתיים) כדי לבודד את הנעלם.", math_expression: "x^{2} = 50 : 0.5 = 100" },
            { verbal_explanation: "שלב 5: הוצאת שורש ריבועי.", math_expression: "x = \\sqrt{100}" },
            { verbal_explanation: "שלב 6: המסקנה לגבי אורך צלע המעוין.", math_expression: "10" },
            { verbal_explanation: "שלב 7: הרישום לבדיקה.", math_expression: "10" }
        ],
        final_answer: "10"
    },

    // שאלה מספר 36
    {
        topic: "trig_general_triangles_35371",
        subTopic: "מציאת שטח משולש באמצעות טריגונומטריה",
        question_text: "שטח משולש הוא 25. זווית אחת היא 45 מעלות. שתי הצלעות שיוצרות את הזווית שוות באורכן. מהו אורכן?&rlm;",
        options: ["8.41", "70.72", "6.12", "12.05"],
        correctAnswer: 0,
        hint: "הציבו את הנוסחה: צלע כפול צלע כפול סינוס הזווית חלקי 2 שווה לשטח. מאחר והצלעות שוות, זה יהיה איקס בריבוע.",
        solution_steps: [
            { verbal_explanation: "שלב 1: בניית משוואת השטח עם נעלמים זהים.", math_expression: "25 = \\dfrac{x \\times x \\times \\sin(45^{\\circ})}{2}" },
            { verbal_explanation: "שלב 2: הכפלת המשוואה בשתיים למניעת המכנה וכינוס החזקה.", math_expression: "50 = x^{2} \\times \\sin(45^{\\circ})" },
            { verbal_explanation: "שלב 3: מציאת הערך הטריגונומטרי.", math_expression: "\\sin(45^{\\circ}) \\approx 0.707" },
            { verbal_explanation: "שלב 4: הצבה של הערך.", math_expression: "50 = x^{2} \\times 0.707" },
            { verbal_explanation: "שלב 5: חלוקת חמישים בערך העשרוני.", math_expression: "x^{2} = 50 : 0.707 \\approx 70.72" },
            { verbal_explanation: "שלב 6: הפעלת שורש ריבועי.", math_expression: "x = \\sqrt{70.72} \\approx 8.409" },
            { verbal_explanation: "שלב 7: קבלת הערך המעוגל.", math_expression: "8.41" }
        ],
        final_answer: "8.41"
    }
];