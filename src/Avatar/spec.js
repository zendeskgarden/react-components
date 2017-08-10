import React from "react";
import expect from "test/expect";
import Avatar from "./";
import View from "../core/View";

describe("Avatar", () => {
  it("renders a default avatar", () => {
    expect(
      <Avatar src="default.png" />,
      "to render as",
      <View className="avatar">
        <img src="default.png" />
      </View>
    );
  });

  describe("when given an alternate text", () => {
    it("renders the avatar with the alternate text", () => {
      expect(
        <Avatar src="nyancat.png" alt="an awesome cat" />,
        "to render as",
        <img alt="an awesome cat" />
      );
    });
  });

  describe("with the type system", () => {
    it("renders a system avatar", () => {
      expect(
        <Avatar src="zendesk.png" type="system" />,
        "to render as",
        <View className="avatar type_system" />
      );
    });
  });

  describe("with the status present", () => {
    it("renders a present avatar", () => {
      expect(
        <Avatar src="zendesk.png" status="present" />,
        "to render as",
        <View className="avatar status_present" />
      );
    });
  });

  describe("with the status away", () => {
    it("renders an away avatar", () => {
      expect(
        <Avatar src="zendesk.png" status="away" />,
        "to render as",
        <View className="avatar status_away" />
      );
    });
  });

  describe("with the status active", () => {
    it("renders an active avatar", () => {
      expect(
        <Avatar src="zendesk.png" status="active" />,
        "to render as",
        <View className="avatar status_active" />
      );
    });
  });

  describe("when size is small", () => {
    it("renders a small avatar", () => {
      expect(
        <Avatar src="zendesk.png" size="small" />,
        "to render as",
        <View className="avatar size_small" />
      );
    });
  });

  describe("when size is medium", () => {
    it("renders a medium avatar (no size modifier)", () => {
      expect(
        <Avatar src="zendesk.png" size="medium" />,
        "to render as",
        <View className="avatar size_medium" />
      );
    });
  });

  describe("when size is large", () => {
    it("renders a large avatar", () => {
      expect(
        <Avatar src="zendesk.png" size="large" />,
        "to render as",
        <View className="avatar size_large" />
      );
    });
  });

  describe("when size is given as pixels", () => {
    it("renders a large avatar", () => {
      expect(
        <Avatar src="zendesk.png" size="65px" />,
        "to render as",
        <View className="avatar" style={{ height: "65px", width: "65px" }} />
      );
    });
  });
});
