import { cn } from "@/lib/utils";

describe("cn utility", () => {
  it("클래스를 합쳐야 한다", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("중복 Tailwind 클래스는 마지막 것이 이겨야 한다", () => {
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500");
  });
});
