// This file was automatically generated from sidebar.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Sidebar == 'undefined') { Confluence.Templates.Sidebar = {}; }


Confluence.Templates.Sidebar.headerStyles = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.sidebarWidth) ? '<style>.ia-fixed-sidebar, .ia-splitter-left {width: ' + soy.$$escapeHtml(opt_data.sidebarWidth) + 'px;}.theme-default .ia-splitter #main {margin-left: ' + soy.$$escapeHtml(opt_data.sidebarWidth) + 'px;}.acs-side-bar {visibility: hidden;}</style>' : '');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.sidebar = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="acs-side-bar ia-scrollable-section"><div class="acs-side-bar-space-info tipsy-enabled" data-configure-tooltip="', soy.$$escapeHtml("Edit Space Details"), '"><div class="avatar"><div class="space-logo ', (false == 'true') ? 'project-shortcut-dialog-trigger' : '', '" data-key="', soy.$$escapeHtml(opt_data.space.key), '" data-name="', soy.$$escapeHtml(opt_data.space.name), '" data-entity-type="confluence.space"><div class="avatar-img-container"><div class="avatar-img-wrapper"><a href="', soy.$$escapeHtml(opt_data.space.homeUrl), '" title="', soy.$$escapeHtml(opt_data.space.name), '"><img class="avatar-img" src="', soy.$$escapeHtml(opt_data.space.logoUrl), '" alt="', soy.$$escapeHtml(opt_data.space.name), '"></a></div></div></div></div><div class="name"><a href="', soy.$$escapeHtml(opt_data.space.homeUrl), '" title="', soy.$$escapeHtml(opt_data.space.name), '">', soy.$$escapeHtml(opt_data.space.name), '</a></div><div class="flyout-handle icon"></div></div><div class="acs-nav-wrapper"><div class="acs-nav">');
  Confluence.Templates.Sidebar.renderLinks(opt_data, output);
  output.append('</div></div>');
  if (opt_data.contextualNav) {
    Confluence.Templates.Sidebar.contextualNav(opt_data, output);
  }
  output.append('<div class="hidden"><a href="', soy.$$escapeHtml(opt_data.space.browseSpaceUrl), '" id="space-pages-link"></a><script type="text/x-template" title="logo-config-content"><h2>', soy.$$escapeHtml("Space Details"), '</h2>', (opt_data.space.personalSpaceBelongsToUser) ? '<div class="personal-space-logo-hint">' + AJS.format("Your profile picture is used as the logo for your personal space. \x3ca href\x3d\x22{0}\x22 target\x3d\x22_blank\x22\x3eChange your profile picture\x3c/a\x3e.","/confluence" + '/users/editmyprofilepicture.action') + '</div>' : '', (! opt_data.space.personal) ? '<form id="crop-photo-form" class="aui" method="post" action="#"><div id="sidebar-logo-messages"></div><fieldset><div class="field-group"><label for="spaceName">' + soy.$$escapeHtml("Name") + '</label><input autocomplete="off" name="spaceName" id="spaceName" class="text" maxlength="255" value="{spaceName}"><input type="hidden" name="spaceKey" id="spaceKey" value="' + soy.$$escapeHtml(opt_data.space.key) + '"><input type="hidden" name="offsetX" id="avatar-offsetX" value="-1"><input type="hidden" name="offsetY" id="avatar-offsetY" value="-1"><input type="hidden" name="width" id="avatar-width" value="-1"><input type="hidden" name="logoType" id="logoType" value="' + ((opt_data.space.customLogo) ? 'custom' : 'default') + '" data-last-value="' + ((opt_data.space.customLogo) ? 'custom' : 'default') + '"></div></fieldset></form><form id="upload-logo-form" class="aui" method="POST" action="#" enctype="multipart/form-data"><fieldset class="group"><legend><span>' + soy.$$escapeHtml("Logo") + '</span></legend><div class="field-group"><input class="upload" type="file" id="upload-logo-input" name="upload-logo-input"></div><small ' + ((! opt_data.space.customLogo) ? 'class="hidden"' : '') + '><a href="#" id="reset-logo">' + soy.$$escapeHtml("Reset to default logo") + '</a></small><div id="image-holder" /></fieldset></form>' : '', '<div id="space-details-actions" class="buttons-container"><div class="buttons"><button class="aui-button save">', soy.$$escapeHtml("Save"), '</button><a href="#" class="aui-button aui-button-link cancel">', soy.$$escapeHtml("Cancel"), '</a></div></div><\/script></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.renderLinks = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="acs-nav-sections">');
  if (opt_data.mainLinks.length) {
    Confluence.Templates.Sidebar.renderLinksSection({links: opt_data.mainLinks, includeConfigureLink: false, sectionClass: 'main-links-section', collectorToHighlight: opt_data.collectorToHighlight}, output);
  }
  if (opt_data.quickLinks.length) {
    output.append('<h5>', soy.$$escapeHtml("Space Shortcuts"), '</h5>');
    Confluence.Templates.Sidebar.renderLinksSection({links: opt_data.quickLinks, includeConfigureLink: false, sectionClass: 'quick-links-section tipsy-enabled', collectorToHighlight: null}, output);
  } else if (opt_data.hasConfigurePermission) {
    output.append('<h5>', soy.$$escapeHtml("Space Shortcuts"), '</h5><p class="tip">', AJS.format("Here you can add shortcut links to the most important content for your team or project. \x3ca href\x3d\x22{0}\x22 class\x3d\x22{1}\x22\x3eConfigure sidebar\x3c/a\x3e.",'','configure-sidebar'), '</p>');
  }
  if (opt_data.advancedLinks.length) {
    output.append('<hr>');
    Confluence.Templates.Sidebar.renderLinksSection({links: opt_data.advancedLinks, includeConfigureLink: opt_data.hasConfigurePermission, sectionClass: 'advanced-links-section tipsy-enabled', collectorToHighlight: opt_data.collectorToHighlight, highlightSection: opt_data.collectorToHighlight == 'spacebar-advanced'}, output);
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.renderLinksSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.links.length) {
    output.append('<div class="', soy.$$escapeHtml(opt_data.sectionClass), ' ', (opt_data.highlightSection) ? ' current-section' : '', '"><ul class="acs-nav-list">');
    var linkList135 = opt_data.links;
    var linkListLen135 = linkList135.length;
    for (var linkIndex135 = 0; linkIndex135 < linkListLen135; linkIndex135++) {
      var linkData135 = linkList135[linkIndex135];
      output.append('<li class="acs-nav-item ', soy.$$escapeHtml(linkData135.styleClass), (opt_data.collectorToHighlight && linkData135.collectorKey == opt_data.collectorToHighlight) ? ' current-item' : '', '"', (linkData135.collectorKey) ? 'data-collector-key="' + soy.$$escapeHtml(linkData135.collectorKey) + '"' : '', '><a class="acs-nav-item-link tipsy-enabled" href="', soy.$$escapeHtml(linkData135.url), '" data-collapsed-tooltip="', soy.$$escapeHtml(linkData135.tooltip), '"><span class="icon"></span><span class="acs-nav-item-label">', soy.$$escapeHtml(linkData135.title), '</span></a></li>');
    }
    output.append((opt_data.includeConfigureLink) ? '<li class="acs-nav-item configure"><a id="acs-configure-link" class="acs-nav-item-link" href="" data-collapsed-tooltip="' + soy.$$escapeHtml("Configure sidebar") + '"><span class="icon"></span><span class="acs-nav-item-label">' + soy.$$escapeHtml("Configure sidebar") + '</span></a></li>' : '', '</ul></div>');
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.contextualNav = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="ia-secondary-container tipsy-enabled" data-tree-type="', (opt_data.forBlogs) ? 'blogs' : (opt_data.forSettings) ? 'settings' : 'pages', '"><hr>');
  if (opt_data.forBlogs) {
    output.append('<div class="ia-secondary-header"><h5 class="ia-secondary-header-title blog"><span class="icon"></span><span class="label">', soy.$$escapeHtml("Blog"), '</span></h5></div><div class="ia-secondary-content">');
    Confluence.Templates.Sidebar.pagetreeList({pagetree: opt_data.contextualNav}, output);
    output.append('</div>');
  } else if (opt_data.forSettings) {
    output.append('<div class="ia-secondary-header"><h5 class="ia-secondary-header-title settings"><span class="label">', soy.$$escapeHtml("Advanced"), '</span></h5></div><div class="ia-secondary-content">');
    Confluence.Templates.Sidebar.pagetreeList({pagetree: opt_data.contextualNav}, output);
    output.append('</div>');
  } else {
    output.append('<div class="ia-secondary-header">');
    Confluence.Templates.Sidebar.Pages.header({parentPage: opt_data.contextualNav.parentPage}, output);
    output.append('</div><div class="ia-secondary-content">');
    Confluence.Templates.Sidebar.Pages.render({children: opt_data.contextualNav, createPermission: opt_data.hasCreatePermission}, output);
    output.append('</div>');
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.pagetreeList = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class="', (opt_data.isSubtree) ? 'ia-subpagetree' : 'ia-pagetree', '">');
  var itemList206 = opt_data.pagetree;
  var itemListLen206 = itemList206.length;
  for (var itemIndex206 = 0; itemIndex206 < itemListLen206; itemIndex206++) {
    var itemData206 = itemList206[itemIndex206];
    Confluence.Templates.Sidebar.pagetreeItem(itemData206, output);
  }
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.throbber = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="content-container"><div class="throbber-container"><div class="throbber"><div class="spinner"></div><span>', soy.$$escapeHtml("Loading..."), '</span></div></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.treeThrobber = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<ul class="ia-subpagetree"><li class="acs-tree-item leaf"><span class="node-title">', soy.$$escapeHtml("Loading..."), '</span></li></ul>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.pagetreeItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="acs-tree-item', (opt_data.hasChildren) ? (opt_data.children.length) ? ' opened' : ' closed' : ' leaf', (opt_data.groupType) ? ' grouping' : '', (opt_data.active) ? ' current-item' : '', '"', (opt_data.pageId) ? ' data-page-id="' + soy.$$escapeHtml(opt_data.pageId) + '"' : '', (opt_data.groupType) ? ' data-group-type="' + soy.$$escapeHtml(opt_data.groupType) + '" data-group-value="' + soy.$$escapeHtml(opt_data.groupValue) + '"' : '', '>', (! opt_data.groupType) ? '<a href="' + soy.$$escapeHtml(opt_data.url) + '">' : '', '<span class="icon ', (opt_data.hasChildren) ? (opt_data.children.length) ? 'icon-section-opened' : 'icon-section-closed' : '', '"></span><span class="node-title navigation-pseudo-link">', soy.$$escapeHtml(opt_data.title), '</span>', (! opt_data.groupType) ? '</a>' : '');
  if (opt_data.children && opt_data.children.length > 0) {
    Confluence.Templates.Sidebar.pagetreeList({pagetree: opt_data.children, isSubtree: true}, output);
  }
  output.append('</li>');
  return opt_sb ? '' : output.toString();
};

// This file was automatically generated from sidebar-pages.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Sidebar == 'undefined') { Confluence.Templates.Sidebar = {}; }
if (typeof Confluence.Templates.Sidebar.Pages == 'undefined') { Confluence.Templates.Sidebar.Pages = {}; }


Confluence.Templates.Sidebar.Pages.render = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.children.initialPages.length) {
    output.append('<ul class="children">');
    Confluence.Templates.Sidebar.Pages.renderChildren({children: opt_data.children.initialPages}, output);
    output.append('</ul>');
    if (opt_data.children.remainingPages.length) {
      output.append('<ul class="more-children">');
      Confluence.Templates.Sidebar.Pages.renderChildren({children: opt_data.children.remainingPages}, output);
      output.append('</ul><a class="more-children-link" href=""><span class="icon"></span><span class="label">', soy.$$escapeHtml(AJS.format("{0} more children",opt_data.children.remainingPages.length)), '</span></a>');
    }
  }
  output.append((opt_data.createPermission && opt_data.children.createLink) ? '<a class="create-child-page-link" href="' + soy.$$escapeHtml(opt_data.children.createLink) + '"><span class="icon"></span><span class="label">' + soy.$$escapeHtml("Create child page") + '</span></a>' : '');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.Pages.header = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.parentPage) ? '<h5 class="ia-secondary-header-title wiki' + ((opt_data.parentPage.active) ? ' current-item' : '') + '"><span class="icon"></span><span class="label">' + soy.$$escapeHtml(opt_data.parentPage.title) + '</span></h5>' : '');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.Pages.renderChildren = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var childList35 = opt_data.children;
  var childListLen35 = childList35.length;
  for (var childIndex35 = 0; childIndex35 < childListLen35; childIndex35++) {
    var childData35 = childList35[childIndex35];
    output.append('<li class="child-item" data-page-id="', soy.$$escapeHtml(childData35.pageId), '"><span class="icon"></span><a href="', soy.$$escapeHtml(childData35.url), '" title="', soy.$$escapeHtml(childData35.title), '"><span class="label">', soy.$$escapeHtml(childData35.title), '</span></a></li>');
  }
  return opt_sb ? '' : output.toString();
};

