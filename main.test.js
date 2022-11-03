//👉 Write your tests below here!:
import {deadlineCalc} from './main.js'


describe('Deadline Calculator',()=>{
    test('checking numbers of days is correct for same month',()=>{
        expect(deadlineCalc('6th January 2022', '8th January 2022')).toBe(2)
    })


    test('checking numbers of days is correct over multiple months',()=>{
        expect(deadlineCalc('6th January 2022', '2nd Feburary 2022')).toBe(27)
    })

    test('checking numbers of days is correct for dates with 2 digits',()=>{
        expect(deadlineCalc('13th January 2022', '27nd Feburary 2022')).toBe(45)
    })

    test('testing a larger span of months',()=>{
        expect(deadlineCalc('1st January 2022', '31st December 2022')).toBe(364)
    })

    test('checking numbers if works when using nd for date',()=>{
        expect(deadlineCalc('2nd April 2022', '27nd June 2022')).toBe(86)
    })

    test('checking numbers if works when using rd for date',()=>{
        expect(deadlineCalc('3rd April 2022', '23rd May 2022')).toBe(50)
    })

    test('checking numbers if works when using st for date',()=>{
        expect(deadlineCalc('21st September 2022', '1st October 2022')).toBe(10)
    })

    test('checking numbers if works when using th for date',()=>{
        expect(deadlineCalc('25th March 2022', '4th May 2022')).toBe(40)
    })

    test('checking every month: January - Feb',()=>{
        expect(deadlineCalc('31st January 2022', '10th February 2022')).toBe(10)
    })

    test('checking every month: January - March',()=>{
        expect(deadlineCalc('31st January 2022', '10th March 2022')).toBe(38)
    })

    test('checking every month: January - April',()=>{
        expect(deadlineCalc('31st January 2022', '10th April 2022')).toBe(69)
    })

    test('checking every month: January - May',()=>{
        expect(deadlineCalc('31st January 2022', '10th May 2022')).toBe(99)
    })

    test('checking every month: January - June',()=>{
        expect(deadlineCalc('31st January 2022', '10th June 2022')).toBe(130)
    })

    test('checking every month: January - July',()=>{
        expect(deadlineCalc('31st January 2022', '10th July 2022')).toBe(160)
    })

    test('checking every month: January - August',()=>{
        expect(deadlineCalc('31st January 2022', '10th August 2022')).toBe(191)
    })

    test('checking every month: January - September',()=>{
        expect(deadlineCalc('31st January 2022', '10th September 2022')).toBe(222)
    })

    test('checking every month: January - October',()=>{
        expect(deadlineCalc('31st January 2022', '10th October 2022')).toBe(252)
    })

    test('checking every month: January - November',()=>{
        expect(deadlineCalc('31st January 2022', '10th November 2022')).toBe(283)
    })

    test('checking every month: January - November',()=>{
        expect(deadlineCalc('31st January 2022', '10th December 2022')).toBe(313)
    })
})