import { Button } from "@/components/ui/button";

const ButtonsPage = () => {
  return (
    <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="primaryOutline">Primary Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="secondaryOutline">SecondaryOutline</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="dangerOutline">DangerOutline</Button>
      <Button variant="super">Super</Button>
      <Button variant="superOutline">SuperOutline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="sidebar">sidebar</Button>
      <Button variant="sidebarOutline">sidebarOutline</Button>
    </div>
  );
};

export default ButtonsPage;
