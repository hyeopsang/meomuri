import { test, expect } from "@playwright/test";

test("메인 페이지 로드", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/머무리/);
  await expect(page.getByText("어디로 떠나고 싶으세요?")).toBeVisible();
});

test("분위기 태그 필터 동작", async ({ page }) => {
  await page.goto("/");
  await page.getByText("조용한 편").click();
  await expect(page.getByText("조용한 편").locator("..")).toHaveClass(
    /border-gray-900/,
  );
});
