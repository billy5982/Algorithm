class Solution {
    public int solution(int chicken) {
        int count = 0;
        int newChicken = chicken;
    /*
        100 / 10 = 10
        10 / 10 = 1
        1/10 = 0.9
        
        
        나눈 값 
    */
    
       while(newChicken / 10 < 1){
           int coupon = newChicken / 10 ; // 10 
           count += coupon;
           newChicken = coupon;
       }
        
        return (newChicken);
    }
}