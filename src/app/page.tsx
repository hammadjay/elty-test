import PrimaryButton from "@/components/primaryButton/PrimaryButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PrimaryButton>Done</PrimaryButton>
      <input type="checkbox" name="a" id="a" />
    </main>
  );
}
