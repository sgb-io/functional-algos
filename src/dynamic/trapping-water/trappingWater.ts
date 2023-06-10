export function trappingWater(height: number[]): number {
  const n = height.length;

  if (n === 0) return 0;

  // Create two arrays to hold the maximum height till that index from left and right respectively
  let leftMax: number[] = new Array(n).fill(0);
  let rightMax: number[] = new Array(n).fill(0);

  leftMax[0] = height[0];
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  rightMax[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }

  // Now, the water trapped at each index will be the minimum of the maximum heights on both sides minus the actual height at that index
  let totalWaterTrapped = 0;
  for (let i = 0; i < n; i++) {
    totalWaterTrapped += Math.min(leftMax[i], rightMax[i]) - height[i];
  }

  return totalWaterTrapped;
}
