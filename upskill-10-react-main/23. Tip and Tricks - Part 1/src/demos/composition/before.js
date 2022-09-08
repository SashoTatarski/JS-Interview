function App() {
  return (
    <div>
      <MainNav />
      <Homepage />
    </div>
  );
}

function MainNav() {
  return (
    <div>
      <GitHubLogo />
      <SiteSearch />
      <NavLinks />
      <NotificationBell />
      <CreateDropdown />
      <ProfileDropdown />
    </div>
  );
}

function Homepage() {
  return (
    <div>
      <LeftNav />
      <CenterContent />
      <RightContent />
    </div>
  );
}

function LeftNav() {
  return (
    <div>
      <DashboardDropdown />
      <Repositories />
      <Teams />
    </div>
  );
}

function CenterContent() {
  return (
    <div>
      <RecentActivity />
      <AllActivity />
    </div>
  );
}

function RightContent() {
  return (
    <div>
      <Notices />
      <ExploreRepos />
    </div>
  );
}
