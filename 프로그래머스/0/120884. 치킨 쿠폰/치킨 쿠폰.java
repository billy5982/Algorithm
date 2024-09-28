class Solution {
    public int solution(int chicken) {
        int eat = 0;
        int coupon = chicken;
 

        while(coupon > 9){
            eat += coupon / 10;
            coupon = (coupon /10) + (coupon%10);
        }

        return (eat);
    }
    }
