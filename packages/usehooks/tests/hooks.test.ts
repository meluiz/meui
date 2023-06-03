import vitest, { it, expect, describe, vi, afterEach } from "vitest";
import { act, renderHook } from "@testing-library/react";

import { useDebounce,  useDisclosure } from "../src";

describe("useDebounce", function () {
  afterEach(function (){
    vi.useFakeTimers()
  })

  function spyTimeout() {
    vi.useFakeTimers()
    vi.spyOn(global, 'setTimeout')
  }
  
  function spyClearTimeout() {
    vi.useFakeTimers()
    vi.spyOn(global, 'clearTimeout')
  }

  it('it should return debounce value', function () {
    const val = 'value'
    const { result: { current: debounceValue } } = renderHook(() => useDebounce(val))

    expect(val).toBe(debounceValue)
  })
  
});


describe("useDisclosure", function () {
  it("it should to run useDisclosure hook", function () {
    const { result } = renderHook(() => useDisclosure());

    expect(result.current.isOpen).toBe(false);
    expect(typeof result.current.onOpen).toBe("function");
    expect(typeof result.current.onClose).toBe("function");
    expect(typeof result.current.onToggle).toBe("function");
  });

  it("it should to check if default value works (1)", function () {
    const { result } = renderHook(() => useDisclosure(true));
    expect(result.current.isOpen).toBe(true);
  });

  it("it should to check if default value works (2)", function () {
    const { result } = renderHook(() => useDisclosure(false));
    expect(result.current.isOpen).toBe(false);
  });

  it("it should to return false on onClose", function () {
    const { result } = renderHook(() => useDisclosure(true));

    act(() => {
      result.current.onClose();
    });

    expect(result.current.isOpen).toBe(false);
  });

  it("it should to return true on onOpen", function () {
    const { result } = renderHook(() => useDisclosure(false));

    act(() => {
      result.current.onOpen();
    });

    expect(result.current.isOpen).toBe(true);
  });

  it("it should to return false on onToggle", () => {
    const { result } = renderHook(() => useDisclosure(true));

    act(() => {
      result.current.onToggle();
    });

    expect(result.current.isOpen).toBe(false);
  });
});

