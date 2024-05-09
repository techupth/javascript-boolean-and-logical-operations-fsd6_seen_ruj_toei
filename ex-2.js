// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 = true;
let isWeekday = true;
let hasBoughtProductFromITCategory = false;
let hasAttendedDiscountEvent = false;
let isPlatinum = false;

let hasPromotion = true;
hasPromotion =
  (lastMonthPaidMoreThan4000 &&
    isWeekday &&
    hasBoughtProductFromITCategory &&
    hasAttendedDiscountEvent) ||
  isPlatinum;

console.log(hasPromotion);
