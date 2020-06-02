USE [AAMEYS]
GO
/****** Object:  Table [dbo].[teacher]    Script Date: 02-06-2020 01:18:39 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[teacher]') AND type in (N'U'))
DROP TABLE [dbo].[teacher]
GO
/****** Object:  Table [dbo].[student]    Script Date: 02-06-2020 01:18:39 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[student]') AND type in (N'U'))
DROP TABLE [dbo].[student]
GO
/****** Object:  Table [dbo].[schedule]    Script Date: 02-06-2020 01:18:39 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[schedule]') AND type in (N'U'))
DROP TABLE [dbo].[schedule]
GO
/****** Object:  Table [dbo].[parent]    Script Date: 02-06-2020 01:18:39 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[parent]') AND type in (N'U'))
DROP TABLE [dbo].[parent]
GO
/****** Object:  Table [dbo].[grades]    Script Date: 02-06-2020 01:18:39 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[grades]') AND type in (N'U'))
DROP TABLE [dbo].[grades]
GO
/****** Object:  Table [dbo].[class]    Script Date: 02-06-2020 01:18:39 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[class]') AND type in (N'U'))
DROP TABLE [dbo].[class]
GO
/****** Object:  Table [dbo].[attendance]    Script Date: 02-06-2020 01:18:39 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[attendance]') AND type in (N'U'))
DROP TABLE [dbo].[attendance]
GO

/****** Object:  Table [dbo].[admin]    Script Date: 02-06-2020 01:18:39 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[admin]') AND type in (N'U'))
DROP TABLE [dbo].[admin]
GO

/****** Object:  Table [dbo].[users]    Script Date: 02-06-2020 01:18:39 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[users]') AND type in (N'U'))
DROP TABLE [dbo].[users]
GO

